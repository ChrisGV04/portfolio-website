import type { Block } from 'payload/types';
import { Uploads } from '../../collections/Uploads';
import { portfolioTextBlockFields } from '../../fields/PortfolioTextBlock';

export const TextMediaBlock: Block = {
  slug: 'block-text-media',
  labels: { singular: 'Text-media', plural: 'Text-media blocks' },
  imageURL: '/block-tmbs/text-media-block.webp',
  fields: [
    ...portfolioTextBlockFields,
    {
      name: 'media',
      type: 'upload',
      required: true,
      label: 'Media file',
      relationTo: Uploads.slug,
      admin: { description: 'Photo & video. Recommended with 3:2 aspect ratio' },
    },
    {
      type: 'radio',
      name: 'mediaPos',
      label: 'Media position',
      defaultValue: 'l',
      options: [
        { label: 'Left', value: 'l' },
        { label: 'Right', value: 'r' },
      ],
      admin: { description: 'Side on which to place the media item' },
    },
  ],
};
