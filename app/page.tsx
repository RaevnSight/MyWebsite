import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import Image from 'next/image';

// export default function Home() {
//   return (
//     <section className="h-full">
//       <div className="container mx-auto h-full">
//         <div
//           className="flex flex-col xl:flex-row items-center justify-between
//         xl:pt-8 xl:pb-24">
//           <div>
//             <Hero />
//           </div>
//           <div>Photo</div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex
    justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
