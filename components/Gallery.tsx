import Image from 'next/image';
import { Carousel } from 'flowbite-react';


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
      <div className="w-80 max-w-[500px] h-80 max-h-[500px] sm:h-80 xl:h-96">
        <Carousel slideInterval={5000}>
          {Array.from({length: 8}, (v, i) => {
            return <Image key={i} src={`/image-${i+1}.jpg`} width={500} height={500} alt="" priority={true}/>
          }) }
        </Carousel>
      </div>
      <div> 보정을 아직 못했다는 슬픈 소문이...🥲 </div>
    </main>
  );
}
