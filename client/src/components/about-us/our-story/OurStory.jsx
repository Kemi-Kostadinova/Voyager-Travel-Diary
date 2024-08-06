import { CheckBadgeIcon, ChatBubbleOvalLeftEllipsisIcon, StarIcon } from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Authenticity.',
        description:
            'We strive to share real experiences, truthful insights and provide genuine and honest travel advice.',
        icon:  CheckBadgeIcon,
    },
    {
        name: 'Quality.',
        description: 'Our commitment is to maintain high standards in everything we do, delivering high-quality content and user experiences. ',
        icon: StarIcon,
    },
    {
        name: 'Community.',
        description: 'We foster connections among travelers, encouraging them to share their stories and support each other on their journeys.',
        icon: ChatBubbleOvalLeftEllipsisIcon,
    },
]

export default function OurStory() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-[#0CA9E8]">Our Story</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get to know us</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Voyager was born out of a passion for travel and a desire to share unique experiences with others. 
                                Since our launch in 2020, we have helped thousands of travelers explore hidden gems and popular spots alike. 
                                At Voyager, we believe in:
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-[#0CA9E8]" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        alt="Product screenshot"
                        src="https://img.freepik.com/free-photo/back-view-people-looking-map-find-new-destination_23-2148699857.jpg?t=st=1722941543~exp=1722945143~hmac=6d5a3a148daa58bb1d8acb98e4e405c577400ad4555444141d05f669001701b5&w=1380"
                        height={1442}
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[59rem] md:-ml-4 lg:-ml-0"
                    />
                </div>
            </div>
        </div>
    )
}
