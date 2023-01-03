import type { CollectionConfig } from 'payload/types';
import { slugField } from '../fields/Slug';

export const ProjectCategories: CollectionConfig = {
  slug: 'project-categories',
  access: { read: () => true },
  labels: { plural: 'Categories', singular: 'Category' },
  admin: { group: 'Portfolio', useAsTitle: 'title' },
  timestamps: false,

  fields: [
    {
      type: 'text',
      name: 'title',
      maxLength: 20,
      label: 'Title',
      required: true,
      localized: true,
    },
    slugField('title'),
  ],
};
