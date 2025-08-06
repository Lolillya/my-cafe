import { BagIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';

import Logo from '@/assets/logo.png';

export const NavBar = () => {
  return (
    <header className="w-full bg-background">
      <nav className="container py-6">
        <section className="flex items-center justify-between">
          <div>
            <img src={Logo} width={60} alt="Logo" />
          </div>

          <ul>
            <li className="group">
              <span>cafe menu</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full" />
            </li>
            <li className="group">
              <span>about us</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full" />
            </li>
            <li className="group">
              <span>find us</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full" />
            </li>
            <li className="group">
              <span>catering</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full" />
            </li>
          </ul>

          <div className="flex gap-5 items-center">
            <div className="p-1.5 w-10 h-10 rounded-full shadow-md flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300">
              <BagIcon />
            </div>

            <Button variant="1">buy gift vouchers</Button>
          </div>
        </section>
      </nav>
    </header>
  );
};
