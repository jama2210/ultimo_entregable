import axios from "axios";
import React, { useEffect, useState } from "react";
import getConfig from "../utils/getConfig";
import PurchasesCard from "../components/Purchases/PurchasesCard";
import './styles/purchases.css'

const Purchases = () => {
  const [purchasesList, setPurchasesList] = useState();

  useEffect(() => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/purchases";
    axios
      .get(URL, getConfig())
      .then((res) => setPurchasesList(res.data.data.purchases))
      .catch((err) => console.log(err));
  }, []);

  console.log(purchasesList);

  return (
    <div className="content">
    <section className="purchases_main">
      <div className="history">
        <a href="#/">Home</a>
        <div className="separator"></div>
        <b>Purchases</b>
      </div>
      <h2 className="purchases_title">My purchases</h2>


        {purchasesList?.map((purchase) => (
          <PurchasesCard key={purchase.id} purchase={purchase} />
          ))}
    </section>
      </div>

  );
};

export default Purchases;
