import { useEffect, useState } from 'react';
import {
  ChevronDown,
  Linkedin,
  Mail,
  Phone,
  Target,
  TrendingUp,
  Users,
  Menu,
  X,
  Briefcase,
  GraduationCap,
  BarChart3,
} from 'lucide-react';

type ExperienceItem = {
  company: string;
  division: string;
  location: string;
  role: string;
  dates: string;
  highlights: string[];
};

type SkillCategory = {
  title: string;
  icon: typeof Target;
  skills: string[];
};

type EducationItem = {
  school: string;
  degree: string;
  location: string;
  dates: string;
};

const summary =
  'Product Manager with experience building AI-powered and analytics-driven products across B2B SaaS and FinTech. Led roadmap execution, LLM-based workflow intelligence, and cross-functional delivery to drive 70% feature adoption, reduce backlog by 41%, and support $10M+ projected revenue impact.';

const impactStats = [
  {
    eyebrow: 'FEATURE ADOPTION',
    value: '70%',
    detail: 'Early feature adoption',
  },
  {
    eyebrow: 'BACKLOG REDUCTION',
    value: '41%',
    detail: 'Backlog volume improvement',
  },
  {
    eyebrow: 'REVENUE IMPACT',
    value: '$10M+',
    detail: 'Projected annual impact',
  },
];

const experience: ExperienceItem[] = [
  {
    company: 'Goldman Sachs',
    division: 'Wealth & Advisory Tech | Advisor Experience',
    location: 'Albany, NY',
    role: 'Product Manager',
    dates: 'May 2025 - Dec 2025',
    highlights: [
      'Designed AI-powered advisor workflow intelligence with LLM-driven next-best-action logic, prompt templates, and grounding inputs, improving workflow efficiency by about 20% and informing the 2026 roadmap.',
      'Digitized end-to-end RIA referral workflows, reduced approval cycles to a 24-hour SLA, and supported $10M+ projected annual revenue by aligning Engineering, UX, and Compliance.',
      'Drove 95% platform adoption across 1,500+ financial advisors through GTM enablement, onboarding workflows, and training programs.',
      'Established a centralized CRM intake pipeline to consolidate voice-of-customer signals, accelerate triage, and reduce the enhancement backlog by 25%.',
    ],
  },
  {
    company: 'Contentstack',
    division: 'Cloud-Based B2B SaaS | Product Analytics & Automation',
    location: 'Durham, NC',
    role: 'Product Manager (Associate)',
    dates: 'Sep 2024 - May 2025',
    highlights: [
      'Built a data-driven zero-inbox framework using user queries, search trends, and feedback signals, reducing backlog volume by 41% and improving visibility into acquisition-impacting issues.',
      'Analyzed 2,000+ user insights across analytics, research, and support to identify friction points, shape MVP strategy, and prioritize roadmap features that achieved 70% early adoption.',
      'Shortened release timelines by 3 weeks by defining PRDs, aligning 20+ cross-functional stakeholders, and driving execution against product OKRs.',
    ],
  },
  {
    company: 'State Street',
    division: 'Institutional Wealth Tech | Portfolio Intelligence',
    location: 'Boston, MA',
    role: 'Product Manager (Summer Associate)',
    dates: 'Jun 2024 - Aug 2024',
    highlights: [
      'Conducted market research and competitive benchmarking to prioritize four analytics features that contributed to a projected $2M+ ARR impact.',
      'Partnered with UX teams on Figma prototypes for portfolio dashboards, improving navigation efficiency by 25% and strengthening advisor decision workflows.',
      'Reduced churn by 12% through A/B testing and user behavior analysis across key product journeys.',
    ],
  },
  {
    company: 'Standard Chartered GBS',
    division: 'Global FinTech | Digital Transformation',
    location: 'Bengaluru, India',
    role: 'Product Development Engineer',
    dates: 'Apr 2022 - Jul 2023',
    highlights: [
      'Led 0-to-1 development of a developer productivity platform by defining product requirements, prioritizing features, and driving Agile execution, improving user retention by 20%.',
      'Accelerated release cycles by 30% and reduced technical debt by 25% by optimizing microservices integrations and partnering with DevOps on CI/CD implementation.',
    ],
  },
  {
    company: 'Standard Chartered GBS',
    division: 'Global FinTech | Digital Transformation',
    location: 'Bengaluru, India',
    role: 'Developer - Technology & Innovation',
    dates: 'Sep 2020 - Apr 2022',
    highlights: [
      'Analyzed product KPIs using SQL and Tableau, identified performance gaps, and helped drive a 20% increase in revenue through data-backed optimization.',
      'Built internal CMS workflows and knowledge systems that reduced onboarding time and lowered support queries by 50%.',
    ],
  },
];

