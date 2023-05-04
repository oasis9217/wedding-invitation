import Image from 'next/image';
import Link from 'next/link';
import navermapPic from '../public/navermap.png';
import tmapPic from '../public/tmap.png';
import kakaomapPic from '../public/kakaomap.png';
import theKPic from '../public/thek.jpg';
import walkPic from '../public/walk.png';
import busPic from '../public/bus.png';

export default function Map() {
  return (
    <main
      className="
        grid
        grid-cols-1
        h-full
        content-center
        place-items-center
        justify-center
        justify-between
        space-y-5
      "
    >
      <div className="space-y-0.5 text-left">
        <p className="text-2xl font-extrabold">더케이호텔</p>
        <p className="text-lg">서울 서초구 바우뫼로12길 70</p>
        <ul className="list-inside text-sm">
          <li>
            <Image src={walkPic} alt="" /> <b>양재시민의숲역</b> 5번 출구에서 매헌윤봉길의사기념관
            방면 도보 10분
          </li>
          <li>
            <Image src={busPic} alt="" /> <b>양재역</b> 9번 출구 서초문화예술회관 앞 셔틀 버스, 매
            20분
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-10 place-self-center">
        <button>
          <Link href={'https://naver.me/xfakB6vP'}>
            <Image className="rounded-lg" src={navermapPic} alt="네이버지도로 열기" width={40} />
          </Link>
        </button>

        <button>
          <Link href={'https://surl.tmobiapi.com/db294dc8'}>
            <Image className="rounded-lg" src={tmapPic} alt="티맵으로 열기" width={40} />
          </Link>
        </button>

        <button>
          <Link href={'https://place.map.kakao.com/7941550'}>
            <Image className="rounded-lg" src={kakaomapPic} alt="카카오맵으로 열기" width={40} />
          </Link>
        </button>
      </div>

      <div className="w-full max-w-[400px] h-56 sm:h-44 lg:h-56 max-h-56">
        <div className="overflow-hidden">
          <Image className="rounded-lg" src={theKPic} alt="The K Hotel" />
        </div>
      </div>
    </main>
  );
}
