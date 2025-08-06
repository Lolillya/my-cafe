import { BestSellerSection } from './_components/best-seller';
import { ExploreSection } from './_components/explore';
import { HeroSection } from './_components/hero';
import { OrderSection } from './_components/order';

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <ExploreSection />
      <OrderSection />
      <BestSellerSection />
    </>
  );
};

export default LandingPage;
