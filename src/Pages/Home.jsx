import { Link } from "react-router-dom";
import { FaGitter } from "react-icons/fa";

function Home() {
  return (
    <div>
      <section className="heading">
        <h2>Do you know your Personal Trait?</h2>
        <p>Please begin the test below</p>
      </section>

      <Link to="/test-page" className="btn btn-reverse btn-block">
        <FaGitter /> Begin Test
      </Link>
    </div>
  );
}

export default Home;