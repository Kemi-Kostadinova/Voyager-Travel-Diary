import Hero from "./hero/Hero"
import Newsletter from "./newsletter/Newsletter"

export default function HomePage() {
    return (
        <div className="bg-white">
            <Hero />

            <Newsletter />
        </div>

    )
}