import type { CollectionConfig } from 'payload'

export const Wishlists: CollectionConfig = {
  slug: 'wishlists',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'user', 'updatedAt'],
  },
  access: {
    create: ({ req }) => {
      const { user } = req
      if (!user) return false
      return true
    },
    read: ({ req }) => {
      const { user } = req
      if (!user) return false
      if (user.role === 'admin') return true
      return {
        user: {
          equals: user.id,
        },
      }
    },
    update: ({ req }) => {
      const { user } = req
      if (!user) return false
      if (user.role === 'admin') return true
      return {
        user: {
          equals: user.id,
        },
      }
    },
    delete: ({ req }) => {
      const { user } = req
      if (!user) return false
      return user.role === 'admin'
    },
    admin: ({ req }) => {
      const { user } = req
      if (!user) return false
      return user.role === 'admin'
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          required: true,
        },
        {
          name: 'note',
          type: 'text',
        },
        {
          name: 'addedAt',
          type: 'date',
        },
      ],
    },
  ],
}

