/**
 * Single source of truth for JH Associates content.
 * Grounded directly in live content from https://www.jhassociate.com
 */

export const img = {
  logo: "/logo.webp",

  // Live hero / feature photography from jhassociate.com
  heroExcellence: "/live/home-3-s3-1.webp",
  heroArchitecture: "/live/home3-s4-1.webp",
  heroSustainable: "/live/b127b5691817bafc1b964d810c113ee8.jpg",
  heroDesign: "/live/home3-s4-2.webp",
  aboutTeam: "/live/WhatsApp-Image-2025-07-22-at-15.48.11.jpeg",
  landscapeArch: "/live/home3-s4-3.webp",
  constructionFeature: "/live/i.webp",

  // Live project photography
  saiyudHouse: "/live/work9-604x990.webp",
  thePresident: "/live/work7-771x583.webp",
  verdantMetropolis: "/live/work8-771x583.webp",
  nordicHarmony: "/live/work16-1-851x368.webp",
  urbanOasis: "/live/work4-621x687.webp",
  contemporaryVilla: "/live/work3-621x327.webp",
  commercialSuites: "/live/work12-397x300.webp",

  // Corporate partners / clients
  partnerKfc: "/live/pngimg.com-kfc_PNG53.png",
  partnerNandos: "/live/Nandos-Logo-scaled.png",
  partnerTexasChicken: "/live/Texas_Chicken_logo.png",
  partner7Eleven: "/live/7-11j.png",
};

export const showreelUrl = "/video/showreel.mp4";

export const site = {
  name: "JH Associates",
  short: "JH",
  fullName: "JH Associates — Civil & Interior",
  tagline: "Civil & Interior",
  sinceYear: "2020",
  logo: img.logo,
  address: "DHA Phase 2 near Rahat milk Corner, Karachi, Pakistan",
  addressShort: "DHA Phase 2, Karachi",
  email: "info@jhassociate.com",
  phone: "0313 2204209",
  phoneAlt: "0333 2137144",
  phoneTel: "+923132204209",
  phoneAltTel: "+923332137144",
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  whatsapp:
    "https://wa.me/923132204209?text=Hello%20JH%20Associates%2C%20I%20would%20like%20to%20discuss%20an%20architectural%20and%20construction%20project.",
  hours: [
    { day: "Monday to Saturday", time: "9:00 AM to 7:00 PM" },
    { day: "Sunday", time: "By appointment" },
  ],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Our Services" },
  { to: "/projects", label: "Work Projects" },
  { to: "/contact", label: "Contact Us" },
];

export const heroSlides = [
  {
    subtitle: "welcome to JH Associates",
    title: "Construction Excellence",
    highlight:
      "At JH Associates, we bring precision and durability to every project. Our construction expertise ensures that your vision is built on a foundation that stands the test of time, blending innovation with quality craftsmanship.",
    image: img.heroExcellence,
  },
  {
    subtitle: "welcome to JH Associates",
    title: "Architectural Innovation",
    highlight:
      "Our architectural designs push boundaries while staying rooted in functionality. From suburban homes to commercial spaces, we craft structures that are both timeless and forward-thinking.",
    image: img.heroArchitecture,
  },
  {
    subtitle: "welcome to JH Associates",
    title: "Sustainable Construction Solutions",
    highlight:
      "We prioritize eco-friendly practices in our construction projects. Using sustainable materials and modern techniques, we deliver buildings that are energy-efficient and environmentally responsible.",
    image: img.heroSustainable,
  },
  {
    subtitle: "JH Associates",
    title: "Innovative Design Solutions",
    highlight:
      "Our design philosophy blends creativity with practicality. We create iconic structures and interiors that resonate with your vision and stand the test of time.",
    image: img.heroDesign,
  },
];

export const stats = [
  { value: "2020", label: "Since" },
  { value: "98%", label: "Happy Customer" },
  { value: "60+", label: "Projects Delivered" },
  { value: "20+", label: "Trusted Partners" },
];

export const companyOverview = {
  badge: "About JH Associates",
  heading: "JH Associates — Civil & Interior Excellence Since 2020",
  body1:
    "JH Associates is a reliable and forward-thinking construction company, proudly serving since 2020. We are known for delivering high-quality, timely, and innovative construction solutions across residential, commercial, and industrial sectors. With a team of experienced engineers, architects, and field professionals, we are dedicated to completing every project with integrity, expertise, and a commitment to excellence.",
  body2:
    "Rooted in Pakistan’s rich cultural heritage, JH Associates is backed by a team of over 40+ experts specializing in innovative, sustainable design and construction for both urban and rural landscapes. We blend traditional aesthetics with modern techniques to create spaces that reflect local identity and meet global standards.",
  mission:
    "To deliver design and construction solutions that celebrate Pakistan’s heritage while embracing sustainable and future-ready approaches.",
  vision:
    "To shape Pakistan’s built environment with creativity, sustainability, and deep respect for local traditions.",
  image: img.aboutTeam,
};

