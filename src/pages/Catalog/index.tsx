import ProductCard from "components/ProductCard";
import Search from "components/Search";

import "./styles.css";

const Catalog = () => {
  return (
    <>
      <div>
        <Search />
      </div>
      <div className="my-1 catalog-container-card">
        <div className="row">
          <div className=" col-sm-6 col-lg-4 ">
            <ProductCard />
          </div>
          <div className=" col-sm-6 col-lg-4 ">
            <ProductCard />
          </div>

          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>

          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>

          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>

          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>

          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>

          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>

          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>

          <div className="col-sm-6 col-lg-4">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};
export default Catalog;
