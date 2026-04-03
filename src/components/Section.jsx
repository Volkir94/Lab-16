import './Section.css';

function Section() {
  return (
    <section className="section">
      <h3>Секция</h3>
      <img 
        src="https://avatars.mds.yandex.net/i?id=d982b67ac5b271542ebeb15275e6f7704151f047-8497057-images-thumbs&n=13" 
        alt="Случайное изображение"
        className="section-image"
      />
    </section>
  );
}

export default Section;