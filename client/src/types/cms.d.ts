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
    | 'gr'
    | 'rd'
    | 'or'
    | 'am'
    | 'lm'
    | 'gn'
    | 'em'
    | 'tl'
    | 'cy'
    | 'sk'
    | 'bl'
    | 'in'
    | 'vl'
    | 'pr'
    | 'fc'
    | 'pn';
  slug: string;
  featuredMedia: Upload;
  categories: ProjectCategory[];
  meta: {
    company: string;
    year: number;
  };
  content: (
    | ProjectSimpleTextBlock
    | ProjectTextMediaBlock
    | ProjectTextMobileBlock
    | ProjectFullscreenImgBlock
    | ProjectDesktopMediaBlock
  )[];
  createdAt: string;
  updatedAt: string;
}
export interface ProjectSimpleTextBlock {
  id: string;
  body: string;
  title: string;
  blockName: string;
  blockType: 'block-simple-text';
}
export interface ProjectTextMediaBlock {
  id: string;
  title: string;
  body: string;
  media: Upload;
  mediaPos: 'l' | 'r';
  blockName: string;
  blockType: 'block-text-media';
}
export interface ProjectTextMobileBlock {
  id: string;
  title: string;
  body: string;
  mediaPos: 'l' | 'r';
  blockName?: string;
  blockType: 'block-text-mobile';
  media: { res: Upload; id: string }[];
}
export interface ProjectFullscreenImgBlock {
  id: string;
  img: Upload;
  blockName: string;
  blockType: 'block-fullscreen-img';
}
export interface ProjectDesktopMediaBlock {
  id: string;
  img: Upload;
  blockName: string;
  blockType: 'block-desktop-media';
}
export interface ProjectCategory {
  id: string;
  title: string;
  slug: string;
}
