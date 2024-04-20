export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  slugCurrent: string;
  titleImage: any;
}

export interface blogPost {
  slugCurrent: string;
  title: string;
  content: any;
  titleImage: any;
}

export interface simpleProjectCard {
  title: string;
  smallDescription: string;
  slugCurrent: string;
  titleImage: any;
  githublink: string;
  demolink: string;
}
export interface projectPost {
  slugCurrent: string;
  title: string;
  content: any;
  titleImage: any;
  smallDescription: any;
  githublink: string;
  demolink: string;
}
