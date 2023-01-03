import type { Block } from 'payload/types';
import { portfolioTextBlockFields } from '../../fields/PortfolioTextBlock';

export const SimpleTextBlock: Block = {
  slug: 'block-simple-text',
  labels: { singular: 'Simple text', plural: 'Simple text blocks' },
  imageURL: '/block-tmbs/simple-text-block.webp',
  fields: portfolioTextBlockFields,
};
