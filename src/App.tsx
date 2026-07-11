import { useState, useEffect, useRef } from "react";
import profilePhoto from "@/imports/WhatsApp_Image_2026-07-11_at_15.46.17.jpeg";
import cvFile from "@/imports/Azril_Haryo_CV.pdf";

// ── Agritech SVG Illustration ──────────────────────────────────────────────
function AgritechIllustration() {
  return (
    <svg
      viewBox="0 0 420 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Ground */}
      <ellipse
        cx="210"
        cy="340"
        rx="160"
        ry="18"
        fill="#E3DDD4"
      />

      {/* Main plant stem */}
      <path
        d="M210 340 Q208 280 212 220 Q214 170 210 120"
        stroke="#5A7A3A"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Left big leaf */}
      <path
        d="M210 230 Q160 200 140 160 Q180 155 210 200"
        fill="#6A9A42"
        opacity="0.9"
      />
      <path
        d="M210 230 Q172 195 152 160"
        stroke="#4A7A2A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Right big leaf */}
      <path
        d="M210 210 Q265 185 280 145 Q240 138 210 185"
        fill="#7AB84E"
        opacity="0.9"
      />
      <path
        d="M210 210 Q250 180 268 148"
        stroke="#5A8A32"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Left mid leaf */}
      <path
        d="M211 270 Q170 248 155 215 Q190 210 211 248"
        fill="#5A8A38"
        opacity="0.85"
      />

      {/* Right mid leaf */}
      <path
        d="M211 255 Q255 235 270 200 Q235 196 211 232"
        fill="#7FC050"
        opacity="0.85"
      />

      {/* Top bud */}
      <ellipse
        cx="210"
        cy="112"
        rx="14"
        ry="20"
        fill="#E96910"
        opacity="0.9"
      />
      <ellipse
        cx="210"
        cy="106"
        rx="8"
        ry="10"
        fill="#FF8534"
      />

      {/* Data dots overlay — circuit/tech grid */}
      <circle
        cx="148"
        cy="290"
        r="4"
        fill="#E96910"
        opacity="0.6"
      />
      <circle
        cx="148"
        cy="290"
        r="8"
        stroke="#E96910"
        strokeWidth="1"
        opacity="0.3"
      />
      <circle
        cx="272"
        cy="278"
        r="4"
        fill="#E96910"
        opacity="0.6"
      />
      <circle
        cx="272"
        cy="278"
        r="8"
        stroke="#E96910"
        strokeWidth="1"
        opacity="0.3"
      />
      <circle
        cx="180"
        cy="320"
        r="3"
        fill="#5A8A38"
        opacity="0.5"
      />
      <circle
        cx="240"
        cy="315"
        r="3"
        fill="#5A8A38"
        opacity="0.5"
      />

      {/* Connection lines — data/tech feel */}
      <line
        x1="148"
        y1="290"
        x2="180"
        y2="320"
        stroke="#E96910"
        strokeWidth="1"
        strokeDasharray="3 3"
        opacity="0.4"
      />
      <line
        x1="272"
        y1="278"
        x2="240"
        y2="315"
        stroke="#E96910"
        strokeWidth="1"
        strokeDasharray="3 3"
        opacity="0.4"
      />
      <line
        x1="180"
        y1="320"
        x2="240"
        y2="315"
        stroke="#5A8A38"
        strokeWidth="1"
        strokeDasharray="3 3"
        opacity="0.4"
      />

      {/* Small floating data bars — analytics */}
      <rect
        x="60"
        y="200"
        width="6"
        height="30"
        rx="3"
        fill="#E96910"
        opacity="0.5"
      />
      <rect
        x="72"
        y="188"
        width="6"
        height="42"
        rx="3"
        fill="#E96910"
        opacity="0.7"
      />
      <rect
        x="84"
        y="210"
        width="6"
        height="20"
        rx="3"
        fill="#E96910"
        opacity="0.4"
      />
      <text
        x="60"
        y="245"
        fontSize="8"
        fill="#6B6560"
        fontFamily="monospace"
        opacity="0.7"
      >
        DATA
      </text>

      {/* Right side mini chart */}
      <rect
        x="330"
        y="220"
        width="6"
        height="20"
        rx="3"
        fill="#7AB84E"
        opacity="0.5"
      />
      <rect
        x="342"
        y="210"
        width="6"
        height="30"
        rx="3"
        fill="#7AB84E"
        opacity="0.7"
      />
      <rect
        x="354"
        y="215"
        width="6"
        height="25"
        rx="3"
        fill="#7AB84E"
        opacity="0.5"
      />
      <text
        x="328"
        y="255"
        fontSize="8"
        fill="#6B6560"
        fontFamily="monospace"
        opacity="0.7"
      >
        GROW
      </text>

      {/* Wifi/signal waves top right - IoT feel */}
      <path
        d="M340 80 Q360 60 380 80"
        stroke="#E96910"
        strokeWidth="2"
        fill="none"
        opacity="0.4"
        strokeLinecap="round"
      />
      <path
        d="M345 90 Q360 75 375 90"
        stroke="#E96910"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
        strokeLinecap="round"
      />
      <circle
        cx="360"
        cy="97"
        r="3"
        fill="#E96910"
        opacity="0.8"
      />
    </svg>
  );
}

