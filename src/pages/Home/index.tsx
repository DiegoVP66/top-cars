import MainImage from "assets/images/main-image.png";
import Button from "components/Button";
import { Link } from "react-router-dom";

import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card base-card">
        <div className="home-content-container">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
        <div className="home-image-container">
          <img src={MainImage} alt="carro-principal" />
        </div>
      </div>

      <div className="home-card-catalog-container">
        <div className="home-card-catalog">
          <div className="home-content-catalog">
            <Link to="/products">
              <Button text="VER CATÁLOGO" />
            </Link>
            
          </div>
          <div className="home-card-link">
            <Link to="/products">Comece agora a navegar</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
