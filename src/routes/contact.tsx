import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Coming Soon | JH Associates" },
      {
        name: "description",
        content:
          "The JH Associates contact page is coming soon.",
      },
      { property: "og:title", content: "Contact — Coming Soon | JH Associates" },
      {
        property: "og:description",
        content: "Our contact details and enquiry experience will be available soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return <ComingSoon page="Contact" message="Our contact details and enquiry experience are being prepared. Please check back soon." />;
}
