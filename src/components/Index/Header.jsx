import Link from "next/link";
function Header() {
  return (
    <header className="bg-slate-600 decoration-0 p-2">
      <nav className="flex items-center justify-between h-20">
        <Link href={'.'}><h1 className="text-4xl">EduTime</h1></Link>
        <ul className="flex flex-row gap-4">
          <li className="hover:bg-slate-700 transition-all duration-500 rounded-md p-4 cursor-pointer">
            <Link href={'/Horarios/'}>Cursos</Link>
          </li>
          <li className="hover:bg-slate-700 transition-all duration-500 rounded-md p-4">
            Acerca de Nosotros
          </li>
          <li className="hover:bg-slate-700 transition-all duration-500 rounded-md p-4">
            Documentacion
          </li>
          <li className="hover:bg-slate-700 transition-all duration-500 rounded-md p-4">
            Github
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
