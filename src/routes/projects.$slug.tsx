import { createFileRoute, notFound } from "@tanstack/react-router";
import { projects } from "@/lib/site";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — JH Associates" }, { name: "robots", content: "noindex" }] };
    }
    const { project } = loaderData;
    const title = `${project.title} — Coming Soon | JH Associates`;
    return {
      meta: [
        { title },
        { name: "description", content: "This JH Associates project page is coming soon." },
        { property: "og:title", content: title },
        { property: "og:description", content: "This project page will be available soon." },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  return <ComingSoon page={project.title} message="This project story and gallery are being prepared. Please check back soon." />;
}
