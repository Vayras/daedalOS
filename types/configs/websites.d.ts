export interface SiteData {
  id: string;
  img?: string;
  inner?: boolean;
  link: string;
  title: string;
}

export interface SiteSectionData {
  sites: SiteData[];
  title: string;
}

export interface WebsitesData {
  favorites: SiteSectionData;
  freq: SiteSectionData;
}

