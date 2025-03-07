import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <main className="container-home">

        
      <div className="nav-links">
        
        <Link to="/react-redux_test/counter">Counter</Link>
        <Link to="/react-redux_test/todolist">Todo List</Link>

        
      </div>
    </main>
  );
};

export default Home;
