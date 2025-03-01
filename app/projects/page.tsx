import BackgroundContainer from "@/components/BackgroundContainer";
import Footer from "@/components/Footer";
import Projects from "@/components/projects";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen overflow-y-auto">
      <BackgroundContainer className="flex flex-col items-center justify-start md:justify-center py-4 pb-0 min-h-screen">
        <Projects />
        <Footer className="relative" />
      </BackgroundContainer>
    </main>
  );
}
