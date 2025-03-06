// import React from 'react'

// const SizeChart = () => {
//     const sizeData = [
//         { age: '0-6 mon', height: '60-66 cm', chest: '42-44 cm', waist: '41-43 cm', hips: '42-44 cm' },
//         { age: '6-12 mon', height: '67-74 cm', chest: '45-47 cm', waist: '44-46 cm', hips: '45-47 cm' },
//         { age: '1-2 yr', height: '75-86 cm', chest: '48-50 cm', waist: '47-49 cm', hips: '48-50 cm' },
//         { age: '3-4 yr', height: '87-98 cm', chest: '51-54 cm', waist: '50-52 cm', hips: '53-56 cm' },
//         { age: '5-6 yr', height: '99-110 cm', chest: '55-58 cm', waist: '53-55 cm', hips: '57-60 cm' },
//         { age: '7-8 yr', height: '111-122 cm', chest: '59-62 cm', waist: '56-58 cm', hips: '61-64 cm' },
//         { age: '9-10 yr', height: '123-134 cm', chest: '63-66 cm', waist: '59-61 cm', hips: '65-68 cm' },
//       ];
//   return (
//     <div>
//         <div className='lg:mx-20 mx-1 md:mx-10  my-10 mb-10'>
//       <h1 className='lg:text-4xl text-3xl mx-5 md:mx-0 font-bold mb-6'>Kids Clo Size Chart</h1>
//       <table className='w-full text-center border-collapse border border-gray-300'>
//         <thead>
//           <tr className='bg-red-900 text-white'>
//             <th className='border border-gray-300 p-2'>Age Group</th>
//             <th className='border border-gray-300 p-2'>Height</th>
//             <th className='border border-gray-300 p-2'>Chest</th>
//             <th className='border border-gray-300 p-2'>Waist</th>
//             <th className='border border-gray-300 p-2'>Hips</th>
//           </tr>
//         </thead>
//         <tbody>
//           {sizeData.map((size, index) => (
//             <tr key={index} className='odd:bg-gray-100 even:bg-white'>
//               <td className='border border-gray-300 p-2'>{size.age}</td>
//               <td className='border border-gray-300 p-2'>{size.height}</td>
//               <td className='border border-gray-300 p-2'>{size.chest}</td>
//               <td className='border border-gray-300 p-2'>{size.waist}</td>
//               <td className='border border-gray-300 p-2'>{size.hips}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </div>
//   )
// }

// export default SizeChart
import React from 'react';

const SizeChart = () => {
  const sizeData = [
    { age: '0-6 mon', height: '60-66 cm', chest: '42-44 cm', waist: '41-43 cm', hips: '42-44 cm' },
    { age: '6-12 mon', height: '67-74 cm', chest: '45-47 cm', waist: '44-46 cm', hips: '45-47 cm' },
    { age: '1-2 yr', height: '75-86 cm', chest: '48-50 cm', waist: '47-49 cm', hips: '48-50 cm' },
    { age: '3-4 yr', height: '87-98 cm', chest: '51-54 cm', waist: '50-52 cm', hips: '53-56 cm' },
    { age: '5-6 yr', height: '99-110 cm', chest: '55-58 cm', waist: '53-55 cm', hips: '57-60 cm' },
    { age: '7-8 yr', height: '111-122 cm', chest: '59-62 cm', waist: '56-58 cm', hips: '61-64 cm' },
    { age: '9-10 yr', height: '123-134 cm', chest: '63-66 cm', waist: '59-61 cm', hips: '65-68 cm' },
  ];

  return (
    <div className='p-4 mx-10 lg:mx-20 sm:p-8'>
      <h1 className='text-3xl sm:text-4xl font-bold mb-6 text-center sm:text-left'>Kids Clothes Size Chart</h1>
      <div className='overflow-x-auto'>
        <table className='w-full text-center border-collapse border border-gray-300 min-w-max'>
          <thead>
            <tr className='bg-red-900 text-white'>
              <th className='border border-gray-300 p-2'>Age Group</th>
              <th className='border border-gray-300 p-2'>Height</th>
              <th className='border border-gray-300 p-2'>Chest</th>
              <th className='border border-gray-300 p-2'>Waist</th>
              <th className='border border-gray-300 p-2'>Hips</th>
            </tr>
          </thead>
          <tbody>
            {sizeData.map((size, index) => (
              <tr key={index} className='odd:bg-gray-100 even:bg-white'>
                <td className='border border-gray-300 p-2'>{size.age}</td>
                <td className='border border-gray-300 p-2'>{size.height}</td>
                <td className='border border-gray-300 p-2'>{size.chest}</td>
                <td className='border border-gray-300 p-2'>{size.waist}</td>
                <td className='border border-gray-300 p-2'>{size.hips}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SizeChart;
