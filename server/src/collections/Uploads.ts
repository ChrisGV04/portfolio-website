import path from 'path';
import type { CollectionConfig } from 'payload';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

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
  // Files are served by Payload at `/api/uploads/file/:filename` (absolute `url` in API responses).
  upload: {
    staticDir: path.resolve(dirname, '../../public/uploads'),
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
