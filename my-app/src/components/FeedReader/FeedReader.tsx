import React, { useState, useEffect } from 'react';

interface Feed {
  title: string;
  link: string;
}

const FeedReaderApp: React.FC = () => {
  // Стан для зберігання стрічок новин
  const [feeds, setFeeds] = useState<Feed[]>([]);

  // Стандартні стрічки новин
  const standardFeeds: Feed[] = [
    { title: 'NASA Breaking News', link: 'https://www.nasa.gov/rss/dyn/breaking_news.rss' },
    { title: 'Reddit Front Page', link: 'https://www.reddit.com/.rss' },
    { title: 'Mobile World Live', link: 'https://www.mobileworldlive.com/latest-stories/feed/' }
  ];

  // Функція для отримання стрічок новин
  const fetchFeeds = async () => {
    // Отримання стандартних стрічок новин
    const standardFeedsData: Feed[] = await Promise.all(standardFeeds.map(feed => fetchFeed(feed.link)));
    setFeeds(standardFeedsData);
  };

  // Функція для отримання статей зі стрічки новин
  const fetchFeed = async (url: string): Promise<Feed> => {
    const response = await fetch(url);
    const data: Feed = await response.json();
    return data;
  };

  // Виклик функції отримання стрічок новин при завантаженні компонента
  useEffect(() => {
    fetchFeeds();
  }, []);

  return (
    <div>
      <h1>Feed Reader</h1>
      <h2>Standard Feeds:</h2>
      <ul>
        {feeds.map((feed, index) => (
          <li key={index}>
            <a href={feed.link}>{feed.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedReaderApp;
