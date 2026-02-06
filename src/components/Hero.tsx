import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen gradient-hero overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--accent)]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary-light)]/5 rounded-full blur-3xl"></div>
            </div>

            {/* Spine illustration overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 hidden lg:block">
                <svg viewBox="0 0 100 300" className="h-full w-full">
                    <path
                        d="M50 10 Q60 30 50 50 Q40 70 50 90 Q60 110 50 130 Q40 150 50 170 Q60 190 50 210 Q40 230 50 250 Q60 270 50 290"
                        stroke="white"
                        strokeWidth="8"
                        fill="none"
                    />
                    {[30, 70, 110, 150, 190, 230, 270].map((y, i) => (
                        <ellipse key={i} cx="50" cy={y} rx="25" ry="10" stroke="white" strokeWidth="2" fill="none" />
                    ))}
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex items-center">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
                    {/* Content */}
                    <div className="text-white">
                        {/* Main headline */}
                        <h1 className="display-1 text-white mb-6 animate-fade-in-up animation-delay-100">
                            Tratamento especializado para{' '}
                            <span className="text-gradient">dores na coluna</span>
                        </h1>

                        {/* Tagline */}
                        <p className="heading-3 text-white/90 font-light mb-4 animate-fade-in-up animation-delay-200">
                            Avaliação detalhada. Tratamento individual.{' '}
                            <span className="font-semibold text-[var(--accent-light)]">Movimento sem medo.</span>
                        </p>

                        {/* Description */}
                        <p className="subtitle-sm text-white/70 mb-10 max-w-xl animate-fade-in-up animation-delay-300">
                            Fisioterapia focada em coluna, dor crônica e reabilitação funcional, com recursos modernos e abordagem baseada em movimento.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
                            <a
                                href="#contato"
                                className="btn-primary text-center justify-center"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Agendar Avaliação
                            </a>
                            <a
                                href="https://wa.me/553193110555"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp text-center justify-center"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Falar no WhatsApp
                            </a>
                        </div>

                        {/* Trust badges */}
                        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 animate-fade-in-up animation-delay-500">
                            <div className="flex items-center gap-2 text-white/60">
                                <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="body-sm">Pós em Quiropraxia</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/60">
                                <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="body-sm">Método TMA</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/60">
                                <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="body-sm">McKenzie & Mulligan</span>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative hidden lg:block animate-fade-in animation-delay-300">
                        <div className="relative">
                            {/* Decorative ring */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-[var(--accent)]/20 to-transparent rounded-full blur-2xl"></div>

                            {/* Main image container */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                                <Image
                                    src="/images/fotoprincipal2.jfif"
                                    alt="Dr. Lucas Maia - Fisioterapeuta"
                                    width={500}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                    priority
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/50 to-transparent"></div>
                            </div>

                            {/* Floating card */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="stat-number text-3xl">97%</p>
                                        <p className="caption">de sucesso sem cirurgia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
