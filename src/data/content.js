// Centralized content store for XNTROVA Technologies Homepage
// Clean, organized data structure for maintainability and easy explanation in technical interviews

export const COMPANY_INFO = {
  name: "XNTROVA",
  tagline: "Driven by Ideas. Focused on Results.",
  phone: "+91 868-382-8646",
  email: "info@xntrova.com",
  address: "A107, 2nd Floor, Sector 8, Dwarka New Delhi - 110077",
};

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/xntrova/home/",
    key: "linkedin",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/xntrova.agency/",
    key: "instagram",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/xntrova/",
    key: "facebook",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/xntrova",
    key: "x",
  },
];

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Process", href: "#workflow" },
  { name: "About", href: "#about" },
  { name: "FAQ", href: "#faq" },
];

export const TRUST_METRICS = [
  { value: "120+", numericValue: 120, suffix: "+", label: "Projects Delivered", detail: "Across Delhi NCR & globally" },
  { value: "500+", numericValue: 500, suffix: "+", label: "Happy Clients", detail: "B2B and B2C brands" },
  { value: "+250%", numericValue: 250, prefix: "+", suffix: "%", label: "Organic Traffic", detail: "Average client performance boost" },
];

export const REVIEW_PLATFORMS = [
  {
    name: "Clutch",
    rating: "4.9/5",
    label: "Top Digital Marketing Agency",
    logoUrl: "https://res.cloudinary.com/di93stsbz/image/upload/v1788251111/xntrova-wp-media/brand-logos/clutch.svg",
    badgeType: "image",
    reviewsCount: "80+ Reviews",
  },
  {
    name: "Trustpilot",
    rating: "4.9/5",
    label: "TrustScore 4.9 • Excellent",
    badgeType: "trustpilot",
    reviewsCount: "Verified Score",
  },
  {
    name: "GoodFirms",
    rating: "4.9/5",
    label: "Top SEO & Web Firm",
    logoUrl: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1788251114/xntrova-wp-media/brand-logos/goodfirms.jpg",
    badgeType: "image",
    reviewsCount: "Top Rated",
  },
  {
    name: "DesignRush",
    rating: "4.9/5",
    label: "Accredited Agency",
    logoUrl: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1788251112/xntrova-wp-media/brand-logos/designrush.png",
    badgeType: "image",
    reviewsCount: "Top Agency",
  },
  {
    name: "Google Reviews",
    rating: "4.9/5",
    label: "5-Star Agency",
    badgeType: "google",
    reviewsCount: "110+ Reviews",
  },
  {
    name: "Glassdoor",
    rating: "4.9/5",
    label: "Top Culture Rating",
    badgeType: "glassdoor",
    reviewsCount: "Positive Feedback",
  },
];

export const TRUST_PLATFORMS = REVIEW_PLATFORMS;

export const ABOUT_PILLARS = [
  {
    number: "01",
    title: "Creative Ideas",
    description: "Fresh thinking that builds powerful brand stories.",
    iconName: "Lightbulb",
  },
  {
    number: "02",
    title: "Strategic Planning",
    description: "Smart strategies backed by deep market insights.",
    iconName: "Target",
  },
  {
    number: "03",
    title: "Data-Driven Decisions",
    description: "Decisions tied to real impact and ROI.",
    iconName: "BarChart3",
  },
  {
    number: "04",
    title: "Measurable Results",
    description: "Real results that drive growth and long-term success.",
    iconName: "TrendingUp",
  },
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    phase: "Discover",
    title: "Deep-Dive Footprint Audit",
    timeline: "Week 1",
    deliverables: "Full Growth Audit • Persona Matrix • Tech Stack Baseline",
    description: "We deconstruct your current customer acquisition channels, analyze competitor positioning, and identify untapped demand across Delhi NCR and global markets.",
    badge: "Discovery & Analysis",
  },
  {
    step: "02",
    phase: "Architect",
    title: "Conversion Architecture & Strategy",
    timeline: "Weeks 2–3",
    deliverables: "Multi-Channel Blueprint • Wireframes • Ad Copy Framework",
    description: "We map out a comprehensive full-funnel roadmap, marrying brand storytelling with high-intent paid search, organic SEO keywords, and friction-free landing flows.",
    badge: "System Design",
  },
  {
    step: "03",
    phase: "Execute",
    title: "High-Velocity Deployment",
    timeline: "Week 4+",
    deliverables: "Live Ad Campaigns • Technical SEO Rollout • Speed Optimization",
    description: "Rapid, agile execution across Google, Meta, and modern web environments with clean analytics tracking and multi-touch attribution configured from day one.",
    badge: "Agile Launch",
  },
  {
    step: "04",
    phase: "Scale",
    title: "Continuous Sprint Optimization",
    timeline: "Ongoing",
    deliverables: "Bi-Weekly Sprints • Real-Time Telemetry • P&L Reporting",
    description: "Iterative A/B variant testing, keyword ranking expansion, and ad spend scaling to aggressively lower customer acquisition costs while multiplying revenue.",
    badge: "Revenue Scaling",
  },
];

