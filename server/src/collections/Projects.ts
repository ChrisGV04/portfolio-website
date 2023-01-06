import { CollectionConfig } from 'payload/types';
import { DesktopMediaBlock } from '../blocks/portfolio/DesktopMedia';
import { FullscreenImageBlock } from '../blocks/portfolio/FullscreenImage';
import { SimpleTextBlock } from '../blocks/portfolio/SimpleText';
import { TextMediaBlock } from '../blocks/portfolio/TextMedia';
import { TextMobileMediaBlock } from '../blocks/portfolio/TextMobileMedia';
import { slugField } from '../fields/Slug';
import { ProjectCategories } from './ProjectCategories';
import { Uploads } from './Uploads';

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: { read: () => true },
  labels: { plural: 'Projects', singular: 'Project' },
  admin: { group: 'Portfolio', useAsTitle: 'title' },

  fields: [
    {
      type: 'text',
      name: 'title',
      maxLength: 20,
      label: 'Title',
      required: true,
      localized: true,
    },
    {
      type: 'text',
      name: 'url',
      maxLength: 100,
      label: 'Live URL',
    },
    {
      type: 'select',
      name: 'theme',
      label: 'Theme color',
      required: true,
      defaultValue: 'gr',
      options: [
        { label: 'Gray', value: 'gr' },
        { label: 'Red', value: 'rd' },
        { label: 'Orange', value: 'or' },
        { label: 'Amber', value: 'am' },
        { label: 'Lime', value: 'lm' },
        { label: 'Green', value: 'gn' },
        { label: 'Emerald', value: 'em' },
        { label: 'Teal', value: 'tl' },
        { label: 'Cyan', value: 'cy' },
        { label: 'Sky', value: 'sk' },
        { label: 'Blue', value: 'bl' },
        { label: 'Indigo', value: 'in' },
        { label: 'Violet', value: 'vl' },
        { label: 'Purple', value: 'pr' },
        { label: 'Fuchsia', value: 'fc' },
        { label: 'Pink', value: 'pn' },
      ],
    },

    slugField('title'),
    {
      type: 'upload',
      required: true,
      name: 'featuredMedia',
      label: 'Featured media',
      relationTo: Uploads.slug,
      admin: {
        position: 'sidebar',
        description: 'Either a photo or a video. Displayed with 2:1 aspect ratio',
      },
    },
    {
      hasMany: true,
      required: true,
      name: 'categories',
      label: 'Categories',
      type: 'relationship',
      admin: { position: 'sidebar' },
      relationTo: ProjectCategories.slug,
    },

    {
      type: 'group',
      name: 'meta',
      label: 'Metadata',
      fields: [
        {
          type: 'row',
          fields: [
            {
              type: 'text',
              name: 'company',
              label: 'Company',
              required: true,
              maxLength: 30,
              admin: { width: '50%' },
            },
            {
              type: 'number',
              name: 'year',
              label: 'Year',
              required: true,
              admin: { width: '50%' },
              defaultValue: new Date().getFullYear(),
            },
          ],
        },
      ],
    },

    {
      type: 'blocks',
      name: 'content',
      label: 'Content',
      labels: { singular: 'Section', plural: 'Sections' },
      minRows: 1,
      maxRows: 10,
      blocks: [
        SimpleTextBlock,
        TextMediaBlock,
        TextMobileMediaBlock,
        FullscreenImageBlock,
        DesktopMediaBlock,
      ],
    },
  ],
};
