export interface Homepage {
  id: string;
  heroGallery: {
    img: string | Upload;
    id: string;
  }[];
  services?: {
    codingImage: string | Upload;
    webImage: string | Upload;
    ecommerceImage: string | Upload;
  };
  featProjects: string[] | Project[];
}
export interface Upload {
  id: string;
  alt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
}
export interface Project {
  id: string;
  title: string;
  url?: string;
  theme:
    | 'sl'
    | 'gr'
    | 'zn'
    | 'nt'
    | 'st'
    | 'rd'
    | 'or'
    | 'am'
    | 'yl'
    | 'lm'
    | 'em'
    | 'tl'
    | 'cy'
    | 'sk'
    | 'bl'
    | 'in'
    | 'vl'
    | 'pr'
    | 'fc'
    | 'pn'
    | 'rs';
  slug: string;
  featuredMedia: string | Upload;
  categories: string[] | ProjectCategory[];
  meta: {
    company: string;
    year: number;
  };
  content: (
    | {
        title: string;
        body: string;
        id?: string;
        blockName?: string;
        blockType: 'block-simple-text';
      }
    | {
        title: string;
        body: string;
        media: string | Upload;
        mediaPos?: 'l' | 'r';
        id?: string;
        blockName?: string;
        blockType: 'block-text-media';
      }
    | {
        title: string;
        body: string;
        media: {
          res: string | Upload;
          id?: string;
        }[];
        mediaPos?: 'l' | 'r';
        id?: string;
        blockName?: string;
        blockType: 'block-text-mobile';
      }
    | {
        img: string | Upload;
        id?: string;
        blockName?: string;
        blockType: 'block-fullscreen-img';
      }
    | {
        img: string | Upload;
        id?: string;
        blockName?: string;
        blockType: 'block-desktop-media';
      }
  )[];
  createdAt: string;
  updatedAt: string;
}
export interface ProjectCategory {
  id: string;
  title: string;
  slug: string;
}
