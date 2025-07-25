import BackgroundContainer from "@/components/BackgroundContainer";
import Footer from "@/components/Footer";
import TravelMap from "@/components/travels/TravelMap";

export default function TravelsPage() {
  return (
    <BackgroundContainer className="flex flex-col items-center justify-between pt-2 w-full h-screen">
      <TravelMap />
      <Footer className="relative mt-auto" />
    </BackgroundContainer>
  );
}
