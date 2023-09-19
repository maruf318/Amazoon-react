import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between p-4 shadow-lg bg-slate-200 items-center content-center">
        <h2 className="text-4xl font-bold">Amazoon</h2>
        <div className="flex gap-5 text-2xl font-bold  ">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
