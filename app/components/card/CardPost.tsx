import Image from 'next/image'
import PostImage from '@/app/images/post-images/kawaii.png'
import Link from 'next/link';

interface CardPostProgs {
  id: string;
  title: string;
  content: string;
  image:  string | null;
}

const CardPost = ({id, title, content ,image}: CardPostProgs) => {
  return (
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg ">
      <Link href="#">
        <Image
          className="rounded-t-lg object-fill"
          src={image || PostImage}
          alt="Image Not Found"
          width={500}
          height={100}
        />
      </Link>
      <div className="p-5">
          <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{ title ? title:"Title Not Found" }</h5>
          </a>
        <p className="mb-3 font-normal ">{ content ? content:"Content Not Found" }</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none0">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
          </a>
      </div>
  </div>
  )
}

export default CardPost;