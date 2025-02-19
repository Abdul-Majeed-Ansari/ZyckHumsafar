import { Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  link: string;
}

const BlogCard = ({
    image,
  category,
  title,
  excerpt,
  readTime,
  date,
  link
}:BlogPost) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Clock className="w-4 h-4 mr-1" />
          <span>{readTime}</span>
          <span className="mx-2">•</span>
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2 hover:text-pink-500 transition-colors">
          <a href={link}>{title}</a>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <a 
          href={link}
          className="inline-flex items-center text-pink-500 font-semibold hover:text-pink-600 transition-colors"
        >
          Read More <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  )
}

export default BlogCard
