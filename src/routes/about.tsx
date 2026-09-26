import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Coming Soon | JH Associates" },
      {
        name: "description",
        content:
          "The JH Associates company profile is coming soon.",
      },
      { property: "og:title", content: "About JH Associates — Coming Soon" },
      {
        property: "og:description",
        content: "Our story and approach will be available soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return <ComingSoon page="About us" message="Our story, team and approach are being prepared. Please check back soon." />;
}
