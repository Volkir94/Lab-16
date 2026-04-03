import { Link } from 'react-router-dom';  
import './Head.css';

function Head() {
  return (
    <div className="head">
      <Link to="/news">Новости</Link>      
      <Link to="/about">О проекте</Link>   
      <Link to="/contacts">Контакты</Link>
    </div>
  );
}

export default Head;