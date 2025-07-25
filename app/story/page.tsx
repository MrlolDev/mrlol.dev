import BackgroundContainer from "@/components/BackgroundContainer";
import Footer from "@/components/Footer";
import Story from "@/components/story";

export default function Home() {
  return (
    <BackgroundContainer className="flex flex-col items-center justify-between pt-2 w-full h-screen">
      <Story />
      <Footer className="relative mt-auto" />
    </BackgroundContainer>
  );
}
