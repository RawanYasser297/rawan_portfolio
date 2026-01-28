type ProductCardProps = {
  title: string;
  price: number;
  image: string;
  onPay: () => void;
};

const ProductCard = ({ title, price, image, onPay }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-card__image" />

      <div className="product-card__content">
        <h3>{title}</h3>
        <p className="price">${price}</p>

        <button className="pay-btn" onClick={onPay}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
