import Carousel from "@/components/Carousel";
import Marquee from "@/components/Marquee";
import Image from "next/image";

export default function Home() {
  return (
    <main className='flex min-h-screen gap-[4vmin] flex-col items-center justify-between'>
      <Carousel />
      <div className='flex justify-center items-center bg-gradient-to-r from-[#090909] to-[#0C7FFE] w-full'>
        <Marquee texts={["Develop", "Design", "Marketing", "Branding"]} />
      </div>
      <div className='flex items-center flex-col mx-[3vmax] gap-[2vmin]'>
        <h1 className='bg-gradient-to-r from-[#0C7FFE] to-[#000000] text-transparent bg-clip-text font-extrabold text-[3vmax] max-w-[50%] text-center'>
          Transforming Business to ensure long-term viability
        </h1>
        <p className='text-[3vmin] text-center'>
          We believe in the power of innovation and creativity to transform
          ideas into reality. As a leading development and designing company, we
          specialize in crafting tailored solutions that meet the unique needs
          of our clients.
        </p>
        <p className='text-[3vmin] text-center'>
          At <span className='font-bold'>CODE N CREATIVITY</span>, we blend
          innovation with creativity to craft digital solutions that elevate
          businesses to new heights. With a focus on both development and
          design, we specialize in creating captivating digital experiences that
          leave a lasting impression.
        </p>
      </div>
    </main>
  );
}
