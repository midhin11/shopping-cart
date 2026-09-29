import Hero from "./Hero";
import Principles from "./Principles";
import Featured from "./Featured";
import Pick from "./Pick";
import Slider from "./Slider";
import "../../Styles/Home.css";

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