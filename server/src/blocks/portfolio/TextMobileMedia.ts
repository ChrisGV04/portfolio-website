import type { Block } from 'payload/types';
import { Uploads } from '../../collections/Uploads';
import { portfolioTextBlockFields } from '../../fields/PortfolioTextBlock';

export const TextMobileMediaBlock: Block = {
  slug: 'block-text-mobile',
  labels: { singular: 'Text-mobile', plural: 'Text-mobile blocks' },
  imageURL: '/block-tmbs/text-mobile-block.webp',
  fields: [
    ...portfolioTextBlockFields,
    {
      type: 'array',
      name: 'media',
      required: true,
      minRows: 1,
      maxRows: 2,
      label: 'Media files',
      labels: { plural: 'Files', singular: 'File' },
      fields: [
        {
          name: 'res',
          type: 'upload',
          required: true,
          label: 'File',
          relationTo: Uploads.slug,
          admin: { description: 'Photo & video. Displayed with 9:16 aspect ratio' },
        },
      ],
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
      admin: { description: 'Side on which to place the media items' },
    },
  ],
};
