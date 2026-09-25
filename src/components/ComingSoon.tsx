import { Link } from "@tanstack/react-router";
import { ArrowLeft, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";

type ComingSoonProps = {
  page: string;
  message?: string;
};

export function ComingSoon({ page, message }: ComingSoonProps) {
  return (
    <section className="grid-backdrop relative isolate flex min-h-[78svh] items-center overflow-hidden px-5 pb-20 pt-32 lg:pt-36">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-px bg-border" />
      <div className="absolute left-1/2 top-24 -z-10 h-[calc(100%-8rem)] w-px bg-border" />

      <div className="mx-auto w-full max-w-4xl text-center">
        <img
          src="/logo.webp"
          alt="JH Associates Civil and Interior"
          className="mx-auto size-28 object-contain sm:size-36"
        />
        <div className="mt-8 inline-flex items-center gap-2 border border-border bg-card px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
          <HardHat className="size-3.5 text-primary" />
          {page}
        </div>
        <h1 className="mt-7 text-5xl font-extrabold uppercase leading-none sm:text-7xl lg:text-8xl">
          Coming <span className="outline-text">Soon</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {message ?? "We are carefully building this page. Please check back soon."}
        </p>
        <Button asChild size="lg" className="mt-9 rounded-none px-7 uppercase tracking-[0.16em]">
          <Link to="/">
            <ArrowLeft /> Back to home
          </Link>
        </Button>
      </div>
    </section>
  );
}
