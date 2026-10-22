import TeamCard from "../../components/TeamCard";
import { team } from "../../data/team";

export default function TeamPage() {
  return (
    <section className="page">
      <h1 className="page-title">Our Team</h1>
      <div className="team-grid">
        {team.map((member) => (
          <TeamCard key={member.slug} member={member} />
        ))}
      </div>
    </section>
  );
}