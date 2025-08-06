import { Button } from '@/components/ui/button';
import coffeeImage from '@/assets/coffee-cup.png';
export const OrderSection = () => {
  return (
    <section className="bg-background py-0">
      <div className="container flex gap-5">
        <div className="w-full">
          <img src={coffeeImage} alt="coffee img" width={500} />
        </div>

        <div className="w-full flex flex-col gap-10 justify-center">
          <h2 className="md:w-2/4">order your favourite coffee</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            reprehenderit repellat aut molestias est, odit quos voluptatem sint
            dicta, mollitia minima corporis accusantium optio vero?
          </p>

          <Button variant="1">order now</Button>
        </div>
      </div>
    </section>
  );
};
