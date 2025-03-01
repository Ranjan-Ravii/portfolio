// import { useEffect, useState } from 'react';
// import { motion } from "framer-motion";


// const Home = () => {

//   const [text, setText] = useState('');
//   const [sequence, setSequence] = useState(0);


//   const sequences = ['RAVI', 'RANJAN', 'RAVI RANJAN'];


//   // useEffect(() => {
//   //   const animateText = async () => {
//   //     // Clear the text
//   //     setText('');

//   //     // Type out the current sequence
//   //     const currentText = sequences[sequence];
//   //     for (let i = 0; i < currentText.length; i++) {
//   //       await new Promise(resolve => setTimeout(resolve, 200));
//   //       setText(prev => prev + currentText[i]);
//   //     }

//   //     // Wait before starting next sequence
//   //     await new Promise(resolve => setTimeout(resolve, 1500));

//   //     // Move to next sequence
//   //     setSequence((prev) => (prev + 1) % sequences.length);
//   //   };

//   //   animateText();
//   // }, [sequence]);

//   return (
// <div className="bg-[#2c4b75] top-0 left-0 right-0 min-h-screen flex items-center justify-center z-40 bg-[url('/developerImage.png')] bg-[length:auto_80%]  bg-right-bottom bg-no-repeat">
//       <div className="text-center space-y-8">
//         {/* <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
//           <span>I'M </span>
//           <motion.span
//             className="text-orange-500 inline-flex"
//             initial={{ opacity: 1 }}
//             animate={{ opacity: 1 }}
//           >
//             {text.split("").map((char, index) => (
//               <motion.span
//                 key={`${char}-${index}`}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className={char === " " ? "w-4" : ""} // Add width to space characters
//                 transition={{
//                   duration: .5,
//                   ease: "easeOut"
//                 }}
//               >
//                 {char}
//               </motion.span>
//             ))}
//           </motion.span>
//         </h1> */}
//         <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
//           <span>I'M </span>
//           <span className="text-[#FF6500]">RAVI</span>
//           <span> RANJAN</span>
//         </h1> 

//         <div className="inline-flex flex-wrap items-center justify-center gap-3 px-8 py-4 bg-[#1E3E62] rounded-full shadow-lg">
//           <span className="text-gray-300 font-medium">
//             Web Development
//           </span>
//           <span className="text-[#FF6500]">•</span>
//           <span className="text-gray-300 font-medium">
//             Webflow Developer
//           </span>
//           <span className="text-[#FF6500]">•</span>
//           <span className="text-gray-300 font-medium">
//             UI Designer
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

// CSS for font imports - Add this to your globals.css or equivalent
// @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
// Or alternatively, add the link in your HTML head:
// <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet">

const Home = () => {
  const [text, setText] = useState('');
  const [sequence, setSequence] = useState(0);
  const sequences = ['RAVI', 'RANJAN', 'RAVI RANJAN'];

  return (
    <div className="bg-[#254169] min-h-screen relative overflow-hidden">
      {/* Main content container */}
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Left content */}
          <div className="flex items-center justify-center lg:justify-start px-4 lg:px-8 relative z-10 py-8 md:py-0">
            <div className="space-y-4 md:space-y-8">
              <div className="text-center lg:text-left">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-300 tracking-wide block mb-1 md:mb-2">
                  Hello, I'M
                </span>
                <h1 className="font-righteous text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide text-white leading-tight">
                  <span className="text-[#FF6500] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">RAVI</span>
                  <br />
                  <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">RANJAN</span>
                </h1>
              </div>

              <div className="inline-flex flex-wrap items-center gap-2 md:gap-3 px-4 sm:px-6 md:px-8 py-2 md:py-4 bg-[#1E3E62] rounded-full shadow-lg backdrop-blur-sm bg-opacity-90">
                <span className="text-sm sm:text-base md:text-lg text-gray-300 font-medium font-righteous">
                  Web Development
                </span>
                <span className="text-[#FF6500]">•</span>
                <span className="text-sm sm:text-base md:text-lg text-gray-300 font-medium font-righteous">
                  Webflow Developer
                </span>
                <span className="text-[#FF6500]">•</span>
                <span className="text-sm sm:text-base md:text-lg text-gray-300 font-medium font-righteous">
                  UI Designer
                </span>
              </div>
            </div>
          </div>

          {/* Right content - Image (desktop only) */}
          <div className="hidden lg:block relative">
            <div 
              className="absolute inset-0 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: "url('/developerImage.png')",
                backgroundPosition: "center right"
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile image - only shows on smaller screens */}
      <div 
        className="lg:hidden absolute inset-0 bg-contain bg-no-repeat bg-bottom opacity-30 z-0"
        style={{
          backgroundImage: "url('/developerImage.png')",
          backgroundSize: "90% auto", // Reduced size for mobile
          backgroundPosition: "center bottom 10%",
          maxHeight: "100vh"
        }}
      />
    </div>
  );
};

export default Home;