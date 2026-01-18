import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const dynamic = 'force-dynamic'

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const products = await payload.find({
    collection: 'products',
    limit: 100,
    sort: '-createdAt',
    depth: 2,
  })

  return Response.json(products)
}
