import { redirect } from "next/navigation";
import { featuredProject } from "../../data/projects";

export default function ProjectsIndexPage() {
  redirect(`/projects/${featuredProject.slug}`);
}
