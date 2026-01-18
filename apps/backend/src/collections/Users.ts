import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    create: () => true,
    read: ({ req }) => {
      const { user } = req
      if (!user) return false
      if (user.role === 'admin') return true
      return {
        id: {
          equals: user.id,
        },
      }
    },
    update: ({ req, id }) => {
      const { user } = req
      if (!user) return false
      if (user.role === 'admin') return true
      if (!id) return false
      return user.id === id
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
    unlock: ({ req }) => {
      const { user } = req
      if (!user) return false
      return user.role === 'admin'
    },
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'user',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'User',
          value: 'user',
        },
      ],
      access: {
        update: ({ req }) => {
          const { user } = req
          if (!user) return false
          return user.role === 'admin'
        },
      },
    },
  ],
}
