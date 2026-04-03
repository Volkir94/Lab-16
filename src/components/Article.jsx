import { Routes, Route } from 'react-router-dom';
import './Article.css';

function News() {
  return (
    <div>
      <h1>Новости</h1>
      <p>Свежие новости из мира технологий.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>Южный федеральный университет</h1>
      <p>ЮФУ — один из крупнейших университетов юга России.</p>
    </div>
  );
}

function Contacts() {
  return (
    <div>
      <h1>Контакты</h1>
      <p>Телефон: +7 (961) 41-94-153</p>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Страница не найдена</p>
    </div>
  );
}

function Article() {
  return (
    <article className="article">
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </article>
  );
}

export default Article;