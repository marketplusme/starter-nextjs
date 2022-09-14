import { executeQuery } from "../config/db";

const getAllProducts = async (req, res) => {
  try {
    let employeeData = await executeQuery(`SELECT * FROM products`, []);
    res.send(employeeData);
  } catch (err) {
    res.state(500).json(err);
  }
};
//get product by id
const getProductById = async (req, res) => {
  let id = req.query.id;
  try {
    let productData = await executeQuery(
      `SELECT * FROM products where id=${id}`,
      []
    );
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
};
//delete a product
const DeleteProductById = async (req, res) => {
  let id = req.query.id;
  try {
    let productData = await executeQuery(
      `DELETE FROM products where id=${id}`,
      []
    );
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Save product
const SaveProduct = async (req, res) => {
  let date = new Date();
  let seconds = date.getTime() / 1000; //1440516958
  let title = req.body.title;
  let price = req.body.price;
  let tags = req.body.tags;
  let dateTimestamp = seconds;
  let thumbnailImageUrl = "http://www.ico.com";

  try {
    let productData = await executeQuery(
      `insert into products(title,price,tags,dateTimestamp, thumbnailImageUrl) values(?, ?, ?, ?,?)`,
      [title, price, tags, dateTimestamp, thumbnailImageUrl]
    );
    //console.log(productData);
    productData = await executeQuery(
      `select * from Products where id=${productData.insertId}`
    );
    res.status(201).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
};

//update product
//Save product
const UpdateProduct = async (req, res) => {
  let id = req.query.id;
  const { title, price, tags } = req.body;

  let date = new Date();
  let seconds = date.getTime() / 1000; //1440516958
  let dateTimestamp = seconds;
  let thumbnailImageUrl = "http://www.ico.com";

  try {
    let productData = await executeQuery(`select * from products where id=?`, [
      id,
    ]);
    if (productData.length > 0) {
      productData = await executeQuery(
        `update products set title=?,price=?,tags=?,dateTimestamp=?, thumbnailImageUrl=?  where id=?`,
        [title, price, tags, dateTimestamp, thumbnailImageUrl, id]
      );
      //console.log(productData);
      productData = await executeQuery(`select * from Products where id=? `, [
        id,
      ]);
      res.status(201).json(productData);
    } else {
      res.status(400).json("Product not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export {
  getAllProducts,
  getProductById,
  DeleteProductById,
  SaveProduct,
  UpdateProduct,
};
