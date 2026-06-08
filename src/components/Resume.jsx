import React from "react";

const ACCENT = "#D85A30";
const BG = "#0f0f0f";
const SURFACE = "#1a1a1a";
const BORDER = "#2a2a2a";
const TEXT_PRIMARY = "#f0f0f0";
const TEXT_SECONDARY = "#999";

const experience = [
  {
    title: "Bartender & Server",
    company: "Eat Restaurant Group — Fatty Smokes & Redsalt",
    location: "Richmond, VA",
    date: "Jul 2021 – Jan 2023",
    bullets: [
      "Completed rigorous beer, wine, and spirits training to deliver an elevated guest experience",
      "Maintained high-energy service across multiple concurrent tables and service bar",
      "Built lasting rapport with regulars and returning guests in a fast-paced environment",
    ],
  },
  {
    title: "Taproom & Event Bartender",
    company: "Cirrus Vodka Distillery",
    location: "Richmond, VA",
    date: "May 2021 – Sept 2025",
    bullets: [
      "Bartended at a local craft distillery where all product is bottled on premises",
      "Served taproom guests and staffed special events, representing the brand with expertise",
    ],
  },
  {
    title: "Door Staff",
    company: "Fallout",
    location: "Richmond, VA",
    date: "Aug 2023 – Nov 2025",
    bullets: [
      "Managed front door operations including ID verification and security checks for all guests",
      "Enforced ABC laws and venue policies to maintain a safe and compliant environment",
      "Monitored guest behavior inside and outside the venue, de-escalating situations as needed",
      "Served as a first point of contact, balancing hospitality with firm safety standards",
    ],
  },
  {
    title: "Server, Bartender & Closing Manager",
    company: "Historical Restaurant Concepts — Station 2, Postbellum & Oak and Apple",
    location: "Richmond, VA",
    date: "Mar 2017 – Jul 2021",
    bullets: [
      "Managed bar, floor service, and end-of-night closing duties across three distinct concepts",
      "Cultivated regulars and strong guest relationships at each location",
      "Performed hosting, food running, table service, bartending, and service bar roles",
    ],
  },
  {
    title: "Taproom Staff & Canning Operator",
    company: "Ninja Kombucha",
    location: "Richmond, VA",
    date: "Oct 2020 – Aug 2021",
    bullets: [
      "Lead canning operations for a small-batch kombucha company in Northside RVA",
      "Assisted with taproom service, prep, juicing, residential and wholesale deliveries, and farmers markets",
    ],
  },
  {
    title: "Server & Barback",
    company: "Piedmont Golf and Social Club",
    location: "Richmond, VA",
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
    school: "University of Richmond",
    detail: "MERN Stack Bootcamp",
    location: "Richmond, VA · 2023",
  },
  {
    school: "Lotus Professional College",
    detail: "Massage Therapy",
    location: "Henrico, VA · 2017",
  },
  {
    school: "Northern Virginia Community College",
    detail: "Anatomy & Physiology, Pre-Calculus",
    location: "Manassas, VA · 2015–2016",
  },
  {
    school: "Battlefield High School",
    detail: "Diploma — Athletic Training I & II, Biology I & II",
    location: "Haymarket, VA · 2014",
  },
];

const certifications = [
  "MART ABC Certified",
  "CPR Certified",
  "Full Stack Web Development Certificate",
];

