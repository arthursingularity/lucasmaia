import Image from 'next/image';

const qualifications = [
    'Fisioterapia pela Universidade Norte do Paraná',
    'Pós-graduação em Terapia Intensiva no Adulto',
    'Pós-graduação em Fisioterapia Traumato-Ortopédica',
    'Pós-graduação em Quiropraxia',
    'Formação em Hérnia de Disco pelo Método TMA',
    'Técnicas McKenzie e Mulligan',
];

export default function About() {
    return (
        <section id="sobre" className="section-padding bg-[var(--surface)]">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <div className="relative">
                        <div className="relative border border-accent rounded-xl">
                            {/* Background decoration */}
                            {/* Main image */}
                            <div className="relative rounded-xl overflow-hidden">
                                <Image
                                    src="/images/fotoprincipal.jpg"
                                    alt="Dr. Lucas Maia - Fisioterapeuta"
                                    width={500}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* CREFITO badge */}
                            <div className="absolute bottom-0 left-0 bg-white rounded-[12px] p-1.5 px-2 shadow-xl">
                                <div className="flex items-center gap-2 pr-1">
                                    <div className="w-10 h-10 bg-primary rounded flex items-center justify-center border">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="heading-5 text-[var(--primary)]">CREFITO-4</p>
                                        <p className="caption">292009-F</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <span className="eyebrow-lg text-[var(--accent)] mb-4 block">
                            Sobre mim
                        </span>
                        <h2 className="display-2 text-[var(--primary)] mb-2">
                            Lucas Maia
                        </h2>
                        <p className="heading-3 text-[var(--accent)] font-normal mb-8">
                            Fisioterapeuta Especializado em Coluna e Dor
                        </p>

                        <div className="space-y-4 mb-8">
                            <p className="body-lg">
                                Sou fisioterapeuta graduado pela Universidade Norte do Paraná, com pós-graduação em Terapia Intensiva no Adulto, Fisioterapia Traumato-Ortopédica e Quiropraxia.
                            </p>
                            <p className="body-lg">
                                Atuo com foco no tratamento das dores da coluna e das disfunções musculoesqueléticas, utilizando uma abordagem individualizada e baseada em movimento.
                            </p>
                            <p className="body-lg">
                                Possuo formação específica no tratamento de hérnia de disco pelo método TMA, além de conhecimento e aplicação clínica das técnicas de McKenzie e Mulligan, amplamente utilizadas na reabilitação da coluna e no controle da dor.
                            </p>
                            <p className="body-lg font-semibold">
                                Meu objetivo é ir além do alívio momentâneo dos sintomas, buscando identificar a causa da dor, melhorar a função e devolver segurança ao movimento no dia a dia.
                            </p>
                        </div>

                        {/* Qualifications */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <h3 className="heading-4 text-[var(--primary)] mb-4">Formação e Qualificações</h3>
                            <ul className="grid sm:grid-cols-2 gap-3">
                                {qualifications.map((qualification, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full gradient-accent flex items-center justify-center mt-0.5">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="body-sm text-[var(--muted)]">{qualification}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Work images */}
                <div className="mt-20">
                    <h3 className="heading-2 text-center text-[var(--primary)] mb-4">
                        Atendimento na Prática
                    </h3>
                    <div className="divider divider-center mb-10"></div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                            <Image
                                src="/images/fotolucas1.jfif"
                                alt="Dr. Lucas Maia realizando tratamento cervical"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/70 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <p className="heading-5 text-white">Tratamento Cervical</p>
                                <p className="body-sm text-white/80">Técnicas manuais especializadas</p>
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                            <Image
                                src="/images/fotolucas2.jfif"
                                alt="Dr. Lucas Maia em curso de especialização"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/70 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <p className="heading-5 text-white">Formação Contínua</p>
                                <p className="body-sm text-white/80">Atualização constante em técnicas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
