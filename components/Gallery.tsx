import Image from 'next/image';
import { Carousel } from 'flowbite-react';

const images = [
  "1krKIUCQQWr-mL_9y0WZj-QYVhxsQjBR-",
];

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
          {images.map((i) => {
            const actualImageUrl = `https://drive.google.com/uc?id=${i}`;
            return (
              <Image key={i} src={`/api/images?imageUrl=${actualImageUrl}`} width={700} height={300} alt="" priority={true}/>
            );
          })}
        </Carousel>
      </div>
    </main>
  );
}
