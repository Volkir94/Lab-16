import Section from './Section';
import Article from './Article';
import Aside from './Aside';
import './Main.css';

function Main() {
  return (
    <main className="main">
      <div className="main-grid">
        <Section />
        <Article />
        <Aside />
      </div>
    </main>
  );
}

export default Main;