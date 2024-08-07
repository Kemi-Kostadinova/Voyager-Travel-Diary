const stats = [
    { id: 1, name: 'User reviews', value: '10,000+' },
    { id: 2, name: 'Travel tips shared', value: '5,000+' },
    { id: 3, name: 'New users annually', value: '46,000' },
]

export default function Stats() {
    return (


        <div className="bg-white pt-0 py-24 sm:pt-0 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-[#0CA9E8] sm:text-5xl">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
