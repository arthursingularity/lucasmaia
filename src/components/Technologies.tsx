import Image from 'next/image';

const technologies = [
    {
        id: 'thermoscan',
        title: 'Avaliação com Termoscanner',
        description: 'Utilizamos o termógrafo para identificar padrões de inflamação e sobrecarga na coluna, auxiliando na tomada de decisão do tratamento.',
        image: '/images/thermoscan.jpg',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
    {
        id: 'flexodistraction',
        title: 'Flexo-Distração',
        description: 'Equipamento que promove descompressão dos discos intervertebrais, auxiliando no alívio da dor, principalmente em casos de hérnia de disco e dor lombar.',
        subtitle: 'Maca especializada',
        image: '/images/macadeflexodistracao.jpg',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
    },
    {
        id: 'adjuster',
        title: 'Adjuster',
        description: 'Recurso que permite ajustes controlados e seguros nas articulações, sem necessidade de força excessiva.',
        subtitle: 'Ajuste mecânico',
        image: '/images/adjuster.jpg',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
];

const electrotherapy = [
    {
        title: 'Ultrassom terapêutico',
        description: 'Auxílio no controle da dor e inflamação',
        image: '/images/ultrassomterapeutico.jpg',
    },
    {
        title: 'Laser terapêutico',
        description: 'Estímulo à cicatrização e analgesia',
        image: '/images/laserterapeutico.jpg',
    },
];

export default function Technologies() {
    return (
        <section id="tecnologias" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <div className="section-header">
                    <span className="eyebrow-lg text-[var(--accent)]">
                        Recursos modernos
                    </span>
                    <h2 className="heading-1 text-[var(--primary)]">
                        Tecnologias e Aparelhos Utilizados
                    </h2>
                    <div className="divider divider-center mt-6 mb-8"></div>
                    <p className="lead">
                        Equipamentos de última geração para diagnóstico preciso e tratamento eficaz
                    </p>
                </div>

                {/* Main technologies */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {technologies.map((tech) => (
                        <div key={tech.id} className="card group">
                            <div className="tech-image-container mb-6">
                                <Image
                                    src={tech.image}
                                    alt={tech.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex items-start gap-4 mb-4">
                                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                    {tech.icon}
                                </div>
                                <div>
                                    <h3 className="heading-4 text-[var(--primary)]">{tech.title}</h3>
                                    {tech.subtitle && (
                                        <span className="eyebrow text-[var(--accent)]">{tech.subtitle}</span>
                                    )}
                                </div>
                            </div>

                            <p className="body-base text-[var(--muted)]">{tech.description}</p>
                        </div>
                    ))}
                </div>

                {/* Electrotherapy section */}
                <div className="bg-[var(--surface)] rounded-3xl p-8 sm:p-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="heading-2 text-[var(--primary)] mb-2">Aparelhos Eletroterapêuticos</h3>
                            <p className="body-base text-[var(--muted)]">
                                Esses recursos são usados quando indicados, sempre associados ao movimento.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {electrotherapy.map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 flex gap-6 items-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={100}
                                        height={100}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="heading-5 text-[var(--primary)] mb-1">{item.title}</h4>
                                    <p className="body-sm text-[var(--muted)]">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