// ── Skill progress bar ─────────────────────────────────────────────────────
function SkillBar({
  name,
  level,
  percent,
}: {
  name: string;
  level: string;
  percent: number;
}) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-baseline mb-2">
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
          }}
          className="text-[var(--color-ink)] text-sm"
        >
          {name}
        </span>
        <span className="text-[10px] text-[var(--color-ink-muted)] uppercase tracking-widest">
          {level}
        </span>
      </div>
      <div className="h-1.5 bg-[var(--color-border)] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-[var(--color-orange)] transition-all duration-1000 ease-out"
          style={{ width: animated ? `${percent}%` : "0%" }}
        />
      </div>
    </div>
  );
}

// ── Floating nav ───────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#about", label: "Tentang" },
    { href: "#skills", label: "Keahlian" },
    { href: "#projects", label: "Proyek" },
    { href: "#contact", label: "Kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[var(--color-cream)]/95 backdrop-blur-md shadow-sm border-b border-[var(--color-border)]"
          : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#top"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
          }}
          className="text-[var(--color-ink)] text-lg tracking-tight"
        >
          AZ
          <span className="text-[var(--color-orange)]">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
              className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-orange)] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
            }}
            className="text-sm bg-[var(--color-orange)] text-white px-5 py-2 rounded-full hover:bg-[var(--color-orange-light)] transition-colors duration-200"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[var(--color-ink)] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--color-ink)] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--color-ink)] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--color-cream)] border-t border-[var(--color-border)] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
              className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-orange)]"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ── Main App ───────────────────────────────────────────────────────────────
