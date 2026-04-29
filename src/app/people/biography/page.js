import Image from "next/image";
import Link from "next/link";
import pi from "../../../../data/people.json";

export const metadata = {
  title: "Junghwan Byun – BIRD Lab @ KIST",
};

const education = [
  {
    institution: "Seoul National University",
    location: "Seoul, Korea",
    entries: [
      "Ph.D. Electrical Engineering and Computer Sciences, Aug 2017",
      "Advisor: Prof. Yongtaek Hong",
      "Thesis: Soft, Fully-integrated Electronic Skin Based on Printing Techniques",
      "B.S. Electrical Engineering, Feb 2011",
    ],
  },
];

const experience = [
  {
    institution: "Korea Institute of Science and Technology",
    location: "Seoul, Korea",
    entries: [
      "Director, Bio-Interactive Robot Design (BIRD) Lab (Sep 2023 – present)",
      "Senior Research Scientist, Soft Hybrid Materials Research Center",
    ],
  },
  {
    institution: "Korea Institute of Science and Technology",
    location: "Seoul, Korea",
    entries: [
      "Sejong Science Research Fellow (Mar 2023 – Aug 2023)",
      "Soft Hybrid Materials Research Center",
      "Advisor: Dr. Seungjun Chung",
    ],
  },
  {
    institution: "Max Planck Institute for Intelligent Systems",
    location: "Stuttgart, Germany",
    entries: [
      "Humboldt Postdoctoral Research Fellow (Sep 2020 – Feb 2023)",
      "Physical Intelligence Department",
      "Advisor: Prof. Metin Sitti",
    ],
  },
  {
    institution: "Soft Robotics Research Center",
    location: "Seoul, Korea",
    entries: [
      "Postdoctoral Researcher (Sep 2017 – Aug 2020)",
      "Department of Mechanical Engineering, Seoul National University",
      "Advisor: Prof. Kyu-Jin Cho",
    ],
  },
];

const awards = [
  "Sejong Science Fellowship, Ministry of Science and ICT, Korea",
];

export default function BiographyPage() {
  const { pi: piData } = pi;

  return (
    <div style={{ maxWidth: "960px", margin: "0 auto", padding: "3rem 2rem" }}>

      {/* Breadcrumb */}
      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "1.8rem" }}>
        <Link href="/people" style={{ color: "var(--accent)" }}>People</Link>
        <span style={{ margin: "0 0.4rem" }}>›</span>
        <span>Biography</span>
      </div>

      {/* Profile header */}
      <div style={{
        display: "flex",
        gap: "2.5rem",
        alignItems: "flex-start",
        marginBottom: "3rem",
        flexWrap: "wrap",
      }}>
        {/* Photo */}
        <div style={{
          flexShrink: 0,
          width: "180px",
          height: "240px",
          position: "relative",
          borderRadius: "var(--radius)",
          overflow: "hidden",
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow-md)",
        }}>
          <Image
            src="/people/pi-bio.jpg"
            alt="Junghwan Byun"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div>

        {/* Name & info */}
        <div style={{ flex: 1, minWidth: "260px" }}>
          <div style={{
            display: "inline-block",
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "var(--accent)",
            background: "var(--accent-soft)",
            padding: "3px 10px",
            borderRadius: "20px",
            marginBottom: "0.7rem",
          }}>
            PRINCIPAL INVESTIGATOR
          </div>

          <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.2rem", color: "var(--text)" }}>
            Junghwan Byun
          </h1>
          <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
            Senior Research Scientist · BIRD Lab Director
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
            <div>
              <strong style={{ color: "var(--text)" }}>Institution:</strong>{" "}
              Korea Institute of Science and Technology (KIST)
            </div>
            <div>
              <strong style={{ color: "var(--text)" }}>Department:</strong>{" "}
              Electronic and Hybrid Materials Research Center
            </div>
            <div>
              <strong style={{ color: "var(--text)" }}>Office:</strong>{" "}
              {piData.office}
            </div>
            <div>
              <strong style={{ color: "var(--text)" }}>Email:</strong>{" "}
              <a href={`mailto:${piData.email}`} style={{ color: "var(--accent)" }}>{piData.email}</a>
            </div>
            <div>
              <strong style={{ color: "var(--text)" }}>Tel:</strong>{" "}
              {piData.phone}
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: "2.5rem" }} />

      {/* Education */}
      <Section title="Education">
        {education.map((edu, i) => (
          <ExperienceBlock key={i} institution={edu.institution} location={edu.location} entries={edu.entries} />
        ))}
      </Section>

      {/* Professional Experience */}
      <Section title="Professional Experience">
        {experience.map((exp, i) => (
          <ExperienceBlock key={i} institution={exp.institution} location={exp.location} entries={exp.entries} />
        ))}
      </Section>

      {/* Honors & Awards */}
      <Section title="Honors & Awards">
        <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {awards.map((award, i) => (
            <li key={i} style={{
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              paddingLeft: "1rem",
              borderLeft: "2px solid var(--accent)",
              lineHeight: 1.6,
            }}>
              {award}
            </li>
          ))}
        </ul>
      </Section>

      {/* Back */}
      <div style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
        <Link href="/people" style={{
          display: "inline-flex", alignItems: "center", gap: "0.4rem",
          fontSize: "0.85rem", color: "var(--accent)", fontWeight: 500,
        }}>
          ← Back to People
        </Link>
      </div>

    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2 style={{
        fontSize: "0.72rem",
        fontWeight: 700,
        letterSpacing: "0.14em",
        color: "var(--text-muted)",
        textTransform: "uppercase",
        marginBottom: "1.2rem",
        paddingBottom: "0.5rem",
        borderBottom: "1px solid var(--border)",
      }}>
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
        {children}
      </div>
    </div>
  );
}

function ExperienceBlock({ institution, location, entries }) {
  return (
    <div style={{ paddingLeft: "0.5rem" }}>
      <p style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.15rem" }}>
        {institution}
        <span style={{ fontWeight: 400, color: "var(--text-muted)", marginLeft: "0.5rem", fontSize: "0.83rem" }}>
          {location}
        </span>
      </p>
      <ul style={{ display: "flex", flexDirection: "column", gap: "0.1rem", marginTop: "0.3rem" }}>
        {entries.map((e, i) => (
          <li key={i} style={{ fontSize: "0.86rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
}
