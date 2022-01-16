import Button from "components/Button";

import "./styles.css";

const Search = () => {
  return (
    <>
      <div className="catalog-container">
        <div className="base-card catalog-card">
          <div>
            <input type="text" placeholder="Digite sua busca" />
          </div>
          <div className="adjust-btn">
            <Button text="BUSCAR" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
