import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Building2,
  Compass,
  Sparkles,
  ShieldCheck,
  Clock,
  Award,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  heroSlides,
  process,
  services,
  site,
  stats,
  companyOverview,
  globalPractice,
  clientPartners,
  quickConsultOptions,
} from "@/lib/site-data";
import { projects } from "@/lib/site";
import { Counter, Reveal, SectionHeading } from "@/components/ui-bits";
import { AutoScroller } from "@/components/AutoScroller";
import { TestimonialsRail } from "@/components/Testimonials";
import { PostsRail } from "@/components/PostsRail";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JH Associates — Civil & Interior | Architecture & Construction" },
      {
        name: "description",
        content:
          "JH Associates is a premier construction and architecture firm serving Pakistan since 2020. Precision civil construction, interior design, and sustainable architecture.",
      },
      { property: "og:title", content: "JH Associates — Civil & Interior" },
      {
        property: "og:description",
        content:
          "High-quality, timely, and innovative construction solutions across residential, commercial, and industrial sectors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HeroWordmark() {
  const word = "ASSOCIATES";
  return (
    <h2 className="flex justify-center gap-[0.06em] overflow-hidden text-[12vw] font-extrabold leading-none tracking-[0.06em] text-transparent sm:text-[8vw] lg:text-[6rem]">
      {word.split("").map((c, i) => (
        <span
          key={`${c}-${i}`}
          className="letter-in ember-text inline-block"
          style={{ animationDelay: `${140 + i * 70}ms` }}
        >
          {c}
        </span>
      ))}
    </h2>
  );
}

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6500);
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[index];

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {heroSlides.map((s, i) => (
        <img
          key={s.title}
          src={s.image}
          alt={s.title}
          width={1920}
          height={1280}
          fetchPriority={i === 0 ? "high" : "low"}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          className={`absolute inset-0 size-full object-cover transition-opacity duration-[1400ms] ${
            i === index ? "animate-slow-drift opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-background/60" />

      <div className="relative mx-auto w-full max-w-5xl px-5 pb-16 pt-32 text-center lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/60 px-4 py-1.5 backdrop-blur-md">
          <span className="size-2 rounded-full bg-primary animate-pulse" />
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary sm:text-xs">
            {slide.subtitle}
          </p>
        </div>

        <p className="mt-4 text-7xl font-extrabold leading-none sm:text-8xl">JH</p>
        <HeroWordmark />
        <p className="mx-auto mt-2 text-[11px] font-semibold uppercase tracking-[0.5em] text-foreground/85 sm:text-sm">
          Civil & Interior
        </p>

        <h1
          key={slide.title}
          className="animate-wipe-in mx-auto mt-8 max-w-3xl text-2xl font-extrabold leading-[1.15] sm:text-4xl lg:text-5xl"
        >
          {slide.title}
        </h1>
        <p
          key={slide.highlight}
          className="animate-rise-in mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          {slide.highlight}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/projects"
            className="btn-shake sheen-on-hover inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent"
          >
            Get Architecture Consulting <ArrowRight className="size-4" />
          </Link>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/60 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Phone className="size-4" /> Talk Now: {site.phone}
          </a>
        </div>

        <div className="mx-auto mt-12 flex max-w-lg justify-center gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-10 bg-primary" : "w-4 bg-foreground/30 hover:bg-foreground/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />

      {/* Counter / Stats Section */}
      <section className="border-y border-border bg-card/40 py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 text-center lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <Counter value={s.value} className="ember-text text-4xl font-extrabold sm:text-5xl" />
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About Section directly from jhassociate.com */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {companyOverview.badge}
              </div>
              <h2 className="mt-5 text-2xl font-extrabold leading-tight sm:text-4xl lg:text-4xl">
                {companyOverview.heading}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {companyOverview.body1}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {companyOverview.body2}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="lit-panel rounded-xl border border-border/80 bg-card/60 p-5">
                  <div className="flex items-center gap-2 font-bold text-foreground">
                    <Compass className="size-4 text-primary" /> Our Mission
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {companyOverview.mission}
                  </p>
                </div>
                <div className="lit-panel rounded-xl border border-border/80 bg-card/60 p-5">
                  <div className="flex items-center gap-2 font-bold text-foreground">
                    <Sparkles className="size-4 text-primary" /> Our Vision
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {companyOverview.vision}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="btn-shake sheen-on-hover inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground hover:bg-accent"
                >
                  See More About Us <ArrowRight className="size-4" />
                </Link>
                <div className="text-xs text-muted-foreground">
                  <span className="font-bold text-foreground">40+ In-House Experts</span> in
                  Architecture & Construction
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="relative lg:col-span-6">
              <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl">
                <img
                  src={companyOverview.image}
                  alt="JH Associates Team on site"
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-white/10 bg-background/80 p-4 backdrop-blur-md">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      Field Leadership
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      DHA Phase 2, Karachi & Nationwide
                    </p>
                  </div>
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="inline-flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
                    aria-label="Call JH Associates"
                  >
                    <Phone className="size-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Comprehensive Services We Offer */}
      <section className="overflow-hidden border-t border-border bg-card/25 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Comprehensive Services"
            title="Services We Offer"
            intro="JH Associates offers comprehensive architectural and construction services from concept to completion, covering pre-design, design, and post-design phases."
          />
        </div>

        <div className="mt-12">
          <AutoScroller speed={260}>
            {services.map((s) => (
              <article
                key={s.slug}
                className="lit-panel group flex h-full w-[290px] shrink-0 flex-col overflow-hidden rounded-xl border border-border/80 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-xl sm:w-[360px]"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    draggable={false}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 line-clamp-2 h-10 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {s.short}
                  </p>
                  <div className="mt-5 border-t border-border/60 pt-4">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent"
                    >
                      Find Out More <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </AutoScroller>
        </div>
      </section>

      {/* Global Practice & Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {globalPractice.eyebrow}
              </div>
              <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-extrabold sm:text-4xl lg:text-5xl">
                {globalPractice.title}
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {globalPractice.intro}
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {globalPractice.whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 70}>
                <div className="lit-panel h-full rounded-xl border border-border/80 bg-card/60 p-7">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {i === 0 && <Compass className="size-5" />}
                    {i === 1 && <CheckCircle2 className="size-5" />}
                    {i === 2 && <Award className="size-5" />}
                    {i === 3 && <Clock className="size-5" />}
                    {i === 4 && <ShieldCheck className="size-5" />}
                    {i === 5 && <Building2 className="size-5" />}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{w.title}</h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {w.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Outstanding Section */}
      <section className="overflow-hidden border-y border-border bg-card/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Projects Outstanding"
            title="Projects Featured by JH Associates"
            intro="At our company, we understand that a home is more than just a physical space — it's a reflection of your dreams and aspirations."
          />
        </div>
        <div className="mt-12">
          <AutoScroller speed={180}>
            {projects.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="lit-panel flex h-full w-[290px] shrink-0 flex-col overflow-hidden rounded-xl border border-border/70 bg-card sm:w-[370px]"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.title}, ${p.location}`}
                    loading="lazy"
                    draggable={false}
                    className="size-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-background/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary backdrop-blur-md">
                    {p.status}
                  </div>
                </div>
                <div className="flex flex-col p-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Architecture / Civil & Cultural
                  </span>
                  <h3 className="mt-1 text-base font-bold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{p.location}</p>
                  <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-muted-foreground/90">
                    {p.blurb}
                  </p>
                </div>
              </Link>
            ))}
          </AutoScroller>
        </div>
      </section>

      {/* Process Section - 4 Clear Stages */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="Four Clear Stages"
            intro="We always work according to a standard rule and never break that rule, ensuring customers receive the most intuitive view of the process for completing their projects."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 90}>
                <div className="lit-panel h-full rounded-xl border border-border/80 bg-card p-7">
                  <div className="text-4xl font-extrabold text-primary/30">{p.step}</div>
                  <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {p.body}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-border/60 pt-4 text-[11px] text-muted-foreground sm:text-xs">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners & Brands Section */}
      <section className="border-y border-border bg-card/25 py-16">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">
              Our Clients & Partners
            </p>
            <h2 className="mt-2 text-xl font-extrabold sm:text-2xl">
              Trusted by Renowned Commercial Brands
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {clientPartners.map((c) => (
              <Reveal key={c.name} className="flex items-center justify-center">
                <div className="flex h-20 w-36 items-center justify-center rounded-xl border border-border/60 bg-card/80 p-4 transition-transform duration-300 hover:scale-105 hover:border-primary/40">
                  <img
                    src={c.logo}
                    alt={c.name}
                    loading="lazy"
                    className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts & Visual Updates (path: /public/posts) */}
      <section className="overflow-hidden border-t border-border bg-card/25 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Visual Updates"
            title="Our Latest Posts"
            intro="Explore our recent site updates, architectural spotlights, and ongoing civil craftsmanship across Karachi."
          />
        </div>
        <div className="mt-12">
          <PostsRail />
        </div>
      </section>

      {/* Testimonials */}
      <section className="overflow-hidden border-t border-border py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="What Our Clients Say"
            title="Client Reviews & Experiences"
            intro="Read genuine feedback from villa homeowners and corporate clients who partnered with JH Associates."
          />
        </div>
        <div className="mt-12">
          <TestimonialsRail />
        </div>
      </section>

      {/* Let's Collaborate / Contact CTA directly from live site */}
      <section className="relative overflow-hidden border-t border-border bg-card/40 py-20 lg:py-28">
        <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Let's Collaborate
            </div>
            <h2 className="mt-4 text-2xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Let's Make Something Beautiful Together
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Want to get in touch? We’d love to hear from you. Here’s how you can reach JH
              Associates and its various departments by phone, email, and visit in Karachi.
            </p>

            {/* Quick intent selector pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              {quickConsultOptions.map((opt) => (
                <a
                  key={opt}
                  href={`https://wa.me/923132204209?text=${encodeURIComponent(`Hello JH Associates, ${opt}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-semibold text-foreground/90 transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {opt}
                </a>
              ))}
            </div>

            {/* Contact info grid */}
            <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
              <div className="lit-panel rounded-xl border border-border/80 bg-card p-6">
                <Phone className="size-5 text-primary" />
                <h3 className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Call Support
                </h3>
                <p className="mt-1 text-sm font-bold text-foreground">
                  <a href={`tel:${site.phoneTel}`} className="hover:text-primary">
                    {site.phone}
                  </a>
                </p>
                <p className="text-xs text-muted-foreground">
                  <a href={`tel:${site.phoneAltTel}`} className="hover:text-primary">
                    {site.phoneAlt}
                  </a>
                </p>
              </div>

              <div className="lit-panel rounded-xl border border-border/80 bg-card p-6">
                <Mail className="size-5 text-primary" />
                <h3 className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Mail Us
                </h3>
                <p className="mt-1 text-sm font-bold text-foreground">
                  <a href={`mailto:${site.email}`} className="hover:text-primary">
                    {site.email}
                  </a>
                </p>
                <p className="text-xs text-muted-foreground">Response within 24 hours</p>
              </div>

              <div className="lit-panel rounded-xl border border-border/80 bg-card p-6">
                <MapPin className="size-5 text-primary" />
                <h3 className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Office Location
                </h3>
                <p className="mt-1 text-sm font-bold text-foreground">{site.addressShort}</p>
                <p className="text-xs text-muted-foreground">Near Rahat Milk Corner, Karachi</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="btn-shake sheen-on-hover inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground hover:bg-accent"
              >
                Let's Start Work <ArrowRight className="size-4" />
              </Link>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/60 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="size-4" /> WhatsApp Consultation
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
