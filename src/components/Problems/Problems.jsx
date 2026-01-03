import "./Problem.css";
import {
  Cpu,
  Leaf,
  HeartPulse,
  Building2,
  GraduationCap,
  Shield,
  Factory,
  Globe,
  Lightbulb,
  Landmark,
  Wheat,
  Bitcoin,
} from "lucide-react";

const domains = [
  {
    title: "Artificial Intelligence & Machine Learning",
    count: "6 problem statements",
    icon: <Cpu />,
    color: "purple",
  },
  {
    title: "Sustainability & Green Tech",
    count: "5 problem statements",
    icon: <Leaf />,
    color: "green",
  },
  {
    title: "Healthcare & BioTech",
    count: "5 problem statements",
    icon: <HeartPulse />,
    color: "red",
  },
  {
    title: "Smart Cities & IoT",
    count: "5 problem statements",
    icon: <Building2 />,
    color: "blue",
  },
  {
    title: "EdTech & Skill Development",
    count: "6 problem statements",
    icon: <GraduationCap />,
    color: "cyan",
  },
  {
    title: "FinTech & Blockchain",
    count: "5 problem statements",
    icon: <Bitcoin />,
    color: "yellow",
  },
  {
    title: "Cybersecurity",
    count: "5 problem statements",
    icon: <Shield />,
    color: "orange",
  },
  {
    title: "AgriTech",
    count: "5 problem statements",
    icon: <Wheat />,
    color: "lime",
  },
  {
    title: "Industry 4.0 & Automation",
    count: "5 problem statements",
    icon: <Factory />,
    color: "indigo",
  },
  {
    title: "Social Impact & Governance",
    count: "6 problem statements",
    icon: <Landmark />,
    color: "pink",
  },
  {
    title: "AR / VR & Metaverse",
    count: "5 problem statements",
    icon: <Globe />,
    color: "violet",
  },
  {
    title: "Open Innovation / Student Choice",
    count: "Any innovative solution",
    icon: <Lightbulb />,
    color: "gold",
  },
];

const ProblemDomains = () => {
  return (
    <section className="domains-section" id="problems">
      <span className="domains-pill">Hackathon Challenges</span>

      <h2 className="domains-title">
        Problem <span>Domains</span>
      </h2>

      <p className="domains-sub">
        Choose a preferred domain or work on your own Open Innovation idea
      </p>

      <div className="domains-grid">
        {domains.map((d, i) => (
          <div key={i} className={`domain-card ${d.color}`}>
            <div className="domain-icon">{d.icon}</div>
            <div>
              <h4>{d.title}</h4>
              <p>{d.count}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemDomains;
