import React, { useState } from "react";
import styles from "./page.module.css";
import CustomerForm from "../components/CustomerForm/CustomerForm";
import ProductOrder from "../components/ProductOrder/ProductOrder";
import Total from "../components/Total/Total";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import Actions from "../components/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../services/api_services";
import toast from "react-hot-toast";
import { resetOrder } from "../redux/orderReducer";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };
  const [customer, setCustomer] = useState(initialState);

  const order = useSelector((store) => store.order);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const total = order
    .reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
    .toFixed(2);

  const onInputChange = (evt) => {
    setCustomer((prevstate) => ({
      ...prevstate,
      [evt.target.name]: evt.target.value,
    }));
  };
  const onFormSubmit = () => {
    const orderList = order.map((prod) => ({
      _id: prod._id,
      productName: prod.name,
      quantity: prod.quantity,
    }));

    const newOrder = { ...customer, orderList, total };
    addOrder(newOrder)
      .then((data) => {
        toast.success(`Order #${data._id} is successfully accepted.`, {
          duration: 5000,
        });
        setCustomer(initialState);
        dispatch(resetOrder());
        navigate("/");
      })
      .catch((err) => toast.error(`Something goes wrong.`));
  };
  return (
    <main className={styles.page}>
      <div style={{ display: "flex" }}>
        <CustomerForm customer={customer} onInputChange={onInputChange} />
        <ProductOrder />
      </div>
      <Actions>
        <Total total={total} />
        <SubmitButton onFormSubmit={onFormSubmit} />
      </Actions>
    </main>
  );
}
