import React, { useState, useEffect } from "react";
import Base from "../../components/Base/Base";
import ProductCard from "../../components/ProductCard/ProductCard";
import PrettyHeader from "../../components/PrettyHeader/PrettyHeader";
import product1 from "../../assets/Product1.png";
import product2 from "../../assets/Product2.png";
import product3 from "../../assets/Product3.png";
import filterIcon from "../../assets/filterSortIcon.svg";
import FilterCollection from "../../components/FilterCollection/FilterCollection";
import PriceSlider from "../../components/PriceSlider/PriceSlider";
import ButtonFilter from "../../components/ButtonFilter/ButtonFilter";
import ColorFilter from "../../components/ColorFilter/ColorFilter";
import { getAllProducts, getProductFilters } from "../helper/coreApiCalls";

const Collection = () => {
  //States
  const [products, setProducts] = useState([]);
  const [filterData, setFilterData] = useState({
    filter: { type: "Material", filters: ["Fabric", "Leather", "Others"] },
  });
  const [error, setError] = useState(false);

  const { filter } = filterData;

  const loadAllProducts = () => {
    getAllProducts().then((data) => {
      console.log(data);
      if (data.error) {
        return setError(data.error);
      } else {
        return setProducts(data);
      }
    });
  };

  const loadAllFilters = () => {
    getProductFilters().then((data) => {
      if (data.error) {
        return setError(data.error);
      } else {
        // return setFilterData(data);
      }
    });
  };

  // useEffect(() => {
  //   loadAllFilters();
  //   loadAllProducts();
  // }, []);

  const FilterSortCollapsed = () => {
    return (
      <div>
        <div
          className="d-md-none d-flex col-md-3 justify-content-end align-items-center"
          style={{}}
        >
          <button
            className="btn d-flex align-items-center"
            type="button"
            data-toggle="collapse"
            data-target="#collapsedFilters"
            aria-expanded="false"
            aria-controls="collapsedFilters"
            style={{
              color: "#384355",
              fontFamily: "Poppins",
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            <img src={filterIcon} alt={filter} className="mr-2" />
            FILTER | SORT
          </button>
        </div>
      </div>
    );
  };

  return (
    <Base>
      <div className="container my-4">
        <div className="row d-flex justify-content-center justify-content-md-between my-2 mx-1 align-items-baseline">
          <div className="col-12 col-md-6 pretty-text-left">
            <PrettyHeader title="Plants" />
          </div>
          <div className="col-12 col-md-3 pretty-text-left"></div>
          <div className="d-none d-md-flex col-md-3 justify-content-end align-items-center">
            <div
              className="mr-2"
              style={{
                color: "#384355",
                fontFamily: "Poppins",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              SORT
            </div>
            <form>
              <div className="form-group mb-0">
                <select className="form-control rounded" id="sortby">
                  <option>Popular</option>
                  <option>Price high - low</option>
                  <option>Price low - high</option>
                </select>
              </div>
            </form>
          </div>
          <FilterSortCollapsed />
        </div>
        <div
          className="col-12 col-md-3 collapse"
          id="collapsedFilters"
          style={{
            position: "absolute",
            zIndex: "1",
            background: "white",
          }}
        >
          <div
            className="mr-2"
            style={{
              color: "#384355",
              fontFamily: "Poppins",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            SORT
          </div>
          <form>
            <div className="form-group mb-0">
              <select className="form-control rounded" id="sortby">
                <option>Popular</option>
                <option>Price high - low</option>
                <option>Price low - high</option>
              </select>
            </div>
          </form>
        </div>
        <div className="row my-3">
          <div className="col-12 col-md-12">
            <div className="row">
              {products.map((product, i) => {
                return (
                  <div key={i} className="col-6 col-sm-6 col-md-3">
                    <ProductCard
                      discount={product.discount}
                      imageUrl={product.imageURL}
                      category={product.category}
                      title={product.name}
                      price={product.price}
                    />
                  </div>
                );
              })}
              <div className="col-6 col-sm-6 col-md-3">
                <ProductCard
                  discount="60%"
                  imageUrl={product1}
                  category="Leafly"
                  title="String of Pearls Succulent Plant"
                  price="2000"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ProductCard
                  imageUrl={product2}
                  category="Leafly"
                  title="String of Pearls Succulent Plant"
                  price="2000"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ProductCard
                  imageUrl={product3}
                  category="Leafly"
                  title="String of Pearls Succulent Plant"
                  price="2000"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ProductCard
                  imageUrl={product1}
                  category="Leafly"
                  title="String of Pearls Succulent Plant"
                  price="2000"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ProductCard
                  discount="60%"
                  imageUrl={product2}
                  category="Leafly"
                  title="String of Pearls Succulent Plant"
                  price="2000"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ProductCard
                  imageUrl={product3}
                  category="Leafly"
                  title="String of Pearls Succulent Plant"
                  price="2000"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ProductCard
                  imageUrl={product1}
                  category="Leafly"
                  title="String of Pearls Succulent Plant"
                  price="2000"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ProductCard
                  imageUrl={product2}
                  category="Leafly"
                  title="String of Pearls Succulent Plant"
                  price="2000"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ProductCard
                  discount="40%"
                  imageUrl={product3}
                  category="Leafly"
                  title="String of Pearls Succulent Plant"
                  price="1000"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ProductCard
                  imageUrl={product1}
                  category="Leafly"
                  title="String of Pearls Succulent Plant"
                  price="1500"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ProductCard
                  imageUrl={product2}
                  category="Leafly"
                  title="String of Pearls Succulent Plant"
                  price="2000"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ProductCard
                  discount="40%"
                  imageUrl={product3}
                  category="Leafly"
                  title="String of Pearls Succulent Plant"
                  price="2500"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ProductCard
                  discount="60%"
                  imageUrl={product1}
                  category="Leafly"
                  title="String of Pearls Succulent Plant"
                  price="2000"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ProductCard
                  imageUrl={product2}
                  category="Leafly"
                  title="String of Pearls Succulent Plant"
                  price="2000"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ProductCard
                  imageUrl={product3}
                  category="Leafly"
                  title="String of Pearls Succulent Plant"
                  price="2000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};
export default Collection;
