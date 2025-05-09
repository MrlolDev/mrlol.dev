import BackgroundContainer from "@/components/BackgroundContainer";
import Footer from "@/components/Footer";
import Story from "@/components/story";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <BackgroundContainer className="flex flex-col items-center justify-start md:justify-center py-4  pb-0 min-h-screen">
        <Story />
        <Footer className="relative" />
      </BackgroundContainer>
    </main>
  );
}
