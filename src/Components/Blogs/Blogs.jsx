// import React, { useState } from 'react';
// import { ArrowRight, Clock, Calendar } from 'lucide-react';

// const blogs = [
//   {
//     title: "Understanding React Hooks",
//     date: "March 15, 2024",
//     description: "A comprehensive guide to React Hooks and their practical applications in modern web development.",
//     readTime: "5 min read",
//     image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
//     link: "https://www.youtube.com/watch?v=Z68TzLEFrHA&list=RDKYWcKBSh6yc&index=2",
//     category: "React"
//   },
//   {
//     title: "Mastering Tailwind CSS",
//     date: "March 10, 2024",
//     description: "Deep dive into Tailwind CSS utility-first approach and best practices for responsive design.",
//     readTime: "4 min read",
//     image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800",
//     link: "#",
//     category: "CSS"
//   },
//   {
//     title: "Web Performance Optimization",
//     date: "March 5, 2024",
//     description: "Essential techniques to improve your website's loading speed and overall performance.",
//     readTime: "6 min read",
//     image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
//     link: "#",
//     category: "Performance"
//   }
// ];

// const Blogs = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);


//   // const handleReadMore = (e, link) => {
//   //   e.preventDefault();
//   //   e.stopPropagation();
//   //   console.log("Button clicked", link);

//   //   if (link && link !== '#') {
//   //     window.open(link, "_blank", "noopener noreferrer");
//   //   }
//   // }

//   // const handleReadMore = (link) => {
//   //   alert("Button clicked: " + link);  // Using alert to make sure it's firing
//   //   window.open(link, "_blank");
//   // };

//   const handleReadMore = (e, link) => {
//     e.preventDefault();
//     e.stopPropagation();

//     if (link && link !== "#") {
//       window.open(link, "_blank", "noopener,noreferrer");
//     } else {
//       alert("No valid link available!");
//     }
//   };


