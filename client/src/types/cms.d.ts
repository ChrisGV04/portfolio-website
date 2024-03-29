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
  hero: { gallery: { id?: string; img: PayloadMediaFile }[] };
  about: { title: string; subtext: string };
  featProjects: { projects: Project[] };
  bottomMarquee: {
    gallery: { id?: string; img: PayloadMediaFile }[];
  };
}

export interface ContactPageInfo {
  id: string;
  avatar: PayloadMediaFile;
  contactMethods: { name: string; url: string; id?: string }[];
  info: { name: string; id?: string }[];
  otherMedia: { name: string; url: string; id?: string }[];
}

export interface GlobalInfo {
  id: string;
  maintenance: boolean;
  footerContactMethods: { name: string; url: string; id?: string }[];
}
