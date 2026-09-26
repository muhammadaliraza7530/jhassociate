import {
  img,
  showreelUrl as reelUrl,
  process as processSteps,
  services as serviceList,
  site,
} from "@/lib/site-data";

export const logoUrl = img.logo;
export const showreelUrl = reelUrl;

export const company = {
  name: site.name,
  tagline: site.tagline,
  since: `Since ${site.sinceYear}`,
  phoneDisplay: site.phone,
  phoneAltDisplay: site.phoneAlt,
  phoneTel: site.phoneTel,
  phoneAltTel: site.phoneAltTel,
  whatsapp: site.whatsapp,
  email: site.email,
  addressShort: site.addressShort,
  address: site.address,
  hours: "Mon–Sat, 9:00 AM to 7:00 PM",
  socials: [
    { label: "Facebook", href: site.facebook },
    { label: "Instagram", href: site.instagram },
    { label: "LinkedIn", href: site.linkedin },
  ],
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  status: "Completed" | "Under Construction" | "Upcoming";
  category: "Architecture" | "Interior" | "Civil" | "Commercial";
  image: string;
  gallery: string[];
  blurb: string;
};

export const projects: Project[] = [
  {
    slug: "saiyud-house",
    title: "Saiyud House",
    location: "DHA Karachi",
    status: "Completed",
    category: "Architecture",
    image: img.saiyudHouse,
    gallery: [img.saiyudHouse, img.verdantMetropolis, img.contemporaryVilla],
    blurb:
      "A masterwork of architecture and civil engineering showcasing high verticality, curated lighting, and modern stone textures.",
  },
  {
    slug: "the-president",
    title: "The President",
    location: "Clifton, Karachi",
    status: "Completed",
    category: "Architecture",
    image: img.thePresident,
    gallery: [img.thePresident, img.contemporaryVilla, img.verdantMetropolis],
    blurb:
      "Iconic architectural landmark designed with refined symmetry, bold structural proportions, and luxurious finishes.",
  },
  {
    slug: "verdant-metropolis-residence",
    title: "Verdant Residence",
    location: "DHA Phase 2, Karachi",
    status: "Completed",
    category: "Architecture",
    image: img.verdantMetropolis,
    gallery: [img.verdantMetropolis, img.thePresident, img.nordicHarmony],
    blurb:
      "Sustainable urban residence integrating lush courtyard elements, energy-efficient insulation, and custom exterior louvers.",
  },
  {
    slug: "nordic-harmony-residences",
    title: "Nordic Residences",
    location: "Bahria Town, Karachi",
    status: "Completed",
    category: "Architecture",
    image: img.nordicHarmony,
    gallery: [img.nordicHarmony, img.urbanOasis, img.contemporaryVilla],
    blurb:
      "Minimalist architectural elegance emphasizing clean linear geometries, open-concept spaces, and natural daylight.",
  },
  {
    slug: "urban-oasis-revitalization",
    title: "Urban Oasis",
    location: "PECHS, Karachi",
    status: "Under Construction",
    category: "Commercial",
    image: img.urbanOasis,
    gallery: [img.urbanOasis, img.commercialSuites, img.saiyudHouse],
    blurb:
      "Adaptive commercial space remodel optimizing circulation, contemporary facade restoration, and acoustic interior design.",
  },
  {
    slug: "contemporary-luxury-villa",
    title: "Contemporary Villa",
    location: "DHA Phase 6, Karachi",
    status: "Completed",
    category: "Architecture",
    image: img.contemporaryVilla,
    gallery: [img.contemporaryVilla, img.saiyudHouse, img.thePresident],
    blurb:
      "Bespoke private villa featuring double-height ceiling voids, floor-to-ceiling glass systems, and custom interior joinery.",
  },
  {
    slug: "commercial-executive-suites",
    title: "Executive Suites",
    location: "Shahrah-e-Faisal, Karachi",
    status: "Completed",
    category: "Commercial",
    image: img.commercialSuites,
    gallery: [img.commercialSuites, img.urbanOasis, img.nordicHarmony],
    blurb:
      "Turnkey executive corporate offices built for high performance, high-traffic durability, and executive luxury aesthetics.",
  },
];

export const services = serviceList.map((s) => ({ title: s.title, body: s.body }));
export const process = processSteps;
