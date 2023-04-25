import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import lisaPic from '../../public/cropped-1600-900-466821.png';
export default function Gallery() {
  return (
    <main
      className="
        flex
        flex-col
        h-full
        place-items-center
        justify-center
        space-y-5
      "
    >
      <div></div>
      <div className="w-full max-w-[500px] h-52 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={5000}>
          <iframe src="https://drive.google.com/file/d/1krKIUCQQWr-mL_9y0WZj-QYVhxsQjBR-/preview" width="640" height="480" allow="autoplay"></iframe>
          <Image src={lisaPic} alt="" />
        </Carousel>
      </div>
    </main>
  );
}
