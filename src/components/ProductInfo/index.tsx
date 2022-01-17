import "./styles.css";

const ProductInfo = ({ text }: any) => {
  return (
    <div className="product-info-container">
      <div className="info-product">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
