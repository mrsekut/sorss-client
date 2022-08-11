type Props = {
  title: string;
  url: string;
  description: string;
};

export const FeedItem: React.FC<Props> = ({ title, url, description }) => {
  return (
    <div>
      <a href={url}>{title}</a>
      <p>{description}</p>
    </div>
  );
};
