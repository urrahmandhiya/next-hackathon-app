import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

export const FEATURES = [
    {
        title: 'Farming',
        backgroundImage: "/attraction1.png",
        description: 'Visit a local organic garden and learn about sustainable farming techniques.',
        activities: ['Farm tours', 'Workshops', 'Planting lessons'],
        info: 'Located in the heart of the countryside, this farm offers an immersive experience for visitors.',
    },
    {
        title: 'Waterfall',
        backgroundImage: '/attraction2.png',
        description: "Enjoy the stunning Leuwimalang Waterfall, perfect for relaxing and taking pictures.",
        activities: ['Photography', 'Swimming', 'Guided hikes'],
        info: 'Open year-round, the waterfall is accessible via a short hike through scenic woodlands.',
    },
    {
        title: 'Trekking',
        backgroundImage: '/attraction3.png',
        description: 'Explore challenging trekking trails amidst forests and rice fields. Experience the beauty of nature.',
        activities: ['Hiking', 'Bird watching', 'Wildlife exploration'],
        info: 'Bring appropriate gear for the challenging trails. Guided treks are available upon request.',
    },
    {
        title: 'Hiking',
        backgroundImage: '/attraction4.png',
        description: 'Get an exciting hiking experience. Enjoy the challenges of varied terrain and spectacular views.',
        activities: ['Hiking tours', 'Mountain climbing', 'Scenic photography'],
        info: 'The perfect destination for adventurers looking for a mix of physical challenge and natural beauty.',
    },
];

export async function generateStaticParams() {
    return FEATURES.map((feature) => ({
        slug: feature.title.toLowerCase().replace(/\s+/g, '-'),
    }));
}

type AttractionPageProps = {
    params: {
        slug: string;
    };
};

const AttractionDetailPage = ({ params }: AttractionPageProps) => {
    // Find the specific attraction based on the slug from the params
    const attraction = FEATURES.find(
        (feature) => feature.title.toLowerCase().replace(/\s+/g, '-') === params.slug
    );

    if (!attraction) {
        return <div className="text-center text-red-500">Attraction not found</div>;
    }

    return (
        <section className="flex flex-col items-center bg-white py-12 mb-24">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative h-64 md:h-96 w-full">
                    <Image
                        src={attraction.backgroundImage}
                        alt={attraction.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                    />
                </div>

                <div className="p-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">{attraction.title}</h2>
                    <p className="text-gray-700 text-lg">{attraction.description}</p>
                    {attraction.activities && (
                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Activities:</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                {attraction.activities.map((activity, index) => (
                                    <li key={index} className="mt-2">{activity}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {attraction.info && (
                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">More Information:</h3>
                            <p className="text-gray-700">{attraction.info}</p>
                        </div>
                    )}
                </div>
                <Link
                    href={'/attraction/book'}
                    className="p-6 flex justify-center items-center"
                >
                    <Button
                        type="button"
                        title="Booking"
                        variant="btn_judge_gray"
                    />
                </Link>
            </div>
        </section>
    );
};

export default AttractionDetailPage;
