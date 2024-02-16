import React from 'react';
import "./FeedList.css"

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
    <div className='Feed'>
      <h2>Feeds: </h2>
      <ul className='ul'>
        {feeds.map(feed => (
          <li className = "gap" key={feed.id}>
            <span onClick={() => onClick(feed)}>{feed.title}</span>
            <button onClick={() => onDelete(feed.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedList;