const skillCategories: SkillCategory[] = [
  {
    title: 'Product Management',
    icon: Target,
    skills: [
      'Product Strategy',
      'Roadmap Planning',
      'Feature Prioritization',
      'PRD Writing',
      'User Research',
      'Product Analytics',
      'Go-to-Market Strategy',
      'Stakeholder Management',
    ],
  },
  {
    title: 'Agile & Delivery',
    icon: Users,
    skills: ['Agile', 'Scrum', 'A/B Testing'],
  },
  {
    title: 'Technical & Development',
    icon: Briefcase,
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Java', 'REST APIs'],
  },
  {
    title: 'Data & Tools',
    icon: BarChart3,
    skills: [
      'SQL',
      'MySQL',
      'MongoDB',
      'PostgreSQL',
      'Tableau',
      'Jira',
      'Salesforce',
      'AWS',
      'Git',
      'Figma',
      'Microsoft Office',
    ],
  },
];

const education: EducationItem[] = [
  {
    school: 'Duke University',
    degree: 'Master of Engineering Management',
    location: 'Durham, NC, USA',
    dates: 'Aug 2023 - Dec 2024',
  },
  {
    school: 'SRM Institute of Science and Technology',
    degree: 'Bachelor of Technology in Computer Science Engineering',
    location: 'Chennai, India',
    dates: 'Jul 2016 - Jun 2020',
  },
];

