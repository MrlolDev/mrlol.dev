import BackgroundContainer from "@/components/BackgroundContainer";
import Footer from "@/components/Footer";
import Main from "@/components/main";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <BackgroundContainer className="flex flex-col items-center justify-center h-screen">
        <Main />
        <Footer />
      </BackgroundContainer>
    </main>
  );
}
