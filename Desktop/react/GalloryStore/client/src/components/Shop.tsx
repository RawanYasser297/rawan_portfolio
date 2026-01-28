import ProductCard from "./ProductCard";
import "../scss/ProductCard.scss";
const BASE_FUNCTION_URL = 'https://us-central1-gallory-a054d.cloudfunctions.net/api';
const products = [
  {
    id: 1,
    title: "Pro Subscription",
    price: 29,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
];

 const Shop = () => {
  
  const handlePay = async (product) => {
  const res = await fetch(`${BASE_FUNCTION_URL}/create-payment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      price: product.price,
      title: product.title,
    }),
  });

  const data = await res.json();

  // فتح صفحة الدفع
  window.location.href = data.paymentUrl;
};

  return (
    <div style={{ display: "flex", gap: "24px" }}>
      {products.map((p) => (
        <ProductCard
          key={p.id}
          title={p.title}
          price={p.price}
          image={p.image}
          onPay={() => handlePay(p)}
        />
      ))}
    </div>
  );
};

export default Shop;
