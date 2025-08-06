import { Button } from '@/components/ui/button';
import coffeeCup from '@/assets/coffee-cup.png';

export const HeroSection = () => {
  return (
    <section className="bg-background">
      <div className="container flex items-center">
        <div className="w-full flex flex-col gap-10">
          <h1>Café Iriya</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>

          <div className="flex gap-5">
            <Button variant="1">download app</Button>
            <Button variant="2">shop coffee</Button>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <img src={coffeeCup} alt="Coffee Cup" width={500} />
        </div>
      </div>
    </section>
  );
};
