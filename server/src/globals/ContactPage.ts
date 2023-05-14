import { GlobalConfig } from 'payload/types';
import { Uploads } from '../collections/Uploads';

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
  access: { read: () => true },
  label: { en: 'Contact', es: 'Contacto' },
  admin: { group: { en: 'Pages', es: 'Páginas' } },

  fields: [
    {
      name: 'avatar',
      type: 'upload',
      required: true,
      label: 'Avatar',
      relationTo: Uploads.slug,
    }, // End Avatar

    {
      name: 'contactMethods',
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
    }, // End Contact Methods

    {
      name: 'info',
      type: 'array',
      required: true,
      label: { en: 'Information', es: 'Información' },
      labels: {
        plural: { en: 'Data', es: 'Datos' },
        singular: { en: 'Data', es: 'Dato' },
      },
      admin: {
        components: {
          RowLabel: ({ data, index }) => data?.name || `-- @ ${index}`,
        },
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          localized: true,
          label: { en: 'Name', es: 'Nombre' },
        },
      ],
    }, // End Information

    {
      name: 'otherMedia',
      type: 'array',
      required: true,
      label: { en: 'Other media', es: 'Otros medios' },
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
    }, // End Other Media
  ],
};
