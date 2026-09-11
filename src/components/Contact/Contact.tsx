export default function Contact() {
  const contactMethods = [
    {
      id: 'email',
      label: 'Correo Electrónico',
      value: 'Pendiente de confirmación',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      ),
    },
    {
      id: 'phone',
      label: 'Teléfono',
      value: 'Pendiente de confirmación',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      ),
    },
    {
      id: 'location',
      label: 'Ubicación',
      value: 'Colombia — dirección pendiente de confirmación',
      icon: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
            Contacto
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Nos encantaría saber de ti. Estas son las formas de comunicarte
            con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact info */}
          <div className="space-y-6">
            {contactMethods.map((method) => (
              <div key={method.id} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-amber-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {method.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">
                    {method.label}
                  </h3>
                  <p className="text-gray-600 text-sm italic">
                    {method.value}
                  </p>
                </div>
              </div>
            ))}

            <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-lg mt-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                La información de contacto oficial se agregará aquí cuando la
                familia la confirme.
              </p>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-amber-100 border-2 border-dashed border-green-300 rounded-2xl flex items-center justify-center">
            <div className="text-center text-green-700 px-6">
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
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <p className="text-sm font-medium">Mapa próximamente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
