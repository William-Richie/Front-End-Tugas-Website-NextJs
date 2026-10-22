export type Member = {
  slug: string;
  name: string;
  role: string;
  image?: string;
  bio: string;
};

export const team: Member[] = [
  {
    slug: "budi-santoso",
    name: "Budi Santoso",
    role: "Master Roaster",
    image: "/images/budi.jpeg",
    bio: "Budi memegang peran penting dalam mengkurasi dan mengolah biji kopi mentah menjadi biji sangrai berkualitas tinggi. Dengan ketelitian dan insting seninya dalam proses roasting, ia memastikan profil rasa yang dihasilkan selalu konsisten dan menonjolkan karakter autentik dari setiap daerah di Nusantara.",
  },
  {
    slug: "siti-aminah",
    name: "Siti Aminah",
    role: "Brand Storyteller & Menu Developer",
    image: "/images/siti.jpeg",
    bio: "Siti memegang peran penting dalam tim Kopi Nusantara, memadukan kreativitas untuk menghidupkan setiap kisah di balik secangkir kopi. Dari berkolaborasi dengan para petani kopi hingga meracik menu minuman baru, Siti membantu membentuk identitas rasa dan narasi merek Kopi Nusantara agar terhubung langsung dengan hati pelanggan.",
  },
  {
    slug: "muhammad-rizky-pratama",
    name: "Muhammad Rizky Pratama",
    role: "Quality Control",
    image: "/images/muhammad.jpeg",
    bio: "Rizky bertanggung jawab untuk memberikan warna dan kompleksitas rasa pada setiap produk. Ia melakukan evaluasi sensori (uji cita rasa, aroma, dan acidity) secara ketat untuk memastikan tidak ada biji kopi cacat yang lolos, sehingga standar kualitas premium Kopi Nusantara selalu terjaga.",
  },
  {
    slug: "joko-henka",
    name: "Joko Henka",
    role: "Production Manager",
    image: "/images/joko.jpeg",
    bio: "Joko mengawasi seluruh alur operasional di dapur produksi. Mulai dari manajemen stok biji kopi, proses penggilingan, hingga pengemasan yang aman dan kedap udara, Joko memastikan setiap produk Kopi Nusantara siap diseduh dalam kondisi paling segar.",
  },
  {
    slug: "arya-bima-kusuma",
    name: "Arya Bima Kusuma",
    role: "Marketing Manager",
    image: "/images/arya.jpeg",
    bio: "Arya adalah ujung tombak dalam merancang kampanye promosi dan strategi komunikasi merek Kopi Nusantara. Ia memastikan nilai-nilai keunikan kopi lokal dapat menjangkau audiens yang lebih luas melalui media sosial, acara komunitas, dan kampanye digital yang kreatif.",
  },
  {
    slug: "rina-mariana",
    name: "Rina Mariana",
    role: "Sales Executive",
    image: "/images/rina.jpeg",
    bio: "Rina berfokus pada perluasan distribusi dan layanan pelanggan. Ia membangun hubungan baik dengan mitra bisnis, kafe, maupun pembeli langsung untuk memastikan produk Kopi Nusantara mudah didapatkan dan selalu menjadi pilihan utama bagi para pecinta kopi.",
  },
];

export function getMember(slug: string): Member | undefined {
  return team.find((m) => m.slug === slug);
}