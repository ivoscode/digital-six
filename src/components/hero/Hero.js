import "./Hero.css";
export default function Hero() {
  return (
    <div className="Hero">
      <picture>
        <source
          media="(min-width: 768px)"
          srcset="images/desktop-main-banner.jpg"
        />
        <img src="images/mobile-main-banner-image.jpg" alt="Bar" />
      </picture>
      <div className="Hero-content">
        <h1 className="Hero-text">Crafting Spirits With Passion</h1>
        <a href="/books" className=" Hero-button button">
          VISIT OUR SHOP
        </a>
      </div>
    </div>
  );
}
