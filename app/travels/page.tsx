import BackgroundContainer from "@/components/BackgroundContainer";
import Footer from "@/components/Footer";
import TravelMap from "@/components/travels/TravelMap";

export default function TravelsPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <BackgroundContainer className="flex flex-col items-center justify-start md:justify-center py-4 pb-0 min-h-screen">
        <TravelMap />
        <Footer className="relative" />
      </BackgroundContainer>
    </main>
  );
}
