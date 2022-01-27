import "./Tiles.css";
export default function Tiles() {
  const items = [
    {
      title: "Latest News",
      text: "Stay close to all our news,from new releases to distillery events,innovations and more.",
      src: "images/desktop-block-image-1.jpg",
    },
    {
      title: "Awards",
      text: "Appreciation is always appreciated. Not to mention it's a very good reason to raise a glass.",
      src: "images/desktop-block-image-2.jpg",
    },
    {
      title: "Our Podcast",
      text: "Listen to our entertaining and interesting Scotch whisky show 'Whisky Unscripted'",
      src: "images/desktop-block-image-3.jpg",
    },
  ];
  return (
    <div className="Tiles-grid">
      {items.map((item) => {
        return (
          <div className="Tiles-tile">
            <picture>
              <img src={item.src} alt="alt" />
            </picture>
            <div className="Tiles-content">
              <h2 className="Tiles-title">{item.title}</h2>
              <p>{item.text}</p>
              <a href="/books" className=" Tiles-button button">
                STAY UP TO DATE
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
