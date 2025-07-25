import BackgroundContainer from "@/components/BackgroundContainer";
import Footer from "@/components/Footer";
import Projects from "@/components/projects";

export default function ProjectsPage() {
  return (
    <BackgroundContainer className="flex flex-col items-center justify-between pt-2 w-full min-h-screen">
      <Projects />
      <Footer className="relative mt-auto" />
    </BackgroundContainer>
  );
}
