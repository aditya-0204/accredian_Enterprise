import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Brain,
  BriefcaseBusiness,
  Building2,
  Facebook,
  Check,
  CircleGauge,
  ClipboardPenLine,
  Cog,
  GraduationCap,
  Handshake,
  Headset,
  Instagram,
  Linkedin,
  Layers3,
  Lightbulb,
  MessageSquareMore,
  MonitorCheck,
  Orbit,
  ScanSearch,
  Target,
  TrendingUp,
  Twitter,
  Users,
  Waypoints,
  Youtube
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Accredian Edge", href: "#edge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" }
];

export const heroHighlights = [
  "Tailored Solutions",
  "Industry Insights",
  "Expert Guidance"
];

export const stats = [
  { value: "10K+", label: "Professionals trained for exceptional career success" },
  { value: "200+", label: "Sessions delivered with unmatched learning excellence" },
  { value: "5K+", label: "Active learners engaged in dynamic enterprise cohorts" }
];

export const partners = [
  {
    name: "Reliance",
    wordmark: "Reliance",
    accent: "from-[#c49a3f] to-[#f5d67a]",
    textClass: "text-[#8b6a25]",
    subtitle: "Industries"
  },
  {
    name: "HCL",
    wordmark: "HCL",
    accent: "from-[#0b74d1] to-[#5bb6ff]",
    textClass: "text-[#0b74d1]",
    subtitle: "Technologies"
  },
  {
    name: "IBM",
    wordmark: "IBM",
    accent: "from-[#1261c9] to-[#8dc2ff]",
    textClass: "text-[#1261c9]",
    subtitle: "Enterprise Tech"
  },
  {
    name: "CRIF",
    wordmark: "CRIF",
    accent: "from-[#f78a1d] to-[#ffd27a]",
    textClass: "text-[#1b57a6]",
    subtitle: "Decision Analytics"
  },
  {
    name: "ADP",
    wordmark: "ADP",
    accent: "from-[#d92c2c] to-[#ffb4b4]",
    textClass: "text-[#d92c2c]",
    subtitle: "People Solutions"
  },
  {
    name: "Bayer",
    wordmark: "BAYER",
    accent: "from-[#4ea63a] to-[#8bd95e]",
    textClass: "text-[#184d79]",
    subtitle: "Life Sciences"
  }
];

export const edgeItems: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Tailored Solutions",
    description: "Programs customized to your organization's goals and challenges.",
    icon: Lightbulb
  },
  {
    title: "Expert Guidance",
    description: "Learn from industry leaders with real-world success.",
    icon: MessageSquareMore
  },
  {
    title: "Innovative Framework",
    description: "Proprietary methods for impactful, application-driven results.",
    icon: Orbit
  },
  {
    title: "Advanced Technology",
    description: "State-of-the-art LMS for seamless learning experiences.",
    icon: Cog
  },
  {
    title: "Diverse Offerings",
    description: "Courses across industries, skill levels, and emerging fields.",
    icon: Layers3
  },
  {
    title: "Proven Impact",
    description: "Trusted by leading organizations for measurable ROI.",
    icon: TrendingUp
  },
  {
    title: "Flexible Delivery",
    description: "Online and offline options tailored to your team needs.",
    icon: MonitorCheck
  }
];

export const domains: {
  title: string;
  icon: LucideIcon;
}[] = [
  { title: "Product & Innovation Hub", icon: Lightbulb },
  { title: "Gen-AI Mastery", icon: Brain },
  { title: "Leadership Elevation", icon: Users },
  { title: "Tech & Data Insights", icon: CircleGauge },
  { title: "Operations Excellence", icon: Cog },
  { title: "Digital Enterprise", icon: Building2 },
  { title: "Fintech Innovation Lab", icon: BriefcaseBusiness }
];

export const segments = [
  {
    title: "Program Specific",
    description: "Certificate, Executive, and Post Graduate pathways for focused upskilling.",
    tint: "from-[#c98f68] to-[#f2c49e]",
    image: "/images/segments/program-specific.svg",
    imageAlt: "People reviewing a training roadmap around a table"
  },
  {
    title: "Industry Specific",
    description: "IT, healthcare, retail, finance, education, and manufacturing journeys.",
    tint: "from-[#6a49df] to-[#2f8bfd]",
    image: "/images/segments/industry-specific.svg",
    imageAlt: "A person interacting with futuristic industry technology visuals"
  },
  {
    title: "Topic Specific",
    description: "Machine learning, design, analytics, cybersecurity, and cloud expertise.",
    tint: "from-[#3b82f6] to-[#7dd3fc]",
    image: "/images/segments/topic-specific.svg",
    imageAlt: "A specialist working with data-rich digital topic overlays"
  },
  {
    title: "Level Specific",
    description: "From freshers to senior leadership, with paths aligned to business maturity.",
    tint: "from-[#94a3b8] to-[#f8c97c]",
    image: "/images/segments/level-specific.svg",
    imageAlt: "Professionals of different experience levels collaborating in discussion"
  }
];

