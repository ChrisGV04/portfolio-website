import { CollectionConfig } from 'payload/types';

export const Uploads: CollectionConfig = {
  slug: 'uploads',
  access: {
    read: (): boolean => true,
  },
  labels: {
    plural: { en: 'Uploads', es: 'Archivos' },
    singular: { en: 'Upload', es: 'Archivo' },
  },
  admin: { group: 'Admin', useAsTitle: 'alt' },
  upload: {
    staticURL: '/uploads',
    staticDir: '../public/uploads',
    mimeTypes: ['image/*', 'video/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      localized: true,
      label: { en: 'Alternative text', es: 'Texto alternativo' },
    },
  ],
};
