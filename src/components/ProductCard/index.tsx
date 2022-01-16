import CarCardImage from "assets/images/cardcar.png";
import Button from "components/Button";
import ProductInfo from "components/ProductInfo";
import "./styles.css";

const ProductCard = () => {
  return (
    <>
      <div className="base-card product-card">
        <div className="card-top-container">
          <img src={CarCardImage} alt="card-produto-carro" />
        </div>
        <div className="card-mid-container">
          <h1>Audi Supra TT</h1>
          <ProductInfo />
          <div className="card-bottom-container">
            <Button text="COMPRAR" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
