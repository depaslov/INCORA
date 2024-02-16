import React from 'react';

interface FeedListProps {
  feeds: Feed[];
  onClick: (feed: Feed) => void;
  onDelete: (feedId: number) => void;
}
// Ваш файл, наприклад feedTypes.ts
export interface Feed {
    id: number;
    title: string;
    url: string;
  }
  
const FeedList: React.FC<FeedListProps> = ({ feeds, onClick, onDelete }) => {
  return (
    <div>
      <h2>Feeds</h2>
      <ul>
        {feeds.map(feed => (
          <li key={feed.id}>
            <span onClick={() => onClick(feed)}>{feed.title}</span>
            <button onClick={() => onDelete(feed.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedList;