const sectionItems = [
  { id: 'hero', label: 'Home' },
  { id: 'summary', label: 'Summary' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const section of sectionItems) {
        const element = document.getElementById(section.id);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-brown/15 bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-left text-lg font-display tracking-wide text-black md:text-2xl"
          >
            LAVANYA KRISHNATRA
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {sectionItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm tracking-wide transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'font-medium text-black'
                    : 'text-brown hover:text-black'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="text-black md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-brown/15 px-6 pb-4 md:hidden">
            <div className="flex flex-col gap-4 pt-4">
              {sectionItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-brown transition-colors hover:text-black"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="hero" className="bg-cream pb-20 pt-32">
        <div className="mx-auto max-w-6xl px-6">
          <div
            className={`${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            } transform text-center transition-all duration-1000`}
          >
            <div className="mx-auto max-w-4xl">
              <div className="mb-10 flex justify-center">
                <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
                  <img
                    src="/images/image.png"
                    alt="Lavanya Krishnatra"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <h1 className="mb-6 text-5xl font-display leading-[1] tracking-wide text-black md:text-6xl xl:text-[4.9rem]">
                Lavanya Krishnatra
              </h1>

              <p className="mb-2 text-lg font-light uppercase tracking-[0.32em] text-brown md:text-xl">
                Product Manager | AI &amp; Product Analytics
              </p>

              <p className="text-sm uppercase tracking-[0.35em] text-brown/80">
                USA
              </p>

              <div className="mx-auto my-4 h-0.5 w-20 bg-brown/70" />

              <div className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-brown">
                <TrendingUp className="h-4 w-4" />
                AI, Product Analytics, B2B SaaS, FinTech
              </div>

              <p className="mx-auto mb-12 max-w-4xl text-lg leading-[1.9] text-brown md:text-[1.08rem]">
                {summary}
              </p>

              <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  onClick={() => scrollToSection('experience')}
                  className="min-w-[170px] bg-black px-8 py-4 text-sm tracking-[0.08em] text-white transition hover:bg-brown"
                >
                  VIEW EXPERIENCE
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="min-w-[140px] border border-black px-8 py-4 text-sm tracking-[0.08em] text-black transition hover:bg-black hover:text-white"
                >
                  CONTACT
                </button>
              </div>

              <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3">
                {impactStats.map((stat) => (
                  <div
                    key={stat.eyebrow}
                    className="border border-brown/10 bg-white px-8 py-6 shadow-sm"
                  >
                    <div className="mb-3 text-xs uppercase tracking-[0.28em] text-brown/70">
                      {stat.eyebrow}
                    </div>
                    <div className="mb-2 text-4xl font-display text-black">
                      {stat.value}
                    </div>
                    <div className="text-sm text-brown/80">
                      {stat.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <ChevronDown
              className="mx-auto h-6 w-6 cursor-pointer animate-bounce text-brown/60 transition-colors hover:text-black"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      <section id="summary" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-5xl font-display tracking-wide text-black">
              SUMMARY
            </h2>
            <div className="mx-auto mb-6 h-0.5 w-16 bg-brown" />
            <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-brown">
              Product leader with a strong blend of AI product thinking,
              analytics rigor, and delivery execution across enterprise software
              environments. Comfortable turning voice-of-customer signals,
              product data, and business goals into clear roadmaps, measurable
              launches, and adoption wins.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: 'Roadmap & Strategy',
                detail:
                  'Defines product direction through user research, prioritization, PRDs, and data-backed decision making across AI and platform initiatives.',
              },
              {
                icon: Users,
                title: 'Cross-Functional Delivery',
                detail:
                  'Partners closely with Engineering, UX, Compliance, and business stakeholders to turn complex workflows into scalable product systems.',
              },
              {
                icon: TrendingUp,
                title: 'Measurable Growth',
                detail:
                  'Focuses on adoption, efficiency, backlog health, and revenue impact, with outcomes including 70% feature adoption and 41% backlog reduction.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-brown/10 bg-cream p-8 text-center shadow-sm"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center bg-black">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-display tracking-wide text-black">
                  {item.title.toUpperCase()}
                </h3>
                <p className="font-light leading-relaxed text-brown">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-cream py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-5xl font-display tracking-wide text-black">
              WORK EXPERIENCE
            </h2>
            <div className="mx-auto mb-6 h-0.5 w-16 bg-brown" />
            <p className="mx-auto max-w-3xl text-lg font-light text-brown">
              Experience across wealth tech, B2B SaaS, and global FinTech with
              a focus on AI workflows, product analytics, and operational scale.
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((role) => (
              <div
                key={`${role.company}-${role.role}-${role.dates}`}
                className="border border-brown/10 bg-white p-8 shadow-sm"
              >
                <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-display tracking-wide text-black">
                      {role.role}
                    </h3>
                    <p className="font-medium text-brown">{role.company}</p>
                    <p className="text-sm font-light text-brown/85">
                      {role.division}
                    </p>
                  </div>
                  <div className="text-sm font-light text-brown/80">
                    {role.location} | {role.dates}
                  </div>
                </div>

                <ul className="space-y-3">
                  {role.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start text-brown"
                    >
                      <span className="mr-3 mt-1 text-brown">-</span>
                      <span className="font-light leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-5xl font-display tracking-wide text-black">
              SKILLS
            </h2>
            <div className="mx-auto mb-6 h-0.5 w-16 bg-brown" />
            <p className="mx-auto max-w-3xl text-lg font-light text-brown">
              Product strategy, delivery, technical collaboration, and analytics
              capabilities shaped through both product and engineering roles.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            {skillCategories.map((category) => (
              <div key={category.title} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center bg-black">
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-6 text-lg font-display tracking-wide text-black">
                  {category.title.toUpperCase()}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm font-light text-brown">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="bg-cream py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16 text-center">
            <div className="mb-4 flex justify-center">
              <GraduationCap className="h-10 w-10 text-brown" />
            </div>
            <h2 className="mb-6 text-5xl font-display tracking-wide text-black">
              EDUCATION
            </h2>
            <div className="mx-auto h-0.5 w-16 bg-brown" />
          </div>

          <div className="space-y-8">
            {education.map((item) => (
              <div
                key={`${item.school}-${item.degree}`}
                className="border border-brown/10 bg-white p-8 shadow-sm"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-display tracking-wide text-black">
                      {item.school}
                    </h3>
                    <p className="font-medium text-brown">{item.degree}</p>
                  </div>
                  <div className="text-sm font-light text-brown/80">
                    {item.location} | {item.dates}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-5xl font-display tracking-wide">
              CONTACT
            </h2>
            <div className="mx-auto mb-6 h-0.5 w-16 bg-brown" />
            <p className="mx-auto max-w-3xl text-lg font-light text-white/80">
              Open to product management opportunities across AI, product
              analytics, B2B SaaS, and FinTech.
            </p>
          </div>

          <div className="mx-auto flex max-w-xl flex-col gap-6 text-center">
            <a
              href="tel:+19196381694"
              className="flex items-center justify-center gap-4 text-white/80 transition-colors hover:text-white"
            >
              <Phone className="h-5 w-5 text-brown" />
              <span className="font-light">+1 (919) 638-1694</span>
            </a>
            <a
              href="mailto:lavanyak.duke@gmail.com"
              className="flex items-center justify-center gap-4 text-white/80 transition-colors hover:text-white"
            >
              <Mail className="h-5 w-5 text-brown" />
              <span className="font-light">lavanyak.duke@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lkrishnatra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 text-white/80 transition-colors hover:text-white"
            >
              <Linkedin className="h-5 w-5 text-brown" />
              <span className="font-light">linkedin.com/in/lkrishnatra</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-brown py-8 text-white/80">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="font-light tracking-wide">
             2026 Lavanya Krishnatra | Product Manager
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