export const audiences: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Tech Professionals",
    description: "Enhance expertise, embrace tech, and drive innovation.",
    icon: MonitorCheck
  },
  {
    title: "Non-Tech Professionals",
    description: "Adapt digitally and collaborate more effectively in tech-led environments.",
    icon: ScanSearch
  },
  {
    title: "Emerging Professionals",
    description: "Develop powerful skills for rapid career growth.",
    icon: GraduationCap
  },
  {
    title: "Senior Professionals",
    description: "Strengthen leadership, decision-making, and strategic execution.",
    icon: BriefcaseBusiness
  }
];

export const catItems: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Concept",
    description: "Foundational knowledge for deep subject understanding.",
    icon: ClipboardPenLine
  },
  {
    title: "Application",
    description: "Practical implementation through real-world scenarios.",
    icon: Waypoints
  },
  {
    title: "Tools",
    description: "Resources and techniques that help teams master skills faster.",
    icon: Cog
  }
];

export const deliverySteps = [
  {
    title: "Discover",
    description: "We align on business goals, role needs, and measurable outcomes."
  },
  {
    title: "Design",
    description: "Custom learning paths, delivery formats, and milestones are mapped."
  },
  {
    title: "Deliver",
    description: "Experts facilitate high-impact sessions with hands-on application."
  },
  {
    title: "Measure",
    description: "Progress is tracked through completion, engagement, and performance signals."
  }
];

export const process = [
  {
    title: "Consultation",
    description: "Understand team goals, capability gaps, and expected business outcomes."
  },
  {
    title: "Curriculum Mapping",
    description: "Curate custom pathways aligned to roles, domains, and seniority."
  },
  {
    title: "Expert Delivery",
    description: "Blend live sessions, projects, mentoring, and flexible support formats."
  },
  {
    title: "Outcome Review",
    description: "Report on progress, engagement, and practical capability improvement."
  }
];

export const faqs = [
  {
    question: "Who are Accredian Enterprise programs designed for?",
    answer:
      "They are built for organizations that want structured, high-impact upskilling for technology, product, operations, and leadership teams."
  },
  {
    question: "Can programs be customized for different teams?",
    answer:
      "Yes. Learning pathways can be tailored by role, team size, business objective, seniority level, and preferred delivery format."
  },
  {
    question: "Do you support online and offline delivery?",
    answer:
      "Yes. Hybrid delivery is supported, including virtual cohorts, onsite workshops, and blended engagement models."
  },
  {
    question: "How is impact measured?",
    answer:
      "Programs can be tracked through completion, learner engagement, assessments, project outcomes, and business-oriented success metrics."
  }
];

export const testimonials = [
  {
    quote:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    company: "ADP"
  },
  {
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    company: "Bayer"
  }
];

export const credibility = [
  {
    label: "Enterprise-first design",
    icon: Handshake
  },
  {
    label: "Outcome-focused learning",
    icon: Target
  },
  {
    label: "Trusted expert mentors",
    icon: BadgeCheck
  },
  {
    label: "Applied, cohort-led delivery",
    icon: BookOpenCheck
  }
];

export const footerLinks = [
  "About",
  "Blog",
  "Why Accredian"
];

export const formOptions = ["1-50", "51-200", "201-1000", "1000+"];

export const socialLinks = [
  { label: "Facebook", icon: Facebook },
  { label: "LinkedIn", icon: Linkedin },
  { label: "Twitter", icon: Twitter },
  { label: "Instagram", icon: Instagram },
  { label: "YouTube", icon: Youtube }
];

export const footerContact = {
  email: "enterprise@accredian.com",
  address:
    "4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana"
};

export const footerCta = {
  title: "Want to Learn More About Our Training Solutions?",
  subtitle: "Get Expert Guidance for Your Team's Success!",
  button: "Contact Us",
  icon: Headset,
  buttonIcon: ArrowRight
};

export { Check };
