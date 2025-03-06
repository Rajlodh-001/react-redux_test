import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <main className="container-home">

        
      <div className="nav-links">
        
        <Link to="/redux-react-router/counter">Counter</Link>
        <Link to="/redux-react-router/todolist">Todo List</Link>

        
      </div>
    </main>
  );
};

export default Home;
