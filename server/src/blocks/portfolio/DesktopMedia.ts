import type { Block } from 'payload/types';
import { Uploads } from '../../collections/Uploads';

export const DesktopMediaBlock: Block = {
  slug: 'block-desktop-media',
  labels: { singular: 'Desktop media', plural: 'Desktop media blocks' },
  imageURL: '/block-tmbs/desktop-media-block.webp',
  fields: [
    {
      name: 'img',
      type: 'upload',
      required: true,
      label: 'Media file',
      relationTo: Uploads.slug,
      admin: { description: 'Photo & video. Displayed with 16:9 aspect ratio' },
    },
  ],
};
