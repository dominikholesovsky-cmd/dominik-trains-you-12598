import { Dumbbell } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-4 px-6">
      <div className="container mx-auto flex justify-center items-center gap-6">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-primary/20">
            <Dumbbell className="w-6 h-6 text-primary" />
          </div>
          <span className="font-bold text-xl">Dominik Holešovský</span>
        </div>

        {/* Center Text */}
        <div className="text-sm text-white text-center">
          © {currentYear} Dominik Holešovský | IČO: 14147505 | Všechna práva vyhrazena.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
