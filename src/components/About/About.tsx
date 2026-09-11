export default function About() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
            Nuestra Historia
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-amber-700 to-green-600"></div>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-24">
          {/* Story */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              SOFRAMA — Vida y Esperanza was born from a dream. Inspired by Sofía, Francisco, and Marina, this foundation carries a vision of compassion and transformation.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              Our journey began with a simple belief: that together, we can create meaningful change. We work alongside families, older adults, animals, and communities in need—not with grand statistics or empty promises, but with genuine, heartfelt support.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Every action we take, every person we support, and every life we touch is guided by our commitment to dignity, inclusion, and hope.
            </p>
          </div>

          {/* Decorative Space / Values */}
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-br from-amber-50 to-green-50 rounded-lg p-8 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold text-amber-900 mb-6">
                Nuestros Valores
              </h3>
              <ul className="space-y-4">
                {['Compasión', 'Apoyo', 'Dignidad', 'Inclusión', 'Esperanza'].map(
                  (value) => (
                    <li key={value} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{value}</span>
                    </li>
                  )
                )}
              </ul>
              <p className="text-sm text-gray-600 italic mt-8 pt-6 border-t border-gray-300">
                Juntos transformamos vidas
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-green-50 border-l-4 border-green-600 p-8 md:p-10 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Nuestra Misión</h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            [Placeholder: Complete mission statement pending organizational review and approval]
          </p>
          <p className="text-sm text-gray-600 italic">
            We are committed to supporting families and vulnerable communities, caring for older adults, helping animals and shelters, and providing relief during disasters—all with compassion and dignity.
          </p>
        </div>
      </div>
    </section>
  );
}
