import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const { products } = useLoaderData();
  const navigator = useNavigation();
  if (navigator.state === "loading") {
    return <h1>LOADING---------------------</h1>;
  }
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
