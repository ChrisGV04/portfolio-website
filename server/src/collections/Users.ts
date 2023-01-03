import { CollectionConfig } from 'payload/types';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  labels: {
    plural: 'Users',
    singular: 'User',
  },
  admin: {
    group: 'Admin',
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
  fields: [],
};
