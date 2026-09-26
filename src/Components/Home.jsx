import Hero from "./Home/Hero";
import Principles from "./Home/Principles";
import Featured from "./Home/Featured";
import Pick from "./Home/Pick";
import Slider from "./Home/Slider";
import "../Home.css";

export default function Home() {
    return (
        <div className="home">
            <Slider />
            <Hero />
            <Principles />
            <Featured />
            <Pick />
        </div>
    )
}