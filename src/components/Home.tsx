import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <main className="container-home">

        
      <div className="nav-links">
        
        <Link to="/counter">Counter</Link>
        <Link to="/todolist">Todo List</Link>

        
      </div>
    </main>
  );
};

export default Home;
