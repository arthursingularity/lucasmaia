const steps = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        ),
        title: 'Avaliação completa',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        title: 'Entendimento da sua dor e rotina',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Testes de movimento',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Início do tratamento no mesmo dia',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Definição do plano terapêutico',
    },
];

export default function FirstConsult() {
    return (
        <section className="section-padding gradient-hero relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 right-20 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-20 w-80 h-80 bg-[var(--accent)]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div>
                        <span className="eyebrow-lg text-[var(--accent-light)] mb-6 block">
                            Primeira consulta
                        </span>
                        <h2 className="heading-1 text-white mb-6">
                            Como é a sua primeira consulta?
                        </h2>
                        <p className="subtitle-sm text-white/80 mb-10">
                            A primeira consulta é o momento de entender profundamente o seu caso e já iniciar o tratamento.
                        </p>

                        <div className="space-y-4">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-colors"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--accent)] flex items-center justify-center text-white">
                                        {step.icon}
                                    </div>
                                    <p className="body-base text-white font-medium">{step.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Card */}
                    <div className="relative">
                        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-accent mb-6">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="heading-2 text-[var(--primary)] mb-4">
                                    Não é só uma avaliação.
                                </h3>
                                <p className="heading-3 text-[var(--accent)] mb-6">
                                    É o início do seu tratamento.
                                </p>
                                <p className="body-base text-[var(--muted)] mb-8">
                                    Agende agora sua avaliação e dê o primeiro passo para uma vida sem dor.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <a
                                    href="https://wa.me/553193110555"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-whatsapp w-full text-center justify-center text-lg"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Agendar pelo WhatsApp
                                </a>
                                <a
                                    href="#contato"
                                    className="btn-secondary w-full text-center justify-center !text-[var(--primary)] !border-[var(--primary)]/20 hover:!bg-[var(--primary)]/5"
                                >
                                    Ver outras formas de contato
                                </a>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-[var(--accent)]/20 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--gold)]/20 rounded-full blur-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
