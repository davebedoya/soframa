export default function Causes() {
  const causes = [
    {
      id: 'families',
      title: 'Familias y Comunidades Vulnerables',
      icon: '👥',
      description:
        'Support for families facing economic hardship and communities in need of essential resources and opportunities.',
    },
    {
      id: 'elderly',
      title: 'Adultos Mayores',
      icon: '🤝',
      description:
        'Dignified care and companionship for older adults, honoring their wisdom and ensuring they are never forgotten.',
    },
    {
      id: 'animals',
      title: 'Animales y Refugios',
      icon: '🐾',
      description:
        'Protection and care for animals in need, supporting shelters and rescue efforts in our community.',
    },
    {
      id: 'disaster',
      title: 'Alivio por Desastres',
      icon: '💚',
      description:
        'Emergency support and relief for communities affected by disasters and earthquakes in Colombia.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-amber-50 py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
            Nuestras Causas
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            We focus our efforts on four areas where we can make a meaningful difference.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-amber-700 to-green-600 mx-auto mt-6"></div>
        </div>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {causes.map((cause) => (
            <div
              key={cause.id}
              className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border-t-4 border-amber-700"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{cause.icon}</div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-amber-900 mb-4">
                {cause.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-grow">
                {cause.description}
              </p>

              {/* Footer accent */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="h-1 w-12 bg-gradient-to-r from-amber-700 to-green-600 rounded"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-16 md:mt-20 text-center max-w-3xl mx-auto">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed italic">
            Each cause represents a commitment to specific communities and a promise to show up with compassion and integrity.
          </p>
        </div>
      </div>
    </section>
  );
}
