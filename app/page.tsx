import prisma from '@/lib/prisma';
import CardPost from './components/card/CardPost';
import Link from 'next/link';

async function getPosts() {
  const posts = await prisma.post_db.findMany({});
  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className='container m-auto my-5'>
      <Link href={"/post"} >
        <button className='p-3 mb-3 text-white bg-orange-500 rounded-lg font-semibold border hover:text-orange-500 hover:bg-white hover:border-orange-500' >Add New Post</button>
      </Link>
      <div className='grid grid-cols-4 gap-4'>
        {posts.map((post, index) => (
          <CardPost
            key={index}
            id={post.id}
            title={post.title}
            content={post.content}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
}
