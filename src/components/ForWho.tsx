const conditions = [
    {
        icon: (
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Dor lombar recorrente',
        description: 'Dores frequentes na região lombar que voltam periodicamente',
    },
    {
        icon: (
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        title: 'Hérnia de disco',
        description: 'Tratamento conservador especializado para hérnias discais',
    },
    {
        icon: (
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Dor ciática',
        description: 'Dor que irradia para a perna por irritação do nervo ciático',
    },
    {
        icon: (
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        title: 'Dor cervical / torcicolo',
        description: 'Dores no pescoço e travamentos frequentes',
    },
    {
        icon: (
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
        title: 'Rigidez e travamentos',
        description: 'Sensação de coluna "travada" e limitação de movimentos',
    },
    {
        icon: (
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        title: 'Dor persistente',
        description: 'Quando a dor não melhora só com remédio',
    },
];

export default function ForWho() {
    return (
        <section id="tratamento" className="section-padding bg-[var(--surface)]">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <div className="section-header">
                    <span className="eyebrow-lg text-[var(--accent)]">
                        Para quem é o tratamento
                    </span>
                    <h2 className="heading-1 text-[var(--primary)]">
                        Você sofre com algum desses problemas?
                    </h2>
                    <div className="divider divider-center mt-6 mb-8"></div>
                    <p className="lead">
                        Se você se identifica com alguma dessas condições, o tratamento especializado em coluna pode ser o caminho para recuperar sua qualidade de vida.
                    </p>
                </div>

                {/* Conditions grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {conditions.map((condition, index) => (
                        <div
                            key={index}
                            className="card group hover:border-gradient cursor-pointer border border-gray-300"
                        >
                            <div className="flex items-center gap-5">
                                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-accent flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                    {condition.icon}
                                </div>
                                <div>
                                    <h3 className="heading-5 text-[var(--primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                                        {condition.title}
                                    </h3>
                                    <p className="body-sm text-[var(--muted)]">
                                        {condition.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="body-base text-[var(--muted)] mb-6">
                        Não encontrou sua condição? Entre em contato e tire suas dúvidas.
                    </p>
                    <a
                        href="#contato"
                        className="inline-flex btn-primary text-center justify-center gap-2 text-[var(--accent)] font-semibold hover:text-[var(--accent-dark)] transition-colors"
                    >
                        <span>Falar com o Dr. Lucas</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
