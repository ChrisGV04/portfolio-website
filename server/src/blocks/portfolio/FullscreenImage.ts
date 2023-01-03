import type { Block } from 'payload/types';
import { Uploads } from '../../collections/Uploads';

export const FullscreenImageBlock: Block = {
  slug: 'block-fullscreen-img',
  labels: { singular: 'Fullscreen image', plural: 'Fullscreen images' },
  imageURL: '/block-tmbs/fullscreen-img-block.webp',
  fields: [
    {
      name: 'img',
      type: 'upload',
      required: true,
      label: 'Image file',
      relationTo: Uploads.slug,
      admin: { description: 'Only images' },
    },
  ],
};