export const services = [
  {
    slug: "architecture",
    title: "Architecture",
    image: img.thePresident,
    short:
      "A blend of imagination and engineering creating timeless residential and commercial structures.",
    body: "Our architectural services are a beautiful blend of imagination and quality. We design every project with fresh thinking, technical expertise, and aesthetic appeal. Whether it’s a residential residence or a commercial complex, we create structures that inspire.",
  },
  {
    slug: "construction",
    title: "Construction",
    image: img.constructionFeature,
    short:
      "Precision civil construction executed with structural durability and premium material integrity.",
    body: "We don't see construction as just work — we see it as a responsibility. We complete every project with hard work, honesty, and full attention. Whether it's structural concrete, brickwork, or turnkey building execution, our craftsmanship stands strong.",
  },
  {
    slug: "landscape-architecture",
    title: "Landscape Architecture",
    image: img.landscapeArch,
    short:
      "Harmonious green courtyards and serene outdoor spaces designed for contemporary living.",
    body: "In today’s hectic life, it is tough to find greenery. With the advance in technology and plans, all you could see is concrete buildings around us and minor nature. We bring sustainable greenery and serene outdoor environments to your property.",
  },
  {
    slug: "architectural-design",
    title: "Architectural Design",
    image: img.verdantMetropolis,
    short:
      "Detailed 2D blueprints, elevation designs, and technical planning tailored to your plot.",
    body: "Transforming concepts into detailed blueprints and technical masterpieces that harmonize space, natural lighting, and structural balance for villas, estates, and corporate spaces.",
  },
  {
    slug: "interior-design",
    title: "Interior Design",
    image: img.nordicHarmony,
    short:
      "Bespoke luxury interiors, custom joinery, and lighting palettes crafted for daily comfort.",
    body: "Interior design that balances elegance and everyday practicality. From executive offices and retail outlets to luxury living rooms and bedrooms, we create bespoke environments tailored to your lifestyle.",
  },
  {
    slug: "3d-house-design",
    title: "3D House Design",
    image: img.saiyudHouse,
    short: "Detailed 3D models and photorealistic walkthroughs before a single brick is laid.",
    body: "We create detailed 3D models to bring your vision to life, ensuring every element is planned with precision. Visualize materials, lighting, textures, and spatial flow with total clarity.",
  },
  {
    slug: "business-remodel-planning",
    title: "Business Remodel Planning",
    image: img.urbanOasis,
    short:
      "Strategic corporate remodel planning with minimal disruption to daily office operations.",
    body: "We specialize in transforming business spaces with strategic remodel planning. Our process ensures minimal disruption while delivering modern, functional, and visually appealing results tailored to your brand.",
  },
  {
    slug: "commercial-remodeling",
    title: "Commercial Remodeling",
    image: img.commercialSuites,
    short:
      "Optimizing commercial space, brand aesthetics, and durability for high-traffic environments.",
    body: "Elevate your commercial property with our expert remodeling services. We focus on optimizing space, enhancing aesthetics, and ensuring durability for high-traffic environments.",
  },
];

export const globalPractice = {
  eyebrow: "Global Practice",
  title: "Global Expertise in Architectural Design",
  intro:
    "JH Associates is dedicated to designing complete environments—exceptional buildings, communities, and spaces—that thrive in unique contexts. Whether it’s a suburban home or a commercial complex, we deliver thoughtful, innovative solutions that make a lasting impact.",
  commitments: [
    {
      title: "Sustainable Commitment",
      desc: "We Co-Create with you to design what you desire and go above and beyond to deliver what you aspire for.",
    },
    {
      title: "Local Heritage & Global Standards",
      desc: "Rooted in Pakistan's unique landscapes while applying international engineering and aesthetic benchmarks.",
    },
  ],
  whyChooseUs: [
    {
      title: "Innovative Design",
      desc: "Pushing the boundaries of architecture with creative, forward-thinking designs that are both functional and visually stunning.",
    },
    {
      title: "Client-Centric Approach",
      desc: "Your vision is our priority. We collaborate closely with clients to ensure every project reflects their unique needs and goals.",
    },
    {
      title: "Award-Winning Excellence",
      desc: "Recognized for craftsmanship, sustainability, and transformative design impact.",
    },
    {
      title: "High Efficiency",
      desc: "Our streamlined processes ensure your project is completed on time with minimal revisions, maximizing efficiency.",
    },
    {
      title: "Tailored Solutions",
      desc: "We provide comprehensive solutions, from planning to execution, ensuring every detail aligns with your goals.",
    },
    {
      title: "Creative Ideas",
      desc: "From timeless homes to modern commercial spaces, our designs are inspired by your vision and our passion for innovation.",
    },
  ],
};

