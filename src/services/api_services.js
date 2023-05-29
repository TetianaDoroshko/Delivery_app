import axios from "axios";

export const axiosRequest = axios.create({
  baseURL: "http://localhost:3000",
  // baseURL: 'https://',
});

export const getAllProducts = async () => {
  const products = await axiosRequest.get("/api/products");
  return products.data;
};

export const addOrder = async (order) => {
  const products = await axiosRequest.post("/api/orders", order);
  return products.data;
};

export const getOrders = async (dateStart, dateEnd) => {
  const orders = await axiosRequest.get("/api/orders", {
    params: {
      dateStart,
      dateEnd,
    },
  });
  return orders.data;
};
