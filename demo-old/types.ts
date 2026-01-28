
export interface VisionPoint {
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  link: string;
}
