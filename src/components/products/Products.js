import "./Products.css";
export default function Products() {
  const products = [
    {
      title: "Edinburgh Gin Gooseberry & Elderflower Flavored Gin",
      price: "£28.00",
      src: "images/desktop-product-image-1.jpg",
    },
    {
      title: "Sheep Dip Islay Blended Malt Whisky",
      price: "£35.00",
      src: "images/desktop-product-image-2.jpg",
    },
    {
      title: "Macleod's Single Malt Whisky",
      price: "£28.00",
      src: "images/desktop-product-image-3.jpg",
    },
    {
      title: "Smokehead Rum Rebel",
      price: "249.00",
      src: "images/desktop-product-image-4.jpg",
    },
  ];
  return (
    <div className="Products">
      <h1>Our Shop</h1>
      <p>
        FREE GLASS with every order to help you Celebrate Burns Night. Check out
        offer on our glassware shop page.
      </p>
      <div className="Products-grid">
        {products.map((product) => {
          return (
            <div className="Products-product">
              <div>
                <img src={product.src} alt="bootle"></img>
                <h2 className="Product-title">{product.title}</h2>
              </div>
              <div>
                <h3 className="Product-price">{product.price}</h3>
                <a href="/books" className=" Products-tile-button button">
                  VIEW DETAILS
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="Products-button-wrapper">
        <a href="/" className=" Products-button button">
          VISIT OUR SHOP
        </a>
      </div>
    </div>
  );
}
