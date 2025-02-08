// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Sample images (replace with your own image URLs)
// const images = [
//   "https://www.donboscohsdiphu.in/Images/innerbg/Uniform-1.jpg",
//   "https://www.donboscohsdiphu.in/Images/innerbg/Uniform-2.jpg",
//   "https://www.donboscohsdiphu.in/Images/innerbg/Uniform-3.jpg",
//     "https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc",
//     "https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o",
//     "https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g",
//     "https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4",
//     "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
// ];

// const ImageGallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <div className="container mx-auto p-4">
//               {/* Header */}
//       <header className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-purple-800 mb-2">Image Gallery</h1>
//         <p className="text-lg text-gray-600">
//           Explore our collection of stunning images.
//         </p>
//       </header>
//       {/* Image Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {images.map((image, index) => (
//           <motion.div
//             key={index}
//             className="relative overflow-hidden rounded-lg cursor-pointer"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             onClick={() => setSelectedImage(image)}
//           >
//             <motion.img
//               src={image}
//               alt={`Gallery Image ${index + 1}`}
//               className="w-full h-full object-cover rounded-lg"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             />
//           </motion.div>
//         ))}
//       </div>

//       {/* Lightbox Modal */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedImage(null)}
//           >
//             <motion.div
//               className="relative max-w-full max-h-full"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <img
//                 src={selectedImage}
//                 alt="Selected Image"
//                 className="max-w-full max-h-[90vh] rounded-lg"
//               />
//               <button
//                 className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors"
//                 onClick={() => setSelectedImage(null)}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ImageGallery;


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample images (replace with your own image URLs)
const images = [
  { src: "https://www.donboscohsdiphu.in/Images/innerbg/Uniform-1.jpg", caption: "Uniform Style 1" },
  { src: "https://www.donboscohsdiphu.in/Images/innerbg/Uniform-2.jpg", caption: "Uniform Style 2" },
  { src: "https://www.donboscohsdiphu.in/Images/innerbg/Uniform-3.jpg", caption: "Uniform Style 3" },
  { src: "https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc", caption: "Nature Scene 1" },
  { src: "https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o", caption: "Nature Scene 2" },
  { src: "https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g", caption: "Nature Scene 3" },
  { src: "https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4", caption: "Nature Scene 4" },
  { src: "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE", caption: "Nature Scene 5" },
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const navigate = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-800 mb-2">Image Gallery</h1>
        <p className="text-lg text-gray-600">
          Explore our collection of stunning images.
        </p>
      </header>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => openImage(image, index)}
          >
            <motion.img
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-full max-h-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              <img
                src={selectedImage.src}
                alt="Selected Image"
                className="max-w-full max-h-[90vh] rounded-lg"
              />
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {/* Navigation Buttons */}
              <button
                className="absolute top-1/2 left-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors transform -translate-y-1/2"
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                className="absolute top-1/2 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors transform -translate-y-1/2"
                onClick={(e) => { e.stopPropagation(); navigate(1); }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              {/* Caption */}
              <p className="absolute bottom-4 left-4 text-white text-lg font-bold">
                {selectedImage.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;