export default function CallToAction() {
  const options = [
    {
      id: 'volunteer',
      title: 'Voluntariado',
      icon: '🙌',
      description:
        'Dona tu tiempo y talento para apoyar nuestras iniciativas en la comunidad.',
    },
    {
      id: 'donate',
      title: 'Donaciones',
      icon: '💝',
      description:
        'Próximamente ofreceremos formas seguras y confirmadas de contribuir económicamente.',
      pending: true,
    },
    {
      id: 'share',
      title: 'Difusión',
      icon: '📣',
      description:
        'Comparte nuestra misión y ayúdanos a llegar a más personas que puedan beneficiarse.',
    },
  ];

  return (
    <section className="bg-amber-900 py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Cómo Ayudar
          </h2>
          <p className="text-amber-100 text-base md:text-lg">
            Hay muchas formas de ser parte de esta misión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-amber-700/50">
          {options.map((option) => (
            <div key={option.id} className="text-center px-6 py-8 md:py-0">
              <div className="text-5xl mb-4" aria-hidden="true">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {option.title}
              </h3>
              <p className="text-amber-100 text-sm md:text-base leading-relaxed">
                {option.description}
              </p>
              {option.pending && (
                <span className="inline-block mt-4 text-xs font-semibold text-amber-200 uppercase tracking-wide border border-amber-300/50 rounded-full px-3 py-1">
                  Próximamente
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
