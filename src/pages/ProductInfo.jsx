import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardProduct from "../components/Home/CardProduct";
import ProductDescription from "../components/ProductInfo/ProductDescription";
import './styles/productInfo.css'

const ProductInfo = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();
  const [similarProducts, setSimilarProducts] = useState();

  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`;
    axios
      .get(URL)
      .then((res) => setProduct(res.data.data.product))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    if (allProducts && product) {
      const pivot = allProducts.filter(
        (prod) => prod.category.name === product.category
      );
      setSimilarProducts(pivot);
    }
  }, [allProducts, product]);

  console.log(similarProducts);

  return (
    <div className="content">
      <div className="container">
      <div className="history">
        <a href="#/">Home</a>
        <div className="separator"></div>
        <b>{product?.title}</b>
      </div>
      <ProductDescription product={product} />
      <section className="suggestions">
        <h2>Discover similar items</h2>
        <div className="similar-products-container">
          {similarProducts?.map((simProd) => {
            if (simProd.title !== product.title) {
              return <CardProduct key={simProd.id} product={simProd} />;
            }
          })}
        </div>
      </section>
    </div>
          </div>
  );
};

export default ProductInfo;
