import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Coming Soon | JH Associates" },
      {
        name: "description",
        content:
          "JH Associates civil construction and interior design services are coming soon.",
      },
      { property: "og:title", content: "Services — Coming Soon | JH Associates" },
      {
        property: "og:description",
        content: "Our detailed civil and interior services will be available soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return <ComingSoon page="Services" message="Our civil construction and interior design services will be available here soon." />;
}
