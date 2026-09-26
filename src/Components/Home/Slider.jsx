import { useState, useEffect } from "react"

export default function Slider() {
    let sliderDetails = [
        {
            eyebrow: "NEW RELEASE // NIGHT DRIVE",
            header: "The city is yours after dark.",
            desc: "Neon streets. No final destination. Meet the latest drop in the vault.",
        },
        {
            eyebrow: "WEEKEND EVENT // COMMUNITY PICKS",
            header: "Your next world is waiting.",
            desc: "Discover hand-picked adventures for your next night in.",
        },
        {
            eyebrow: "VAULT UPDATE // WILDWOOD",
            header: "Find your way into the wild.",
            desc: "A new open-world adventure is ready when you are.",
        }
    ]

    const [slider, setSlider] = useState(0)
    
    useEffect(() => {
        let interval = setInterval(() => {
            setSlider(previousSlider => {
                if (previousSlider === 2) return 0
                else return previousSlider + 1
            })
        }, 4000)

        return () => {clearInterval(interval)}
    }, [])

    return (
        <section className="slider">
                <div className="slider-eyebrow">{sliderDetails[slider].eyebrow}</div>
                <div className="slider-header">{sliderDetails[slider].header}</div>
                <div className="slider-desc">{sliderDetails[slider].desc}</div>
                <div className="slider-dots">
                    {sliderDetails.map((slide, index) => {
                        return (<button
                            key={index}
                            className={`slider-dot ${slider === index ? "active" : ""}`}
                            onClick={() => setSlider(index)}
                        ></button>)
                    })}
                </div>
            </section>
    )
}