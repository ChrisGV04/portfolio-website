export interface PayloadMediaFile {
  id: string;
  alt: string;
  url: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectInfo {
  id: string;
  name: string;
  services: string;
  year: number;
  liveUrl?: string;
  projectType: 'website' | 'ecommerce' | 'webApp';
}

export interface HomepageInfo {
  id: string;
  hero: {
    gallery: { id?: string; img: PayloadMediaFile }[];
  };
  about: { title: string; subtext: string };
  featProjects: { projects: Project[] };
  bottomMarquee: {
    gallery: { id?: string; img: PayloadMediaFile }[];
  };
}
