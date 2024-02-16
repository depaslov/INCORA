import React, { useState } from "react";
import './AddFeedForm.css'
interface AddFeedFormProps {
  onAddArticle: (newArticle: Article) => void; // Змініть назву пропса на onAddArticle
}

interface Article {
  id: number;
  title: string;
  date: string;
  content: string;
}

const AddFeedForm: React.FC<AddFeedFormProps> = ({ onAddArticle }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Отримати дані з форми і передати їх у функцію onAddArticle
    const newArticle: Article = {
      id: Math.floor(Math.random() * 1000), // Це тимчасове значення для id
      title: title,
      date: date,
      content: content,
    };
    onAddArticle(newArticle);
    // Скинути значення полів форми після відправки
    setTitle("");
    setDate("");
    setContent("");
  };

  return (
    <form className = "AddFeedForm " onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Add Article</button>
    </form>
  );
};

export default AddFeedForm;