export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  const skills = [
    { name: "Lavarel", level: "Menengah", percent: 70 },
    { name: "React / Web Dev", level: "Menengah", percent: 70 },
    {
      name: "Fire Fighting",
      level: "Menengah",
      percent: 75,
    },
    { name: "First Aid", level: "Mahir", percent: 80 },
    { name: "HIRADC", level: "Pemula", percent: 40 },
    { name: "JSA", level: "Pemula", percent: 38 },
    { name: "CSMS", level: "Pemula", percent: 38 },
    { name: "PERMIT TO WORK", level: "Pemula", percent: 38 },
    {
      name: "K3 & Safety Systems",
      level: "Menengah",
      percent: 68,
    },
  ];

  const projects = [
    {
      title: "Maharesigana Dashboard",
      tag: "Web App",
      desc: "Website pelaporan kegiatan,informasi tentang organisasi dan laporan respon bencana yang di lakukan oleh maharesigana.",
      img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop&auto=format",
      color: "#5A8A38",
    },
  ];

  return (
    <div
      id="top"
      className="min-h-screen bg-[var(--color-cream)]"
    >
      <Nav />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Orange accent blob */}
        <div
          className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, var(--color-orange) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left — text */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[var(--color-orange-pale)] border border-[var(--color-orange)]/20 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-orange)]" />
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                  }}
                  className="text-[var(--color-orange)] text-xs uppercase tracking-widest"
                >
                  Tersedia untuk Proyek
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                }}
                className="text-5xl md:text-6xl text-[var(--color-ink)] mb-4"
              >
                Azril Haryo
                <br />
                <span className="text-[var(--color-orange)]">
                  Wicaksono Enkafi
                </span>
              </h1>

              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
                className="text-lg text-[var(--color-ink-muted)] mb-3"
              >
                Keselamatan dan Kesehatan Kerja &amp; Web
                Developer
              </p>

              <p className="text-[var(--color-ink-muted)] leading-relaxed mb-8 max-w-md">
                Membangun solusi teknologi untuk masalah nyata —
                dari pertanian cerdas hingga sistem Keselamatan
                &amp; Kesehatan Kerja yang lebih efisien dan
                terdata.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                  }}
                  className="inline-flex items-center gap-2 bg-[var(--color-orange)] text-white px-7 py-3.5 rounded-full hover:bg-[var(--color-orange-light)] transition-colors duration-200 text-sm"
                >
                  Lihat Proyek
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#contact"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                  }}
                  className="inline-flex items-center gap-2 bg-transparent border border-[var(--color-border)] text-[var(--color-ink)] px-7 py-3.5 rounded-full hover:border-[var(--color-orange)] hover:text-[var(--color-orange)] transition-colors duration-200 text-sm"
                >
                  Hubungi Saya
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-12 pt-8 border-t border-[var(--color-border)]">
                {[
                  { num: "12+", label: "Proyek Selesai" },
                  { num: "3+", label: "Tahun Belajar" },
                  { num: "5+", label: "Sertifikasi" },
                ].map((s) => (
                  <div key={s.label}>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 800,
                      }}
                      className="text-2xl text-[var(--color-ink)]"
                    >
                      {s.num}
                    </p>
                    <p className="text-xs text-[var(--color-ink-muted)] mt-0.5">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — illustration */}
            <div className="hidden md:flex justify-center items-center">
              <div
                className="relative w-[360px] h-[360px] rounded-3xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-cream-dark) 0%, #EDE6D8 100%)",
                }}
              >
                <div className="absolute inset-4">
                  <AgritechIllustration />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────── */}
      <section
        id="about"
        className="py-28 bg-[var(--color-cream-dark)]"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Photo side */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-sm">
                <img
                  src={profilePhoto}
                  alt="Azril Haryo - Fresh Graduate Teknik Informatika, Web Developer & K3"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(28,26,23,0.3) 0%, transparent 50%)",
                  }}
                />
              </div>
              {/* Orange accent block */}
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl -z-10"
                style={{
                  background: "var(--color-orange)",
                  opacity: 0.15,
                }}
              />
              <div
                className="absolute -top-4 -left-4 w-20 h-20 rounded-xl -z-10"
                style={{
                  background: "var(--color-orange)",
                  opacity: 0.1,
                }}
              />
            </div>

            {/* Text side */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                }}
                className="text-[var(--color-orange)] text-xs uppercase tracking-widest mb-4"
              >
                Tentang Saya
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                }}
                className="text-4xl text-[var(--color-ink)] mb-6"
              >
                Teknologi untuk
                <br />
                <span className="text-[var(--color-orange)]">
                  Dampak Nyata
                </span>
              </h2>
              <p className="text-[var(--color-ink-muted)] leading-relaxed mb-5">
                Fresh Graduate Teknik Informatika yang adaptif
                dengan keahlian ganda di bidang pengembangan web
                dan K3 Umum. Berpengalaman membangun serta
                memelihara aplikasi web menggunakan React.js,
                JavaScript, dan Tailwind CSS, termasuk
                mengintegrasikan sistem informasi berbasis peta
                untuk mendukung pemantauan wilayah rawan bencana
                dan lokasi posko secara real-time.
              </p>
              <p className="text-[var(--color-ink-muted)] leading-relaxed mb-8">
                Didukung pemahaman kuat terhadap standar
                keselamatan dan kesehatan kerja (HIRADC, JSA,
                PTW, Safety Inspection) serta pengalaman
                lapangan langsung dalam respons bencana dan
                Satuan Pendidikan Aman Bencana (SPAB). Siap
                membawa kombinasi kemampuan teknis digital dan
                kedisiplinan penerapan regulasi K3 untuk
                membantu perusahaan membangun sistem kerja yang
                aman, efisien, dan berbasis data.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "React.js & Tailwind CSS",
                  "Pengembangan Web",
                  "K3 Umum",
                  "HIRADC & JSA",
                  "GIS / Peta Digital",
                  "Respons Bencana",
                ].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                    }}
                    className="text-xs bg-white border border-[var(--color-border)] text-[var(--color-ink-muted)] px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={cvFile}
                download="Azril_Haryo_CV.pdf"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                }}
                className="inline-flex items-center gap-2 text-sm text-[var(--color-orange)] hover:underline"
              >
                Unduh CV
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M7 2v8M3 7l4 4 4-4M2 12h10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────── */}
      <section id="skills" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
              }}
              className="text-[var(--color-orange)] text-xs uppercase tracking-widest mb-3"
            >
              Keahlian
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                lineHeight: 1.15,
              }}
              className="text-4xl text-[var(--color-ink)]"
            >
              Apa yang Saya Kuasai
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Progress bars */}
            <div className="space-y-7">
              {skills.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>

            {/* Tool/tech icons */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                }}
                className="text-xs text-[var(--color-ink-muted)] uppercase tracking-widest mb-6"
              >
                Tools &amp; Teknologi
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: "🐍", name: "PERMIT TO WORK" },
                  { icon: "🗄️", name: "HIRADC" },
                  { icon: "⚛️", name: "React" },
                  { icon: "📊", name: "CSMS" },
                  { icon: "🔥", name: "Firebase" },
                  { icon: "🤖", name: "JSA" },
                  { icon: "📈", name: "Pandas" },
                  { icon: "🌐", name: "Laravel" },
                  { icon: "🛡️", name: "K3 Systems" },
                ].map((t) => (
                  <div
                    key={t.name}
                    className="bg-[var(--color-cream-dark)] rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-[var(--color-orange-pale)] hover:border-[var(--color-orange)]/20 border border-transparent transition-all duration-200 cursor-default group"
                  >
                    <span className="text-2xl">{t.icon}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                      }}
                      className="text-xs text-[var(--color-ink-muted)] group-hover:text-[var(--color-orange)] transition-colors"
                    >
                      {t.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Focus areas */}
              <div className="mt-8 p-6 bg-[var(--color-cream-dark)] rounded-2xl">
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                  }}
                  className="text-sm text-[var(--color-ink)] mb-4"
                >
                  Bidang Fokus
                </p>
                <div className="space-y-3">
                  {[
                    {
                      icon: "🦺",
                      label:
                        "Keselamatan & Kesehatan Kerja (K3)",
                    },
                    {
                      icon: "💻",
                      label: "Pengembangan Aplikasi Web",
                    },
                  ].map((f) => (
                    <div
                      key={f.label}
                      className="flex items-center gap-3"
                    >
                      <span className="text-base">
                        {f.icon}
                      </span>
                      <span className="text-sm text-[var(--color-ink-muted)]">
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────── */}
      <section
        id="projects"
        className="py-28 bg-[var(--color-cream-dark)]"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                }}
                className="text-[var(--color-orange)] text-xs uppercase tracking-widest mb-3"
              >
                Proyek
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                }}
                className="text-4xl text-[var(--color-ink)]"
              >
                Karya Pilihan
              </h2>
            </div>
            <a
              href="https://github.com/azrilharyo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
              }}
              className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-orange)] transition-colors flex items-center gap-2"
            >
              Semua di GitHub
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-3xl overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[var(--color-ink)]/20" />
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      background: p.color,
                    }}
                    className="absolute top-4 left-4 text-xs text-white px-3 py-1 rounded-full"
                  >
                    {p.tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                    }}
                    className="text-[var(--color-ink)] text-lg mb-2"
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed flex-1">
                    {p.desc}
                  </p>
                  <div className="flex gap-3 mt-5 pt-5 border-t border-[var(--color-border)]">
                    <a
                      href="#"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                      }}
                      className="text-xs text-[var(--color-orange)] hover:underline flex items-center gap-1"
                    ></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────── */}
      <section id="contact" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left — info */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                }}
                className="text-[var(--color-orange)] text-xs uppercase tracking-widest mb-4"
              >
                Kontak
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                }}
                className="text-4xl text-[var(--color-ink)] mb-6"
              >
                Mari Berkolaborasi
              </h2>
              <p className="text-[var(--color-ink-muted)] leading-relaxed mb-10">
                Tertarik bekerja sama atau sekadar ingin
                berbincang tentang teknologi, agritech, atau K3?
                Saya terbuka untuk diskusi, magang, dan proyek
                kolaborasi.
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M2 4h14v10a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm0 0l7 6 7-6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                    label: "Email",
                    value: "haryowicaksonoazril@email.com",
                    href: "mailto:haryowicaksonoazril@gmail.com",
                  },
                  {
                    icon: (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="14"
                          height="14"
                          rx="4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M6 9h6M6 6h2"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    ),
                    label: "LinkedIn",
                    value: "linkedin.com/in/azrilharyo",
                    href: "https://linkedin.com/in/azrilharyo",
                  },
                  {
                    icon: (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M9 2C5.13 2 2 5.13 2 9c0 3.09 2 5.71 4.78 6.64.35.06.48-.15.48-.33v-1.16c-1.95.42-2.36-.94-2.36-.94-.32-.8-.77-1.01-.77-1.01-.63-.43.05-.42.05-.42.7.05 1.06.72 1.06.72.62 1.06 1.63.75 2.02.57.06-.45.24-.75.44-.93-1.56-.18-3.2-.78-3.2-3.47 0-.77.27-1.4.72-1.89-.07-.18-.31-.9.07-1.87 0 0 .59-.19 1.93.72A6.7 6.7 0 019 5.8c.6 0 1.2.08 1.76.23 1.34-.91 1.93-.72 1.93-.72.38.97.14 1.69.07 1.87.45.49.72 1.12.72 1.89 0 2.7-1.64 3.29-3.21 3.46.25.22.48.65.48 1.31v1.95c0 .19.13.4.48.33C14 14.71 16 12.09 16 9c0-3.87-3.13-7-7-7z"
                          fill="currentColor"
                        />
                      </svg>
                    ),
                    label: "GitHub",
                    value: "github.com/azrilharyo",
                    href: "https://github.com/azrilharyo",
                  },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--color-cream-dark)] hover:bg-[var(--color-orange-pale)] border border-transparent hover:border-[var(--color-orange)]/20 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[var(--color-ink-muted)] group-hover:text-[var(--color-orange)] transition-colors shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 600,
                        }}
                        className="text-xs text-[var(--color-ink-muted)] uppercase tracking-wider mb-0.5"
                      >
                        {c.label}
                      </p>
                      <p className="text-sm text-[var(--color-ink)] group-hover:text-[var(--color-orange)] transition-colors">
                        {c.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-[var(--color-cream-dark)] rounded-3xl p-8">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-orange-pale)] flex items-center justify-center mb-4">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M5 14l6 6L23 8"
                        stroke="var(--color-orange)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                    }}
                    className="text-xl text-[var(--color-ink)] mb-2"
                  >
                    Pesan Terkirim!
                  </h3>
                  <p className="text-sm text-[var(--color-ink-muted)]">
                    Terima kasih telah menghubungi saya. Saya
                    akan membalas secepatnya.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label
                      htmlFor="name"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                      }}
                      className="block text-xs text-[var(--color-ink-muted)] uppercase tracking-wider mb-2"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      placeholder="Nama Anda"
                      className="w-full bg-white border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-ink)] placeholder-[var(--color-border)] focus:outline-none focus:border-[var(--color-orange)] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                      }}
                      className="block text-xs text-[var(--color-ink-muted)] uppercase tracking-wider mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      placeholder="email@anda.com"
                      className="w-full bg-white border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-ink)] placeholder-[var(--color-border)] focus:outline-none focus:border-[var(--color-orange)] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                      }}
                      className="block text-xs text-[var(--color-ink-muted)] uppercase tracking-wider mb-2"
                    >
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      placeholder="Halo, saya ingin mendiskusikan..."
                      className="w-full bg-white border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-ink)] placeholder-[var(--color-border)] focus:outline-none focus:border-[var(--color-orange)] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                    }}
                    className="w-full bg-[var(--color-orange)] text-white rounded-xl py-3.5 text-sm hover:bg-[var(--color-orange-light)] transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    Kirim Pesan
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M2 8h12M8 2l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="border-t border-[var(--color-border)] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-ink-muted)]">
            © 2026 Azril Haryo. Dibuat dengan sepenuh hati.
          </p>
          <p className="text-xs text-[var(--color-ink-muted)]">
            K3 &amp; Web Developer ;
          </p>
        </div>
      </footer>
    </div>
  );
}