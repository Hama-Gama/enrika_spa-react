import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Главная', href: '/' },
  { name: 'Услуги', href: '#services' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Отзывы', href: '#reviews' },
  { name: 'Контакты', href: '#contacts' },
];

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-200 py-10 mt-auto">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Логотип или текст */}
        <div className="text-center md:text-left text-gray-400 text-sm">
          © {new Date().getFullYear()} Все права защищены.
        </div>

        {/* Навигация */}
        <nav className="flex flex-wrap gap-4 justify-center text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-indigo-600 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;


