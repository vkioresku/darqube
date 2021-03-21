export type CardProps = {
  large?: boolean;
  category: string;
  datetime: string | Date;
  headline: string;
  summary: string;
  image: string;
  url: string;
  onBookmark: () => void;
};
