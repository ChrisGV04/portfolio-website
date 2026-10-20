import type { TextareaField } from 'payload';

export const subtextField: TextareaField = {
  name: 'subtext',
  type: 'textarea',
  required: true,
  localized: true,
  admin: { rows: 3 },
  label: { en: 'Subtext', es: 'Texto acompañante' },
};
