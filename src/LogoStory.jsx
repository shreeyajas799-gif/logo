import { useEffect, useRef, useState } from "react";
import "./logostory.css";

// All 24 crest elements, data-driven so the JSX below stays clean.
// group: crown | shield | text | academic | flame | background
const ELEMENTS = [
  {
    id: "01",
    group: "crown",
    title: "Main Crown",
    text: `The three‑point royal crown represents leadership and reaching the top of your field.
      It shows that our students are not just passing exams — they are being prepared
      to become future leaders in Nepal and abroad.`,
  },
  {
    id: "02",
    group: "crown",
    title: "Crown Band",
    text: `The horizontal band at the base of the crown is the foundation of discipline and values.
      It symbolises the strong ethical base and structured roadmap EasyMy Learning provides
      before students rise to the crown level.`,
  },
  {
    id: "03",
    group: "crown",
    title: "Five Stars",
    text: `Five diamond‑like stars reflect our five‑star standard in guidance, teaching,
      mentorship, community and support. They also echo our five‑star public ratings,
      turning student trust into a permanent part of the brand.`,
  },
  {
    id: "04",
    group: "shield",
    title: "Inner Shield",
    text: `The inner shield body is the heart of the crest. It represents the protected learning
      space where students get clarity about subjects, streams, colleges and countries
      before taking any risky decision.`,
  },
  {
    id: "05",
    group: "shield",
    title: "Outer Shield Outline",
    text: `The bold outer outline is our promise of protection. It shows how EasyMy Learning
      safeguards students from confusion, misinformation and wrong career choices and how
      we stay with them through bachelor's, master's and PhD admissions abroad until they
      complete their studies safely.`,
  },
  {
    id: "06",
    group: "shield",
    title: "Top Shield Curve",
    text: `The smooth upper curve symbolises a positive beginning. It represents new starts,
      orientation and bridge courses where students first connect with us and discover
      the brightness of future opportunities.`,
  },
  {
    id: "07",
    group: "text",
    title: "EasyMy Learning Text",
    text: `The full name inside the shield makes it clear that this protection and guidance
      comes from one organised platform. It stands for our mission: to make learning
      easier, clearer and more accessible for every Nepali learner.`,
  },
  {
    id: "08",
    group: "text",
    title: "EML Text",
    html: `The bold abbreviation <strong>EML</strong> is the short identity of the brand,
      designed to be easily remembered on certificates, thumbnails and app icons.
      It connects the long name to a strong, compact symbol.`,
  },
  {
    id: "09",
    group: "academic",
    title: "Graduation Cap",
    text: `The cap is the universal sign of education and completion. Placed near the bottom
      of the shield, it shows that every activity we do — teaching, counseling,
      mentoring and consulting — is finally aimed at helping the student proudly
      wear this cap in real life.`,
  },
  {
    id: "10",
    group: "academic",
    title: "Tassel",
    text: `The hanging tassel marks the transition moment when a learner officially becomes a
      graduate. It represents that final shift in identity, from "confused student" to
      "confident professional" supported by our roadmap.`,
  },
  {
    id: "11",
    group: "academic",
    title: "Book (Under Cap)",
    text: `The book under the cap stands for strong fundamentals, notes, recorded classes and
      well‑planned courses. It shows that we don't just send students abroad — we
      prepare them academically so their degree is built on real knowledge.`,
  },
  {
    id: "12",
    group: "academic",
    title: "Left Laurel Branch",
    text: `The left branch of the laurel wreath symbolises hard work, discipline and daily study.
      Traditionally, laurels mean victory; here they honour the effort students put in before
      they ever receive a certificate or scholarship.`,
  },
  {
    id: "13",
    group: "academic",
    title: "Right Laurel Branch",
    text: `The right branch celebrates visible achievements — scholarships, results, campus
      placements and international admissions. Together, both branches frame the cap and book
      to show balance between effort and reward.`,
  },
  {
    id: "14",
    group: "flame",
    title: "Left Flame 1",
    html: `The first flame on the left represents the <strong>Learning</strong> stage —
      when a student is exploring subjects, chapters and career options for the first time.`,
  },
  {
    id: "15",
    group: "flame",
    title: "Left Flame 2",
    html: `The second left flame stands for <strong>Skill</strong> —
      practising questions, projects and tools that convert raw knowledge into practical ability.`,
  },
  {
    id: "16",
    group: "flame",
    title: "Left Flame 3",
    html: `The third flame symbolises <strong>Confidence</strong>. Here students start speaking up,
      asking questions comfortably and feeling ready for exams, interviews and visa processes.`,
  },
  {
    id: "17",
    group: "flame",
    title: "Left Flame 4",
    html: `The fourth upper‑side flame is the stage of <strong>Success</strong> — exam results,
      selections, offer letters and admissions that prove the journey is working.`,
  },
  {
    id: "18",
    group: "flame",
    title: "Bottom Left Flame",
    text: `The bottom flame on the left acts as a support base for the full journey. It reflects the
      warm Nepali spirit of community, teachers, parents and seniors who stand behind each student.`,
  },
  {
    id: "19",
    group: "flame",
    title: "Right Flame 1",
    html: `The first flame on the right mirrors new <strong>beginnings</strong> for international
      exposure — the moment students seriously consider studying in India or abroad.`,
  },
  {
    id: "20",
    group: "flame",
    title: "Right Flame 2",
    html: `The second right flame highlights <strong>Transformation</strong>. It represents how
      guidance, bridge courses and mentoring change a confused mind into a goal‑oriented one.`,
  },
  {
    id: "21",
    group: "flame",
    title: "Right Flame 3",
    html: `The third flame on the right stands for <strong>Ambition Rising</strong>. At this stage,
      students aim for scholarships, top colleges and research opportunities globally.`,
  },
  {
    id: "22",
    group: "flame",
    title: "Right Flame 4",
    html: `The fourth right flame represents <strong>Impact</strong> — students using their
      skills in real projects, jobs and start‑ups that contribute back to Nepal and the world.`,
  },
  {
    id: "23",
    group: "flame",
    title: "Bottom Right Flame",
    text: `The bottom flame on the right balances the left base flame, completing the ring of support.
      Together they show that EasyMy Learning stands on both sides of the student — before
      departure and after reaching a new country or campus.`,
  },
  {
    id: "24",
    group: "background",
    title: "Background & Texture Elements",
    text: `The soft shading and texture behind the shield symbolise the wider education ecosystem:
      schools, colleges, exams, embassies and policies. It reminds us that while the outside
      world is complex, inside the crest the student's path is simple, guided and safe.`,
  },
];

