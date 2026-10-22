import Image from "next/image";

type AvatarProps = {
  name: string;
  src?: string;
  size?: number;
};

export default function Avatar({ name, src, size = 140 }: AvatarProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={`Foto ${name}`}
        width={size}
        height={size}
        className="avatar"
        style={{ width: size, height: size }}
      />
    );
  }

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className="avatar avatar-fallback"
      style={{ width: size, height: size, fontSize: size / 3 }}
      aria-label={`Inisial ${name}`}
    >
      {initials}
    </div>
  );
}