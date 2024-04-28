import { CartProductsType } from "@/@types/products";
import axios from "axios";

const root = "https://fakestoreapi.com";

export  async function getMaleClothes() {
  const domain = "/products/category/men's%20clothing";
  const res = await axios
    .get(`${root}${domain}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return res as CartProductsType[];
}

export  async function getFemaleClothes() {
  const domain = "/products/category/women's%20clothing";
  const res = await axios
    .get(`${root}${domain}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return res as CartProductsType[];
}
