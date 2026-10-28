import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = process.cwd();
const IMG_DIR = path.join(ROOT, "public", "images");
const OUT_DOCS_DIR = path.join(ROOT, "docs");
const OUT_PUBLIC_DIR = path.join(ROOT, "public", "docs");

fs.mkdirSync(OUT_DOCS_DIR, { recursive: true });
fs.mkdirSync(OUT_PUBLIC_DIR, { recursive: true });

const imgUrl = (filename) => `file://${path.join(IMG_DIR, filename)}`;

const BASE_CSS = `
  @page {
    size: 16in 9in;
    margin: 0;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  :root {
    --background: #faf8f5;
    --surface: #ffffff;
    --secondary: #f2efe9;
    --secondary-warm: #ebe6dc;
    --foreground: #0b1526;
    --primary: #0d213f;
    --primary-dark: #071326;
    --stem-teal: #0e5a63;
    --stem-teal-soft: #e6f2f3;
    --accent: #c8961e;
    --accent-soft: #f9f1dc;
    --amber-dark: #78350f;
    --muted: #455263;
    --border: #dcd6cb;
    --border-strong: #c4bcad;
    --font-display: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, Georgia, serif;
    --font-sans: "Plus Jakarta Sans", "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --font-mono: "SF Mono", "JetBrains Mono", "Fira Code", Menlo, Consolas, monospace;
  }
  html, body {
    width: 16in;
    background: var(--background);
    color: var(--foreground);
    font-family: var(--font-sans);
    line-height: 1.45;
    -webkit-font-smoothing: antialiased;
  }
  .slide {
    width: 16in;
    height: 9in;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--background);
    page-break-after: always;
    break-after: page;
  }
  .slide:last-child {
    page-break-after: auto;
    break-after: auto;
  }
  .slide-pad {
    padding: 42px 56px 34px 56px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .font-display {
    font-family: var(--font-display);
    letter-spacing: -0.022em;
  }
  .font-mono {
    font-family: var(--font-mono);
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.05em;
  }
  .kicker {
    font-family: var(--font-mono);
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--primary);
  }
  .slide-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom: 1.5px solid var(--border-strong);
    padding-bottom: 16px;
    margin-bottom: 22px;
  }
  .slide-title {
    font-family: var(--font-display);
    font-size: 34px;
    font-weight: 700;
    line-height: 1.12;
    color: var(--foreground);
    margin-top: 5px;
  }
  .slide-subtitle-right {
    max-width: 440px;
    font-size: 13px;
    line-height: 1.5;
    color: var(--muted);
    text-align: right;
  }
  .slide-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--border-strong);
    padding-top: 12px;
    margin-top: 18px;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .badge {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 4px 8px;
    border-radius: 3px;
  }
  .badge-navy {
    background: var(--primary);
    color: #ffffff;
  }
  .badge-teal {
    background: var(--stem-teal-soft);
    color: var(--stem-teal);
    border: 1px solid rgba(14, 90, 99, 0.25);
  }
  .badge-brass {
    background: var(--accent-soft);
    color: var(--amber-dark);
    border: 1px solid rgba(200, 150, 30, 0.35);
  }
  .badge-stone {
    background: var(--secondary);
    color: var(--foreground);
    border: 1px solid var(--border-strong);
  }
  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 5px;
    padding: 20px 22px;
  }
  .card-stone {
    background: var(--secondary);
    border: 1px solid var(--border-strong);
    border-radius: 5px;
    padding: 20px 22px;
  }
  .card-navy {
    background: var(--primary-dark);
    color: #ffffff;
    border: 1px solid #1e3a5f;
    border-radius: 5px;
    padding: 20px 22px;
  }
  .hairline-box {
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 5px;
    overflow: hidden;
    display: grid;
    gap: 1px;
  }
  .hairline-cell {
    background: var(--surface);
    padding: 18px 20px;
  }
  .photo-frame {
    border: 1px solid var(--border-strong);
    border-radius: 4px;
    overflow: hidden;
    background: var(--surface);
  }
  .photo-frame img {
    width: 100%;
    display: block;
    object-fit: cover;
  }
  .photo-caption {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--muted);
    padding: 7px 12px;
    border-top: 1px solid var(--border);
    background: var(--surface);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

function buildPitchDeckHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>STDSC // Institutional Pitch Deck</title>
  <style>${BASE_CSS}</style>
</head>
<body>

  <!-- ==================== SLIDE 01: COVER ==================== -->
  <section class="slide" style="background: #071326; color: #ffffff;">
    <img src="${imgUrl("hero-debate.jpg")}" alt="" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 0.42;" />
    <div style="position: absolute; inset: 0; background: linear-gradient(90deg, rgba(7,19,38,0.96) 0%, rgba(7,19,38,0.84) 58%, rgba(7,19,38,0.48) 100%);"></div>
    <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(7,19,38,0.4) 0%, transparent 45%, rgba(7,19,38,0.92) 100%);"></div>

    <div class="slide-pad" style="position: relative; z-index: 2;">
      <!-- Top Monograph Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 16px;">
        <div style="display: flex; align-items: center; gap: 14px;">
          <span style="display: inline-block; background: var(--accent); color: #071326; font-family: var(--font-mono); font-weight: 800; font-size: 12px; padding: 5px 10px; border-radius: 3px; letter-spacing: 0.08em;">STDSC</span>
          <span class="font-mono" style="font-size: 11px; color: #cbd5e1; text-transform: uppercase;">SURULERE TEENS DEBATE &amp; STEM CHAMPIONSHIP // LAGOS ACADEMIC MONOGRAPH</span>
        </div>
        <span class="font-mono" style="font-size: 11px; color: var(--accent); font-weight: 700;">DOC-PITCH-2026 // WORKING DRAFT</span>
      </div>

      <!-- Center Hero Thesis -->
      <div style="max-width: 960px; margin: auto 0;">
        <div class="font-mono" style="font-size: 12px; font-weight: 700; color: var(--accent); text-transform: uppercase; letter-spacing: 0.14em; margin-bottom: 16px;">
          INSTITUTIONAL PARTNERSHIP &amp; PROGRAMME BRIEFING DECK
        </div>
        <h1 class="font-display" style="font-size: 62px; line-height: 1.05; font-weight: 700; color: #ffffff; letter-spacing: -0.028em;">
          Where articulate voices meet scientific inquiry.
        </h1>
        <p style="margin-top: 22px; font-size: 19px; line-height: 1.55; color: #e2e8f0; max-width: 820px;">
          A flagship annual secondary school championship in Surulere, Lagos uniting
          <strong style="color: #ffffff;">Parliamentary &amp; Science/Tech Policy Debate</strong>,
          <strong style="color: #ffffff;">Multi-Disciplinary STEM Olympiad Rounds</strong>, and a live
          <strong style="color: #ffffff;">STEM Innovation Showcase</strong>, sustained by the year-round
          <strong style="color: var(--accent);">Young Leaders Network &amp; STEM Labs</strong>.
        </p>

        <div style="margin-top: 28px; display: flex; gap: 12px;">
          <span class="badge" style="background: rgba(200,150,30,0.2); border: 1px solid var(--accent); color: #fde68a; padding: 7px 14px; font-size: 11px;">
            TARGET: SECONDARY SCHOOLS IN SURULERE LGA &amp; INVITED LAGOS SCHOOLS
          </span>
          <span class="badge" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.25); color: #f1f5f9; padding: 7px 14px; font-size: 11px;">
            GOVERNANCE: CHILD SAFEGUARDING, LAB SAFETY &amp; PRIVACY FIRST
          </span>
        </div>
      </div>

      <!-- Bottom Ledger Grid -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; border-top: 1px solid rgba(255,255,255,0.22); padding-top: 20px;">
        <div>
          <div class="font-mono" style="font-size: 10.5px; color: #94a3b8; text-transform: uppercase;">01 / COMPETITIVE ARENAS</div>
          <div style="font-size: 14px; font-weight: 700; color: #ffffff; margin-top: 4px;">Debate • STEM Olympiad • Lab Showcase</div>
        </div>
        <div style="border-left: 1px solid rgba(255,255,255,0.18); padding-left: 20px;">
          <div class="font-mono" style="font-size: 10.5px; color: #94a3b8; text-transform: uppercase;">02 / POST-EVENT PATHWAY</div>
          <div style="font-size: 14px; font-weight: 700; color: #ffffff; margin-top: 4px;">Young Leaders Network &amp; STEM Labs</div>
        </div>
        <div style="border-left: 1px solid rgba(255,255,255,0.18); padding-left: 20px;">
          <div class="font-mono" style="font-size: 10.5px; color: #94a3b8; text-transform: uppercase;">03 / HOST VENUE &amp; DATES</div>
          <div style="font-size: 14px; font-weight: 700; color: var(--accent); margin-top: 4px;">Surulere, Lagos (Dates &amp; Venue TBC)</div>
        </div>
        <div style="border-left: 1px solid rgba(255,255,255,0.18); padding-left: 20px;">
          <div class="font-mono" style="font-size: 10.5px; color: #94a3b8; text-transform: uppercase;">04 / SLIDE INDEX</div>
          <div style="font-size: 14px; font-weight: 700; color: #ffffff; margin-top: 4px;">SLIDE 01 OF 10 // COVER MONOGRAPH</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== SLIDE 02: THE OPPORTUNITY & PROBLEM ==================== -->
  <section class="slide">
    <div class="slide-pad">
      <div>
        <div class="slide-header">
          <div>
            <div class="kicker">§ 01 / THE EDUCATIONAL &amp; CIVIC IMPERATIVE</div>
            <h2 class="slide-title">Bridging the divide between civic articulation and scientific rigor.</h2>
          </div>
          <div class="slide-subtitle-right">
            Modern urban challenges require young citizens who can both engineer rigorous technical systems and defend their ethical and civic consequences.
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 7fr 5fr; gap: 28px; align-items: stretch;">
          <!-- Left: 3 Structural Gaps -->
          <div style="display: flex; flex-direction: column; justify-content: space-between; gap: 14px;">
            <div class="card" style="border-left: 4px solid var(--primary);">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="font-mono" style="font-size: 11px; font-weight: 700; color: var(--primary);">GAP-01 / SILOED ACADEMIC DISCIPLINES</span>
                <span class="badge badge-stone">HUMANITIES VS. SCIENCES</span>
              </div>
              <h3 class="font-display" style="font-size: 20px; font-weight: 700; margin-top: 8px; color: var(--foreground);">
                Debaters rarely engage with engineering; builders rarely debate policy.
              </h3>
              <p style="font-size: 13.5px; color: var(--muted); margin-top: 6px; line-height: 1.5;">
                Secondary school tournaments traditionally separate literary/debate societies from science clubs. Students seldom evaluate emerging technology ethics, climate resilience, and public health policy alongside quantitative STEM problem-solving.
              </p>
            </div>

            <div class="card" style="border-left: 4px solid var(--stem-teal);">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="font-mono" style="font-size: 11px; font-weight: 700; color: var(--stem-teal);">GAP-02 / THEORY WITHOUT APPLIED PROTOTYPING</span>
                <span class="badge badge-teal">CLASSROOM TO LAB GAP</span>
              </div>
              <h3 class="font-display" style="font-size: 20px; font-weight: 700; margin-top: 8px; color: var(--foreground);">
                High-potential science students lack structured prototype arenas.
              </h3>
              <p style="font-size: 13.5px; color: var(--muted); margin-top: 6px; line-height: 1.5;">
                While students master textbook formulas for exams, few platforms challenge school teams to design, build, and orally defend working robotics, renewable energy, or software prototypes tailored to Surulere and Lagos communities.
              </p>
            </div>

            <div class="card" style="border-left: 4px solid var(--accent);">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="font-mono" style="font-size: 11px; font-weight: 700; color: var(--amber-dark);">GAP-03 / EPHEMERAL ONE-DAY COMPETITIONS</span>
                <span class="badge badge-brass">POST-EVENT DROPOFF</span>
              </div>
              <h3 class="font-display" style="font-size: 20px; font-weight: 700; margin-top: 8px; color: var(--foreground);">
                Conventional school competitions end when trophies are handed out.
              </h3>
              <p style="font-size: 13.5px; color: var(--muted); margin-top: 6px; line-height: 1.5;">
                Without a structured post-tournament fellowship, standout teenage speakers, Olympiad scholars, and student inventors lose momentum rather than compounding their skills through year-round mentorship and STEM laboratory bootcamps.
              </p>
            </div>
          </div>

          <!-- Right: The STDSC Solution & Editorial Visual -->
          <div style="display: flex; flex-direction: column; justify-content: space-between; gap: 16px;">
            <div class="photo-frame">
              <img src="${imgUrl("schools-team.jpg")}" alt="Students and coordinator" style="height: 250px;" />
              <div class="photo-caption">FIG 1.1 / FACULTY-SUPERVISED DEBATE &amp; STEM PREPARATION IN SURULERE</div>
            </div>

            <div class="card-navy" style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div class="font-mono" style="font-size: 11px; font-weight: 700; color: var(--accent); text-transform: uppercase;">
                  THE STDSC INSTITUTIONAL RESPONSE
                </div>
                <h3 class="font-display" style="font-size: 22px; font-weight: 700; color: #ffffff; margin-top: 8px; line-height: 1.2;">
                  One flagship championship + one year-round STEM &amp; leadership pipeline.
                </h3>
                <p style="font-size: 13px; color: #cbd5e1; margin-top: 10px; line-height: 1.55;">
                  STDSC unites humanities and applied sciences under a single school delegation workflow, governed by strict child safeguarding, laboratory safety, and data protection standards.
                </p>
              </div>
              <div style="border-top: 1px solid rgba(255,255,255,0.16); padding-top: 12px; margin-top: 14px; display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 11px; color: var(--accent);">
                <span>3 CHAMPIONSHIP TRACKS</span>
                <span>•</span>
                <span>5 OLYMPIAD DOMAINS</span>
                <span>•</span>
                <span>YEAR-ROUND YLN LABS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="slide-footer">
        <span>SURULERE TEENS DEBATE &amp; STEM CHAMPIONSHIP (STDSC) // MASTER PROPOSAL BRIEFING</span>
        <span>PLACEHOLDER DISCLOSURE: DATES, VENUE &amp; ORGANISERS TO BE CONFIRMED</span>
        <span>SLIDE 02 / 10</span>
      </div>
    </div>
  </section>

  <!-- ==================== SLIDE 03: PROGRAMME ARCHITECTURE (4 PILLARS) ==================== -->
  <section class="slide">
    <div class="slide-pad">
      <div>
        <div class="slide-header">
          <div>
            <div class="kicker">§ 02 / PROGRAMME ARCHITECTURE</div>
            <h2 class="slide-title">Three competitive arenas and a year-round laboratory fellowship.</h2>
          </div>
          <div class="slide-subtitle-right">
            Schools may enter a single division or field a complete delegation across Debate, the STEM Olympiad, and the Innovation Showcase.
          </div>
        </div>

        <!-- 2x2 Asymmetric Bento Matrix -->
        <div style="display: grid; grid-template-columns: 7fr 5fr; grid-template-rows: 1fr 1fr; gap: 18px; height: 560px;">
          <!-- Track 01 -->
          <div class="card" style="display: flex; flex-direction: column; justify-content: space-between; border-top: 4px solid var(--primary);">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 10px;">
                <span class="font-mono" style="font-size: 11.5px; font-weight: 700; color: var(--primary);">TRK-01 / PARLIAMENTARY &amp; POLICY CHAMBER</span>
                <span class="badge badge-stone">PRELIMINARIES → KNOCKOUTS</span>
              </div>
              <div style="display: grid; grid-template-columns: 7fr 5fr; gap: 16px; margin-top: 14px; align-items: center;">
                <div>
                  <h3 class="font-display" style="font-size: 22px; font-weight: 700; color: var(--foreground);">
                    Debate &amp; Science/Tech Policy Motions
                  </h3>
                  <p style="font-size: 13px; color: var(--muted); margin-top: 8px; line-height: 1.5;">
                    School squads clash across prepared and impromptu motions spanning civic governance, economic policy, artificial intelligence ethics, climate adaptation, and public health.
                  </p>
                </div>
                <div class="photo-frame">
                  <img src="${imgUrl("format-adjudication.jpg")}" alt="Debate adjudication" style="height: 135px;" />
                </div>
              </div>
            </div>
            <div style="border-top: 1px solid var(--border); padding-top: 10px; display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 10.5px; color: var(--primary); font-weight: 700;">
              <span>RUBRIC: CONTENT (40%) • STYLE (40%) • STRATEGY (20%)</span>
              <span>TRAINED ADJUDICATION PANELS</span>
            </div>
          </div>

          <!-- Track 02 -->
          <div class="card" style="display: flex; flex-direction: column; justify-content: space-between; border-top: 4px solid var(--stem-teal);">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 10px;">
                <span class="font-mono" style="font-size: 11.5px; font-weight: 700; color: var(--stem-teal);">TRK-02 / QUANTITATIVE ARENA</span>
                <span class="badge badge-teal">5 STEM DOMAINS</span>
              </div>
              <h3 class="font-display" style="font-size: 21px; font-weight: 700; color: var(--foreground); margin-top: 12px;">
                Competitive STEM Quiz &amp; Olympiad
              </h3>
              <p style="font-size: 13px; color: var(--muted); margin-top: 6px; line-height: 1.48;">
                Collaborative written analytical qualifiers followed by high-tempo live auditorium buzzer finals testing conceptual mastery and rapid computation.
              </p>
              <div style="margin-top: 12px; display: flex; flex-wrap: wrap; gap: 6px;">
                <span class="badge badge-teal">MATHEMATICS</span>
                <span class="badge badge-teal">PHYSICS</span>
                <span class="badge badge-teal">CHEMISTRY</span>
                <span class="badge badge-teal">BIOLOGY</span>
                <span class="badge badge-teal">COMPUTING</span>
              </div>
            </div>
            <div style="border-top: 1px solid var(--border); padding-top: 10px; font-family: var(--font-mono); font-size: 10.5px; color: var(--stem-teal); font-weight: 700;">
              STAGE A: WRITTEN QUALIFIER → STAGE B: LIVE STAGE BUZZER FINALS
            </div>
          </div>

          <!-- Track 03 -->
          <div class="card" style="display: flex; flex-direction: column; justify-content: space-between; border-top: 4px solid var(--accent);">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 10px;">
                <span class="font-mono" style="font-size: 11.5px; font-weight: 700; color: var(--amber-dark);">TRK-03 / PROTOTYPE EXHIBITION</span>
                <span class="badge badge-brass">APPLIED ENGINEERING LAB</span>
              </div>
              <h3 class="font-display" style="font-size: 21px; font-weight: 700; color: var(--foreground); margin-top: 12px;">
                STEM Innovation &amp; Project Showcase
              </h3>
              <p style="font-size: 13px; color: var(--muted); margin-top: 6px; line-height: 1.48;">
                Student teams design, build, and defend working hardware, robotics, clean energy, or civic software prototypes solving real problems in Surulere and Lagos.
              </p>
              <div style="margin-top: 12px; display: flex; flex-wrap: wrap; gap: 6px;">
                <span class="badge badge-brass">SCIENTIFIC RIGOR</span>
                <span class="badge badge-brass">COMMUNITY RELEVANCE</span>
                <span class="badge badge-brass">ORAL DEFENSE</span>
              </div>
            </div>
            <div style="border-top: 1px solid var(--border); padding-top: 10px; font-family: var(--font-mono); font-size: 10.5px; color: var(--amber-dark); font-weight: 700;">
              STRICT LAB SAFETY COMPLIANCE: ZERO HAZARDOUS CHEMICALS OR OPEN FLAMES
            </div>
          </div>

          <!-- Track 04: YLN -->
          <div class="card-stone" style="display: flex; flex-direction: column; justify-content: space-between; border-top: 4px solid var(--primary);">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-strong); padding-bottom: 10px;">
                <span class="font-mono" style="font-size: 11.5px; font-weight: 700; color: var(--primary);">FELLOWSHIP / POST-CHAMPIONSHIP PIPELINE</span>
                <span class="badge badge-navy">YEAR-ROUND COHORT</span>
              </div>
              <div style="display: grid; grid-template-columns: 7fr 5fr; gap: 16px; margin-top: 14px; align-items: center;">
                <div>
                  <h3 class="font-display" style="font-size: 22px; font-weight: 700; color: var(--foreground);">
                    Young Leaders Network &amp; STEM Labs
                  </h3>
                  <p style="font-size: 13px; color: var(--muted); margin-top: 8px; line-height: 1.5;">
                    Standout debaters, Olympiad finalists, and prototype builders are inducted into an ongoing fellowship featuring coding &amp; robotics workshops, policy seminars, and mentorship with Nigerian scientists and civic leaders.
                  </p>
                </div>
                <div class="photo-frame">
                  <img src="${imgUrl("young-leaders.jpg")}" alt="Young Leaders Network" style="height: 135px;" />
                </div>
              </div>
            </div>
            <div style="border-top: 1px solid var(--border-strong); padding-top: 10px; display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 10.5px; color: var(--primary); font-weight: 700;">
              <span>PILLARS: STEM LABS • POLICY SEMINARS • MENTORSHIP • AMBASSADORS</span>
              <span>SUPERVISED SAFEGUARDED SESSIONS</span>
            </div>
          </div>
        </div>
      </div>

      <div class="slide-footer">
        <span>SURULERE TEENS DEBATE &amp; STEM CHAMPIONSHIP (STDSC) // PROGRAMME ARCHITECTURE</span>
        <span>UNIFIED HUMANITIES &amp; APPLIED STEM TOURNAMENT MODEL</span>
        <span>SLIDE 03 / 10</span>
      </div>
    </div>
  </section>

  <!-- ==================== SLIDE 04: TRACK A (DEBATE) & TRACK B (OLYMPIAD) ==================== -->
  <section class="slide">
    <div class="slide-pad">
      <div>
        <div class="slide-header">
          <div>
            <div class="kicker">§ 03 / COMPETITIVE ARENA SPECIFICATIONS // PART I</div>
            <h2 class="slide-title">Chamber debate adjudication and multi-disciplinary STEM Olympiad.</h2>
          </div>
          <div class="slide-subtitle-right">
            Transparent scoring criteria and curriculum-calibrated analytical testing ensure fairness across all participating schools.
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 26px; height: 560px;">
          <!-- Left Column: Track 01 Debate -->
          <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="font-mono" style="font-size: 12px; font-weight: 700; color: var(--primary);">TRK-01 // PARLIAMENTARY &amp; TECH POLICY DEBATE</span>
                <span class="badge badge-navy">CHAMBER RUBRIC</span>
              </div>
              <h3 class="font-display" style="font-size: 24px; font-weight: 700; margin-top: 10px; color: var(--foreground);">
                Evidence-based argumentation on civic &amp; scientific motions.
              </h3>
              <p style="font-size: 13px; color: var(--muted); margin-top: 6px; line-height: 1.5;">
                Teams compete in preliminary seeding rounds followed by knockout brackets across prepared and impromptu motions covering governance, AI ethics, climate policy, and public health.
              </p>

              <div class="photo-frame" style="margin-top: 14px;">
                <img src="${imgUrl("format-adjudication.jpg")}" alt="Adjudication panel" style="height: 175px;" />
                <div class="photo-caption">FIG 3.1 / THREE-MEMBER ADJUDICATION PANEL &amp; TIMED FLOOR SPEECH</div>
              </div>

              <!-- 3-Column Rubric -->
              <div class="hairline-box" style="grid-template-columns: repeat(3, 1fr); margin-top: 14px;">
                <div class="hairline-cell" style="padding: 12px 14px;">
                  <div class="font-mono" style="font-size: 10.5px; font-weight: 700; color: var(--primary);">01 / CONTENT (40%)</div>
                  <p style="font-size: 11.5px; color: var(--muted); margin-top: 5px; line-height: 1.4;">
                    Analytical depth, logical rigor, factual accuracy, and direct engagement with scientific or policy evidence.
                  </p>
                </div>
                <div class="hairline-cell" style="padding: 12px 14px;">
                  <div class="font-mono" style="font-size: 10.5px; font-weight: 700; color: var(--primary);">02 / STYLE (40%)</div>
                  <p style="font-size: 11.5px; color: var(--muted); margin-top: 5px; line-height: 1.4;">
                    Clarity of expression, rhetorical poise, vocal pacing, and persuasive delivery without jargon.
                  </p>
                </div>
                <div class="hairline-cell" style="padding: 12px 14px;">
                  <div class="font-mono" style="font-size: 10.5px; font-weight: 700; color: var(--primary);">03 / STRATEGY (20%)</div>
                  <p style="font-size: 11.5px; color: var(--muted); margin-top: 5px; line-height: 1.4;">
                    Speech structure, prioritisation of key clashes, role fulfilment, and disciplined time management.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Track 02 STEM Olympiad -->
          <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="font-mono" style="font-size: 12px; font-weight: 700; color: var(--stem-teal);">TRK-02 // STEM QUIZ &amp; ANALYTICAL OLYMPIAD</span>
                <span class="badge badge-teal">5 CORE DISCIPLINES</span>
              </div>
              <h3 class="font-display" style="font-size: 24px; font-weight: 700; margin-top: 10px; color: var(--foreground);">
                Collaborative problem-solving and live buzzer finals.
              </h3>
              <p style="font-size: 13px; color: var(--muted); margin-top: 6px; line-height: 1.5;">
                Tests secondary school squads across <strong>Mathematics, Physics, Chemistry, Biology, and Computing</strong> under timed analytical and rapid-response conditions.
              </p>

              <div class="photo-frame" style="margin-top: 14px;">
                <img src="${imgUrl("stem-olympiad.jpg")}" alt="STEM Olympiad buzzer round" style="height: 175px;" />
                <div class="photo-caption">FIG 3.2 / COLLABORATIVE COMPUTATION &amp; STAGE BUZZER FINALS</div>
              </div>

              <!-- 3-Stage Progression -->
              <div class="hairline-box" style="grid-template-columns: repeat(3, 1fr); margin-top: 14px;">
                <div class="hairline-cell" style="padding: 12px 14px;">
                  <div class="font-mono" style="font-size: 10.5px; font-weight: 700; color: var(--stem-teal);">STAGE A / QUALIFIER</div>
                  <p style="font-size: 11.5px; color: var(--muted); margin-top: 5px; line-height: 1.4;">
                    Written multi-step analytical problems completed collaboratively by school squads to establish seeding.
                  </p>
                </div>
                <div class="hairline-cell" style="padding: 12px 14px;">
                  <div class="font-mono" style="font-size: 10.5px; font-weight: 700; color: var(--stem-teal);">STAGE B / BUZZER FINALS</div>
                  <p style="font-size: 11.5px; color: var(--muted); margin-top: 5px; line-height: 1.4;">
                    Live stage rounds featuring timed computations, team-conferred bonuses, and data interpretation.
                  </p>
                </div>
                <div class="hairline-cell" style="padding: 12px 14px;">
                  <div class="font-mono" style="font-size: 10.5px; font-weight: 700; color: var(--stem-teal);">STAGE C / SYLLABUS FIT</div>
                  <p style="font-size: 11.5px; color: var(--muted); margin-top: 5px; line-height: 1.4;">
                    Calibrated to Nigerian secondary school science &amp; mathematics curricula (exact class bands TBC).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="slide-footer">
        <span>SURULERE TEENS DEBATE &amp; STEM CHAMPIONSHIP (STDSC) // FORMAT &amp; RUBRICS</span>
        <span>EXACT DEBATE STYLE, TEAM QUOTAS &amp; CLASS BANDS TO BE CONFIRMED IN OFFICIAL RULEBOOK</span>
        <span>SLIDE 04 / 10</span>
      </div>
    </div>
  </section>

  <!-- ==================== SLIDE 05: TRACK C (SHOWCASE) & YLN FELLOWSHIP ==================== -->
  <section class="slide">
    <div class="slide-pad">
      <div>
        <div class="slide-header">
          <div>
            <div class="kicker">§ 04 / COMPETITIVE SPECIFICATIONS // PART II &amp; POST-EVENT PIPELINE</div>
            <h2 class="slide-title">Applied prototype exhibition and the Young Leaders Network &amp; STEM Labs.</h2>
          </div>
          <div class="slide-subtitle-right">
            Translating classroom science into working prototypes and inducting standout talent into a year-round mentorship cohort.
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 26px; height: 560px;">
          <!-- Left: Track 03 Showcase -->
          <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="font-mono" style="font-size: 12px; font-weight: 700; color: var(--amber-dark);">TRK-03 // STEM INNOVATION &amp; PROJECT SHOWCASE</span>
                <span class="badge badge-brass">PROTOTYPE EXHIBITION</span>
              </div>
              <h3 class="font-display" style="font-size: 24px; font-weight: 700; margin-top: 10px; color: var(--foreground);">
                Hardware, robotics &amp; software built for urban communities.
              </h3>
              <p style="font-size: 13px; color: var(--muted); margin-top: 6px; line-height: 1.5;">
                Teams exhibit working prototypes addressing clean energy, smart agriculture, environmental monitoring, robotics, or civic/educational technology in Surulere.
              </p>

              <div class="photo-frame" style="margin-top: 14px;">
                <img src="${imgUrl("stem-showcase.jpg")}" alt="STEM Innovation Showcase" style="height: 165px;" />
                <div class="photo-caption">FIG 4.1 / PROTOTYPE INSPECTION &amp; TECHNICAL CROSS-EXAMINATION BY JUDGES</div>
              </div>

              <div class="hairline-box" style="grid-template-columns: 1fr 1fr; margin-top: 14px;">
                <div class="hairline-cell" style="padding: 10px 14px;">
                  <div class="font-mono" style="font-size: 10px; font-weight: 700; color: var(--amber-dark);">01 / SCIENTIFIC RIGOR</div>
                  <p style="font-size: 11px; color: var(--muted); margin-top: 3px;">Sound engineering design, reproducible methodology, and clean architecture.</p>
                </div>
                <div class="hairline-cell" style="padding: 10px 14px;">
                  <div class="font-mono" style="font-size: 10px; font-weight: 700; color: var(--amber-dark);">02 / COMMUNITY RELEVANCE</div>
                  <p style="font-size: 11px; color: var(--muted); margin-top: 3px;">Direct applicability to practical challenges in Lagos schools or households.</p>
                </div>
                <div class="hairline-cell" style="padding: 10px 14px;">
                  <div class="font-mono" style="font-size: 10px; font-weight: 700; color: var(--amber-dark);">03 / PROTOTYPE &amp; SAFETY</div>
                  <p style="font-size: 11px; color: var(--muted); margin-top: 3px;">Working demo; strict ban on hazardous chemicals, open flames, or high voltage.</p>
                </div>
                <div class="hairline-cell" style="padding: 10px 14px;">
                  <div class="font-mono" style="font-size: 10px; font-weight: 700; color: var(--amber-dark);">04 / ORAL DEFENSE</div>
                  <p style="font-size: 11px; color: var(--muted); margin-top: 3px;">Clarity of team pitch and ability to answer technical cross-examination.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: YLN Fellowship -->
          <div class="card-stone" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="font-mono" style="font-size: 12px; font-weight: 700; color: var(--primary);">YLN-04 // YOUNG LEADERS NETWORK &amp; STEM LABS</span>
                <span class="badge badge-navy">POST-EVENT FELLOWSHIP</span>
              </div>
              <h3 class="font-display" style="font-size: 24px; font-weight: 700; margin-top: 10px; color: var(--foreground);">
                Sustaining talent beyond tournament day.
              </h3>
              <p style="font-size: 13px; color: var(--muted); margin-top: 6px; line-height: 1.5;">
                Standout speakers, Olympiad finalists, and student inventors are inducted into a safeguarded year-round cohort for technical incubation and leadership development.
              </p>

              <div class="photo-frame" style="margin-top: 14px;">
                <img src="${imgUrl("young-leaders.jpg")}" alt="Young Leaders Network seminar" style="height: 165px;" />
                <div class="photo-caption">FIG 4.2 / INTERACTIVE MENTORSHIP ROUNDTABLE &amp; STEM LAB FELLOWSHIP</div>
              </div>

              <div class="hairline-box" style="grid-template-columns: 1fr 1fr; margin-top: 14px;">
                <div class="hairline-cell" style="padding: 10px 14px;">
                  <div class="font-mono" style="font-size: 10px; font-weight: 700; color: var(--primary);">LAB-01 / STEM WORKSHOPS</div>
                  <p style="font-size: 11px; color: var(--muted); margin-top: 3px;">Practical coding, robotics prototyping, data literacy, and experimental design.</p>
                </div>
                <div class="hairline-cell" style="padding: 10px 14px;">
                  <div class="font-mono" style="font-size: 10px; font-weight: 700; color: var(--primary);">LAB-02 / POLICY SEMINARS</div>
                  <p style="font-size: 11px; color: var(--muted); margin-top: 3px;">Masterclasses in public policy analysis, scientific communication, and ethics.</p>
                </div>
                <div class="hairline-cell" style="padding: 10px 14px;">
                  <div class="font-mono" style="font-size: 10px; font-weight: 700; color: var(--primary);">LAB-03 / MENTORSHIP CIRCLES</div>
                  <p style="font-size: 11px; color: var(--muted); margin-top: 3px;">Structured group mentoring with engineers, scientists, educators, and scholars.</p>
                </div>
                <div class="hairline-cell" style="padding: 10px 14px;">
                  <div class="font-mono" style="font-size: 10px; font-weight: 700; color: var(--primary);">LAB-04 / AMBASSADOR PATHS</div>
                  <p style="font-size: 11px; color: var(--muted); margin-top: 3px;">Incubate community projects, refine prototypes, and support future STDSC editions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="slide-footer">
        <span>SURULERE TEENS DEBATE &amp; STEM CHAMPIONSHIP (STDSC) // SHOWCASE &amp; FELLOWSHIP</span>
        <span>ALL WORKSHOPS &amp; PROTOTYPE EXHIBITIONS OPERATE UNDER STRICT SAFEGUARDING &amp; LAB SAFETY RULES</span>
        <span>SLIDE 05 / 10</span>
      </div>
    </div>
  </section>

  <!-- ==================== SLIDE 06: SECONDARY SCHOOL DELEGATION MODEL ==================== -->
  <section class="slide">
    <div class="slide-pad">
      <div>
        <div class="slide-header">
          <div>
            <div class="kicker">§ 05 / SECONDARY SCHOOL DELEGATION WORKFLOW</div>
            <h2 class="slide-title">Built around school principals, faculty coordinators, and coaches.</h2>
          </div>
          <div class="slide-subtitle-right">
            A streamlined, institutional onboarding sequence designed for secondary schools across Surulere LGA and invited Lagos districts.
          </div>
        </div>

        <!-- 4-Step Horizontal Onboarding Sequence -->
        <div class="hairline-box" style="grid-template-columns: repeat(4, 1fr); margin-bottom: 22px;">
          <div class="hairline-cell" style="border-top: 4px solid var(--primary);">
            <div class="font-mono" style="font-size: 11px; font-weight: 700; color: var(--accent);">STEP 01 // INTAKE</div>
            <h3 class="font-display" style="font-size: 19px; font-weight: 700; margin-top: 6px;">Express School Interest</h3>
            <p style="font-size: 12.5px; color: var(--muted); margin-top: 6px; line-height: 1.48;">
              School principal or designated teacher coordinator submits an expression of interest indicating preferred championship tracks.
            </p>
          </div>
          <div class="hairline-cell" style="border-top: 4px solid var(--primary);">
            <div class="font-mono" style="font-size: 11px; font-weight: 700; color: var(--accent);">STEP 02 // PREPARATION</div>
            <h3 class="font-display" style="font-size: 19px; font-weight: 700; margin-top: 6px;">Coordinator Briefing Pack</h3>
            <p style="font-size: 12.5px; color: var(--muted); margin-top: 6px; line-height: 1.48;">
              Organisers issue the competition rulebook, prepared debate motions, STEM Olympiad syllabus topics, and prototype safety checklists.
            </p>
          </div>
          <div class="hairline-cell" style="border-top: 4px solid var(--stem-teal);">
            <div class="font-mono" style="font-size: 11px; font-weight: 700; color: var(--stem-teal);">STEP 03 // GATED CONSENT</div>
            <h3 class="font-display" style="font-size: 19px; font-weight: 700; margin-top: 6px;">Safeguarding &amp; Squad Roster</h3>
            <p style="font-size: 12.5px; color: var(--muted); margin-top: 6px; line-height: 1.48;">
              Once portal authentication and formal policies are live, coordinators complete private squad nominations and verifiable guardian consent.
            </p>
          </div>
          <div class="hairline-cell" style="border-top: 4px solid var(--accent);">
            <div class="font-mono" style="font-size: 11px; font-weight: 700; color: var(--amber-dark);">STEP 04 // COMPETITION</div>
            <h3 class="font-display" style="font-size: 19px; font-weight: 700; margin-top: 6px;">Tournament &amp; YLN Induction</h3>
            <p style="font-size: 12.5px; color: var(--muted); margin-top: 6px; line-height: 1.48;">
              Squads attend orientation clinics, compete across STDSC stages, and connect standout students with the Young Leaders Network &amp; STEM Labs.
            </p>
          </div>
        </div>

        <!-- Bottom Split: School Commitments vs What STDSC Provides -->
        <div style="display: grid; grid-template-columns: 4fr 4fr 4fr; gap: 20px; height: 340px;">
          <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <span class="font-mono" style="font-size: 11px; font-weight: 700; color: var(--primary);">REQ-01 / SCHOOL COMMITMENTS</span>
              <h3 class="font-display" style="font-size: 21px; font-weight: 700; margin-top: 8px;">What Participating Schools Provide</h3>
              <ul style="list-style: none; margin-top: 14px; display: flex; flex-direction: column; gap: 10px; font-size: 12.5px; color: var(--foreground);">
                <li style="border-bottom: 1px solid var(--border); padding-bottom: 8px;">
                  <strong class="font-mono" style="color: var(--primary);">01.</strong> Designated faculty coordinator (Debate coach and/or STEM teacher).
                </li>
                <li style="border-bottom: 1px solid var(--border); padding-bottom: 8px;">
                  <strong class="font-mono" style="color: var(--primary);">02.</strong> Student squad nominations within published age &amp; eligibility bands.
                </li>
                <li style="border-bottom: 1px solid var(--border); padding-bottom: 8px;">
                  <strong class="font-mono" style="color: var(--primary);">03.</strong> Verifiable parental/guardian consent (stored privately, never public).
                </li>
                <li>
                  <strong class="font-mono" style="color: var(--primary);">04.</strong> Adherence to Code of Conduct, Safeguarding &amp; Prototype Safety rules.
                </li>
              </ul>
            </div>
            <div class="font-mono" style="font-size: 10px; color: var(--muted);">SINGLE-DIVISION OR FULL 3-TRACK ENTRY SUPPORTED</div>
          </div>

          <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <span class="font-mono" style="font-size: 11px; font-weight: 700; color: var(--stem-teal);">REQ-02 / ACADEMIC SUPPORT PACK</span>
              <h3 class="font-display" style="font-size: 21px; font-weight: 700; margin-top: 8px;">What STDSC Provides to Schools</h3>
              <ul style="list-style: none; margin-top: 14px; display: flex; flex-direction: column; gap: 10px; font-size: 12.5px; color: var(--foreground);">
                <li style="border-bottom: 1px solid var(--border); padding-bottom: 8px;">
                  <strong class="font-mono" style="color: var(--stem-teal);">01.</strong> Curated Debate Briefing Pack with sample motions &amp; scoring rubrics.
                </li>
                <li style="border-bottom: 1px solid var(--border); padding-bottom: 8px;">
                  <strong class="font-mono" style="color: var(--stem-teal);">02.</strong> STEM Olympiad syllabus guide &amp; analytical practice problem sets.
                </li>
                <li style="border-bottom: 1px solid var(--border); padding-bottom: 8px;">
                  <strong class="font-mono" style="color: var(--stem-teal);">03.</strong> Innovation Showcase pitch template &amp; lab safety specification sheet.
                </li>
                <li>
                  <strong class="font-mono" style="color: var(--stem-teal);">04.</strong> Post-event certificates, institutional recognition &amp; YLN pathways.
                </li>
              </ul>
            </div>
            <div class="font-mono" style="font-size: 10px; color: var(--stem-teal);">ACCESSIBLE PARTICIPATION PRINCIPLES</div>
          </div>

          <div class="photo-frame" style="display: flex; flex-direction: column; justify-content: space-between;">
            <img src="${imgUrl("schools-team.jpg")}" alt="School delegation team" style="height: 285px;" />
            <div class="photo-caption">FIG 5.1 / UNIFIED TEACHER COORDINATOR WORKFLOW FOR LAGOS SCHOOLS</div>
          </div>
        </div>
      </div>

      <div class="slide-footer">
        <span>SURULERE TEENS DEBATE &amp; STEM CHAMPIONSHIP (STDSC) // SCHOOL ENGAGEMENT MODEL</span>
        <span>INDIVIDUAL STUDENT REGISTRATION IS NOT PERMITTED; ALL ENTRIES ARE SCHOOL-NOMINATED</span>
        <span>SLIDE 06 / 10</span>
      </div>
    </div>
  </section>

  <!-- ==================== SLIDE 07: SAFEGUARDING, PRIVACY & DIGITAL GOVERNANCE ==================== -->
  <section class="slide">
    <div class="slide-pad">
      <div>
        <div class="slide-header">
          <div>
            <div class="kicker">§ 06 / CHILD SAFEGUARDING, LAB SAFETY &amp; TECHNICAL ARCHITECTURE</div>
            <h2 class="slide-title">Governance-first architecture: zero public student PII.</h2>
          </div>
          <div class="slide-subtitle-right">
            The welfare of young participants is paramount. Technical and operational gates prevent premature data collection.
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 6fr 6fr; gap: 26px; height: 555px;">
          <!-- Left: Safeguarding & Privacy Requirements -->
          <div class="card" style="display: flex; flex-direction: column; justify-content: space-between; border-top: 4px solid var(--primary);">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="font-mono" style="font-size: 11.5px; font-weight: 700; color: var(--primary);">GOV-01 // MANDATORY PRE-LIVE SAFEGUARDING CHECKLIST</span>
                <span class="badge badge-navy">CHILD PROTECTION</span>
              </div>
              <h3 class="font-display" style="font-size: 22px; font-weight: 700; margin-top: 10px;">
                Institutional Safeguarding &amp; Prototype Safety Covenant
              </h3>
              <p style="font-size: 12.5px; color: var(--muted); margin-top: 6px; line-height: 1.48;">
                No live processing of student personal data or in-person tournament hosting occurs without complete sign-off across six foundational governance pillars:
              </p>

              <div style="margin-top: 14px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <div style="background: var(--secondary); padding: 12px 14px; border-radius: 4px; border: 1px solid var(--border);">
                  <div class="font-mono" style="font-size: 10.5px; font-weight: 700; color: var(--primary);">01 / SAFEGUARDING POLICY</div>
                  <p style="font-size: 11.5px; color: var(--muted); margin-top: 4px;">Written policy covering in-person &amp; online interactions plus a named Safeguarding Lead.</p>
                </div>
                <div style="background: var(--secondary); padding: 12px 14px; border-radius: 4px; border: 1px solid var(--border);">
                  <div class="font-mono" style="font-size: 10.5px; font-weight: 700; color: var(--primary);">02 / SUPERVISION RATIOS</div>
                  <p style="font-size: 11.5px; color: var(--muted); margin-top: 4px;">Mandatory adult supervision ratios and binding Code of Conduct for all staff, coaches &amp; judges.</p>
                </div>
                <div style="background: var(--secondary); padding: 12px 14px; border-radius: 4px; border: 1px solid var(--border);">
                  <div class="font-mono" style="font-size: 10.5px; font-weight: 700; color: var(--primary);">03 / GUARDIAN CONSENT</div>
                  <p style="font-size: 11.5px; color: var(--muted); margin-top: 4px;">Documented lawful basis for minors' data, parental permission workflow &amp; strict media rules.</p>
                </div>
                <div style="background: var(--secondary); padding: 12px 14px; border-radius: 4px; border: 1px solid var(--border);">
                  <div class="font-mono" style="font-size: 10.5px; font-weight: 700; color: var(--primary);">04 / PROTOTYPE LAB SAFETY</div>
                  <p style="font-size: 11.5px; color: var(--muted); margin-top: 4px;">Physical STEM showcase screening: no hazardous chemicals, open flames, or unshielded voltage.</p>
                </div>
                <div style="background: var(--secondary); padding: 12px 14px; border-radius: 4px; border: 1px solid var(--border);">
                  <div class="font-mono" style="font-size: 10.5px; font-weight: 700; color: var(--primary);">05 / DATA MINIMISATION</div>
                  <p style="font-size: 11.5px; color: var(--muted); margin-top: 4px;">Collect only strictly necessary fields; defined retention schedule &amp; anonymisation protocol.</p>
                </div>
                <div style="background: var(--secondary); padding: 12px 14px; border-radius: 4px; border: 1px solid var(--border);">
                  <div class="font-mono" style="font-size: 10.5px; font-weight: 700; color: var(--primary);">06 / PUBLIC-SAFE RESULTS</div>
                  <p style="font-size: 11.5px; color: var(--muted); margin-top: 4px;">Results published at school/team aggregate level; student PII is never exposed on public pages.</p>
                </div>
              </div>
            </div>
            <div style="border-top: 1px solid var(--border); padding-top: 10px; font-family: var(--font-mono); font-size: 10.5px; color: var(--primary); font-weight: 700;">
              OWNERSHIP: ORGANISING COMMITTEE + LEGAL/ADVISORY SIGN-OFF REQUIRED PRIOR TO PHASE 3
            </div>
          </div>

          <!-- Right: Technical Stack & Explicit Gate -->
          <div style="display: flex; flex-direction: column; justify-content: space-between; gap: 18px;">
            <div class="card-navy" style="padding: 24px;">
              <div class="font-mono" style="font-size: 11px; font-weight: 700; color: var(--accent);">EXPLICIT PRODUCTION GATE // NON-NEGOTIABLE POLICY</div>
              <blockquote class="font-display" style="font-size: 23px; font-weight: 700; color: #ffffff; margin-top: 10px; line-height: 1.25; border-left: 3px solid var(--accent); padding-left: 16px;">
                "Production student registration remains disabled until formal Safeguarding Policy, Privacy Notice, Authentication, and Row-Level Security (RLS) are signed off."
              </blockquote>
              <p style="font-size: 12.5px; color: #cbd5e1; margin-top: 12px; line-height: 1.5;">
                The public website and admin readiness shell operate purely for institutional information, school expressions of interest, and sponsor enquiries until all legal and technical controls are verified.
              </p>
            </div>

            <div class="card" style="flex: 1; display: flex; flex-direction: column; justify-content: space-between; border-top: 4px solid var(--stem-teal);">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span class="font-mono" style="font-size: 11.5px; font-weight: 700; color: var(--stem-teal);">GOV-02 // DIGITAL PLATFORM &amp; SECURITY CONTROLS</span>
                  <span class="badge badge-teal">NEXT.JS 15 + SUPABASE</span>
                </div>
                <div class="hairline-box" style="grid-template-columns: 1fr 1fr; margin-top: 14px;">
                  <div class="hairline-cell" style="padding: 12px 14px;">
                    <div class="font-mono" style="font-size: 10.5px; font-weight: 700; color: var(--stem-teal);">PUBLIC WEB PORTAL</div>
                    <p style="font-size: 11.5px; color: var(--muted); margin-top: 4px;">Next.js 15 App Router, TypeScript, Tailwind CSS v4 on Vercel. Zero unauthenticated access to application data.</p>
                  </div>
                  <div class="hairline-cell" style="padding: 12px 14px;">
                    <div class="font-mono" style="font-size: 10.5px; font-weight: 700; color: var(--stem-teal);">AUTHENTICATED ADMIN &amp; RLS</div>
                    <p style="font-size: 11.5px; color: var(--muted); margin-top: 4px;">Planned Supabase backend with strict Role-Based Access Control (RBAC), Row-Level Security, and audit logs.</p>
                  </div>
                </div>
              </div>
              <div style="border-top: 1px solid var(--border); padding-top: 10px; font-family: var(--font-mono); font-size: 10.5px; color: var(--muted);">
                SERVER ACTIONS ONLY FOR MUTATIONS • ENVIRONMENT SECRETS ISOLATED • ZERO PUBLIC PII ENDPOINTS
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="slide-footer">
        <span>SURULERE TEENS DEBATE &amp; STEM CHAMPIONSHIP (STDSC) // SAFEGUARDING &amp; TECHNICAL CONTROLS</span>
        <span>REFERENCE: DOCS/SAFEGUARDING_AND_PRIVACY.MD</span>
        <span>SLIDE 07 / 10</span>
      </div>
    </div>
  </section>

  <!-- ==================== SLIDE 08: SPONSORSHIP TIERS & PATRONAGE ==================== -->
  <section class="slide">
    <div class="slide-pad">
      <div>
        <div class="slide-header">
          <div>
            <div class="kicker">§ 07 / CORPORATE &amp; INSTITUTIONAL PATRONAGE</div>
            <h2 class="slide-title">Indicative sponsorship schedule and targeted STEM contributions.</h2>
          </div>
          <div class="slide-subtitle-right">
            Investment levels and exact deliverables will be finalised once event scale and costs are confirmed.
          </div>
        </div>

        <!-- 4-Column Sponsorship Tier Matrix -->
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; height: 375px;">
          <!-- Tier 1: Featured Navy -->
          <div class="card-navy" style="display: flex; flex-direction: column; justify-content: space-between; border-top: 4px solid var(--accent);">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.18); padding-bottom: 8px;">
                <span class="font-mono" style="font-size: 11px; font-weight: 700; color: var(--accent);">TIER 01</span>
                <span class="font-mono" style="font-size: 10px; color: #cbd5e1;">PRIMARY PARTNER</span>
              </div>
              <h3 class="font-display" style="font-size: 22px; font-weight: 700; color: #ffffff; margin-top: 10px;">Title / Presenting</h3>
              <div class="font-mono" style="font-size: 10px; color: var(--accent); margin-top: 3px;">INVESTMENT SCOPE: TBC</div>
              <ul style="list-style: none; margin-top: 14px; display: flex; flex-direction: column; gap: 9px; font-size: 12px; color: #e2e8f0;">
                <li><strong class="font-mono" style="color: var(--accent);">01.</strong> Headline championship naming rights recognition</li>
                <li><strong class="font-mono" style="color: var(--accent);">02.</strong> Premier logo placement across all Debate &amp; STEM stages</li>
                <li><strong class="font-mono" style="color: var(--accent);">03.</strong> Keynote &amp; grand finale award presentation</li>
                <li><strong class="font-mono" style="color: var(--accent);">04.</strong> Flagship Young Leaders Network &amp; STEM Lab integration</li>
              </ul>
            </div>
            <div style="border-top: 1px solid rgba(255,255,255,0.18); padding-top: 8px; font-family: var(--font-mono); font-size: 10px; color: var(--accent);">
              EXCLUSIVE HEADLINE POSITIONING
            </div>
          </div>

          <!-- Tier 2: Gold -->
          <div class="card" style="display: flex; flex-direction: column; justify-content: space-between; border-top: 4px solid var(--accent);">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
                <span class="font-mono" style="font-size: 11px; font-weight: 700; color: var(--amber-dark);">TIER 02</span>
                <span class="font-mono" style="font-size: 10px; color: var(--muted);">TRACK CO-SPONSOR</span>
              </div>
              <h3 class="font-display" style="font-size: 22px; font-weight: 700; color: var(--foreground); margin-top: 10px;">Gold Partner</h3>
              <div class="font-mono" style="font-size: 10px; color: var(--muted); margin-top: 3px;">INVESTMENT SCOPE: TBC</div>
              <ul style="list-style: none; margin-top: 14px; display: flex; flex-direction: column; gap: 9px; font-size: 12px; color: var(--foreground);">
                <li><strong class="font-mono" style="color: var(--amber-dark);">01.</strong> Track co-branding (Debate, STEM Olympiad, or Showcase)</li>
                <li><strong class="font-mono" style="color: var(--amber-dark);">02.</strong> Prominent logo on stage backdrops, website &amp; packs</li>
                <li><strong class="font-mono" style="color: var(--amber-dark);">03.</strong> On-site exhibition presence &amp; press mentions</li>
                <li><strong class="font-mono" style="color: var(--amber-dark);">04.</strong> Track award presentation rights</li>
              </ul>
            </div>
            <div style="border-top: 1px solid var(--border); padding-top: 8px; font-family: var(--font-mono); font-size: 10px; color: var(--amber-dark);">
              MAJOR ARENA CO-BRANDING
            </div>
          </div>

          <!-- Tier 3: Silver -->
          <div class="card" style="display: flex; flex-direction: column; justify-content: space-between; border-top: 4px solid var(--stem-teal);">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
                <span class="font-mono" style="font-size: 11px; font-weight: 700; color: var(--stem-teal);">TIER 03</span>
                <span class="font-mono" style="font-size: 10px; color: var(--muted);">PROGRAMME PARTNER</span>
              </div>
              <h3 class="font-display" style="font-size: 22px; font-weight: 700; color: var(--foreground); margin-top: 10px;">Silver Partner</h3>
              <div class="font-mono" style="font-size: 10px; color: var(--muted); margin-top: 3px;">INVESTMENT SCOPE: TBC</div>
              <ul style="list-style: none; margin-top: 14px; display: flex; flex-direction: column; gap: 9px; font-size: 12px; color: var(--foreground);">
                <li><strong class="font-mono" style="color: var(--stem-teal);">01.</strong> Logo placement on official website &amp; selected materials</li>
                <li><strong class="font-mono" style="color: var(--stem-teal);">02.</strong> Formal recognition during awards ceremony</li>
                <li><strong class="font-mono" style="color: var(--stem-teal);">03.</strong> Opportunity to nominate qualified technical judges or mentors</li>
              </ul>
            </div>
            <div style="border-top: 1px solid var(--border); padding-top: 8px; font-family: var(--font-mono); font-size: 10px; color: var(--stem-teal);">
              TECHNICAL &amp; MENTORSHIP ENGAGEMENT
            </div>
          </div>

          <!-- Tier 4: Bronze -->
          <div class="card" style="display: flex; flex-direction: column; justify-content: space-between; border-top: 4px solid var(--primary);">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
                <span class="font-mono" style="font-size: 11px; font-weight: 700; color: var(--primary);">TIER 04</span>
                <span class="font-mono" style="font-size: 10px; color: var(--muted);">CONTRIBUTING PARTNER</span>
              </div>
              <h3 class="font-display" style="font-size: 22px; font-weight: 700; color: var(--foreground); margin-top: 10px;">Bronze / Supporter</h3>
              <div class="font-mono" style="font-size: 10px; color: var(--muted); margin-top: 3px;">INVESTMENT SCOPE: TBC</div>
              <ul style="list-style: none; margin-top: 14px; display: flex; flex-direction: column; gap: 9px; font-size: 12px; color: var(--foreground);">
                <li><strong class="font-mono" style="color: var(--primary);">01.</strong> Official website partner roster listing</li>
                <li><strong class="font-mono" style="color: var(--primary);">02.</strong> Certificate of institutional appreciation</li>
                <li><strong class="font-mono" style="color: var(--primary);">03.</strong> Acknowledgement in post-event impact report</li>
              </ul>
            </div>
            <div style="border-top: 1px solid var(--border); padding-top: 8px; font-family: var(--font-mono); font-size: 10px; color: var(--primary);">
              COMMUNITY PATRONAGE TIER
            </div>
          </div>
        </div>

        <!-- Bottom Targeted & In-Kind Support Ledger -->
        <div class="card-stone" style="margin-top: 18px; padding: 18px 22px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <span class="font-mono" style="font-size: 11px; font-weight: 700; color: var(--primary);">TARGETED &amp; IN-KIND SUPPORT OPPORTUNITIES (SUBJECT TO SAFEGUARDING &amp; FAIRNESS POLICIES)</span>
            <span class="badge badge-brass">CUSTOM PARTNERSHIP SCOPES</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
            <div style="border-left: 3px solid var(--stem-teal); padding-left: 12px;">
              <div style="font-size: 13.5px; font-weight: 700; color: var(--foreground);">01. STEM Kits &amp; School Lab Grants</div>
              <p style="font-size: 12px; color: var(--muted); margin-top: 3px;">Microcontrollers, robotics kits, scientific calculators, or lab equipment for participating schools.</p>
            </div>
            <div style="border-left: 3px solid var(--primary); padding-left: 12px;">
              <div style="font-size: 13.5px; font-weight: 700; color: var(--foreground);">02. YLN &amp; STEM Lab Workshop Hosting</div>
              <p style="font-size: 12px; color: var(--muted); margin-top: 3px;">Sponsor or host a coding bootcamp, engineering facility tour, or debate masterclass for inducted fellows.</p>
            </div>
            <div style="border-left: 3px solid var(--accent); padding-left: 12px;">
              <div style="font-size: 13.5px; font-weight: 700; color: var(--foreground);">03. In-Kind &amp; Named Category Awards</div>
              <p style="font-size: 12px; color: var(--muted); margin-top: 3px;">Venue hosting, printing, educational prizes, or named awards across Debate, Olympiad, and Showcase tracks.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="slide-footer">
        <span>SURULERE TEENS DEBATE &amp; STEM CHAMPIONSHIP (STDSC) // SPONSOR PACKAGE OUTLINE</span>
        <span>THIS OUTLINE IS STRUCTURAL ONLY; FINAL PACKAGES WILL BE ISSUED BY THE ORGANISING TEAM</span>
        <span>SLIDE 08 / 10</span>
      </div>
    </div>
  </section>

  <!-- ==================== SLIDE 09: BUDGET FRAMEWORK & IMPLEMENTATION ROADMAP ==================== -->
  <section class="slide">
    <div class="slide-pad">
      <div>
        <div class="slide-header">
          <div>
            <div class="kicker">§ 08 / FINANCIAL GOVERNANCE &amp; EXECUTION ROADMAP</div>
            <h2 class="slide-title">Budget framework and four-phase implementation roadmap.</h2>
          </div>
          <div class="slide-subtitle-right">
            Transparent cost stewardship paired with a gated delivery sequence from digital foundations to live event operations.
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 5.5fr 6.5fr; gap: 24px; height: 555px;">
          <!-- Left: Budget Framework -->
          <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="font-mono" style="font-size: 11.5px; font-weight: 700; color: var(--primary);">FIN-01 // HIGH-LEVEL BUDGET ARCHITECTURE</span>
                <span class="badge badge-stone">FIGURES TBC</span>
              </div>
              <h3 class="font-display" style="font-size: 21px; font-weight: 700; margin-top: 8px;">
                Cost &amp; Revenue Categories (No Invented Naira Figures)
              </h3>

              <div style="margin-top: 12px; display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 11.5px;">
                <div style="background: var(--secondary); padding: 8px 11px; border-radius: 3px;">
                  <strong class="font-mono" style="color: var(--primary); font-size: 10px;">COST 01 / VENUE &amp; LOGISTICS</strong>
                  <div style="color: var(--muted); margin-top: 2px;">Hall hire, seating, power, security, cleaning</div>
                </div>
                <div style="background: var(--secondary); padding: 8px 11px; border-radius: 3px;">
                  <strong class="font-mono" style="color: var(--primary); font-size: 10px;">COST 02 / ADJUDICATION</strong>
                  <div style="color: var(--muted); margin-top: 2px;">Adjudicator &amp; judge expenses, briefing sessions</div>
                </div>
                <div style="background: var(--secondary); padding: 8px 11px; border-radius: 3px;">
                  <strong class="font-mono" style="color: var(--primary); font-size: 10px;">COST 03 / MATERIALS &amp; AWARDS</strong>
                  <div style="color: var(--muted); margin-top: 2px;">Ballots, certificates, trophies, printed packs</div>
                </div>
                <div style="background: var(--secondary); padding: 8px 11px; border-radius: 3px;">
                  <strong class="font-mono" style="color: var(--primary); font-size: 10px;">COST 04 / TECHNOLOGY &amp; AV</strong>
                  <div style="color: var(--muted); margin-top: 2px;">Domain, hosting, buzzer systems, stage AV</div>
                </div>
                <div style="background: var(--secondary); padding: 8px 11px; border-radius: 3px;">
                  <strong class="font-mono" style="color: var(--primary); font-size: 10px;">COST 05 / SAFEGUARDING</strong>
                  <div style="color: var(--muted); margin-top: 2px;">Policy support, compliance checks &amp; training</div>
                </div>
                <div style="background: var(--secondary); padding: 8px 11px; border-radius: 3px;">
                  <strong class="font-mono" style="color: var(--primary); font-size: 10px;">COST 06 / COMMUNICATIONS</strong>
                  <div style="color: var(--muted); margin-top: 2px;">Design, printing &amp; school outreach materials</div>
                </div>
                <div style="background: var(--secondary); padding: 8px 11px; border-radius: 3px;">
                  <strong class="font-mono" style="color: var(--primary); font-size: 10px;">COST 07 / YLN &amp; STEM LABS</strong>
                  <div style="color: var(--muted); margin-top: 2px;">Follow-on coding/robotics workshops &amp; kits</div>
                </div>
                <div style="background: var(--secondary); padding: 8px 11px; border-radius: 3px;">
                  <strong class="font-mono" style="color: var(--primary); font-size: 10px;">COST 08 / CONTINGENCY</strong>
                  <div style="color: var(--muted); margin-top: 2px;">Dedicated buffer for unexpected operational costs</div>
                </div>
              </div>

              <div style="margin-top: 14px; border-top: 1px solid var(--border); padding-top: 12px;">
                <div class="font-mono" style="font-size: 10.5px; font-weight: 700; color: var(--stem-teal); margin-bottom: 6px;">REVENUE &amp; SUPPORT STREAMS</div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 11.5px; color: var(--foreground);">
                  <div>• <strong>Tiered Sponsorships</strong> (Primary support)</div>
                  <div>• <strong>Grants &amp; Institutional Aid</strong> (Where available)</div>
                  <div>• <strong>In-Kind Support</strong> (Venue, print, prizes)</div>
                  <div>• <strong>School Participation</strong> (TBC; kept accessible)</div>
                </div>
              </div>
            </div>
            <div style="border-top: 1px solid var(--border); padding-top: 8px; font-family: var(--font-mono); font-size: 10px; color: var(--muted);">
              PRINCIPLES: SPONSOR TRANSPARENCY • PARTICIPANT SAFETY FIRST • POST-EDITION AUDIT
            </div>
          </div>

          <!-- Right: 5-Phase Implementation Roadmap -->
          <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="font-mono" style="font-size: 11.5px; font-weight: 700; color: var(--stem-teal);">OPS-02 // PHASED IMPLEMENTATION ROADMAP</span>
                <span class="badge badge-teal">GATED EXECUTION</span>
              </div>
              <h3 class="font-display" style="font-size: 21px; font-weight: 700; margin-top: 8px;">
                From Digital Foundations to Annual Championship Cycle
              </h3>

              <div style="margin-top: 12px; display: flex; flex-direction: column; gap: 10px;">
                <div style="display: grid; grid-template-columns: 135px 1fr; gap: 12px; align-items: center; background: var(--stem-teal-soft); border: 1px solid rgba(14,90,99,0.3); padding: 10px 14px; border-radius: 4px;">
                  <span class="font-mono" style="font-size: 10.5px; font-weight: 700; color: var(--stem-teal);">PHASE 0 [DONE]</span>
                  <div style="font-size: 12px; color: var(--foreground);">
                    <strong>Foundations:</strong> Public website (Home, Format, Schools, Sponsors, YLN, Policies, Contact), admin shell, and core documentation set.
                  </div>
                </div>

                <div style="display: grid; grid-template-columns: 135px 1fr; gap: 12px; align-items: center; background: var(--secondary); border: 1px solid var(--border); padding: 10px 14px; border-radius: 4px;">
                  <span class="font-mono" style="font-size: 10.5px; font-weight: 700; color: var(--amber-dark);">PHASE 1 [ACTIVE]</span>
                  <div style="font-size: 12px; color: var(--foreground);">
                    <strong>Content &amp; Governance:</strong> Confirm dates, venue, organisers &amp; contacts; approve Safeguarding Policy &amp; Privacy Notice; finalise rulebook &amp; sponsor packages.
                  </div>
                </div>

                <div style="display: grid; grid-template-columns: 135px 1fr; gap: 12px; align-items: center; background: var(--secondary); border: 1px solid var(--border); padding: 10px 14px; border-radius: 4px;">
                  <span class="font-mono" style="font-size: 10.5px; font-weight: 700; color: var(--primary);">PHASE 2 [PLANNED]</span>
                  <div style="font-size: 12px; color: var(--foreground);">
                    <strong>Secure Backend:</strong> Supabase project, admin authentication, Role-Based Access Control (RBAC), Row-Level Security (RLS), and database schemas.
                  </div>
                </div>

                <div style="display: grid; grid-template-columns: 135px 1fr; gap: 12px; align-items: center; background: var(--secondary); border: 1px solid var(--border); padding: 10px 14px; border-radius: 4px;">
                  <span class="font-mono" style="font-size: 10.5px; font-weight: 700; color: var(--primary);">PHASE 3 [GATED]</span>
                  <div style="font-size: 12px; color: var(--foreground);">
                    <strong>Registration &amp; Admin Workflows:</strong> Unlocked strictly after Phase 1–2 safeguarding &amp; security checklist sign-off. School applications, sponsor CRM, and motion management.
                  </div>
                </div>

                <div style="display: grid; grid-template-columns: 135px 1fr; gap: 12px; align-items: center; background: var(--secondary); border: 1px solid var(--border); padding: 10px 14px; border-radius: 4px;">
                  <span class="font-mono" style="font-size: 10.5px; font-weight: 700; color: var(--primary);">PHASE 4 [CYCLE]</span>
                  <div style="font-size: 12px; color: var(--foreground);">
                    <strong>Live Operations &amp; YLN Cohort:</strong> Tournament execution, public-safe results publishing, Young Leaders Network induction, and post-event impact reporting.
                  </div>
                </div>
              </div>
            </div>
            <div style="border-top: 1px solid var(--border); padding-top: 8px; font-family: var(--font-mono); font-size: 10px; color: var(--stem-teal);">
              REFERENCE: DOCS/BUDGET_FRAMEWORK.MD &amp; DOCS/IMPLEMENTATION_ROADMAP.MD
            </div>
          </div>
        </div>
      </div>

      <div class="slide-footer">
        <span>SURULERE TEENS DEBATE &amp; STEM CHAMPIONSHIP (STDSC) // BUDGET &amp; ROADMAP</span>
        <span>DETAILED LINE-ITEM BUDGET PREPARED ONCE DATES, VENUE &amp; SCALE ARE CONFIRMED</span>
        <span>SLIDE 09 / 10</span>
      </div>
    </div>
  </section>

  <!-- ==================== SLIDE 10: IMPACT METRICS & CALL TO ACTION ==================== -->
  <section class="slide" style="background: #071326; color: #ffffff;">
    <div class="slide-pad">
      <div>
        <div class="slide-header" style="border-bottom-color: rgba(255,255,255,0.2);">
          <div>
            <div class="kicker" style="color: var(--accent);">§ 09 / MEASURABLE IMPACT &amp; PARTNERSHIP NEXT STEPS</div>
            <h2 class="slide-title" style="color: #ffffff;">Partner with STDSC to invest in youth intellect and STEM capability.</h2>
          </div>
          <div class="slide-subtitle-right" style="color: #cbd5e1;">
            Join corporate sponsors, engineering firms, educational foundations, and secondary schools shaping Surulere's flagship academic arena.
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 7fr 5fr; gap: 28px; height: 550px;">
          <!-- Left: 5 Success Indicators & Partnership Process -->
          <div style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div class="font-mono" style="font-size: 11.5px; font-weight: 700; color: var(--accent); margin-bottom: 12px;">
                PROGRAMME SUCCESS INDICATORS (MASTER PROPOSAL § 8)
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); padding: 14px 16px; border-radius: 4px;">
                  <div class="font-mono" style="font-size: 10.5px; color: var(--accent); font-weight: 700;">KPI-01 / SCHOOL &amp; SQUAD REACH</div>
                  <p style="font-size: 12.5px; color: #e2e8f0; margin-top: 5px;">Number of participating Surulere &amp; Lagos secondary schools, debate squads, Olympiad teams, and showcase prototypes.</p>
                </div>
                <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); padding: 14px 16px; border-radius: 4px;">
                  <div class="font-mono" style="font-size: 10.5px; color: var(--accent); font-weight: 700;">KPI-02 / ACADEMIC &amp; TECHNICAL RIGOR</div>
                  <p style="font-size: 12.5px; color: #e2e8f0; margin-top: 5px;">Measured quality of parliamentary floor debates, Olympiad analytical scores, and working STEM prototypes.</p>
                </div>
                <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); padding: 14px 16px; border-radius: 4px;">
                  <div class="font-mono" style="font-size: 10.5px; color: var(--accent); font-weight: 700;">KPI-03 / YLN FELLOWSHIP RETENTION</div>
                  <p style="font-size: 12.5px; color: #e2e8f0; margin-top: 5px;">Retention and progression of inducted students in the post-event Young Leaders Network &amp; STEM Labs.</p>
                </div>
                <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); padding: 14px 16px; border-radius: 4px;">
                  <div class="font-mono" style="font-size: 10.5px; color: var(--accent); font-weight: 700;">KPI-04 / ZERO SAFEGUARDING INCIDENTS</div>
                  <p style="font-size: 12.5px; color: #e2e8f0; margin-top: 5px;">100% policy compliance, zero serious safeguarding or laboratory safety incidents, and full data protection.</p>
                </div>
              </div>
              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); padding: 12px 16px; border-radius: 4px; margin-top: 12px; display: flex; justify-content: space-between; align-items: center; gap: 16px;">
                <div>
                  <div class="font-mono" style="font-size: 10.5px; color: var(--accent); font-weight: 700;">KPI-05 / SPONSOR STEWARDSHIP &amp; TRANSPARENT IMPACT REPORTING</div>
                  <p style="font-size: 12px; color: #e2e8f0; margin-top: 4px;">Post-edition audit of funds, school STEM kit distribution verification, and published aggregate championship outcomes.</p>
                </div>
                <span class="badge" style="background: rgba(200,150,30,0.2); border: 1px solid var(--accent); color: #fde68a; white-space: nowrap;">ANNUAL AUDIT</span>
              </div>
            </div>

            <!-- 4-Step Engagement Process -->
            <div style="background: #0d213f; border: 1px solid rgba(200,150,30,0.4); border-radius: 5px; padding: 20px 22px;">
              <div class="font-mono" style="font-size: 11px; font-weight: 700; color: var(--accent); text-transform: uppercase;">
                NEXT STEPS // HOW TO ENGAGE WITH STDSC
              </div>
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 12px;">
                <div>
                  <div class="font-mono" style="font-size: 10px; color: var(--accent); font-weight: 700;">01. ENQUIRE</div>
                  <p style="font-size: 11.5px; color: #cbd5e1; margin-top: 4px;">Submit Sponsor, School, or Mentor interest via the Contact Desk.</p>
                </div>
                <div>
                  <div class="font-mono" style="font-size: 10px; color: var(--accent); font-weight: 700;">02. BRIEFING</div>
                  <p style="font-size: 11.5px; color: #cbd5e1; margin-top: 4px;">Receive current Sponsor Package outline or School Delegation Guide.</p>
                </div>
                <div>
                  <div class="font-mono" style="font-size: 10px; color: var(--accent); font-weight: 700;">03. ALIGNMENT</div>
                  <p style="font-size: 11.5px; color: #cbd5e1; margin-top: 4px;">Agree track scope, STEM kit grants, or school squad registration.</p>
                </div>
                <div>
                  <div class="font-mono" style="font-size: 10px; color: var(--accent); font-weight: 700;">04. FULFILMENT</div>
                  <p style="font-size: 11.5px; color: #cbd5e1; margin-top: 4px;">Public partner recognition, tournament delivery &amp; impact report.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Trophy Visual & Placeholder Disclosure -->
          <div style="display: flex; flex-direction: column; justify-content: space-between; gap: 16px;">
            <div class="photo-frame" style="border-color: rgba(255,255,255,0.2); background: #0d213f;">
              <img src="${imgUrl("sponsors-impact.jpg")}" alt="STDSC Championship Trophy" style="height: 290px;" />
              <div class="photo-caption" style="background: #0d213f; color: #cbd5e1; border-top-color: rgba(255,255,255,0.15);">
                FIG 9.1 / INSTITUTIONAL PATRONAGE &amp; ACADEMIC DISTINCTION
              </div>
            </div>

            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.2); border-radius: 5px; padding: 18px 20px;">
              <div class="font-mono" style="font-size: 11px; font-weight: 700; color: var(--accent); text-transform: uppercase;">
                TRANSPARENCY &amp; PLACEHOLDER DISCLOSURE
              </div>
              <p style="font-size: 12px; color: #cbd5e1; margin-top: 6px; line-height: 1.5;">
                Event dates, physical venue in Surulere, organising committee roster, official contact email/phone, confirmed sponsor emblems, and specific Naira budget figures remain explicitly marked as placeholders until formally confirmed.
              </p>
              <div class="font-mono" style="font-size: 11px; color: #ffffff; margin-top: 10px;">
                WEB PORTAL: /sponsors • /schools • /format • /young-leaders • /policies • /contact
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="slide-footer" style="border-top-color: rgba(255,255,255,0.2); color: #94a3b8;">
        <span>SURULERE TEENS DEBATE &amp; STEM CHAMPIONSHIP (STDSC) // CLOSING &amp; NEXT STEPS</span>
        <span>ALL RIGHTS RESERVED BY THE ORGANISING BODY (TO BE CONFIRMED)</span>
        <span>SLIDE 10 / 10</span>
      </div>
    </div>
  </section>

</body>
</html>`;
}

function buildBmcHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>STDSC // Business Model Canvas</title>
  <style>
    ${BASE_CSS}
    .bmc-grid {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: 270px 260px 185px;
      gap: 1px;
      background: var(--border-strong);
      border: 1.5px solid var(--primary);
      border-radius: 4px;
      overflow: hidden;
    }
    .bmc-cell {
      background: var(--surface);
      padding: 13px 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .bmc-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 6px;
      margin-bottom: 8px;
    }
    .bmc-code {
      font-family: var(--font-mono);
      font-size: 9px;
      font-weight: 800;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .bmc-title {
      font-family: var(--font-display);
      font-size: 13.5px;
      font-weight: 700;
      color: var(--foreground);
      white-space: nowrap;
    }
    .bmc-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 5.5px;
      font-size: 11px;
      line-height: 1.38;
      color: #1e293b;
    }
    .bmc-list li strong {
      color: var(--foreground);
    }
    .bmc-foot {
      font-family: var(--font-mono);
      font-size: 9px;
      color: var(--muted);
      border-top: 1px solid var(--border);
      padding-top: 5px;
      margin-top: 6px;
      text-transform: uppercase;
    }
  </style>
</head>
<body>

  <!-- ==================== PAGE 01: 9-BLOCK BUSINESS MODEL CANVAS ==================== -->
  <section class="slide">
    <div class="slide-pad" style="padding: 28px 44px 24px 44px;">
      <!-- Top Header -->
      <div style="display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 2px solid var(--primary); padding-bottom: 10px; margin-bottom: 12px;">
        <div>
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="background: var(--primary); color: #fff; font-family: var(--font-mono); font-size: 10.5px; font-weight: 800; padding: 3px 8px; border-radius: 2px;">STDSC // BMC-01</span>
            <span class="kicker" style="font-size: 10.5px;">PROGRAMME &amp; INSTITUTIONAL BUSINESS MODEL CANVAS (WORKING DRAFT)</span>
          </div>
          <h1 class="font-display" style="font-size: 27px; font-weight: 700; color: var(--foreground); margin-top: 4px;">
            Surulere Teens Debate &amp; STEM Championship &amp; Young Leaders Network
          </h1>
        </div>
        <div style="text-align: right; font-family: var(--font-mono); font-size: 10px; color: var(--muted); line-height: 1.45;">
          <div><strong>JURISDICTION:</strong> SURULERE LGA &amp; INVITED LAGOS SCHOOLS</div>
          <div><strong>STATUS:</strong> ARCHITECTURE CONFIRMED // DATES, VENUE &amp; FIGURES TBC</div>
        </div>
      </div>

      <!-- 9-Block Osterwalder Business Model Canvas Grid -->
      <div class="bmc-grid">
        <!-- 1. Key Partners (Cols 1-2, Rows 1-2) -->
        <div class="bmc-cell" style="grid-column: 1 / 3; grid-row: 1 / 3;">
          <div>
            <div class="bmc-head">
              <span class="bmc-title">Key Partners</span>
              <span class="bmc-code" style="color: var(--primary);">01 / PARTNERS</span>
            </div>
            <ul class="bmc-list">
              <li><strong>• Secondary Schools (Surulere &amp; Lagos):</strong> School Principals, Designated Teacher Coordinators, Debate Coaches &amp; Science/STEM Teachers nominating squads.</li>
              <li><strong>• Corporate &amp; Tech Patrons (TBC):</strong> Engineering firms, banks, telecoms &amp; tech foundations backing Title, Gold, Silver &amp; Bronze tiers.</li>
              <li><strong>• Adjudicators &amp; Technical Judges:</strong> Trained parliamentary debate adjudicators, university scholars, STEM educators &amp; practising engineers.</li>
              <li><strong>• YLN Mentors &amp; Lab Hosts:</strong> Coding academies, robotics labs, legal/policy professionals &amp; civic leaders hosting post-event sessions.</li>
              <li><strong>• Civic &amp; Venue Partners (TBC):</strong> Host auditorium authorities, safety inspectors, AV/printing vendors &amp; educational foundations.</li>
            </ul>
          </div>
          <div class="bmc-foot">COALITION: SCHOOLS + SPONSORS + JUDGES</div>
        </div>

        <!-- 2. Key Activities (Cols 3-4, Row 1) -->
        <div class="bmc-cell" style="grid-column: 3 / 5; grid-row: 1 / 2;">
          <div>
            <div class="bmc-head">
              <span class="bmc-title">Key Activities</span>
              <span class="bmc-code" style="color: var(--primary);">02 / ACTIVITIES</span>
            </div>
            <ul class="bmc-list">
              <li><strong>• Multi-Track Tournament Delivery:</strong> Running Parliamentary &amp; Tech Policy Debate (TRK-01), 5-Domain STEM Olympiad (TRK-02) &amp; Innovation Showcase (TRK-03).</li>
              <li><strong>• Academic &amp; Rubric Design:</strong> Drafting motions, Olympiad problem sets, adjudication rubrics &amp; school briefing packs.</li>
              <li><strong>• Safeguarding &amp; Lab Safety Gate:</strong> Enforcing child protection, guardian consent, RBAC data security &amp; prototype safety checks.</li>
              <li><strong>• YLN &amp; STEM Labs Operations:</strong> Inducting standout participants into year-round coding, robotics &amp; policy mentorship cohorts.</li>
            </ul>
          </div>
          <div class="bmc-foot">CORE OPS: TOURNAMENT + SAFEGUARDING + LABS</div>
        </div>

        <!-- 3. Key Resources (Cols 3-4, Row 2) -->
        <div class="bmc-cell" style="grid-column: 3 / 5; grid-row: 2 / 3;">
          <div>
            <div class="bmc-head">
              <span class="bmc-title">Key Resources</span>
              <span class="bmc-code" style="color: var(--stem-teal);">03 / RESOURCES</span>
            </div>
            <ul class="bmc-list">
              <li><strong>• Academic &amp; Governance IP:</strong> Competition Rulebook, Debate Rubric (40/40/20), Olympiad Syllabi, Safeguarding Policy &amp; Privacy Framework.</li>
              <li><strong>• Digital Platform Stack:</strong> Next.js 15 + TypeScript + Tailwind v4 public portal, Admin shell &amp; planned Supabase RBAC/RLS database.</li>
              <li><strong>• Human Capital:</strong> Organising Committee (TBC), Named Safeguarding Lead, Adjudication Panel &amp; STEM Technical Judges.</li>
              <li><strong>• Physical &amp; Lab Assets (TBC):</strong> Debate chambers, stage buzzer systems, showcase booths &amp; sponsored school STEM kits.</li>
            </ul>
          </div>
          <div class="bmc-foot">ASSETS: IP + NEXT.JS/SUPABASE + PANELS</div>
        </div>

        <!-- 4. Value Propositions (Cols 5-6, Rows 1-2) - Highlighted -->
        <div class="bmc-cell" style="grid-column: 5 / 7; grid-row: 1 / 3; background: #fcfaf5; border-left: 2px solid var(--accent); border-right: 2px solid var(--accent);">
          <div>
            <div class="bmc-head" style="border-bottom-color: var(--accent);">
              <span class="bmc-title" style="color: var(--primary);">Value Propositions</span>
              <span class="bmc-code" style="color: var(--amber-dark);">04 / VALUE THESIS</span>
            </div>
            <ul class="bmc-list" style="gap: 8px;">
              <li style="background: var(--surface); padding: 7px 9px; border-radius: 3px; border: 1px solid var(--border);">
                <strong style="color: var(--primary); display: block; font-family: var(--font-mono); font-size: 9.5px;">FOR SECONDARY SCHOOLS &amp; STUDENTS</strong>
                A prestigious academic arena uniting humanities debate, quantitative science Olympiad, and applied engineering prototypes under one faculty workflow.
              </li>
              <li style="background: var(--surface); padding: 7px 9px; border-radius: 3px; border: 1px solid var(--border);">
                <strong style="color: var(--stem-teal); display: block; font-family: var(--font-mono); font-size: 9.5px;">YEAR-ROUND TALENT PIPELINE (YLN)</strong>
                Transforms a one-day tournament into sustained coding/robotics bootcamps, policy seminars, and mentorship circles with Nigerian scientists &amp; leaders.
              </li>
              <li style="background: var(--surface); padding: 7px 9px; border-radius: 3px; border: 1px solid var(--border);">
                <strong style="color: var(--amber-dark); display: block; font-family: var(--font-mono); font-size: 9.5px;">FOR CORPORATE &amp; INSTITUTIONAL SPONSORS</strong>
                High-credibility CSR &amp; STEM talent impact in Surulere, Lagos with stage co-branding, judge participation &amp; measurable post-event reporting.
              </li>
              <li style="background: var(--surface); padding: 7px 9px; border-radius: 3px; border: 1px solid var(--border);">
                <strong style="color: var(--primary); display: block; font-family: var(--font-mono); font-size: 9.5px;">GOVERNANCE &amp; PRIVACY GUARANTEE</strong>
                Zero public exposure of student PII; registration strictly gated behind authentication, RBAC &amp; formal child safeguarding sign-off.
              </li>
            </ul>
          </div>
          <div class="bmc-foot" style="color: var(--amber-dark); font-weight: 700;">WHERE ARTICULATE VOICES MEET SCIENTIFIC INQUIRY</div>
        </div>

        <!-- 5. Customer / Stakeholder Relationships (Cols 7-8, Row 1) -->
        <div class="bmc-cell" style="grid-column: 7 / 9; grid-row: 1 / 2;">
          <div>
            <div class="bmc-head">
              <span class="bmc-title">Stakeholder Relationships</span>
              <span class="bmc-code" style="color: var(--primary);">05 / RELATIONS</span>
            </div>
            <ul class="bmc-list">
              <li><strong>• Unified Faculty Point of Contact:</strong> Dedicated relationship with each school's nominated Teacher Coordinator.</li>
              <li><strong>• Safeguarding &amp; Privacy Covenant:</strong> Private guardian consent &amp; zero public student records build institutional trust with parents &amp; principals.</li>
              <li><strong>• Cohort Mentorship &amp; Alumni Network:</strong> Ongoing fellowship engagement via Young Leaders Network &amp; STEM Labs.</li>
              <li><strong>• Partner Stewardship:</strong> Custom sponsor scoping, ceremony recognition &amp; transparent post-edition impact reports.</li>
            </ul>
          </div>
          <div class="bmc-foot">TRUST: FACULTY-LED + SAFEGUARDED</div>
        </div>

        <!-- 6. Channels (Cols 7-8, Row 2) -->
        <div class="bmc-cell" style="grid-column: 7 / 9; grid-row: 2 / 3;">
          <div>
            <div class="bmc-head">
              <span class="bmc-title">Channels</span>
              <span class="bmc-code" style="color: var(--stem-teal);">06 / CHANNELS</span>
            </div>
            <ul class="bmc-list">
              <li><strong>• Official STDSC Web Portal:</strong> Dedicated routes for Format, Schools, Sponsors, Young Leaders, Safeguarding Policies &amp; Contact Desk.</li>
              <li><strong>• School Coordinator Briefings:</strong> Direct outreach to Surulere secondary schools with rulebooks, motion banks &amp; Olympiad practice packs.</li>
              <li><strong>• Live Championship Arenas (Venue TBC):</strong> Debate chambers, Olympiad buzzer auditorium &amp; STEM Innovation Showcase exhibition hall.</li>
              <li><strong>• YLN STEM Labs &amp; Workshops:</strong> Periodic in-person &amp; seminar sessions hosted with partner institutions.</li>
            </ul>
          </div>
          <div class="bmc-foot">DELIVERY: WEB PORTAL + SCHOOL PACKS + LIVE ARENA</div>
        </div>

        <!-- 7. Customer / Beneficiary Segments (Cols 9-10, Rows 1-2) -->
        <div class="bmc-cell" style="grid-column: 9 / 11; grid-row: 1 / 3;">
          <div>
            <div class="bmc-head">
              <span class="bmc-title">Target Segments</span>
              <span class="bmc-code" style="color: var(--primary);">07 / SEGMENTS</span>
            </div>
            <ul class="bmc-list" style="gap: 8px;">
              <li>
                <strong style="color: var(--primary); display: block;">SEG-A / Secondary Schools (Primary)</strong>
                Public and private secondary schools in Surulere LGA and invited Lagos districts, represented by Principals, Teacher Coordinators, Debate Coaches &amp; STEM Teachers.
              </li>
              <li>
                <strong style="color: var(--stem-teal); display: block;">SEG-B / Teenage Student Participants</strong>
                Secondary school debaters, quantitative Olympiad scholars (Maths, Physics, Chemistry, Biology, Computing) &amp; student hardware/software builders (exact age bands TBC).
              </li>
              <li>
                <strong style="color: var(--amber-dark); display: block;">SEG-C / Corporate &amp; Institutional Patrons</strong>
                Corporations, engineering &amp; technology companies, financial institutions, educational foundations &amp; civic bodies investing in Lagos youth STEM &amp; leadership.
              </li>
            </ul>
          </div>
          <div class="bmc-foot">MULTI-SIDED CIVIC &amp; ACADEMIC ECOSYSTEM</div>
        </div>

        <!-- 8. Cost Structure (Cols 1-5, Row 3) -->
        <div class="bmc-cell" style="grid-column: 1 / 6; grid-row: 3 / 4; background: var(--secondary);">
          <div>
            <div class="bmc-head" style="border-bottom-color: var(--border-strong);">
              <span class="bmc-title">Cost Structure (Budget Framework // Figures TBC)</span>
              <span class="bmc-code" style="color: var(--primary);">08 / COST CATEGORIES</span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; font-size: 10.5px; line-height: 1.35;">
              <div style="background: var(--surface); padding: 6px 8px; border-radius: 3px; border: 1px solid var(--border);">
                <strong class="font-mono" style="color: var(--primary); font-size: 9.5px;">01. VENUE &amp; LOGISTICS</strong>
                <div style="color: var(--muted); margin-top: 2px;">Hall hire, seating, power, security, cleaning</div>
              </div>
              <div style="background: var(--surface); padding: 6px 8px; border-radius: 3px; border: 1px solid var(--border);">
                <strong class="font-mono" style="color: var(--primary); font-size: 9.5px;">02. ADJUDICATION &amp; JUDGES</strong>
                <div style="color: var(--muted); margin-top: 2px;">Panel expenses, training &amp; moderation</div>
              </div>
              <div style="background: var(--surface); padding: 6px 8px; border-radius: 3px; border: 1px solid var(--border);">
                <strong class="font-mono" style="color: var(--primary); font-size: 9.5px;">03. MATERIALS &amp; AWARDS</strong>
                <div style="color: var(--muted); margin-top: 2px;">Trophies, certificates, ballots, school packs</div>
              </div>
              <div style="background: var(--surface); padding: 6px 8px; border-radius: 3px; border: 1px solid var(--border);">
                <strong class="font-mono" style="color: var(--primary); font-size: 9.5px;">04. TECH, AV &amp; SAFEGUARDING</strong>
                <div style="color: var(--muted); margin-top: 2px;">Hosting, buzzers, AV, policy compliance</div>
              </div>
            </div>
          </div>
          <div class="bmc-foot" style="border-top-color: var(--border-strong);">
            ADDITIONAL: COMMUNICATIONS &amp; PRINTING • YOUNG LEADERS NETWORK WORKSHOPS • MANDATORY CONTINGENCY BUFFER
          </div>
        </div>

        <!-- 9. Revenue & Support Streams (Cols 6-10, Row 3) -->
        <div class="bmc-cell" style="grid-column: 6 / 11; grid-row: 3 / 4; background: var(--secondary);">
          <div>
            <div class="bmc-head" style="border-bottom-color: var(--border-strong);">
              <span class="bmc-title">Revenue &amp; Institutional Support Streams (Figures TBC)</span>
              <span class="bmc-code" style="color: var(--stem-teal);">09 / SUSTAINABILITY STREAMS</span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; font-size: 10.5px; line-height: 1.35;">
              <div style="background: var(--surface); padding: 6px 8px; border-radius: 3px; border: 1px solid var(--border);">
                <strong class="font-mono" style="color: var(--amber-dark); font-size: 9.5px;">01. TIERED SPONSORSHIPS</strong>
                <div style="color: var(--muted); margin-top: 2px;">Title, Gold (Track), Silver &amp; Bronze packages</div>
              </div>
              <div style="background: var(--surface); padding: 6px 8px; border-radius: 3px; border: 1px solid var(--border);">
                <strong class="font-mono" style="color: var(--stem-teal); font-size: 9.5px;">02. STEM KIT &amp; LAB GRANTS</strong>
                <div style="color: var(--muted); margin-top: 2px;">School robotics/microcontroller grants &amp; YLN labs</div>
              </div>
              <div style="background: var(--surface); padding: 6px 8px; border-radius: 3px; border: 1px solid var(--border);">
                <strong class="font-mono" style="color: var(--primary); font-size: 9.5px;">03. IN-KIND &amp; NAMED AWARDS</strong>
                <div style="color: var(--muted); margin-top: 2px;">Venue, printing, prizes &amp; category scholarships</div>
              </div>
              <div style="background: var(--surface); padding: 6px 8px; border-radius: 3px; border: 1px solid var(--border);">
                <strong class="font-mono" style="color: var(--primary); font-size: 9.5px;">04. GRANTS &amp; SCHOOL FEES</strong>
                <div style="color: var(--muted); margin-top: 2px;">Institutional grants; school fees TBC (accessible)</div>
              </div>
            </div>
          </div>
          <div class="bmc-foot" style="border-top-color: var(--border-strong);">
            FINANCIAL GOVERNANCE: FULL SPONSOR TRANSPARENCY • PRIORITISE PARTICIPANT EXPERIENCE &amp; SAFEGUARDING OVER NON-ESSENTIAL COSTS
          </div>
        </div>
      </div>

      <div class="slide-footer" style="margin-top: 10px; padding-top: 8px;">
        <span>STDSC BUSINESS MODEL CANVAS // SOURCE OF TRUTH: DOCS/MASTER_PROPOSAL.MD, DOCS/BUDGET_FRAMEWORK.MD &amp; DOCS/SPONSOR_PACKAGE.MD</span>
        <span>PAGE 01 / 02</span>
      </div>
    </div>
  </section>

  <!-- ==================== PAGE 02: OPERATING FLYWHEEL, SPONSOR MATRIX & GOVERNANCE GATES ==================== -->
  <section class="slide">
    <div class="slide-pad" style="padding: 34px 48px 28px 48px;">
      <div>
        <div class="slide-header" style="margin-bottom: 18px; padding-bottom: 12px;">
          <div>
            <div class="kicker">BMC APPENDIX // ECOSYSTEM FLYWHEEL, SPONSORSHIP TIERS &amp; GOVERNANCE GATES</div>
            <h2 class="slide-title" style="font-size: 30px;">How STDSC compounds educational and sponsor value year over year.</h2>
          </div>
          <div class="slide-subtitle-right">
            Companion operating specification to the 9-block Business Model Canvas.
          </div>
        </div>

        <!-- Top Row: 4-Stage Ecosystem Flywheel -->
        <div style="margin-bottom: 20px;">
          <div class="font-mono" style="font-size: 11px; font-weight: 700; color: var(--primary); margin-bottom: 8px;">
            01 // MULTI-STAKEHOLDER ANNUAL VALUE FLYWHEEL
          </div>
          <div class="hairline-box" style="grid-template-columns: repeat(4, 1fr);">
            <div class="hairline-cell" style="border-top: 3px solid var(--primary); padding: 14px 16px;">
              <span class="font-mono" style="font-size: 10px; font-weight: 700; color: var(--primary);">STAGE 01 // SCHOOL MOBILISATION</span>
              <h3 class="font-display" style="font-size: 17px; font-weight: 700; margin-top: 4px;">Faculty-Led Squad Intake</h3>
              <p style="font-size: 11.5px; color: var(--muted); margin-top: 4px; line-height: 1.42;">
                Surulere &amp; invited Lagos secondary schools nominate Debate, Olympiad, and Showcase squads via a single Teacher Coordinator using curriculum-aligned briefing packs.
              </p>
            </div>
            <div class="hairline-cell" style="border-top: 3px solid var(--stem-teal); padding: 14px 16px;">
              <span class="font-mono" style="font-size: 10px; font-weight: 700; color: var(--stem-teal);">STAGE 02 // FLAGSHIP TOURNAMENT</span>
              <h3 class="font-display" style="font-size: 17px; font-weight: 700; margin-top: 4px;">Three-Arena Championship</h3>
              <p style="font-size: 11.5px; color: var(--muted); margin-top: 4px; line-height: 1.42;">
                High-visibility competition across Parliamentary/Tech Policy Debate, 5-Domain STEM Olympiad, and working Prototype Exhibition judged by independent panels.
              </p>
            </div>
            <div class="hairline-cell" style="border-top: 3px solid var(--accent); padding: 14px 16px;">
              <span class="font-mono" style="font-size: 10px; font-weight: 700; color: var(--amber-dark);">STAGE 03 // YLN &amp; STEM LABS</span>
              <h3 class="font-display" style="font-size: 17px; font-weight: 700; margin-top: 4px;">Year-Round Fellowship</h3>
              <p style="font-size: 11.5px; color: var(--muted); margin-top: 4px; line-height: 1.42;">
                Standout debaters, Olympiad finalists, and builders enter safeguarded coding/robotics labs, policy seminars, and mentorship circles, incubating projects.
              </p>
            </div>
            <div class="hairline-cell" style="border-top: 3px solid var(--primary); padding: 14px 16px;">
              <span class="font-mono" style="font-size: 10px; font-weight: 700; color: var(--primary);">STAGE 04 // PATRON ROI &amp; RENEWAL</span>
              <h3 class="font-display" style="font-size: 17px; font-weight: 700; margin-top: 4px;">Measurable Impact &amp; Scale</h3>
              <p style="font-size: 11.5px; color: var(--muted); margin-top: 4px; line-height: 1.42;">
                Verified impact reports, prototype outcomes, and alumni ambassadors attract renewed corporate sponsorships, STEM kit grants, and expanded school participation.
              </p>
            </div>
          </div>
        </div>

        <!-- Bottom Split: Sponsor Tier Table + Governance & Roadmap Gate -->
        <div style="display: grid; grid-template-columns: 6fr 6fr; gap: 22px; height: 365px;">
          <!-- Left: Sponsor Tier Summary Table -->
          <div class="card" style="padding: 16px 20px; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <span class="font-mono" style="font-size: 11px; font-weight: 700; color: var(--primary);">02 // INDICATIVE SPONSORSHIP SCHEDULE (OUTLINE)</span>
                <span class="badge badge-brass">INVESTMENT LEVELS TBC</span>
              </div>
              <table style="width: 100%; border-collapse: collapse; font-size: 11.5px;">
                <thead>
                  <tr style="border-bottom: 1.5px solid var(--primary); text-align: left; font-family: var(--font-mono); font-size: 10px; color: var(--primary);">
                    <th style="padding: 6px 8px 6px 0;">TIER</th>
                    <th style="padding: 6px 8px;">FOCUS</th>
                    <th style="padding: 6px 0 6px 8px;">INDICATIVE DELIVERABLES (TO BE CONFIRMED)</th>
                  </tr>
                </thead>
                <tbody style="divide-y: 1px solid var(--border);">
                  <tr style="border-bottom: 1px solid var(--border);">
                    <td style="padding: 8px 8px 8px 0; font-weight: 700; color: var(--primary);">Title / Presenting</td>
                    <td style="padding: 8px; color: var(--muted);">Primary Partner</td>
                    <td style="padding: 8px 0 8px 8px; color: var(--foreground);">Naming rights, premier stage logos, keynote &amp; grand finale awards, flagship YLN integration.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border);">
                    <td style="padding: 8px 8px 8px 0; font-weight: 700; color: var(--amber-dark);">Gold Partner</td>
                    <td style="padding: 8px; color: var(--muted);">Major Track</td>
                    <td style="padding: 8px 0 8px 8px; color: var(--foreground);">Track co-branding (Debate, Olympiad, or Showcase), backdrop &amp; web logos, exhibition booth.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border);">
                    <td style="padding: 8px 8px 8px 0; font-weight: 700; color: var(--stem-teal);">Silver Partner</td>
                    <td style="padding: 8px; color: var(--muted);">Significant Support</td>
                    <td style="padding: 8px 0 8px 8px; color: var(--foreground);">Website &amp; selected material logos, ceremony recognition, technical judge/mentor nomination.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border);">
                    <td style="padding: 8px 8px 8px 0; font-weight: 700; color: var(--foreground);">Bronze / Supporter</td>
                    <td style="padding: 8px; color: var(--muted);">Contributing</td>
                    <td style="padding: 8px 0 8px 8px; color: var(--foreground);">Official website listing, certificate of appreciation, impact report acknowledgement.</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 8px 8px 0; font-weight: 700; color: var(--stem-teal);">Targeted / In-Kind</td>
                    <td style="padding: 8px; color: var(--muted);">Lab &amp; Event Aid</td>
                    <td style="padding: 8px 0 8px 8px; color: var(--foreground);">School STEM/robotics kits, YLN workshop hosting, venue/print support, named awards.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="font-mono" style="font-size: 9.5px; color: var(--muted); border-top: 1px solid var(--border); padding-top: 8px;">
              ALL SPONSORSHIP &amp; NAMED AWARD AGREEMENTS ARE SUBJECT TO CHILD SAFEGUARDING &amp; ADJUDICATION INDEPENDENCE RULES
            </div>
          </div>

          <!-- Right: Governance Gate & Key Constraints -->
          <div class="card-navy" style="padding: 18px 22px; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.18); padding-bottom: 8px;">
                <span class="font-mono" style="font-size: 11px; font-weight: 700; color: var(--accent);">03 // NON-NEGOTIABLE GOVERNANCE &amp; RISK CONTROLS</span>
                <span class="badge" style="background: rgba(200,150,30,0.2); color: #fde68a; border: 1px solid var(--accent);">MANDATORY GATES</span>
              </div>

              <div style="margin-top: 12px; display: flex; flex-direction: column; gap: 10px; font-size: 12px; color: #e2e8f0;">
                <div style="background: rgba(255,255,255,0.05); padding: 10px 12px; border-radius: 4px; border-left: 3px solid var(--accent);">
                  <strong class="font-mono" style="color: var(--accent); font-size: 10px; display: block;">GATE 01 / STUDENT REGISTRATION &amp; PRIVACY LOCK</strong>
                  Production student registration is disabled until written Safeguarding Policy, Privacy Notice, Supabase Authentication, RBAC, and Row-Level Security (RLS) are formally approved and tested. Student PII is never published on public pages.
                </div>
                <div style="background: rgba(255,255,255,0.05); padding: 10px 12px; border-radius: 4px; border-left: 3px solid #38bdf8;">
                  <strong class="font-mono" style="color: #38bdf8; font-size: 10px; display: block;">GATE 02 / VENUE &amp; PROTOTYPE LABORATORY SAFETY</strong>
                  All STEM Innovation Showcase hardware and experimental models undergo safety screening. Hazardous chemicals, open flames, and unshielded high-voltage rigs are strictly prohibited.
                </div>
                <div style="background: rgba(255,255,255,0.05); padding: 10px 12px; border-radius: 4px; border-left: 3px solid #cbd5e1;">
                  <strong class="font-mono" style="color: #f8fafc; font-size: 10px; display: block;">GATE 03 / PLACEHOLDER INTEGRITY POLICY</strong>
                  Event dates, physical venue, organising body legal name, contact details, confirmed sponsors, and Naira budget figures are explicitly maintained as unconfirmed placeholders until signed off.
                </div>
              </div>
            </div>

            <div class="font-mono" style="font-size: 9.5px; color: #94a3b8; border-top: 1px solid rgba(255,255,255,0.18); padding-top: 8px; display: flex; justify-content: space-between;">
              <span>TECH STACK: NEXT.JS 15 • TYPESCRIPT • TAILWIND V4 • SUPABASE (PLANNED)</span>
              <span>DEPLOY: VERCEL</span>
            </div>
          </div>
        </div>
      </div>

      <div class="slide-footer" style="margin-top: 12px; padding-top: 8px;">
        <span>STDSC BUSINESS MODEL CANVAS // OPERATING MODEL &amp; GOVERNANCE APPENDIX</span>
        <span>PAGE 02 / 02</span>
      </div>
    </div>
  </section>

