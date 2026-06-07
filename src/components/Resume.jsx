import React from "react";

const ACCENT = "#D85A30";

const styles = {
  page: {
    fontFamily: "'Georgia', serif",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "3rem 2rem",
    color: "#1a1a1a",
    backgroundColor: "#fff",
    lineHeight: "1.6",
  },
  header: {
    borderLeft: `4px solid ${ACCENT}`,
    paddingLeft: "1.25rem",
    marginBottom: "2.5rem",
  },
  name: {
    fontSize: "2.25rem",
    fontWeight: "600",
    margin: "0 0 0.25rem",
    letterSpacing: "-0.5px",
  },
  contactRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.375rem 1rem",
    marginTop: "0.5rem",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
    fontSize: "0.8rem",
    color: "#555",
  },
  sectionLabel: {
    fontSize: "0.65rem",
    fontWeight: "700",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: ACCENT,
    margin: "0 0 0.75rem",
  },
  divider: {
    border: "none",
    borderTop: "0.5px solid #ddd",
    marginBottom: "1.25rem",
  },
  section: {
    marginBottom: "2.25rem",
  },
  job: {
    marginBottom: "1.5rem",
  },
  jobHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    flexWrap: "wrap",
    gap: "0.25rem",
    marginBottom: "0.125rem",
  },
  jobTitle: {
    fontSize: "0.9rem",
    fontWeight: "600",
  },
  jobDate: {
    fontSize: "0.75rem",
    color: "#777",
    whiteSpace: "nowrap",
  },
  jobCompany: {
    fontSize: "0.8rem",
    color: ACCENT,
    fontWeight: "600",
    marginBottom: "0.4rem",
  },
  bullets: {
    margin: "0",
    paddingLeft: "1rem",
  },
  bullet: {
    fontSize: "0.8rem",
    color: "#444",
    lineHeight: "1.65",
    marginBottom: "0.2rem",
  },
  skillsGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  skillPill: {
    fontSize: "0.75rem",
    backgroundColor: "#f5f5f3",
    border: "0.5px solid #ddd",
    borderRadius: "6px",
    padding: "0.25rem 0.75rem",
    color: "#444",
  },
  eduGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "0.75rem",
  },
  eduCard: {
    backgroundColor: "#fff",
    border: "0.5px solid #ddd",
    borderRadius: "8px",
    padding: "0.75rem 0.875rem",
  },
  eduSchool: {
    fontSize: "0.8rem",
    fontWeight: "600",
    marginBottom: "0.2rem",
  },
  eduDetail: {
    fontSize: "0.75rem",
    color: "#666",
    lineHeight: "1.5",
  },
  certRow: {
    display: "flex",
    gap: "1.5rem",
    flexWrap: "wrap",
  },
  cert: {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    fontSize: "0.8rem",
    color: "#444",
  },
};

const experience = [
  {
    title: "Bartender & Server",
    company: "Eat Restaurant Group — Fatty Smokes & Redsalt, Richmond, VA",
    date: "Jul 2021 – Present",
    bullets: [
      "Completed rigorous beer, wine, and spirits training to deliver an elevated guest experience",
      "Maintained high-energy service across multiple concurrent tables and service bar",
      "Built lasting rapport with regulars and returning guests in a fast-paced environment",
    ],
  },
  {
    title: "Taproom & Event Bartender",
    company: "Cirrus Vodka Distillery, Richmond, VA",
    date: "May 2021 – Present",
    bullets: [
      "Bartend at a local craft distillery where all product is bottled on premises",
      "Serve taproom guests and staff special events, representing the brand with expertise",
    ],
  },
  {
    title: "Server, Bartender & Closing Manager",
    company: "Historical Restaurant Concepts — Station 2, Postbellum & Oak and Apple, Richmond, VA",
    date: "Mar 2017 – Jul 2021",
    bullets: [
      "Managed bar, floor service, and end-of-night closing duties across three distinct concepts",
      "Cultivated regulars and strong guest relationships at each location",
      "Performed hosting, food running, table service, bartending, and service bar roles",
    ],
  },
  {
    title: "Taproom Staff & Canning Operator",
    company: "Ninja Kombucha, Richmond, VA",
    date: "Oct 2020 – Present",
    bullets: [
      "Lead canning operator for a small-batch kombucha company in Northside RVA",
      "Assist with taproom service, prep, juicing, residential and wholesale deliveries, and farmers markets",
    ],
  },
  {
    title: "Server & Barback",
    company: "Piedmont Golf and Social Club, Richmond, VA",
    date: "Aug 2015 – Dec 2016",
    bullets: [
      "Delivered attentive table service in bar, formal dining, and ballroom event settings",
      "Helped organize large-scale events including weddings, business meetings, and golf outings",
    ],
  },
];

const skills = [
  "Beer, wine & spirits knowledge",
  "Cocktail service",
  "Service bar",
  "High-volume bartending",
  "Craft & taproom service",
  "Event bartending",
  "Guest rapport building",
  "Closing management",
  "Food service",
  "POS systems",
];

const education = [
  {
    school: "Lotus Professional College",
    detail: "Massage Therapy\nHenrico, VA · 2017",
  },
  {
    school: "Northern Virginia Community College",
    detail: "Anatomy & Physiology, Pre-Calculus\nManassas, VA · 2015–2016",
  },
  {
    school: "Battlefield High School",
    detail: "Diploma — Athletic Training I & II, Biology I & II\nHaymarket, VA · 2014",
  },
];

const certifications = ["MART ABC Certified", "CPR Certified"];

export default function Resume() {
  return (
    <div style={styles.page}>

      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.name}>Larissa Bierly</h1>
        <div style={styles.contactRow}>
          <span style={styles.contactItem}>✉ lbierly96@gmail.com</span>
          <span style={styles.contactItem}>✆ (703) 220-0674</span>
          <span style={styles.contactItem}>⌖ Richmond, VA</span>
        </div>
      </div>

      {/* Experience */}
      <div style={styles.section}>
        <p style={styles.sectionLabel}>Experience</p>
        <hr style={styles.divider} />
        {experience.map((job, i) => (
          <div key={i} style={styles.job}>
            <div style={styles.jobHeader}>
              <span style={styles.jobTitle}>{job.title}</span>
              <span style={styles.jobDate}>{job.date}</span>
            </div>
            <p style={styles.jobCompany}>{job.company}</p>
            <ul style={styles.bullets}>
              {job.bullets.map((b, j) => (
                <li key={j} style={styles.bullet}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div style={styles.section}>
        <p style={styles.sectionLabel}>Skills</p>
        <hr style={styles.divider} />
        <div style={styles.skillsGrid}>
          {skills.map((s, i) => (
            <span key={i} style={styles.skillPill}>{s}</span>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div style={styles.section}>
        <p style={styles.sectionLabel}>Certifications</p>
        <hr style={styles.divider} />
        <div style={styles.certRow}>
          {certifications.map((c, i) => (
            <span key={i} style={styles.cert}>● {c}</span>
          ))}
        </div>
      </div>

      {/* Education */}
      <div style={styles.section}>
        <p style={styles.sectionLabel}>Education</p>
        <hr style={styles.divider} />
        <div style={styles.eduGrid}>
          {education.map((e, i) => (
            <div key={i} style={styles.eduCard}>
              <p style={styles.eduSchool}>{e.school}</p>
              <p style={styles.eduDetail}>
                {e.detail.split("\n").map((line, j) => (
                  <span key={j}>{line}<br /></span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
