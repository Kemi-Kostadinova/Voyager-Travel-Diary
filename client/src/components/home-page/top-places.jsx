import { Link } from "react-router-dom"

const callouts = [
    {
        name: 'Austria',
        description: 'Hallstatt',
        imageSrc: 'https://ychef.files.bbci.co.uk/1280x720/p08fq4z7.jpg',
        imageAlt: 'Hallstatt, Austria',
        href: '#',
    },
    {
        name: 'Switzerland',
        description: 'Gimmelwald',
        imageSrc: 'https://cdn.pixabay.com/photo/2022/01/26/18/41/switzerland-6969601_1280.jpg',
        imageAlt: ' Gimmelwald, Switzerland',
        href: '#',
    },
    {
        name: 'Morocco',
        description: 'Chefchaouen',
        imageSrc: 'https://www.carwiz.rent/data/public/2022-12/cw_chefchaouen4_1639c4a1400fac.jpg',
        imageAlt: 'Chefchaouen, Morocco',
        href: '#',
    },
]

export default function TopPlaces() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray">Top destinations this week</h2>

                    <div className="mt-6 mb-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img
                                        alt={callout.imageAlt}
                                        src={callout.imageSrc}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <a href={callout.href}>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="relative">
                        <Link to="/discover" className="absolute right-0 text-sm font-semibold leading-6 text-gray-900 hover:text-[#0CA9E8]">
                            View all <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
