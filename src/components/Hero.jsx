import { Link } from "react-router-dom";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <div className="hero bg-base-300 bg-blend-overlay">
    <div className="hero-content text-center">
      <div className="max-w-xl">
        <img src="https://i.postimg.cc/yNZRQy01/2.png" className="image"/>
        <h1 className="text-4xl font-bold max-md:text-4xl text-accent-content">Імпортери та дистриб'ютори зоотоварів в Україні</h1>
        <p className="py-6 text-2xl max-md:text-lg text-accent-content">
          Ми пропонуємо високоякісні корма, консерви, іграшки та інструменти для грумінгу, ветеринарні препарати, зокрема вітаміни та протипаразитарні засоби і наповнювачі.
        </p>
        <Link to="/shop" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white">До каталогу</Link>
      </div>
    </div>
  </div>
  )
}

export default Hero