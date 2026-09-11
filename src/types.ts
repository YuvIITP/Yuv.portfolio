export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  liveUrl?: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  description?: string;
  tags?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  metrics?: string;
}
