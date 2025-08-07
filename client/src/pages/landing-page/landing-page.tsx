import { BestSellerSection } from './_components/best-seller';
import { ExploreSection } from './_components/explore';
import { HeroSection } from './_components/hero';
import { OrderSection } from './_components/order';
import { Testimonial } from './_components/testimonial';

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <ExploreSection />
      <OrderSection />
      <BestSellerSection />
      <Testimonial />
    </>
  );
};

export default LandingPage;
