import { Field } from 'payload/types';
import deepMerge from '../utils/deepMerge';
import formatSlug from '../utils/formatSlug';

type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field;

export const slugField: Slug = (fieldToUse = 'title', overrides) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      index: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'Leave blank for autofill',
      },
      hooks: {
        beforeValidate: [formatSlug(fieldToUse)],
      },
    },
    overrides
  );
