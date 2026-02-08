'use client';

import { useState } from 'react';

const conditions = [
    {
        id: 'hernia',
        title: 'Hérnia de disco',
        description: 'A hérnia de disco acontece quando o disco intervertebral sofre um deslocamento ou deformação, podendo irritar estruturas nervosas próximas. Isso pode gerar dor local, dor irradiada, formigamento ou sensação de choque.',
        important: 'Nem toda hérnia causa dor, e nem toda dor vem da hérnia.',
        question: 'Hérnia de disco precisa de cirurgia?',
        answer: 'Na grande maioria dos casos, não.',
        stat: 'Aproximadamente 97% das hérnias de disco evoluem bem com tratamento conservador, sem necessidade de cirurgia.',
        treatment: 'O primeiro passo é uma avaliação detalhada, onde analisamos seus movimentos, identificamos quais posições e gestos aliviam ou pioram a dor e entendemos o que está mantendo o problema ativo.',
        focus: [
            'Reduzir a sobrecarga sobre o disco',
            'Diminuir a irritação do nervo',
            'Recuperar a mobilidade da coluna',
            'Devolver estabilidade e segurança ao movimento',
        ],
        details: 'Utilizamos uma combinação de técnicas manuais, recursos específicos como a flexo-distração, ajustes mecânicos quando indicados e exercícios direcionados, sempre respeitando o momento do seu corpo.',
        featured: true,
    },
];

export default function Conditions() {
    const [activeCondition, setActiveCondition] = useState<string | null>('hernia');
    const featuredCondition = conditions.find(c => c.id === 'hernia');

    return (
        <section id="condicoes" className="section-padding bg-[var(--surface)]">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <div className="section-header">
                    <span className="eyebrow-lg text-[var(--accent)]">
                        Condições tratadas
                    </span>
                    <h2 className="heading-1 text-[var(--primary)]">
                        Principais condições tratadas
                    </h2>
                    <div className="divider divider-center mt-6 mb-8"></div>
                    <p className="lead">
                        Tratamento especializado para diversas condições que afetam a coluna vertebral
                    </p>
                </div>

                {/* Featured condition - Hérnia de disco */}
                {featuredCondition && (
                    <div className="mb-16">
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                            <div className="bg-primary-light p-6 sm:p-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="heading-2 text-white">{featuredCondition.title}</h3>
                                        <p className="body-sm text-white/80">Condição mais comum tratada</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 sm:p-8">
                                <div className="grid lg:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="heading-5 text-[var(--primary)] mb-4">O que é:</h4>
                                        <p className="body-base text-[var(--muted)] mb-6">{featuredCondition.description}</p>

                                        <div className="bg-amber-50 border border-amber-400 p-4 rounded-lg mb-6">
                                            <div className="flex items-center gap-2">
                                                <span className="text-amber-500 text-[27px]">⚠️</span>
                                                <p className="body-sm text-amber-800 font-medium">{featuredCondition.important}</p>
                                            </div>
                                        </div>

                                        <div className="bg-[var(--surface)] rounded-xl p-6 mb-6">
                                            <h4 className="heading-5 text-[var(--primary)] mb-2">{featuredCondition.question}</h4>
                                            <p className="heading-4 text-[var(--foreground)] mb-4">{featuredCondition.answer}</p>
                                            <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                                                <p className="body-sm text-[var(--muted)]">{featuredCondition.stat}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="heading-5 text-[var(--primary)] mb-4">Como tratamos:</h4>
                                        <p className="body-base text-[var(--muted)] mb-8">{featuredCondition.treatment}</p>

                                        <h5 className="heading-5 text-[var(--foreground)] mb-4">O tratamento é conduzido com foco em:</h5>
                                        <ul className="space-y-3 mb-6">
                                            {featuredCondition.focus?.map((item, index) => (
                                                <li key={index} className="flex items-center gap-3">
                                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <span className="body-base text-[var(--foreground)]">{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <p className="body-sm text-[var(--muted)] italic">{featuredCondition.details}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
