import { GlobalConfig } from 'payload/types';
import { Projects } from '../collections/Projects';
import { Uploads } from '../collections/Uploads';

export const HomePage: GlobalConfig = {
  slug: 'homepage',
  label: 'Home',
  access: {
    read: () => true,
  },
  admin: { group: 'Pages' },

  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              type: 'array',
              name: 'heroGallery',
              label: 'Hero Gallery',
              maxRows: 12,
              minRows: 12,
              required: true,
              labels: { singular: 'Image', plural: 'Images' },
              fields: [
                {
                  name: 'img',
                  type: 'upload',
                  label: 'Image',
                  relationTo: Uploads.slug,
                },
              ],
            },
          ],
        }, // End hero tab

        {
          label: 'Services',
          name: 'services',
          fields: [
            {
              type: 'upload',
              label: 'Coding Image',
              name: 'codingImage',
              relationTo: Uploads.slug,
            },
            {
              type: 'upload',
              name: 'webImage',
              label: 'Web Image',
              relationTo: Uploads.slug,
            },
            {
              type: 'upload',
              relationTo: Uploads.slug,
              name: 'ecommerceImage',
              label: 'Ecommerce Image',
            },
          ],
        }, // End services tab

        {
          label: 'Projects',
          fields: [
            {
              type: 'relationship',
              relationTo: Projects.slug,
              name: 'featProjects',
              hasMany: true,
            },
          ],
        },
      ],
    },
  ],
};
