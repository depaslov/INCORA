import React from 'react';

interface ArticleListProps {
  articles: Article[];
  onClick: (article: Article) => void;
}
// types.ts
export interface Article {
    id: number;
    title: string;
    date: string;
    content: string;
  }
  
const ArticleList: React.FC<ArticleListProps> = ({ articles, onClick }) => {
  return (
    <div>
      <h2>Articles</h2>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <span onClick={() => onClick(article)}>{article.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
