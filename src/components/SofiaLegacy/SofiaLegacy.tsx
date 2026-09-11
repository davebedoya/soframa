export default function SofiaLegacy() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16 md:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Portrait placeholder */}
        <div className="w-36 h-36 md:w-44 md:h-44 mx-auto mb-8 rounded-full bg-gradient-to-br from-amber-100 to-green-100 border-2 border-dashed border-amber-300 flex items-center justify-center">
          <svg
            className="w-14 h-14 text-amber-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        <span className="inline-block text-sm font-semibold text-green-700 tracking-wide uppercase mb-3">
          En Memoria y Honor
        </span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-8">
          El Legado de Sofía
        </h2>

        <p className="font-serif text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8">
          "Sofía soñó con crear una fundación que ayudara a las personas y a
          los animales."
        </p>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Ese sueño es el corazón de SOFRAMA. Su nombre y su visión viven en
          cada causa que apoyamos y en cada vida que tocamos.
        </p>

        <div className="bg-white/70 border border-amber-200 rounded-lg p-6 mt-10 text-left">
          <p className="text-sm text-amber-900 font-semibold mb-1">
            Información pendiente de aprobación
          </p>
          <p className="text-gray-600 text-sm leading-relaxed italic">
            Más detalles sobre la historia de Sofía se compartirán aquí cuando
            la familia los confirme.
          </p>
        </div>
      </div>
    </section>
  );
}
