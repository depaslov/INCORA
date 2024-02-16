import React, { useState, useEffect } from "react";
import FeedList from "./components/FeedList/FeedList";
import ArticleList from "./components/ArticleList/ArticleList";
import AddFeedForm from "./components/AddFeedForm/AddFeedForm";
import FeedReaderApp from "./components/FeedReader/FeedReader";
import Header from "./components/Header/Header";
import './App.css'

interface Feed {
  id: number;
  title: string;
  url: string;
}

interface Article {
  id: number;
  title: string;
  date: string;
  content: string;
}

const App: React.FC = () => {
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [selectedFeed, setSelectedFeed] = useState<Feed | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Fetch feed definitions from server when the app starts
    fetchFeeds();
  }, []);

  const fetchFeeds = async () => {
    // Fetch feed definitions from server
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?userId=1"
      );
      const data = await response.json();
      setFeeds(data);
    } catch (error) {
      console.error("Error fetching feeds:", error);
    }
  };

  const fetchArticles = async (feedUrl: string) => {
    // Fetch articles from the selected feed
    try {
      const response = await fetch(feedUrl);
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const handleFeedClick = (feed: Feed) => {
    // Handle feed selection
    setSelectedFeed(feed);
    fetchArticles(feed.url);
  };

  const handleArticleClick = (article: Article) => {
    // Handle article selection
    // Show article detail in a new screen (not implemented in this example)
    console.log("Selected article:", article);
  };

  const handleAddArticle = (newArticle: Article) => {
    // Add new feed definition
    const newFeed: Feed = {
      id: newArticle.id,
      title: newArticle.title,
      url: '', // Додайте URL за замовчуванням або обробіть його відповідним чином
    };
    setFeeds([...feeds, newFeed]);
  };

  const handleDeleteFeed = (feedId: number) => {
    // Delete feed definition
    setFeeds(feeds.filter((feed) => feed.id !== feedId));
  };

  return (
    <div>
      <Header />
      <FeedList
        feeds={feeds}
        onClick={handleFeedClick}
        onDelete={handleDeleteFeed}
      />
      {selectedFeed && (
        <ArticleList articles={articles} onClick={handleArticleClick} />
      )}
      <AddFeedForm onAddArticle={handleAddArticle} />
      <FeedReaderApp />
    </div>
  );
};

export default App;
