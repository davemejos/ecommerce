import type { CollectionConfig } from 'payload'
import type { UploadApiResponse } from 'cloudinary'
import { v2 as cloudinary } from 'cloudinary'
import { Readable } from 'stream'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uploadFromBuffer = (buffer: Buffer) =>
  new Promise<UploadApiResponse>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: 'lgu',
        resource_type: 'image',
      },
      (error, result) => {
        if (error || !result) {
          reject(error || new Error('Cloudinary upload failed'))
          return
        }

        resolve(result)
      },
    )

    Readable.from(buffer).pipe(stream)
  })

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
    {
      name: 'cloudinaryPublicId',
      type: 'text',
    },
    {
      name: 'cloudinaryUrl',
      type: 'text',
    },
  ],
  upload: true,
  hooks: {
    beforeValidate: [
      ({ data, originalDoc, operation }) => {
        if (operation !== 'create' && operation !== 'update') return data
        if (!data) return data
        if (typeof data.alt === 'string' && data.alt.trim().length > 0) return data

        const filename =
          (typeof data.filename === 'string' && data.filename) ||
          (typeof originalDoc?.filename === 'string' && originalDoc.filename)

        if (!filename) return data

        const nameWithoutExtension = filename.replace(/\.[^/.]+$/, '')
        const generatedAlt = nameWithoutExtension.replace(/[-_]+/g, ' ').trim()

        return {
          ...data,
          alt: generatedAlt,
        }
      },
    ],
    beforeChange: [
      async ({ data, req, operation }) => {
        if (operation !== 'create' && operation !== 'update') return data

        const reqWithFile = req as typeof req & {
          file?: {
            buffer?: Buffer
            data?: Buffer
            path?: string
          }
          files?: {
            file?: {
              buffer?: Buffer
              data?: Buffer
              path?: string
            }
            files?: {
              buffer?: Buffer
              data?: Buffer
              path?: string
            }[]
          }
        }

        const file =
          reqWithFile.file ||
          reqWithFile.files?.file ||
          reqWithFile.files?.files?.[0]

        if (!file) return data

        const buffer = file.buffer || file.data

        if (buffer) {
          const result = await uploadFromBuffer(buffer)

          return {
            ...data,
            cloudinaryPublicId: result.public_id,
            cloudinaryUrl: result.secure_url,
          }
        }

        if (file.path) {
          const result = await cloudinary.uploader.upload(file.path, {
            folder: 'lgu',
            resource_type: 'image',
          })

          return {
            ...data,
            cloudinaryPublicId: result.public_id,
            cloudinaryUrl: result.secure_url,
          }
        }

        return data
      },
    ],
  },
}
