import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Avatar from "../../../components/Avatar";
import { getMember, team } from "../../../data/team";

export function generateStaticParams() {
  return team.map((m) => ({ member: m.slug }));
}

type Props = { params: Promise<{ member: string }> };

export default function MemberPage({ params }: Props) {
  return (
    <Suspense fallback={<p className="page">Memuat profil...</p>}>
      <MemberProfile params={params} />
    </Suspense>
  );
}

async function MemberProfile({ params }: Props) {
  const { member: slug } = await params;
  const member = getMember(slug);

  if (!member) notFound();

  return (
    <section className="page profile">
      <Avatar name={member.name} src={member.image} />
      <h1>{member.name}</h1>
      <h2>{member.role}</h2>
      <p>{member.bio}</p>
      <Link href="/team" className="back-link">
        ← Back
      </Link>
    </section>
  );
}