export interface BearMdData {
  excerpt: string;
  file: string;
  icon: string;
  id: string;
  link?: string;
  title: string;
}

export interface BearData {
  icon: string;
  id: string;
  md: BearMdData[];
  title: string;
}

