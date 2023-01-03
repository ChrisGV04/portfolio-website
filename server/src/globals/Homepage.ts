import { GlobalConfig } from 'payload/types';

const HomePage: GlobalConfig = {
  slug: 'homepage',
  label: 'Home',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Pages',
  },

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
              labels: { singular: 'Image', plural: 'Images' },
              fields: [
                {
                  name: 'img',
                  type: 'upload',
                  label: 'Image',
                  relationTo: 'uploads',
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
              relationTo: 'uploads',
            },
            {
              type: 'upload',
              name: 'webImage',
              label: 'Web Image',
              relationTo: 'uploads',
            },
            {
              type: 'upload',
              relationTo: 'uploads',
              name: 'ecommerceImage',
              label: 'Ecommerce Image',
            },
          ],
        }, // End services tab

        // TODO: Select which projects to feature
      ],
    },
  ],
};

export default HomePage;
