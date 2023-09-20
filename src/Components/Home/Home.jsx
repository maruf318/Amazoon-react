import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between p-4 shadow-lg bg-slate-200 items-center content-center">
        <h2 className="text-4xl font-bold">Amazoon</h2>
        <div className="flex gap-5 text-2xl font-bold  ">
          {/* <Link to="/">Home</Link> */}
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-blue-500 p-4 rounded-md"
                : "bg-blue-200 p-4 rounded-md"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-blue-500 p-4 rounded-md"
                : "bg-blue-200 p-4 rounded-md"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-blue-500 p-4 rounded-md"
                : "bg-blue-200 p-4 rounded-md"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-blue-500 p-4 rounded-md"
                : "bg-blue-200 p-4 rounded-md"
            }
          >
            Dashboard
          </NavLink>
          {/* <Link to="/products">Products</Link> */}
          {/* <Link to="/about">About</Link> */}
          {/* <Link to="/dashboard">Dashboard</Link> */}
        </div>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