</body>
</html>`;
}

const TMP_DIR = "/tmp/stdsc-pdf-gen";
fs.mkdirSync(TMP_DIR, { recursive: true });

const pitchHtmlPath = path.join(TMP_DIR, "pitch-deck.html");
const bmcHtmlPath = path.join(TMP_DIR, "business-model-canvas.html");

fs.writeFileSync(pitchHtmlPath, buildPitchDeckHtml(), "utf8");
fs.writeFileSync(bmcHtmlPath, buildBmcHtml(), "utf8");

const CHROME_BIN = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

function renderPdf(htmlPath, outPdfPath) {
  const profileDir = path.join(TMP_DIR, "chrome-profile");
  const crashDir = path.join(TMP_DIR, "chrome-crashes");
  fs.mkdirSync(profileDir, { recursive: true });
  fs.mkdirSync(crashDir, { recursive: true });

  execFileSync(
    CHROME_BIN,
    [
      "--headless",
      "--disable-gpu",
      "--no-sandbox",
      `--user-data-dir=${profileDir}`,
      `--crash-dumps-dir=${crashDir}`,
      "--print-to-pdf-no-header",
      `--print-to-pdf=${outPdfPath}`,
      `file://${htmlPath}`,
    ],
    { stdio: "pipe" }
  );
}

const pitchOutPublic = path.join(OUT_PUBLIC_DIR, "STDSC_Pitch_Deck.pdf");
const bmcOutPublic = path.join(OUT_PUBLIC_DIR, "STDSC_Business_Model_Canvas.pdf");

const pitchOutDocs = path.join(OUT_DOCS_DIR, "STDSC_Pitch_Deck.pdf");
const bmcOutDocs = path.join(OUT_DOCS_DIR, "STDSC_Business_Model_Canvas.pdf");

console.log("Rendering Pitch Deck PDF...");
renderPdf(pitchHtmlPath, pitchOutPublic);
fs.copyFileSync(pitchOutPublic, pitchOutDocs);

console.log("Rendering Business Model Canvas PDF...");
renderPdf(bmcHtmlPath, bmcOutPublic);
fs.copyFileSync(bmcOutPublic, bmcOutDocs);

console.log("Done! Generated files:");
for (const p of [pitchOutPublic, pitchOutDocs, bmcOutPublic, bmcOutDocs]) {
  const stat = fs.statSync(p);
  console.log(` - ${p} (${(stat.size / 1024).toFixed(1)} KB)`);
}
