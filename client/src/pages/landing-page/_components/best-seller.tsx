import { Button } from '@/components/ui/button';
import coffee1 from '@/assets/mid1.png';

export const BestSellerSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col items-center py-20">
          <h2>best selling coffee</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio
            quisquam dicta maxime, perferendis veniam!
          </p>
        </div>

        <div className="flex gap-10 my-10">
          {/* PRODUCT CARD */}

          <div className="rounded-lg shadow-md py-10 px-8 hover:shadow-lg transition-all duration-200">
            <div className="flex relative">
              <div className="flex flex-col justify-center w-full">
                <span>#1 selling</span>
                <h3>Double Espresso</h3>
              </div>
              <div className="w-full"></div>
              <img
                src={coffee1}
                alt="coffee product"
                width={230}
                className="absolute -right-[1rem] -top-[8rem]"
              />
            </div>
            <div className="mt-10 flex flex-col gap-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                dicta alias id, nostrum rerum cum ducimus omnis sequi cumque
                nam.
              </p>

              <div className="flex w-full justify-between items-center">
                <strong>$ 50.99</strong>
                <Button variant="1">order now</Button>
              </div>
            </div>
          </div>

          <div className="rounded-lg shadow-md py-10 px-8 hover:shadow-lg transition-all duration-200">
            <div className="flex relative">
              <div className="flex flex-col justify-center w-full">
                <span>#1 selling</span>
                <h3>Double Espresso</h3>
              </div>
              <div className="w-full"></div>
              <img
                src={coffee1}
                alt="coffee product"
                width={230}
                className="absolute -right-[1rem] -top-[8rem]"
              />
            </div>

            <div className="mt-10 flex flex-col gap-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                dicta alias id, nostrum rerum cum ducimus omnis sequi cumque
                nam.
              </p>

              <div className="flex w-full justify-between items-center">
                <strong>$ 50.99</strong>
                <Button variant="1">order now</Button>
              </div>
            </div>
          </div>

          <div className="rounded-lg shadow-md py-10 px-8 hover:shadow-lg transition-all duration-200">
            <div className="flex relative">
              <div className="flex flex-col justify-center w-full">
                <span>#1 selling</span>
                <h3>Double Espresso</h3>
              </div>
              <div className="w-full"></div>
              <img
                src={coffee1}
                alt="coffee product"
                width={230}
                className="absolute -right-[1rem] -top-[8rem]"
              />
            </div>
            <div className="mt-10 flex flex-col gap-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                dicta alias id, nostrum rerum cum ducimus omnis sequi cumque
                nam.
              </p>

              <div className="flex w-full justify-between items-center">
                <strong>$ 50.99</strong>
                <Button variant="1">order now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