export const SERVICES = [
  {
    id: "performance-marketing",
    title: "Full-Funnel Performance Marketing",
    category: "Paid Acquisition & ROAS",
    description:
      "Precision PPC campaigns across Google Search, Display, and Meta Ads. We engineer high-converting audience segmentation and continuous creative testing to maximize return on ad spend.",
    iconName: "MousePointerClick",
    highlight: "Surgical targeting & attributed ROI",
    featured: true,
  },
  {
    id: "seo",
    title: "Technical & Strategic SEO",
    category: "Organic Visibility",
    description:
      "Dominate high-intent search queries. We pair deep technical audits, semantic keyword mapping, and authority backlink architecture to generate compounding inbound pipeline.",
    iconName: "Search",
    highlight: "First-page commercial rankings",
  },
  {
    id: "web-development",
    title: "Web Architecture & Digital Products",
    category: "Digital Infrastructure",
    description:
      "Ultra-responsive, lightning-fast web applications designed for conversion. Built with modern web standards, semantic markup, and friction-free mobile checkouts.",
    iconName: "Code2",
    highlight: "Sub-second speed & conversion UX",
  },
  {
    id: "cro",
    title: "Conversion Rate Optimization (CRO)",
    category: "Revenue Science",
    description:
      "Systematic landing page split-testing, user journey heatmapping, and checkout funnel optimization that turns existing traffic into qualified customers.",
    iconName: "TrendingUp",
    highlight: "Double-digit conversion lifts",
  },
  {
    id: "brand-creative",
    title: "Creative Direction & Brand Identity",
    category: "Authority & Reach",
    description:
      "Memorable visual identities, high-converting ad creatives, and compelling brand storytelling that builds defensible consumer trust in competitive markets.",
    iconName: "Sparkles",
    highlight: "Compelling narratives that convert",
  },
  {
    id: "social-media",
    title: "Social Media Optimization",
    category: "Community & Brand",
    description:
      "Cultivate high-affinity communities through data-grounded social content, influencer collaborations, and omni-channel distribution across Meta and professional networks.",
    iconName: "Share2",
    highlight: "Engaging content & community buzz",
  },
];

export const CASE_STUDIES = [
  {
    id: "fortune-mattresses",
    client: "Fortune Mattresses",
    category: "E-Commerce & Online Stores",
    industry: "E-Commerce",
    title: "Growing Online Sales by +340% with Smarter Google & Social Ads",
    challenge: "High advertising costs and too many shoppers leaving their carts without buying.",
    solution: "Redesigned Google and Facebook ads to target buyers ready to purchase, and made checkout fast and easy.",
    metrics: [
      { label: "Sales Growth", value: "+340%", change: "+340% in 1 year" },
      { label: "Return on Ads", value: "4.8x", change: "Up from 1.9x" },
      { label: "Cost Per Lead", value: "-62%", change: "62% cheaper leads" },
    ],
    tags: ["Google & Meta Ads", "Easy Checkout", "More Sales"],
    accentColor: "from-sky-500/20 to-blue-600/10",
  },
  {
    id: "sidhe-technologies",
    client: "Sidhe & Nitda Technologies",
    category: "B2B & Technology",
    industry: "B2B & Tech",
    title: "Growing Monthly Business Deals from $20k to $180k/month",
    challenge: "Slow sales process and low-quality leads who were not showing up for booked product demos.",
    solution: "Targeted decision-makers on LinkedIn and Google Search with a simple page to book interactive product demos.",
    metrics: [
      { label: "Monthly Deals", value: "$180k/mo", change: "Up from $20k/mo" },
      { label: "Demo Bookings", value: "14.2%", change: "+240% increase" },
      { label: "Qualified Leads", value: "+185%", change: "Ready-to-buy clients" },
    ],
    tags: ["Lead Generation", "LinkedIn Ads", "Higher Conversions"],
    accentColor: "from-blue-600/20 to-indigo-600/10",
  },
  {
    id: "vogalife-retail",
    client: "Vogalife",
    category: "Retail & Lifestyle",
    industry: "Retail Store",
    title: "Reaching 2.4 Million Website Visitors with Search Engine Optimization",
    challenge: "Low Google rankings while competitors were taking all the top spots in search results.",
    solution: "Fixed website structure, targeted high-value search terms, and created local pages to win #1 Google rankings.",
    metrics: [
      { label: "Google Visitors", value: "2.4M", change: "+285% traffic growth" },
      { label: "Top Rankings", value: "#1 on Google", change: "Top 3 for 120+ keywords" },
      { label: "Online Sales", value: "+210%", change: "More than doubled" },
    ],
    tags: ["Google SEO", "Website Traffic", "Local Rankings"],
    accentColor: "from-emerald-500/20 to-sky-600/10",
  },
  {
    id: "mahadev-tours",
    client: "Mahadev India Tours",
    category: "Travel & Hospitality",
    industry: "Travel & Tours",
    title: "New Fast Website Design Driving +410% More Customer Bookings",
    challenge: "An outdated website that took 4.5 seconds to load on mobile phones, causing customers to leave.",
    solution: "Built a clean, mobile-friendly website that loads in under a second and makes booking tour packages effortless.",
    metrics: [
      { label: "Customer Inquiries", value: "+410%", change: "Within 60 days" },
      { label: "Loading Speed", value: "0.6 sec", change: "Fast on all phones" },
      { label: "Mobile Bookings", value: "+88%", change: "Smooth user experience" },
    ],
    tags: ["Fast Website", "Mobile Friendly", "Online Bookings"],
    accentColor: "from-purple-500/20 to-sky-600/10",
  },
];

