export interface PaginationOpts {
  page: number;
  limit: number;
  totalDocs: number;
  totalPages: number;
  prevPage: number | null;
  nextPage: number | null;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface Paginated<T = any> extends PaginationOpts {
  docs: T[];
}

declare module '#app' {
  export interface RuntimeNuxtHooks {
    'page:reveal': () => void;
  }
}
