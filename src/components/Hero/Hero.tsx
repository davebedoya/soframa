export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-green-50 py-16 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 text-center mb-2">
          SOFRAMA
        </h2>

        {/* Tagline */}
        <p className="text-amber-700 text-base md:text-lg font-medium italic text-center mb-8">
          Vida y Esperanza
        </p>

        {/* Mission Statement Placeholder */}
        <div className="bg-white bg-opacity-60 border-l-4 border-green-600 p-6 rounded-lg mb-12 text-center">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            [Placeholder: Official mission statement pending organizational approval]
          </p>
          <p className="text-sm text-gray-500 mt-3 italic">
            Our foundation works to transform lives through compassion, support, dignity, inclusion, and hope.
          </p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
          {/* Primary CTA */}
          <button
            className="flex-1 md:flex-none px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Conoce Nuestra Misión
          </button>

          {/* Secondary CTA */}
          <button
            className="flex-1 md:flex-none px-8 py-3 border-2 border-green-600 text-green-700 hover:bg-green-50 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Cómo Ayudar
          </button>
        </div>
      </div>
    </section>
  );
}