export const CLIENT_BRANDS_ROW_1 = [
  {
    name: "Scholar Scribe Solutions",
    logo: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1787209654/xntrova-wp-media/xntrova-wp-media/27-93030f459f54a40f.webp",
  },
  {
    name: "HH Herbals Here",
    wordmarkKey: "herbals",
  },
  {
    name: "Etex",
    logo: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1787209657/xntrova-wp-media/xntrova-wp-media/25-b12b5da59d88eafd.webp",
  },
  {
    name: "SIDHE",
    wordmarkKey: "sidhe",
  },
  {
    name: "Fortune Mattresses",
    logo: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1787209668/xntrova-wp-media/xntrova-wp-media/21-74fc495daed31461.webp",
  },
  {
    name: "orange C",
    wordmarkKey: "orange-c",
  },
  {
    name: "Vogalife",
    wordmarkKey: "vogalife",
  },
];

export const CLIENT_BRANDS_ROW_2 = [
  {
    name: "Onsa",
    logo: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1787209658/xntrova-wp-media/xntrova-wp-media/24-a3b12968a07aa207.webp",
  },
  {
    name: "Mahadev INDIA TOURS",
    wordmarkKey: "mahadev",
  },
  {
    name: "NITDA",
    logo: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1787209670/xntrova-wp-media/xntrova-wp-media/19-b8fef04fa64e0b05.webp",
  },
  {
    name: "adorag INVEST",
    wordmarkKey: "adorag",
  },
  {
    name: "Umbrella Infocare",
    logo: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1787209678/xntrova-wp-media/xntrova-wp-media/logo-2-1-4cd0c5e932e3b0b2.png",
  },
  {
    name: "DESIRE",
    wordmarkKey: "desire",
  },
  {
    name: "Online Yoga Life",
    wordmarkKey: "yoga",
  },
  {
    name: "Quality Tech Engineers",
    wordmarkKey: "quality-tech",
  },
];

export const CLIENT_LOGOS = [
  "FORTUNE MATTRESSES",
  "ETEX",
  "NITDA",
  "HH HERBALS HERE",
  "SIDHE",
  "orange C",
  "Mahadev INDIA TOURS",
  "Vogalife",
  "adorag INVEST",
  "DESIRE",
];

