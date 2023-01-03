import { Field } from 'payload/types';

export const portfolioTextBlockFields: Field[] = [
  {
    type: 'text',
    name: 'title',
    label: 'Title',
    required: true,
    maxLength: 120,
  },
  {
    type: 'textarea',
    name: 'body',
    maxLength: 500,
    required: true,
    label: 'Body text',
    admin: { rows: 8 },
  },
];