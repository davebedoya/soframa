export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Nosotros', href: '#' },
    { label: 'Causas', href: '#' },
    { label: 'Cómo Ayudar', href: '#' },
    { label: 'Contacto', href: '#' },
  ];

  return (
    <footer className="bg-amber-950 text-amber-100">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">SOFRAMA</h3>
            <p className="text-amber-200 italic text-sm mb-4">
              Vida y Esperanza
            </p>
            <p className="text-amber-300 text-sm leading-relaxed">
              Compasión, apoyo, dignidad, inclusión y esperanza para las
              personas y los animales que más lo necesitan.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Enlaces rápidos del pie de página">
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-amber-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social / Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Conecta con Nosotros
            </h4>
            <p className="text-amber-300 text-sm italic">
              Enlaces a redes sociales próximamente
            </p>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-amber-400 text-xs text-center md:text-left">
            © {currentYear} SOFRAMA — Vida y Esperanza. Todos los derechos
            reservados.
          </p>
          <p className="text-amber-500 text-xs italic">
            Estado legal pendiente de confirmación
          </p>
        </div>
      </div>
    </footer>
  );
}
