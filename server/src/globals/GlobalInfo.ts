import { GlobalConfig } from 'payload/types';

export const GlobalInfo: GlobalConfig = {
  slug: 'global-info',
  access: { read: () => true },
  label: 'Global',
  admin: { group: { en: 'Pages', es: 'Páginas' } },

  fields: [
    {
      name: 'maintenance',
      type: 'checkbox',
      required: true,
      defaultValue: false,
      label: { en: 'Maintenance mode', es: 'Modo mantenimiento' },
    },

    {
      name: 'footerContactMethods',
      type: 'array',
      required: true,
      label: { en: 'Contact methods', es: 'Medios de contacto' },
      labels: {
        plural: { en: 'Media', es: 'Medios' },
        singular: { en: 'Medium', es: 'Medio' },
      },
      admin: {
        components: {
          RowLabel: ({ data, index }) => data?.name || `-- @ ${index}`,
        },
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
              name: 'url',
              type: 'text',
              required: true,
              admin: { width: '50%' },
              label: { en: 'Link', es: 'Enlace' },
            },
          ],
        },
      ],
    }, // End Footer Contact Methods
  ],
};
