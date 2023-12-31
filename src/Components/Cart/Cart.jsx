import { useLoaderData, useNavigate } from "react-router-dom";

const Cart = () => {
  const product = useLoaderData();
  const navigate = useNavigate();
  // console.log(product);
  const { id, title, description, price, brand, thumbnail } = product;
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div>
      <a
        href="#"
        className="flex m-5  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={thumbnail}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <small>Brand: {brand}</small>
          <small>ID: {id}</small>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <p className="text-3xl font-bold">Price: $ {price}</p>
          <button className="bg-red-400 p-4 m-2 rounded-lg font-bold text-white">
            Add to cart
          </button>
          <button
            onClick={handleHome}
            className="bg-slate-300 p-4 rounded-lg m-6"
          >
            Home
          </button>
        </div>
      </a>
    </div>
  );
};

export default Cart;
