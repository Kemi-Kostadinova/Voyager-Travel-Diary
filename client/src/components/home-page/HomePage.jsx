import Hero from "./hero/Hero"
import Newsletter from "./newsletter/Newsletter"
import Testimonial from "./testimonial/Testimonial"
import TopPlaces from "./top-places/TopPlaces"

export default function HomePage() {
    return (
        <div className="bg-white">
            <Hero />

            < TopPlaces />
            
            <Testimonial />
            
            <Newsletter />
        </div>

    )
}
