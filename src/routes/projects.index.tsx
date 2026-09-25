import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Coming Soon | JH Associates" },
      {
        name: "description",
        content: "The JH Associates civil and interior project portfolio is coming soon.",
      },
      { property: "og:title", content: "Projects — Coming Soon | JH Associates" },
      {
        property: "og:description",
        content: "Our civil construction and interior project portfolio will be available soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <ComingSoon
      page="Projects"
      message="Our civil and interior portfolio is being curated and will be available soon."
    />
  );
}