export default function Resume() {
  return (
    <div style={styles.page}>

      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerAccentBar} />
        <div style={styles.headerContent}>
          <h1 style={styles.name}>Larissa Bierly</h1>
          <div style={styles.contactRow}>
            <a href="mailto:lbierly96@gmail.com" style={styles.emailLink}>
              lbierly96@gmail.com
            </a>
            <span style={styles.contactDivider}>·</span>
            <span style={styles.contactItem}>(703) 220-0674</span>
            <span style={styles.contactDivider}>·</span>
            <span style={styles.contactItem}>Richmond, VA</span>
          </div>
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
            <p style={styles.jobCompany}>
              {job.company}
              <span style={styles.jobLocation}> · {job.location}</span>
            </p>
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
            <span key={i} style={styles.cert}>
              <span style={styles.certDot}>●</span> {c}
            </span>
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
              <p style={styles.eduDetail}>{e.detail}</p>
              <p style={styles.eduLocation}>{e.location}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'Georgia', serif",
    maxWidth: "860px",
    margin: "0 auto",
    padding: "3.5rem 3rem",
    color: TEXT_PRIMARY,
    backgroundColor: BG,
    minHeight: "100vh",
    lineHeight: "1.6",
    boxSizing: "border-box",
  },
  header: {
    display: "flex",
    alignItems: "stretch",
    gap: "1.5rem",
    marginBottom: "3rem",
  },
  headerAccentBar: {
    width: "4px",
    backgroundColor: ACCENT,
    borderRadius: "2px",
    flexShrink: 0,
  },
  headerContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  name: {
    fontSize: "2.75rem",
    fontWeight: "600",
    margin: "0 0 0.5rem",
    letterSpacing: "-0.5px",
    color: TEXT_PRIMARY,
  },
  contactRow: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "0.4rem 0.75rem",
  },
  emailLink: {
    fontSize: "0.875rem",
    color: ACCENT,
    fontWeight: "600",
    textDecoration: "none",
    borderBottom: `1px solid ${ACCENT}`,
    paddingBottom: "1px",
  },
  contactDivider: {
    color: BORDER,
    fontSize: "0.875rem",
  },
  contactItem: {
    fontSize: "0.875rem",
    color: TEXT_SECONDARY,
  },
  sectionLabel: {
    fontSize: "0.65rem",
    fontWeight: "700",
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    color: ACCENT,
    margin: "0 0 0.75rem",
  },
  divider: {
    border: "none",
    borderTop: `1px solid ${BORDER}`,
    marginBottom: "1.5rem",
  },
  section: {
    marginBottom: "2.5rem",
  },
  job: {
    marginBottom: "1.75rem",
  },
  jobHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    flexWrap: "wrap",
    gap: "0.25rem",
    marginBottom: "0.25rem",
  },
  jobTitle: {
    fontSize: "1rem",
    fontWeight: "600",
    color: TEXT_PRIMARY,
  },
  jobDate: {
    fontSize: "0.8rem",
    color: TEXT_SECONDARY,
    whiteSpace: "nowrap",
  },
  jobCompany: {
    fontSize: "0.875rem",
    color: ACCENT,
    fontWeight: "600",
    margin: "0 0 0.5rem",
  },
  jobLocation: {
    color: TEXT_SECONDARY,
    fontWeight: "400",
    fontSize: "0.8rem",
  },
  bullets: {
    margin: "0",
    paddingLeft: "1.25rem",
  },
  bullet: {
    fontSize: "0.875rem",
    color: TEXT_SECONDARY,
    lineHeight: "1.7",
    marginBottom: "0.25rem",
  },
  skillsGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  skillPill: {
    fontSize: "0.775rem",
    backgroundColor: SURFACE,
    border: `1px solid ${BORDER}`,
    borderRadius: "6px",
    padding: "0.3rem 0.875rem",
    color: TEXT_SECONDARY,
  },
  eduGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem",
  },
  eduCard: {
    backgroundColor: SURFACE,
    border: `1px solid ${BORDER}`,
    borderRadius: "8px",
    padding: "1rem 1.125rem",
  },
  eduSchool: {
    fontSize: "0.875rem",
    fontWeight: "600",
    color: TEXT_PRIMARY,
    margin: "0 0 0.25rem",
  },
  eduDetail: {
    fontSize: "0.8rem",
    color: TEXT_SECONDARY,
    margin: "0 0 0.2rem",
    lineHeight: "1.5",
  },
  eduLocation: {
    fontSize: "0.75rem",
    color: "#666",
    margin: "0",
  },
  certRow: {
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
  },
  cert: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.875rem",
    color: TEXT_SECONDARY,
  },
  certDot: {
    color: ACCENT,
    fontSize: "0.6rem",
  },
};