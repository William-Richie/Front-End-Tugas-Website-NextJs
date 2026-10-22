import Image from "next/image";

export default function HomePage() {
  return (
    <section className="hero">
      <Image src="/images/logo.png" alt="Logo Kopi Nusantara" width={140} height={140} priority />
      <h1>Welcome to Kopi Nusantara</h1>
      <p>
        Kami hadir dengan penuh semangat untuk menyajikan cerita dan cita rasa khas dari 
        berbagai pelosok Nusantara melalui secangkir kopi. Mari nikmati dunia kopi racikan 
        kami, yang diseduh khusus untuk menemani hari Anda.
      </p>
    </section>
  );
}