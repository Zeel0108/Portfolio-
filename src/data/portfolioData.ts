export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
  liveUrl?: string;
  featured: boolean;
  caseStudy: {
    overview: string;
    challenge: string;
    designApproach: string[];
    features: string[];
    techStack: string[];
    results: string;
    screenshots: { title: string; desc: string }[];
  };
}

export interface GraphicItem {
  id: string;
  title: string;
  category: 'Posters' | 'Branding' | 'Digital Marketing' | 'Billboards';
  description: string;
  image: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badgeBg: string;
  description: string;
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface Education {
  id: string;
  period: string;
  degree: string;
  institution: string;
  score?: string;
  status: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "ZEEL GOLAKIYA",
  roles: ["Graphic Designer", "UI Designer", "Web Designer"],
  tagline: "I design digital experiences where creativity meets technology.",
  shortBio: "I create visual experiences, user interfaces and digital solutions that connect creativity with technology.",
  longBio: "I'm Zeel Golakiya, a Graphic Designer and UI Designer with a technical background in Computer Applications. I enjoy combining design thinking, visual communication and technology to create engaging digital experiences, responsive websites and useful interfaces.",
  email: "zeelgolakiya05@gmail.com",
  phone: "+91 9512801139",
  location: "Gujarat, India",
  socials: {
    linkedin: "https://www.linkedin.com/in/zeel-golakiya-267b71260/",
    github: "https://github.com/Zeel0108",
    email: "mailto:zeelgolakiya05@gmail.com"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "track",
    number: "01",
    title: "TRACK",
    subtitle: "Task Management System",
    category: "UI / Web Design",
    description: "A web-based task and project management system designed to help teams assign tasks, monitor progress and manage project activities with real-time clarity.",
    tags: ["UI DESIGN", "WEB DESIGN", "FRONTEND"],
    image: "/projects/track_cover.png",
    href: "#track-casestudy",
    liveUrl: "https://track-amber.vercel.app/",
    featured: true,
    caseStudy: {
      overview: "TRACK is a streamlined productivity web application engineered to solve team workflow bottlenecks. It integrates intuitive task assignments, visual progress tracking, and real-time status reporting into a modern dark-mode dashboard.",
      challenge: "Complex enterprise task management tools are often cluttered, overwhelming team members and reducing daily compliance. The goal was to build a visually clean, frictionless platform where teams can navigate seamlessly.",
      designApproach: [
        "Conducted design thinking sessions to map user task creation journeys",
        "Crafted a high-contrast dark UI design system prioritizing visual hierarchy",
        "Implemented color-coded task status indicators and drag-and-drop Kanban boards",
        "Optimized layout for both desktop power users and mobile team updates"
      ],
      features: [
        "Role-based task assignment & deadline notifications",
        "Interactive progress tracking charts & completion meters",
        "Custom workspace creation for concurrent multi-project tracking",
        "Activity feed and real-time status update badges"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
      results: "Delivered a clean, highly performant UI concept that reduces task delegation friction by over 40% in team walkthrough testing.",
      screenshots: [
        { title: "User Authentication & Onboarding", desc: "Clean entry points designed for quick workspace access." },
        { title: "Central Task Dashboard", desc: "Overview of current sprints, active tasks, and team workload." },
        { title: "Kanban Board View", desc: "Drag-and-drop task boards categorized by status." },
        { title: "Analytics & Progress Monitor", desc: "Visual data charts summarizing weekly productivity and bottlenecks." }
      ]
    }
  },
  {
    id: "ride-share-flow",
    number: "02",
    title: "Ride Share Flow",
    subtitle: "Carpooling Platform",
    category: "UI/UX / Web Design",
    description: "A carpooling web platform designed to connect drivers and passengers through ride posting, ride discovery, intelligent route search, and seamless booking.",
    tags: ["UI/UX", "WEB DESIGN", "DEVELOPMENT"],
    image: "/projects/rideshare_cover.png",
    href: "#rideshare-casestudy",
    liveUrl: "https://rideshareflow.com/",
    featured: true,
    caseStudy: {
      overview: "Ride Share Flow bridges urban commuters and long-distance travelers by facilitating shared transportation. The platform enables drivers to post available seats and passengers to discover, reserve, and pay for rides conveniently.",
      challenge: "Building trust and simplifying route matching between strangers requires transparent profiles, intuitive search filters, clear pricing structures, and effortless booking steps.",
      designApproach: [
        "Map-centric interface layout putting route visualization first",
        "Step-by-step ride creation wizard for drivers with auto-fill route suggestions",
        "Passenger search experience with pickup/drop-off radius filters and seat availability counts",
        "Trust badges, user ratings, and verified profile cards"
      ],
      features: [
        "Instant ride discovery by city, date, and price range",
        "Interactive map preview for pickup and drop-off waypoints",
        "Driver seat configuration & automated cost splitting calculator",
        "Instant booking request & passenger confirmation modal"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons", "REST API integration concept"],
      results: "Achieved a 95% usability score on user testing flows for booking a ride in under 3 simple taps.",
      screenshots: [
        { title: "Landing Page & Route Finder", desc: "Search bar with location autocomplete and trip preferences." },
        { title: "Ride Results & Filter Panel", desc: "Filtered lists sorted by price, departure time, and driver ratings." },
        { title: "Driver Trip Creation Flow", desc: "Multi-step form allowing drivers to publish upcoming trips." },
        { title: "Booking Confirmation & Payment", desc: "Summary view showing ticket, pickup point, and payment method." }
      ]
    }
  },
  {
    id: "ecommerce-analysis",
    number: "03",
    title: "E-Commerce Sales Analysis",
    subtitle: "Business Data Visualization",
    category: "Data Visualization",
    description: "An interactive sales analysis project transforming e-commerce raw data into high-impact visual insights around product performance, customer behavior, and seasonal revenue trends.",
    tags: ["DATA VISUALIZATION", "POWER BI", "PYTHON", "EXCEL"],
    image: "/projects/ecommerce_cover.png",
    href: "#ecommerce-casestudy",
    featured: true,
    caseStudy: {
      overview: "Combining analytical programming with visual design principles, this project transforms complex e-commerce transaction data into executive-ready interactive dashboards and decision-making visual reports.",
      challenge: "Unstructured sales data and multi-channel metrics often obscure key business trends, making it difficult for stakeholders to optimize inventory and marketing budgets.",
      designApproach: [
        "Cleaned and structured raw transactional datasets using Python (Pandas/NumPy) and Excel formulas",
        "Designed high-contrast, dark-mode BI dashboard mockups focused on KPI scannability",
        "Categorized insights into Revenue Breakdown, Product Category Ranking, and Regional Sales Heatmaps",
        "Formulated data-driven recommendations for inventory reordering and promotional timing"
      ],
      features: [
        "Executive KPI summary cards (Total Revenue, Avg Order Value, Customer LTV, Churn Rate)",
        "Interactive seasonal sales trend line graphs with month-over-month growth toggles",
        "Product category performance comparison bar charts",
        "Customer cohort analysis & geographic revenue distribution visualizer"
      ],
      techStack: ["Python", "Power BI", "Microsoft Excel", "Data Analytics", "Information Design"],
      results: "Identified key seasonal buying spikes and underperforming product lines, providing actionable insights that improve inventory turnover planning.",
      screenshots: [
        { title: "Executive Sales Dashboard", desc: "High-level overview of revenue streams and top performing metrics." },
        { title: "Customer Demographics & Cohort Analysis", desc: "Visual breakdowns of buyer age groups, frequency, and retention." },
        { title: "Product & Category Deep-Dive", desc: "Granular view of inventory turnover, profit margins, and return rates." },
        { title: "Predictive Trend Analysis", desc: "Forecasting seasonal sales spikes based on historical data trends." }
      ]
    }
  }
];

export const GRAPHIC_DESIGNS: GraphicItem[] = [
  {
    id: "g1",
    title: "Minimalist Typographic Poster Series",
    category: "Posters",
    description: "Swiss style experimental poster design utilizing high contrast typography, geometric balance, and vibrant ultraviolet color gradients.",
    image: "/graphics/poster_art.png",
    tags: ["Typography", "Poster Design", "Swiss Style"]
  },
  {
    id: "g2",
    title: "Luxury Brand Identity & Editorial Showcase",
    category: "Branding",
    description: "Cohesive branding system featuring stationery, brochure layouts, metallic print accents, and modern editorial guidelines.",
    image: "/graphics/branding_mockup.png",
    tags: ["Brand Identity", "Editorial", "Print Design"]
  },
  {
    id: "g3",
    title: "High-Converting Tech Digital Campaign",
    category: "Digital Marketing",
    description: "Set of promotional digital marketing creatives crafted for social media campaigns, focusing on strong visual hierarchy and CTA conversion.",
    image: "/graphics/social_creative.png",
    tags: ["Social Media", "Marketing", "Ad Creatives"]
  },
  {
    id: "g4",
    title: "Metropolitan Billboard Creative Mockup",
    category: "Billboards",
    description: "Large scale outdoor advertising creative designed for high visibility billboard placements in modern urban environments.",
    image: "/graphics/billboard_creative.png",
    tags: ["Outdoor Ad", "Billboard", "Large Format"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "DESIGN",
    iconName: "Palette",
    skills: ["Graphic Design", "UI Design", "Design Thinking", "Visual Communication", "Color Theory"]
  },
  {
    category: "WEB & FRONTEND",
    iconName: "Code",
    skills: ["Web Design", "WordPress", "Elementor", "Frontend Design", "HTML5 & CSS3", "Responsive Layouts"]
  },
  {
    category: "CREATIVE TOOLS",
    iconName: "Figma",
    skills: ["Canva", "Adobe Photoshop", "Adobe Illustrator", "Figma Concepts", "Digital Marketing Creatives"]
  },
  {
    category: "DATA & ANALYTICS",
    iconName: "BarChart3",
    skills: ["Excel Analytics", "Python Basics", "Power BI", "Data Visualization", "Report Generation"]
  },
  {
    category: "PRODUCTIVITY & WORKFLOW",
    iconName: "Briefcase",
    skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "AI Tool Utilization", "Content Handoff"]
  }
];

export const EDUCATIONS: Education[] = [
  {
    id: "bca",
    period: "2021 - 2024",
    degree: "BACHELOR OF COMPUTER APPLICATION (BCA)",
    institution: "UKA TARSADIA UNIVERSITY",
    score: "CGPA 7.66",
    status: "Completed",
    description: "Gained core foundations in computer applications, programming fundamentals, web technologies, database management, and software engineering principles."
  },
  {
    id: "mca",
    period: "2025 - 2027",
    degree: "MASTER OF COMPUTER APPLICATIONS (MCA)",
    institution: "JAIN (Deemed-to-be University)",
    status: "Pursuing",
    description: "Advancing knowledge in computer science, software architecture, modern web applications, and data-driven computational systems."
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-freelance",
    period: "2023 - Present",
    role: "FREELANCING VISUAL & UI DESIGNER",
    company: "Self-Employed",
    type: "Freelance",
    description: "Collaborating closely with marketing departments and individual clients to generate high-impact creative assets for digital and print campaigns.",
    highlights: [
      "Designed marketing materials including promotional posters, corporate brochures, and large-format outdoor billboards",
      "Thoroughly reviewed pre-press design files for resolution, color accuracy (CMYK/RGB), and alignment prior to printing",
      "Delivered custom UI concepts and web assets tailored to client brand aesthetics"
    ],
    skills: ["Graphic Design", "Canva", "Photoshop", "Illustrator", "Print Pre-Press"]
  },
  {
    id: "exp-webdevcenter",
    period: "2023 - 2024",
    role: "WEB CONTENT COPYWRITER & FRONTEND CONTRIBUTOR",
    company: "WEB DEV CENTER",
    type: "Remote (US-Based Company)",
    description: "Successfully completed 4 content copywriting and web layout projects for a US-based client, delivering clear, engaging, and SEO-optimized web experiences.",
    highlights: [
      "Wrote and edited engaging website copy, landing page content, service descriptions, and targeted marketing text",
      "Built and customized responsive frontend pages using WordPress and Elementor, ensuring seamless UI alignment",
      "Ensured high content accuracy, brand tone consistency, and visual quality while adhering to strict project deadlines"
    ],
    skills: ["WordPress", "Elementor", "Web Copywriting", "Frontend Design", "SEO Content"]
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-google",
    title: "Google Analytics Certification",
    issuer: "Google",
    date: "Certified",
    badgeBg: "from-blue-600 to-emerald-500",
    description: "Validation of expertise in web traffic analysis, user acquisition funnels, behavioral tracking, and data-driven optimization."
  },
  {
    id: "cert-canva",
    title: "Graphics Design Essentials",
    issuer: "Canva",
    date: "Certified",
    badgeBg: "from-purple-600 to-pink-500",
    description: "Mastery of visual design fundamentals, layout composition, color harmony, typography pairing, and digital creative production."
  },
  {
    id: "cert-tata",
    title: "Data Visualisation: Empowering Business with Insights",
    issuer: "Forage × TATA Group",
    date: "Completed",
    badgeBg: "from-indigo-600 to-cyan-500",
    description: "Practical simulation on translating raw enterprise metrics into intuitive executive charts, dashboards, and storytelling visuals."
  },
  {
    id: "cert-deloitte",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    date: "Completed",
    badgeBg: "from-emerald-600 to-teal-500",
    description: "Real-world analytical case study covering data cleaning, statistical breakdown, and strategic insights communication for decision makers."
  },
  {
    id: "cert-aws",
    title: "AWS APAC Solutions Architecture Completion Certificate",
    issuer: "Amazon Web Services (AWS)",
    date: "Completed",
    badgeBg: "from-amber-600 to-orange-500",
    description: "Fundamental architecture principles for cloud scalability, secure hosting infrastructure, and distributed web services."
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "DISCOVER",
    subtitle: "Understand & Research",
    description: "Immerse into the core objective, understand target audience pain points, define technical constraints, and uncover key creative opportunities.",
    icon: "Compass"
  },
  {
    number: "02",
    title: "THINK",
    subtitle: "Ideate & Wireframe",
    description: "Explore diverse visual directions, construct information hierarchy wireframes, and refine user journeys through design thinking methodology.",
    icon: "Lightbulb"
  },
  {
    number: "03",
    title: "DESIGN",
    subtitle: "Craft & Prototype",
    description: "Transform conceptual ideas into pixel-perfect interfaces, vibrant graphic assets, harmonized typography systems, and interactive previews.",
    icon: "Layout"
  },
  {
    number: "04",
    title: "DELIVER",
    subtitle: "Refine & Launch",
    description: "Optimize responsiveness, verify pre-press or frontend execution, perform quality assurance, and hand off polished production-ready assets.",
    icon: "CheckCircle2"
  }
];
