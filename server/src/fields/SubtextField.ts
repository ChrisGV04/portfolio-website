import { Field } from 'payload/types';
import deepMerge from '../utils/deepMerge';

type Subtext = (name?: string, overrides?: Partial<Field>) => Field;

export const subtextField: Subtext = (name = 'subtext', overrides) =>
  deepMerge<Field, Partial<Field>>(
    {
      name,
      type: 'textarea',
      required: true,
      localized: true,
      admin: { rows: 3 },
      label: { en: 'Subtext', es: 'Texto acompañante' },
    },
    overrides
  );
