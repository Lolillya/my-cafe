import { BagIcon, MenuIcon, XIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';

import Logo from '@/assets/logo.png';
import { useState } from 'react';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-background absolute sm:block">
      <nav
        className={`container sm:py-6 py-4 bg-white sm:bg-background sm:shadow-none transition-all duration-300 ease-in-out overflow-hidden shadow-md `}
      >
        <section className="flex items-center justify-between">
          <div className="hidden sm:block">
            <img src={Logo} width={60} alt="Logo" />
          </div>

          <div className="block sm:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XIcon width={32} height={32} />
            ) : (
              <MenuIcon width={32} height={32} />
            )}
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden sm:flex items-center gap-8">
            <li className="group relative">
              <span className="cursor-pointer">cafe menu</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full" />
            </li>
            <li className="group relative">
              <span className="cursor-pointer">about us</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full" />
            </li>
            <li className="group relative">
              <span className="cursor-pointer">find us</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full" />
            </li>
            <li className="group relative">
              <span className="cursor-pointer">catering</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full" />
            </li>
          </ul>

          <div className="hidden sm:flex gap-5 items-center">
            <div className="p-1.5 w-10 h-10 rounded-full shadow-md flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300">
              <BagIcon />
            </div>

            <Button variant="1">buy gift vouchers</Button>
          </div>
        </section>

        {/* Mobile Navigation */}
        <div
          className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-6 pb-4 space-y-4">
            <ul className="space-y-4 block">
              <li className="group">
                <span className="cursor-pointer text-lg font-medium hover:text-[var(--color-primary)] transition-colors duration-300">
                  cafe menu
                </span>
              </li>
              <li className="group">
                <span className="cursor-pointer text-lg font-medium hover:text-[var(--color-primary)] transition-colors duration-300">
                  about us
                </span>
              </li>
              <li className="group">
                <span className="cursor-pointer text-lg font-medium hover:text-[var(--color-primary)] transition-colors duration-300">
                  find us
                </span>
              </li>
              <li className="group">
                <span className="cursor-pointer text-lg font-medium hover:text-[var(--color-primary)] transition-colors duration-300">
                  catering
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