//   return (
//     <div className="w-full py-20 bg-[#162B44] relative overflow-hidden " >
//       {/* Background Pattern
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0 bg-[#FF6500]" style={{
//           backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
//         }} />
//       </div> */}

//       <div className="max-w-6xl mx-auto px-4 relative">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
//             Latest <span className="text-[#FF6500]">Blogs</span>
//             <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF6500] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Explore my latest thoughts, tutorials, and insights about web development and design
//           </p>
//         </div>

//         {/* Blog Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogs.map((blog, index) => (
//             <div
//               key={index}
//               className="group relative"
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <div className="relative bg-[#1E3E62] rounded-lg overflow-hidden shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
//                 {/* Image Container */}
//                 <div className="relative h-48 overflow-hidden" >
//                   <img
//                     src={blog.image}
//                     alt={blog.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#1E3E62] to-transparent opacity-60" />
//                   <span className="absolute top-4 right-4 bg-[#FF6500] text-white px-3 py-1 rounded-full text-sm font-medium">
//                     {blog.category}
//                   </span>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 relative">
//                   {/* Meta Info */}
//                   <div className="flex items-center gap-4 mb-3 text-sm text-gray-300">
//                     <div className="flex items-center gap-1">
//                       <Calendar size={14} />
//                       <span>{blog.date}</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Clock size={14} />
//                       <span>{blog.readTime}</span>
//                     </div>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-[#FF6500]">
//                     {blog.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-gray-300 mb-4 line-clamp-2">
//                     {blog.description}
//                   </p>

//                   {/* Read More Link */}
//                   <div
//                    onClick={(e) => handleReadMore(e, blog.link)}>
//                     <button
//                       type="button"
//                       className="inline-flex items-center text-[#FF6500] hover:text-white transition-colors gap-2 cursor-pointer"
//                     >
//                       Read More
//                       <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-2" />
//                     </button>
//                   </div>

//                 </div>

//                 {/* Hover Border Effect */}
//                 <div className={`absolute inset-0 border-2 border-[#FF6500] rounded-lg transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
//                   }`} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blogs;




// *********************** 2nd Attempt ******************



// import React, { useState } from 'react';
// import { ArrowRight, Clock, Calendar } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';

// // Export blogs array so it can be imported in DetailedBlog.jsx
// export const blogs = [
//   {
//     title: "Understanding React Hooks",
//     date: "March 15, 2024",
//     description: "A comprehensive guide to React Hooks and their practical applications in modern web development.",
//     readTime: "5 min read",
//     image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
//     category: "React"
//   },
//   {
//     title: "Mastering Tailwind CSS",
//     date: "March 10, 2024",
//     description: "Deep dive into Tailwind CSS utility-first approach and best practices for responsive design.",
//     readTime: "4 min read",
//     image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800",
//     category: "CSS"
//   },
//   {
//     title: "Web Performance Optimization",
//     date: "March 5, 2024",
//     description: "Essential techniques to improve your website's loading speed and overall performance.",
//     readTime: "6 min read",
//     image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
//     category: "Performance"
//   }
// ];

// const Blogs = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const navigate = useNavigate();

//   const handleReadMore = (e, index) => {
//     e.preventDefault();
//     e.stopPropagation();
//     navigate(`/blog/${index}`);
//   };

//   return (
//     <div className="w-full py-20 bg-[#162B44] relative overflow-hidden">
//       <div className="max-w-6xl mx-auto px-4 relative" >
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
//             Latest <span className="text-[#FF6500]">Blogs</span>
//             <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF6500] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Explore my latest thoughts, tutorials, and insights about web development and design
//           </p>
//         </div>

//         {/* Blog Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
//           {blogs.map((blog, index) => (
//             <div
//               key={index}
//               className="group relative"
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <div className="relative bg-[#1E3E62] rounded-lg overflow-hidden shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl" >
//                 {/* Image Container */}
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={blog.image}
//                     alt={blog.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#1E3E62] to-transparent opacity-60" />
//                   <span className="absolute top-4 right-4 bg-[#FF6500] text-white px-3 py-1 rounded-full text-sm font-medium">
//                     {blog.category}
//                   </span>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 relative">
//                   {/* Meta Info */}
//                   <div className="flex items-center gap-4 mb-3 text-sm text-gray-300">
//                     <div className="flex items-center gap-1">
//                       <Calendar size={14} />
//                       <span>{blog.date}</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Clock size={14} />
//                       <span>{blog.readTime}</span>
//                     </div>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-[#FF6500]">
//                     {blog.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-gray-300 mb-4 line-clamp-2"  >
//                     {blog.description}
//                   </p>

//                   {/* Read More Link */}
//                   <button
//                     className="z-10 inline-flex items-center text-[#FF6500] hover:text-white transition-colors gap-2 cursor-pointer"
//                     onClick={(e) => handleReadMore(e, index)}
//                   >
//                     Read More
//                     <ArrowRight size={16} />
//                   </button>
//                 </div>

//                 {/* Hover Border Effect */}
//                 <div />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blogs;


// className={`absolute inset-0 border-2 border-[#FF6500] rounded-lg transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
// }`}



// ***************** 3rd attempt ***************************


import React, { useState } from 'react';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { blogs } from './BlogsData';

const Blogs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const handleReadMore = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/blog/${id}`);
  };

  const openUrl = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      alert("No valid link available!");
    }
  };


  return (
    <div className="w-full py-20 bg-[#162B44] relative overflow-hidden text-center">
      <div className="max-w-6xl mx-auto px-4 relative" >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
            Latest <span className="text-[#FF6500]">Blogs</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF6500] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest thoughts, tutorials, and insights about web development and design
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(blog.id)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative bg-[#1E3E62] rounded-lg overflow-hidden shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl" >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E3E62] to-transparent opacity-60" />
                  <span className="absolute top-4 right-4 bg-[#FF6500] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {blog.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 relative flex flex-col justify-start">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl text-left font-bold text-white mb-3 transition-colors duration-300 group-hover:text-[#FF6500]">
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 line-clamp-2 text-left"  >
                    {blog.description}
                  </p>

                  {/* Read More Link */}
                  <button
                    className="z-10 inline-flex   text-[#FF6500] hover:text-white transition-colors gap-2 cursor-pointer justify-start"
                    onClick={(e) => handleReadMore(e, blog.id)}
                  >
                    Read More
                    <ArrowRight size={16} />
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className=" mt-10 px-6 py-3 rounded  items-center  bg-[#FF6500] text-white hover:bg-[#1E3E62] transition-colors duration-300"
        onClick={() => openUrl("https://example.com")}>
        More Blogs
      </button>
    </div>
  );
};

export default Blogs;