import { BLOGS } from '../../../data/blogData';
import Image from 'next/image';

export async function generateStaticParams() {
    return BLOGS.map((blog) => ({
        slug: blog.slug,
    }));
}

type BlogPostProps = {
    params: {
        slug: string;
    };
};

const BlogPostPage = ({ params }: BlogPostProps) => {
    const blog = BLOGS.find((b) => b.slug === params.slug);

    if (!blog) {
        return <div>Blog post not found</div>;
    }

    return (
        <section className="flex items-center justify-center flex-col">
            <div className="flex flex-col mx-auto max-w-[1440px] relative w-full p-6">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    width={1440}
                    height={580}
                    className="w-full object-cover object-center 2xl:rounded-5xl shadow-lg"
                />
                <div className="bg-white flex flex-col justify-start p-6">
                    <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
                    <p className="text-sm mb-6">
                        By <span className="font-semibold">{blog.author}</span> - {blog.date}
                    </p>
                    <p className="text-lg">{blog.content}</p>
                </div>
            </div>
        </section>
    );
};

export default BlogPostPage;
