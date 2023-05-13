import { Field } from 'payload/types';
import deepMerge from '../utils/deepMerge';

type Title = (name?: string, overrides?: Partial<Field>) => Field;

export const titleField: Title = (name = 'title', overrides) =>
  deepMerge<Field, Partial<Field>>(
    {
      name,
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
    },
    overrides
  );
