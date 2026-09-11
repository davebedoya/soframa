export default function DisasterRelief() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image placeholder */}
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-green-100 border-2 border-dashed border-amber-300 rounded-2xl flex items-center justify-center">
              <div className="text-center text-amber-700 px-6">
                <svg
                  className="w-12 h-12 mx-auto mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18-3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5z"
                  />
                </svg>
                <p className="text-sm font-medium">Fotografía próximamente</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-sm font-semibold text-amber-700 tracking-wide uppercase mb-3">
              Nuestro Compromiso
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
              Alivio en Desastres
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Colombia enfrenta con frecuencia los efectos de terremotos y
              otros desastres naturales. SOFRAMA nace con la intención de
              acompañar a las comunidades afectadas en los momentos más
              difíciles, con presencia y solidaridad.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Creemos que el apoyo en momentos de crisis puede marcar la
              diferencia entre la desesperanza y la posibilidad de reconstruir.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-700 p-5 rounded-lg mt-8">
              <p className="text-sm text-amber-900 font-semibold mb-1">
                Información pendiente de aprobación
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Los detalles sobre programas específicos de respuesta a
                desastres se publicarán una vez confirmados por la fundación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
