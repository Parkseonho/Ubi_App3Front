import "../index.css";
import HomePage from "../components/HomePage";
import Footer from "../components/Footer";
import HomeHeader from "../components/HomeHeader";

function Home() {
  return (
    <div className="max-w-4xl mx-auto my-4">
      <HomeHeader />
      <div className="max-w-4xl mx-auto my-4">
        <HomePage />
      </div>
      <Footer/>
    </div>
  );
}
export default Home;
