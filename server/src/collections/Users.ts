import { CollectionConfig } from 'payload/types';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  labels: {
    plural: { en: 'Users', es: 'Usuarios' },
    singular: { en: 'User', es: 'Usuario' },
  },
  admin: { group: 'Admin', useAsTitle: 'email' },
  access: { read: () => true },
  fields: [],
};
