export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  tags: string[];
  createdAt: string;
  updatedAt?: string;
  views: number;
  likes: number;
  author?: {
    name: string;
    avatar?: string;
  };
}
