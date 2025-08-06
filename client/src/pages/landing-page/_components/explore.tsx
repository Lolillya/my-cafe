import { Button } from '@/components/ui/button';
import icon1 from '@/assets/icon1.svg';
import icon2 from '@/assets/icon2.svg';
import icon3 from '@/assets/icon3.svg';

export const ExploreSection = () => {
  return (
    <section className="py-20">
      <div className="container flex flex-col items-center">
        <div className="flex flex-col items-center py-16 gap-5">
          <h2>explore the cafe</h2>
          <p className="text-center md:w-2/3 text-primary/50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio
            quisquam dicta maxime, perferendis veniam!
          </p>
        </div>

        <div className="flex gap-10">
          {/* EXPLORE CARDS */}
          <div className="rounded-md shadow-md px-8 py-10 flex flex-col items-center cursor-pointer hover:shadow-lg transition-all duration-200">
            <h3>our catering</h3>
            <p>Lorem ipsum dolor sit amet dolor consectetur.</p>

            <img src={icon1} alt="icon" />

            <Button variant="1">order cathering</Button>
          </div>

          <div className="rounded-md shadow-md px-8 py-10 flex flex-col items-center cursor-pointer hover:shadow-lg transition-all duration-200">
            <h3>our catering</h3>
            <p>Lorem ipsum dolor sit amet dolor consectetur.</p>

            <img src={icon2} alt="icon" />

            <Button variant="1">order cathering</Button>
          </div>

          <div className="rounded-md shadow-md px-8 py-10 flex flex-col items-center cursor-pointer hover:shadow-lg transition-all duration-200">
            <h3>our catering</h3>
            <p>Lorem ipsum dolor sit amet dolor consectetur.</p>

            <img src={icon3} alt="icon" />

            <Button variant="1">order cathering</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
