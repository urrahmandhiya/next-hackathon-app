import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';
import { ATTRACTION } from '@/data/attractionData';

export async function generateStaticParams() {
    return ATTRACTION.map((feature) => ({
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
    const attraction = ATTRACTION.find(
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
