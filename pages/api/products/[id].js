import nc from "next-connect";
import {
  getProductById,
  DeleteProductById,
  UpdateProduct,
} from "../../../components/products";

const handler = new nc();

handler.get(getProductById);
handler.delete(DeleteProductById);
handler.put(UpdateProduct);

export default handler;
