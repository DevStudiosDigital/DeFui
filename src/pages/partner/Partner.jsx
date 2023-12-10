import { Footer } from "./components/Footer";
import { Screen } from "./components/Screen";
import { WhyPartner } from "./components/WhyPartner";

export const Partner = () => {
  return (
    <div className="min-h-screen h-full bg-black text-white">
      <Screen />
      <WhyPartner />
      <Footer />
    </div>
  );
};