const GROUP_CHIPS = [
  "👑 Crown & Stars",
  "🛡 Shield & Protection",
  "🔥 Flames & Growth Journey",
  "🎓 Academic Symbol",
  "🔤 Brand Text",
  "🌌 Background & Texture",
];

const LOGO_URL = "https://i.ibb.co/7NvPQ8cp/Whats-App-Image-2025-12-03-at-6-28-55-PM.jpg";
const SKETCH_URL =
  "https://i.postimg.cc/W1WV7ShG/Red-and-Cream-Modhttps://i.postimg.cc/Gm8d3VL8/Whats-App-Image-2025-12-03-at-6-28-15-PM.jpgern-Fashion-Designer-Portrait-Instagram-Post-(Instagram-Post)-(2).png";

function ElementCard({ el }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    // IntersectionObserver replaces the original scroll-listener reveal logic.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className={`element-card${visible ? " visible" : ""}`}
      data-group={el.group}
    >
      <h3>
        <span>{el.id}</span>
        {el.title}
      </h3>
      {el.html ? (
        <p dangerouslySetInnerHTML={{ __html: el.html }} />
      ) : (
        <p>{el.text}</p>
      )}
    </article>
  );
}

export default function LogoStory() {
  const year = new Date().getFullYear();

  return (
    <div className="eml-logo-story">
      <div className="page-frame">
        <header className="hero">
          <div className="logo-badge">
            <img src={LOGO_URL} alt="EasyMy Learning Official Logo" />
          </div>
          <div className="hero-text">
            <h1>
              <span>EasyMy</span> Learning — Logo Story
            </h1>
            <p>
              This page documents the official EasyMy Learning crest and its 3D pencil sketch,
              explaining how every line, curve, star and flame is connected to our promise to
              guide Nepali learners from confusion to global success.
            </p>
            <div className="hero-pill">
              <span className="icon">⭐</span>
              <span>Nepal's First EdTech Platform with a 5★ Google Rating ⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </header>

        <section className="visual-row" aria-label="Logo Visuals">
          <article className="visual-card">
            <h2>Original 3D Brand Emblem</h2>
            <p>Each element of the logo is crafted with purpose, and its meanings are clearly explained here.</p>
            <img src={LOGO_URL} alt="Original EasyMy Learning Logo" />
          </article>

          <article className="visual-card">
            <h2>3D Pencil Sketch Breakdown</h2>
            <p>
              A hand‑drawn 3D interpretation of the logo used to teach students logo anatomy and
              to document each symbolic element of the crest.
            </p>
            <img src={SKETCH_URL} alt="EasyMy Learning Logo Sketch with Labels" />
          </article>
        </section>

        <section id="elements">
          <h2>24 Elements of the EasyMy Learning Crest</h2>
          <p>
            Every piece of the crest is intentional. Together they explain how EasyMy Learning
            protects, guides and celebrates students — from first doubt to final degree.
          </p>

          <div className="group-chips">
            {GROUP_CHIPS.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>

          <div className="elements-grid">
            {ELEMENTS.map((el) => (
              <ElementCard key={el.id} el={el} />
            ))}
          </div>
        </section>

        <footer>
          <div>
            &copy; {year} <strong>EasyMy Learning</strong>. All rights reserved.
          </div>
          <div>Designed for brand documentation &amp; official website use.</div>
        </footer>
      </div>
    </div>
  );
}
