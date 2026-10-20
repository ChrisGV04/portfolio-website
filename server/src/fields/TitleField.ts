import type { TextField } from 'payload';

export const titleField: TextField = {
  name: 'title',
  type: 'text',
  required: true,
  localized: true,
  label: { en: 'Title', es: 'Título' },
  admin: {
    description: {
      en: 'Add brackets to highlighted text. Ex: My [highlighted] text.',
      es: 'Destaca texto poniéndolo entre corchetes. Ej: Texto [resaltado]',
    },
  },
};
