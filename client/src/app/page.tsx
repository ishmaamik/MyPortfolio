import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-start">
      <Image src="/ishuwu.jpg" alt="" height={600} width={600} className=""/>
    </div>
  );
}
