import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Skills } from "@/components/home/Skills";
import { LatestBlog } from "@/components/home/LatestBlog";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <LatestBlog />
    </>
  );
}
