import axios from "axios";
import toast from "react-hot-toast";

export const axiosRequest = axios.create({
  baseURL: "https://delivery-app-api.vercel.app",
});

export const getAllProducts = async () => {
  try {
    const products = await axiosRequest.get("/api/products");
    return products.data;
  } catch (error) {
    toast.error(`Unsuccessful connection to server. ${error.message}`, {
      duration: 5000,
    });
  }
};

export const addOrder = async (order) => {
  try {
    const products = await axiosRequest.post("/api/orders", order);
    return products.data;
  } catch (error) {
    toast.error(`Unsuccessful connection to server. ${error.message}`, {
      duration: 5000,
    });
  }
};

export const getOrders = async (dateStart, dateEnd) => {
  try {
    const orders = await axiosRequest.get("/api/orders", {
      params: {
        dateStart,
        dateEnd,
      },
    });
    return orders.data;
  } catch (error) {
    toast.error(`Unsuccessful connection to server. ${error.message}`, {
      duration: 5000,
    });
  }
};
