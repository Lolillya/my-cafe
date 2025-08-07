import Logo from '@/assets/logo.png';

export const Footer = () => {
  return (
    <footer className="">
      <nav className="container">
        <div className="py-14">
          <div className="flex justify-between items-center">
            <div className="w-full">
              <img src={Logo} alt="Logo" width={100} />
            </div>

            <div className="flex flex-col w-2/5 gap-1">
              <strong>Subscribe to our Newsletter</strong>
              <input
                type="text"
                className="bg-onPrimary"
                placeholder="usernam@email.com"
              />
            </div>
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
        </div>

        <div className="w-full h-0.5 rounded-full bg-primary/10" />

        <div className="flex justify-center py-3">
          <span className="text-primary/40 text-sm">
            © Copyright 2024 WaleedCodes. All Rights Reserved.
          </span>
        </div>
      </nav>
    </footer>
  );
};
