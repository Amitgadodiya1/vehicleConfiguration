import ThemeToggle from "./ThemeToggle";

const Navbar = () => (
  <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow">
    <h1 className="text-xl font-bold">Lexus Motors</h1>
    <ThemeToggle />
  </nav>
);

export default Navbar;
