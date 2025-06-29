// // src/components/Section4.jsx
// import React from 'react';
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// const Section4 = () => {
//   return (
//     <div className="bg-gray-50 py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//           {[...Array(4)].map((_, index) => (
//             <Card key={index} className="bg-white border-none shadow-none">
//               <CardHeader className="p-0">
//                 <CardTitle className="text-xl font-bold mb-4 text-gray-900">
//                   Lorem ipsum dolor sit amet consectetur.
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <p className="text-gray-600 text-base leading-relaxed mb-4">
//                   Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. 
//                   Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus 
//                   nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis 
//                   bibendum.
//                 </p>
//               </CardContent>
//               <CardFooter className="p-0">
//                 <Button variant="link" className="text-blue-600 font-medium px-0 hover:no-underline">
//                   Learn More
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
        
//         {/* Bottom Section */}
//         <div className="bg-white p-8 rounded-lg">
//           <div className="max-w-3xl">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Lorem ipsum dolor sit amet <br />
//               <span className="uppercase">LOREM IPSUM dolor sit</span>
//             </h2>
//             <p className="text-gray-600 text-lg leading-relaxed">
//               Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. 
//               Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at 
//               felis aliquet. Hendrerit tellus at purus lectus.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section4;