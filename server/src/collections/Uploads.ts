import { CollectionConfig } from 'payload/types';

export const Uploads: CollectionConfig = {
  slug: 'uploads',
  access: {
    read: (): boolean => true,
  },
  labels: {
    plural: 'Uploads',
    singular: 'Upload',
  },
  admin: {
    group: 'Admin',
    useAsTitle: 'alt',
  },
  upload: {
    adminThumbnail: 'card',
    staticURL: '/uploads',
    staticDir: '../public/uploads',
    formatOptions: {
      format: 'webp',
      options: { quality: 75 },
    },
    mimeTypes: ['image/*', 'video/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      localized: true,
      label: 'Alt text',
    },
  ],
};
