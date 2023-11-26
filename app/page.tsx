import ShowsTab from '@/components/ShowsTab';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-[85vh]">
      <div className="h-[98%]">
        <Image
          src="https://www.midtown.com.np/GetImage/923"
          alt="Picture of the author"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'inherit',
          }}
          width={500}
          height={300}
        />
      </div>
      <ShowsTab />
    </main>
  );
}
