import type { CollectionConfig } from 'payload/types';

export const Projects: CollectionConfig = {
  slug: 'projects',
  timestamps: false,
  access: { read: () => true },
  labels: {
    singular: { en: 'Project', es: 'Proyecto' },
    plural: { en: 'Projects', es: 'Proyectos' },
  },

  admin: {
    useAsTitle: 'name',
    group: { en: 'Components', es: 'Componentes' },
  },

  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          localized: true,
          admin: { width: '50%' },
          label: { en: 'Name', es: 'Nombre' },
        },
        {
          name: 'services',
          type: 'text',
          required: true,
          localized: true,
          admin: { width: '50%' },
          label: { en: 'Services', es: 'Servicios' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'year',
          type: 'number',
          required: true,
          admin: { width: '50%' },
          label: { en: 'Year', es: 'Año' },
        },
        {
          name: 'projectType',
          type: 'select',
          required: true,
          admin: { width: '50%' },
          label: { en: 'Project type', es: 'Tipo de proyecto' },
          options: [
            { value: 'website', label: { en: 'Website', es: 'Sitio web' } },
            { value: 'ecommerce', label: { en: 'Ecommerce', es: 'Tienda en línea' } },
            { value: 'webApp', label: { en: 'Web app', es: 'App web' } },
          ],
        },
      ],
    },
    { name: 'liveUrl', type: 'text', label: { en: 'Live link', es: 'Enlace en vivo' } },
  ],
};