export const GROWTH_STACK_TOOLS = [
  {
    name: "Ahrefs",
    category: "SEO & Backlink Intelligence",
    description: "Deep backlink indexing, competitive gap analysis, and SERP keyword rank telemetry.",
    color: "#FF5A00",
    slug: "ahrefs",
  },
  {
    name: "Meta Ads",
    category: "Paid Social & Retargeting",
    description: "Algorithmic campaign bidding, custom lookalike audiences, and Conversions API integration.",
    color: "#0081FB",
    slug: "meta",
  },
  {
    name: "Google Analytics 4",
    category: "Attribution & Event Tracking",
    description: "Multi-touch attribution modeling, cross-device behavioral tracking, and conversion funnels.",
    color: "#E37400",
    slug: "ga4",
  },
  {
    name: "Salesforce",
    category: "Enterprise CRM & Pipeline",
    description: "Lead stage orchestration, pipeline revenue velocity, and automated SDR routing.",
    color: "#00A1E0",
    slug: "salesforce",
  },
  {
    name: "SEMrush",
    category: "Search Market Intelligence",
    description: "Keyword volume forecasting, paid ad competitive intelligence, and on-page technical audits.",
    color: "#FF642D",
    slug: "semrush",
  },
  {
    name: "HubSpot",
    category: "Inbound Marketing Automation",
    description: "Omni-channel marketing workflows, lead scoring algorithms, and dynamic email personalization.",
    color: "#FF7A59",
    slug: "hubspot",
  },
  {
    name: "Shopify Plus",
    category: "High-Volume E-Commerce",
    description: "Sub-second checkout performance, headless storefront architecture, and cart rate optimization.",
    color: "#96BF48",
    slug: "shopify",
  },
  {
    name: "Figma",
    category: "UI/UX & Design Systems",
    description: "Atomic design tokens, high-fidelity prototypes, and design-to-code component synchronization.",
    color: "#F24E1E",
    slug: "figma",
  },
  {
    name: "Canva",
    category: "Rapid Creative Velocity",
    description: "Multi-format social asset generation, brand kit governance, and ad variation scaling.",
    color: "#00C4CC",
    slug: "canva",
  },
];

export const TOOLS = GROWTH_STACK_TOOLS;

export const BUDGET_RANGES = [
  "< $2,000 / month",
  "$2,000 - $5,000 / month",
  "$5,000 - $10,000 / month",
  "$10,000+ / month",
];

export const TESTIMONIALS = [
  {
    name: "Ankit Gupta",
    role: "Founder",
    company: "Fortune Mattresses",
    avatarBg: "bg-blue-600",
    platform: "Clutch Verified Review",
    rating: 5,
    resultMetric: "+340% Revenue Growth",
    quote:
      "Xntrova transformed our paid acquisition funnel. What started as a simple audit quickly turned into a high-impact partnership that scaled our monthly revenue by +340% while cutting customer acquisition costs in half. Their team operates with absolute commercial discipline.",
  },
  {
    name: "Priya",
    role: "CEO",
    company: "Vogalife",
    avatarBg: "bg-indigo-600",
    platform: "Google Verified Review",
    rating: 5,
    resultMetric: "2.4M Organic Visits",
    quote:
      "Xntrova combines bold creativity with deep technical SEO rigor in a way that's exceptionally rare. Every recommendation had a direct line to our P&L, driving over 2.4 million organic visits to our platform in under nine months.",
  },
  {
    name: "Amit Verma",
    role: "Founder",
    company: "Sidhe Technologies",
    avatarBg: "bg-emerald-600",
    platform: "Clutch Verified Review",
    rating: 5,
    resultMetric: "$180k/mo Pipeline",
    quote:
      "Unlike other digital agencies that push one-size-fits-all packages, Xntrova built a bespoke B2B acquisition engine for us. They scaled our inbound enterprise pipeline from $20k to $180k/mo with surgical attribution and zero ad waste.",
  },
  {
    name: "Neha Kapoor",
    role: "Director",
    company: "Nitda Global",
    avatarBg: "bg-cyan-600",
    platform: "Google Verified Review",
    rating: 5,
    resultMetric: "14.2% Demo Conversion",
    quote:
      "Xntrova is hands-down the premier digital marketing and technology partner in Delhi NCR. Their full-stack overhaul of our digital web experience doubled our demo conversion rate to 14.2% within weeks of launch.",
  },
];

export const SERVICE_DEEP_DIVE = [
  {
    id: "marketing",
    title: "Digital Marketing Services in Delhi",
    content:
      "At Xntrova, we offer performance-driven digital marketing services to boost your brand growth and achieve success. Contact us now.",
    highlights: ["Omnichannel campaign strategy", "Targeted customer segmentation", "Continuous A/B conversion testing"],
  },
  {
    id: "seo-deep",
    title: "SEO Services in Delhi",
    content:
      "Comprehensive search engine optimization encompassing technical website audits, competitive keyword research, high-quality backlink generation, and Google Business Profile optimization to ensure top local and global search rankings.",
    highlights: ["Technical health audits", "Keyword ranking domination", "High-intent lead generation"],
  },
  {
    id: "ppc-deep",
    title: "PPC Services in Delhi",
    content:
      "High-converting Pay-Per-Click campaigns across Google Ads search, display, and Meta platforms. We focus relentlessly on lowering customer acquisition costs (CAC) while maximizing return on ad spend (ROAS).",
    highlights: ["Conversion-focused ad copy", "Precise audience retargeting", "Live performance reporting"],
  },
  {
    id: "web-deep",
    title: "Website Development Services in Delhi",
    content:
      "Modern, ultra-fast, and responsive web development engineered with modern web standards. Built to drive seamless user engagement, flawless mobile compatibility, and high conversion rates for modern brands.",
    highlights: ["Mobile-first responsive design", "SEO-ready architecture", "Fast page loading speeds"],
  },
];

