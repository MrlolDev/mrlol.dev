import BackgroundContainer from "@/components/BackgroundContainer";
import Footer from "@/components/Footer";
import Story from "@/components/story";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <BackgroundContainer className="flex flex-col items-center justify-start md:justify-center py-4 md:py-0 h-screen">
        <Story />
        <Footer />
      </BackgroundContainer>
    </main>
  );
}