export const process = [
  {
    step: "01",
    title: "Strategic Definition",
    body: "We begin by understanding your vision and goals. Our team gathers data, assesses needs, and defines the project scope to set a solid foundation.",
    bullets: [
      "Aligning your vision with Pakistan’s unique architectural needs",
      "Incorporating local materials and cultural elements",
      "Setting a roadmap for sustainable design",
    ],
  },
  {
    step: "02",
    title: "Preparation and Briefing",
    body: "We collaborate with you to prepare a detailed brief, outlining objectives, budget, and timelines, ensuring alignment from the start.",
    bullets: [
      "Detailed site analysis for Pakistan’s diverse landscapes",
      "Budget planning tailored to local market rates",
      "Ensuring compliance with regional regulations",
    ],
  },
  {
    step: "03",
    title: "Concept Design",
    body: "Our designers craft innovative concepts, blending creativity with practicality, and present initial designs for your feedback.",
    bullets: [
      "Fusing modern design with traditional Pakistani aesthetics",
      "Using 3D visualizations for better understanding",
      "Prioritizing client feedback for personalized results",
    ],
  },
  {
    step: "04",
    title: "Planning Submission",
    body: "We finalize plans, handle permits, and submit designs for approval, ensuring a seamless transition to construction.",
    bullets: [
      "Coordinating with local authorities for approvals",
      "Finalizing eco-friendly construction strategies",
      "Preparing a timeline for efficient project execution",
    ],
  },
];

export const clientPartners = [
  { name: "KFC", logo: img.partnerKfc },
  { name: "Nando's", logo: img.partnerNandos },
  { name: "Texas Chicken", logo: img.partnerTexasChicken },
  { name: "7-Eleven", logo: img.partner7Eleven },
];

export const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Modern Villa Design · Karachi",
    quote:
      "JH Associates turned my dream villa into a reality with their passionate approach. Their dedication to detail is truly inspiring!",
  },
  {
    name: "Imran Ahmed",
    role: "Office Renovation · Karachi",
    quote:
      "The team’s passion for architecture shines through in every aspect of their work. My office space now reflects my vision perfectly!",
  },
  {
    name: "Fatima Malik",
    role: "Sustainable Home Construction · Karachi",
    quote:
      "I was amazed by the passion JH Associates brought to my eco-friendly home. Their creativity and commitment are unmatched!",
  },
];

export const quickConsultOptions = [
  "I Want To Remodel",
  "I Want To New Build",
  "I Need To Meet In Person",
  "Download Brochure",
];

export const posts = [
  {
    image: "/posts/post-1.jpg",
    title: "Structural Finishing & Architectural Detailing",
    location: "DHA Phase 2, Karachi",
    tag: "Civil & Structure",
  },
  {
    image: "/posts/post-2.jpg",
    title: "Modern Minimalist Elevation & Villa Design",
    location: "Karachi, Pakistan",
    tag: "Architecture",
  },
  {
    image: "/posts/post-3.jpg",
    title: "Luxury Interior Spaces & Bespoke Joinery",
    location: "Clifton, Karachi",
    tag: "Interior",
  },
  {
    image: "/posts/post-4.jpg",
    title: "Commercial Facade & Executive Suites",
    location: "Karachi Central",
    tag: "Commercial",
  },
  {
    image: "/posts/post-5.jpg",
    title: "High-End Residential Architecture",
    location: "DHA Phase 6, Karachi",
    tag: "Residential",
  },
  {
    image: "/posts/post-6.jpg",
    title: "Turnkey Site Execution & Supervision",
    location: "Karachi On-Site",
    tag: "Construction",
  },
  {
    image: "/posts/post-7.jpg",
    title: "Contemporary Villa Living & Ambient Light",
    location: "Karachi",
    tag: "Architecture",
  },
  {
    image: "/posts/post-8.jpg",
    title: "Premium Finishings & Architectural Harmony",
    location: "Interior Fitout",
    tag: "Civil & Interior",
  },
  {
    image: "/posts/post-9.jpg",
    title: "Landscape Architecture & Serene Courtyard",
    location: "Karachi",
    tag: "Landscape",
  },
];
