import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Products = () => {
  const router = useRouter();
  const { id } = router.query;
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const getProducts = async () => {
    try {
      const res = await http.get(`/products`);
      setProducts(res.data);
    } catch (err) {
      setIsError(true);
      console.log(err);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  {
    products.map((post, index) => {
      return (
        <Link key={index} href={`/product/${post.id}`}>
          <div className="blog-posts-list-item">
            <div className="blog-posts-list-item-title-and-date">
              <h2></h2>
              <li>
                {post.title} ({post.price})
              </li>
            </div>
          </div>
        </Link>
      );
    });
  }
};

export default Products;
