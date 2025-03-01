import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { blogs } from './BlogsData';

const DetailedBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the blog with the matching id
    if (blogs && blogs.length) {
      const foundBlog = blogs.find(b => b.id.toString() === id);
      setBlog(foundBlog);
      setLoading(false);
    }
  }, [id]);

  // Function to render different content types
  const renderContent = (contentItem, index) => {
    switch (contentItem.type) {
      case 'paragraph':
        return (
          <p key={index} className="text-gray-300 mb-6">
            {contentItem.text}
          </p>
        );
      case 'heading':
        return (
          <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
            {contentItem.text}
          </h2>
        );
      case 'list':
        return (
          <ul key={index} className="text-gray-300 list-disc pl-6 mb-6">
            {contentItem.items.map((item, itemIndex) => (
              <li key={itemIndex} className="mb-2">{item}</li>
            ))}
          </ul>
        );
      case 'code':
        return (
          <div key={index} className="mb-6">
            <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
              <pre className="text-gray-200 font-mono text-sm">
                {contentItem.text}
              </pre>
            </div>
            {contentItem.language && (
              <div className="text-xs text-gray-400 mt-2 text-right">
                {contentItem.language}
              </div>
            )}
          </div>
        );
      case 'conclusion':
        return (
          <div key={index} className="bg-[#1E3E62] p-6 rounded-lg mt-10 mb-6">
            <h3 className="text-xl font-bold text-white mb-3">Conclusion</h3>
            <p className="text-gray-300">{contentItem.text}</p>
          </div>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#162B44]">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#162B44] text-white p-6">
        <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
        <p className="mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="flex items-center text-[#FF6500] hover:text-white transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#162B44] py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-[#FF6500] hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to home  
        </Link>

        {/* Blog header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-6">{blog.title}</h1>
          
          <div className="flex items-center gap-6 text-gray-300 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{blog.readTime}</span>
            </div>
            <span className="bg-[#FF6500] text-white px-3 py-1 rounded-full text-sm font-medium">
              {blog.category}
            </span>
          </div>
        </div>

        {/* Featured image */}
        <div className="rounded-lg overflow-hidden mb-10">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Blog content */}
        <div className="prose prose-lg prose-invert max-w-none">
          {blog.content.map((contentItem, index) => renderContent(contentItem, index))}
        </div>
        
        {/* Author section */}
        <div className="mt-16 border-t border-gray-700 pt-8">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-[#FF6500] flex items-center justify-center text-white font-bold text-lg mr-4">
              RR
            </div>
            <div>
              <h3 className="text-white font-bold">Ravi Ranjan</h3>
              <p className="text-gray-400 text-sm">Web Developer & Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedBlog;