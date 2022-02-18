interface fieldTemplate {
  name: string;
  value: string;
  inline?: boolean;
}

interface field extends Array<fieldTemplate> {}

export interface Embed {
  color: number;
  title: string;
  description: string;
  url?: string;
  author?: {
    name: string;
    icon_url: string;
    url?: string;
  };
  thumbnail?: {
    url: string;
  };
  fields?: field;
  image?: {
    url: string;
  };
  timestamp?: Date;
  footer?: {
    text: string;
    icon_url?: string;
  };
}
