import Image from 'next/image';

const steps = [
    {
        number: '01',
        title: 'Avaliação detalhada',
        description: 'Avaliamos seus movimentos, limitações, padrão de dor e possíveis sobrecargas, usando testes clínicos e tecnologia.',
    },
    {
        number: '02',
        title: 'Identificação do que irrita sua coluna',
        description: 'Nem toda dor vem do mesmo lugar. Às vezes o problema é o disco, às vezes articulações, músculos ou sobrecarga do dia a dia.',
    },
    {
        number: '03',
        title: 'Tratamento personalizado',
        description: 'Combinação de técnicas manuais, aparelhos específicos e exercícios adequados ao seu momento.',
    },
    {
        number: '04',
        title: 'Progressão segura',
        description: 'O tratamento evolui conforme sua dor reduz e sua função melhora.',
    },
];

const benefits = [
    'Reduzir dor e inflamação',
    'Melhorar mobilidade',
    'Aumentar estabilidade e força',
    'Evitar piora do quadro',
    'Reduzir crises recorrentes',
    'Diminuir dependência de medicamentos',
];

export default function HowItWorks() {
    return (
        <section id="como-funciona" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <div className="section-header">
                    <span className="eyebrow-lg text-[var(--accent)]">
                        Entenda o processo
                    </span>
                    <h2 className="heading-1 text-[var(--primary)]">
                        Fisioterapia de Coluna
                    </h2>
                    <p className="heading-3 text-[var(--accent)] font-normal mt-2 mb-4">
                        Como funciona o tratamento
                    </p>
                    <div className="divider divider-center mb-8"></div>
                    <p className="lead max-w-3xl mx-auto">
                        A fisioterapia de coluna vai muito além de "alongar" ou "massagear".
                        Ela busca entender o que está sobrecarregando a sua coluna, quais movimentos
                        pioram ou aliviam seus sintomas e qual estímulo seu corpo precisa para voltar
                        a se movimentar com segurança.
                    </p>
                </div>

                {/* Main content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Image side */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/fotolucas1.jpg"
                                alt="Dr. Lucas Maia realizando tratamento"
                                width={600}
                                height={700}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/50 to-transparent"></div>
                        </div>

                        {/* Quote card */}
                        <div className="absolute -bottom-8 -right-8 max-w-xs bg-white rounded-xl p-6 shadow-xl hidden lg:block">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <svg className="w-10 h-10 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="quote text-[var(--foreground)] text-base">
                                        O foco não é só aliviar a dor, mas tratar a causa do problema e devolver confiança ao movimento.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="space-y-8">
                        <h3 className="heading-2 text-[var(--primary)] mb-8">
                            Como funciona o tratamento?
                        </h3>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[var(--accent)] to-[var(--primary-light)]"></div>

                            <div className="space-y-8">
                                {steps.map((step, index) => (
                                    <div key={index} className="relative flex gap-6">
                                        {/* Step number */}
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-accent flex items-center justify-center text-white font-bold z-10">
                                            <span className="eyebrow">{step.number}</span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 pt-2">
                                            <h4 className="heading-4 text-[var(--primary)] mb-2">
                                                {step.title}
                                            </h4>
                                            <p className="body-base text-[var(--muted)]">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Benefits section */}
                <div className="gradient-primary rounded-3xl p-8 sm:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="eyebrow text-[var(--accent-light)] mb-4 block">Resultados</span>
                            <h3 className="heading-2 text-white mb-6">
                                Para que serve a fisioterapia de coluna?
                            </h3>
                            <p className="body-lg text-white/80 mb-8">
                                O objetivo é ir além do alívio momentâneo dos sintomas, buscando identificar a causa da dor, melhorar a função e devolver segurança ao movimento no dia a dia.
                            </p>
                            <a href="#contato" className="btn-primary bg-white !text-[var(--primary)]">
                                Agendar Avaliação
                            </a>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3 text-white">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="body-base font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
