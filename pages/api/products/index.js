import nc from "next-connect";
import { getAllProducts, SaveProduct } from "../../../components/products";

const handler = new nc();
handler.get(getAllProducts);
handler.post(SaveProduct);

export default handler;
