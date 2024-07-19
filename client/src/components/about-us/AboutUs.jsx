import OurStory from "./our-story/OurStory";
import Stats from "./stats/Stats";

export default function AboutUs() {
    return (
        <>
            <div className="relative isolate px-6 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-30 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[50deg] bg-gradient-to-tr from-[#ff81ef] to-[#03A9F4] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            About Us
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Welcome to Voyager, your ultimate travel companion!
                            Our mission is to inspire and guide travel enthusiasts to discover new destinations around the world.
                        </p>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff81ef] to-[#03A9F4] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                        }}
                    />
                </div>
            </div>

            <Stats />

            <OurStory />

            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl py-20 ">
                    We started with one single goal <br />Discover together
                </h1>
            </div>



            <div className="w-screen flex justify-center items-center  ">
                <div className="text-white rounded-lg w-full mx-5 md:w-[80rem] ">
                    <div className="grid grid-cols-6 col-span-2 gap-2  ">
                        <div className=" overflow-hidden rounded-xl col-span-3 max-h-[20rem]">
                            <img
                                className="h-full w-full object-cover "
                                src="https://img.freepik.com/free-photo/happy-hipster-company-friends-traveling-around-world_285396-3652.jpg?t=st=1721382794~exp=1721386394~hmac=1a15a50d8df0207f15db6d9fbc43f9a9d7864ec2e5f00a229a30032c8ec7ab72&w=996"
                                alt=""
                            />
                        </div>
                        <div className=" overflow-hidden rounded-xl col-span-3 max-h-[20rem]">
                            <img
                                className="h-full w-full object-cover  "
                                src="https://images.pexels.com/photos/8645575/pexels-photo-8645575.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt=""
                            />
                        </div>
                        <div className=" overflow-hidden rounded-xl col-span-2 max-h-[40rem]">
                            <img
                                className="h-full w-full object-cover "
                                src="https://images.pexels.com/photos/4577671/pexels-photo-4577671.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt=""
                            />
                        </div>
                        <div className=" overflow-hidden rounded-xl col-span-2 max-h-[40rem]">
                            <img
                                className="h-full w-full object-cover "
                                src="https://images.pexels.com/photos/5686648/pexels-photo-5686648.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt=""
                            />
                        </div>
                        <div className="relative overflow-hidden rounded-xl col-span-2 max-h-[40rem]">
                            <img
                                className="h-full w-full object-cover "
                                src="https://images.pexels.com/photos/6324294/pexels-photo-6324294.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}