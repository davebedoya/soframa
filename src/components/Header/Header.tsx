import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Nosotros', href: '#' },
    { label: 'Nuestra Misión', href: '#' },
    { label: 'Causas', href: '#' },
    { label: 'Cómo Ayudar', href: '#' },
    { label: 'Contacto', href: '#' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">SF</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-amber-900">SOFRAMA</h1>
                <p className="text-xs text-amber-700 italic -mt-1">vida y esperanza</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-700 hover:text-amber-700 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side: Language Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex gap-2 border border-gray-300 rounded-lg p-1">
              <button
                aria-label="Switch to Spanish"
                className="px-3 py-1 text-xs font-medium rounded text-amber-900 bg-amber-100"
              >
                ES
              </button>
              <button
                aria-label="Switch to English"
                className="px-3 py-1 text-xs font-medium rounded text-gray-600 hover:text-amber-700 transition-colors duration-200"
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-700 hover:text-amber-700 transition-colors duration-200 font-medium py-2 px-2 rounded hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
