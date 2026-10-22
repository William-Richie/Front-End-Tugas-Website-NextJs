import Link from "next/link";
import type { Member } from "../data/team";

export default function TeamCard({ member }: { member: Member }) {
  return (
    <Link href={`/team/${member.slug}`} className="team-card">
      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </Link>
  );
}