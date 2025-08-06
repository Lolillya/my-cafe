import { Button } from '@/components/ui/button';

export const BestSellerSection = () => {
  return (
    <section className="">
      <div className="container">
        <div className="flex flex-col items-center">
          <h2>best selling coffee</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio
            quisquam dicta maxime, perferendis veniam!
          </p>
        </div>

        <div className="flex gap-10">
          {/* PRODUCT CARD */}

          <div>
            <span>#1 selling</span>
            <h3>Double Espresso</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              dicta alias id, nostrum rerum cum ducimus omnis sequi cumque nam.
            </p>

            <div className="flex w-full justify-between items-center">
              <label>$ 50.99</label>
              <Button variant="1">order now</Button>
            </div>
          </div>

          <div>
            <span>#1 selling</span>
            <h3>Double Espresso</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              dicta alias id, nostrum rerum cum ducimus omnis sequi cumque nam.
            </p>

            <div className="flex w-full justify-between items-center">
              <label>$ 50.99</label>
              <Button variant="1">order now</Button>
            </div>
          </div>

          <div>
            <span>#1 selling</span>
            <h3>Double Espresso</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              dicta alias id, nostrum rerum cum ducimus omnis sequi cumque nam.
            </p>

            <div className="flex w-full justify-between items-center">
              <label>$ 50.99</label>
              <Button variant="1">order now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
