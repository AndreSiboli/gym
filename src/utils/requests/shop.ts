import { CartProductsType } from "@/@types/products";
import axios from "axios";

const root = "https://fakestoreapi.com";

async function getClothes(domain: string) {
  try {
    const res = await axios
      .get(`${root}${domain}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    return res as CartProductsType[];
  } catch (error) {
    console.error("An error has ocurred");
    return null;
  }
}

export async function getMaleClothes() {
  const domain = "/products/category/men's%20clothing";
  const res = await getClothes(domain);
  return res ;
}

export async function getFemaleClothes() {
  const domain = "/products/category/women's%20clothing";
  const res = await getClothes(domain);
  return res ;
}
