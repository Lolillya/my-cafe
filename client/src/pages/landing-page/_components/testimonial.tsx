import { StartIcon } from '@/components/icons';

export const Testimonial = () => {
  return (
    <section className="bg-background py-10">
      <div className="container">
        <div className="flex flex-col items-center py-10 gap-5">
          <h2>Testimonial</h2>
          <p className="text-center md:w-2/6 text-primary/50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio
            quisquam dicta maxime, perferendis veniam!
          </p>
        </div>

        <div className="flex justify-center items-center gap-6 my-10">
          <div className="flex w-fit">
            <img
              src="https://github.com/leerob.png"
              alt="avatar"
              className="w-14 h-auto rounded-full border-surface border-2 p-1 bg-onPrimary"
            />
            <img
              src="https://github.com/leerob.png"
              alt="avatar"
              className="w-14 -ml-4 h-auto rounded-full border-surface border-2 p-1 bg-onPrimary"
            />
            <img
              src="https://github.com/leerob.png"
              alt="avatar"
              className="w-14 -ml-4 h-auto rounded-full border-surface border-2 p-1 bg-onPrimary"
            />
            <img
              src="https://github.com/leerob.png"
              alt="avatar"
              className="w-14 -ml-4 h-auto rounded-full border-surface border-2 p-1 bg-onPrimary"
            />
            <img
              src="https://github.com/leerob.png"
              alt="avatar"
              className="w-14 -ml-4 h-auto rounded-full border-surface border-2 p-1 bg-onPrimary"
            />
          </div>

          <div className="w-px h-12 bg-primary rounded-full" />

          <div className="flex flex-col gap-2">
            <strong className="text-lg">4.6</strong>
            <span className="text-sm text-primary/60">
              Rated by 25k on Google.
            </span>
          </div>
        </div>

        <div className="flex gap-10 my-10">
          {/* EXPLORE CARDS */}
          <div className="rounded-md shadow-md flex flex-col items-center cursor-pointer hover:shadow-lg transition-all duration-200">
            <img src="https://github.com/shadcn.png" alt="icon" />

            <div className="flex flex-col p-8">
              <div className="flex items-center gap-10">
                <h4>John Doe</h4>
                <div className="flex gap-1">
                  <StartIcon width={18} />
                  <StartIcon width={18} />
                  <StartIcon width={18} />
                  <StartIcon width={18} />
                  <StartIcon width={18} />
                </div>
              </div>
              <p className="py-5 font-extralight text-primary/80 leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                reprehenderit repellat aut molestias est, odit quos voluptatem
                sint dicta, mollitia minima corporis accusantium optio vero?
              </p>
            </div>
          </div>

          <div className="rounded-md shadow-md flex flex-col items-center cursor-pointer hover:shadow-lg transition-all duration-200">
            <img src="https://github.com/evilrabbit.png" alt="icon" />

            <div className="flex flex-col p-8">
              <div className="flex items-center gap-10">
                <h4>John Doe</h4>
                <div className="flex gap-1">
                  <StartIcon width={18} />
                  <StartIcon width={18} />
                  <StartIcon width={18} />
                  <StartIcon width={18} />
                  <StartIcon width={18} />
                </div>
              </div>
              <p className="py-5 font-extralight text-primary/80 leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                reprehenderit repellat aut molestias est, odit quos voluptatem
                sint dicta, mollitia minima corporis accusantium optio vero?
              </p>
            </div>
          </div>

          <div className="rounded-md shadow-md flex flex-col items-center cursor-pointer hover:shadow-lg transition-all duration-200">
            <img src="https://github.com/shadcn.png" alt="icon" />

            <div className="flex flex-col p-8">
              <div className="flex items-center gap-10">
                <h4>John Doe</h4>
                <div className="flex gap-1">
                  <StartIcon width={18} />
                  <StartIcon width={18} />
                  <StartIcon width={18} />
                  <StartIcon width={18} />
                  <StartIcon width={18} />
                </div>
              </div>
              <p className="py-5 font-extralight text-primary/80 leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                reprehenderit repellat aut molestias est, odit quos voluptatem
                sint dicta, mollitia minima corporis accusantium optio vero?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
