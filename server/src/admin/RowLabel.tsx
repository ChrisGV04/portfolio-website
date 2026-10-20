'use client';
import { useRowLabel } from '@payloadcms/ui';

// Shared array row label: the row's `name`, or its 1-based position when empty.
export const RowLabel = () => {
  const { data, rowNumber = 0 } = useRowLabel<{ name?: string }>();

  return data?.name || `-- @ ${rowNumber + 1}`;
};