export const FAQS = [
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "While paid advertising campaigns (PPC) can start generating targeted traffic and leads within days of launch, organic strategies like SEO and Content Marketing typically gain compounding momentum over 3 to 6 months as domain authority and rankings build.",
  },
  {
    question: "How do you create marketing strategies for businesses?",
    answer:
      "We begin with a deep-dive audit of your current digital footprint, competitor landscape, and target customer personas. Using these data points, we map out a tailored roadmap integrating creative storytelling with performance marketing channels.",
  },
  {
    question: "Will I receive regular updates on campaign performance?",
    answer:
      "Yes, transparency is one of our foundational values. We provide weekly performance snapshots and comprehensive monthly reports reviewing key metrics such as traffic, conversion rates, cost per acquisition, and ROI.",
  },
  {
    question: "Which digital marketing service is right for my business?",
    answer:
      "The ideal channel mix depends on your industry, sales cycle, and current growth stage. For immediate revenue, PPC and Paid Social work exceptionally well, whereas SEO and Content Marketing establish long-term defensibility and lower CAC over time.",
  },
  {
    question: "What makes Xntrova different from other agencies?",
    answer:
      "Xntrova bridges the gap between creative brand storytelling and rigorous data-driven performance. We avoid cookie-cutter packages and instead design bespoke, measurable campaigns tailored to your specific business outcomes.",
  },
];

export const FOOTER_SERVICES = [
  "Search Engine Optimization",
  "Paid Advertising",
  "Social Media Optimization",
  "E-Commerce Marketing",
  "Content Marketing",
  "Website Development",
];

export const FOOTER_EXPLORE = [
  { name: "Home", href: "#hero", isInternal: true },
  { name: "About Us", href: "#about", isInternal: true },
  { name: "Services", href: "#services", isInternal: true },
  { name: "Blog & Insights", href: "#case-studies", isInternal: true },
  { name: "Careers", href: "#contact", isInternal: true },
  { name: "Contact Us", href: "#contact", isInternal: true },
];

export const FOOTER_UNIMPLEMENTED = [];

export const FOOTER_LEGAL = [
  "Privacy Policy",
  "Terms & Conditions",
  "Cookie Policy",
  "Disclaimer",
  "Copyright Policy",
];

export const SERVICES_MEGA_MENU = {
  columns: [
    {
      id: "col-1",
      groups: [
        {
          title: "SEO SERVICES",
          icon: "Search",
          items: [
            "Search Engine Optimization",
            "Local SEO",
            "SEO Packages",
          ],
        },
        {
          title: "PERFORMANCE MARKETING",
          icon: "Target",
          items: [
            "Paid Advertising (PPC)",
          ],
        },
      ],
    },
    {
      id: "col-2",
      groups: [
        {
          title: "SOCIAL MEDIA MARKETING",
          icon: "Share2",
          items: [
            "Social Media Optimization",
            "Online Reputation Management",
          ],
        },
        {
          title: "ECOMMERCE",
          icon: "ShoppingCart",
          items: [
            "E-Commerce Marketing",
            "Amazon Marketing",
          ],
        },
        {
          title: "STUDIO",
          icon: "Palette",
          items: [
            "Graphic Design",
          ],
        },
      ],
    },
    {
      id: "col-3",
      groups: [
        {
          title: "MARKETING",
          icon: "Megaphone",
          items: [
            "Content Marketing",
            "Email Marketing",
            "Video Marketing",
          ],
        },
        {
          title: "DEVELOPMENT",
          icon: "Code2",
          items: [
            "Website Development",
            "Website Packages",
            "App Development",
          ],
        },
      ],
    },
  ],
  panel: {
    title: "Services",
    description: "One team across SEO, performance, social, commerce and web — built around where your customers are actually searching.",
    cta: "View all services",
    href: "#services",
  },
};

