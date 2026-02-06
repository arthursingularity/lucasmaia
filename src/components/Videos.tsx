'use client';

import { useState } from 'react';

export default function Videos() {
    const [isPlaying, setIsPlaying] = useState(false);

    // URL do vídeo de explicação do tratamento - substituir pelo link real
    const videoUrl = 'https://res.cloudinary.com/dsgkc7epl/video/upload/v1770412505/video2_cycubn.mov'; // Adicionar link do vídeo aqui (formato embed)

    return (
        <section id="videos" className="section-padding bg-[var(--surface)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="section-header">
                    <span className="eyebrow-lg text-[var(--accent)]">
                        CONHEÇA O TRATAMENTO
                    </span>
                    <h2 className="heading-1 text-[var(--primary)]">
                        Lucas Explica o Tratamento
                    </h2>
                    <div className="divider divider-center mt-4 mb-6"></div>
                    <p className="lead max-w-2xl mx-auto">
                        Entenda em detalhes como funciona o tratamento especializado para dores na coluna e como podemos ajudar você a recuperar sua qualidade de vida.
                    </p>
                </div>

                {/* Video Container - Centralizado */}
                <div className="flex justify-center animate-fade-in-up animation-delay-100">
                    <div className="w-full max-w-md">
                        {/* Video Card */}
                        <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                            {/* Video Container - Aspect ratio 9:16 para vídeo vertical */}
                            <div
                                className="relative w-full cursor-pointer"
                                style={{ aspectRatio: '9/16', maxHeight: '650px' }}
                                onClick={() => setIsPlaying(true)}
                            >
                                {isPlaying && videoUrl ? (
                                    // Video Player
                                    <video
                                        src={videoUrl}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        controls
                                        autoPlay
                                        playsInline
                                    />
                                ) : (
                                    // Thumbnail com botão de play
                                    <div className="absolute inset-0">
                                        {/* Thumbnail Image */}
                                        <img
                                            src="/images/thumb2.png"
                                            alt="Vídeo Thumbnail"
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />

                                        {/* Overlay escuro para contraste */}
                                        <div className="absolute inset-0 bg-black/30"></div>

                                        {/* Play Button */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="relative z-10 w-24 h-24 rounded-full bg-[var(--accent)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                                <svg
                                                    className="w-10 h-10 text-white ml-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                                {/* Pulse animation */}
                                                <div className="absolute inset-0 rounded-full bg-[var(--accent)] animate-ping opacity-25"></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Video Description */}
                            <div className="p-6 bg-white">
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>

                                    {/* Text */}
                                    <div className="flex-1">
                                        <h3 className="heading-4 text-[var(--primary)] mb-2">
                                            Entenda o Processo
                                        </h3>
                                        <p className="body-sm text-[var(--muted)]">
                                            Neste vídeo, Lucas explica detalhadamente como funciona a avaliação e o protocolo de tratamento personalizado para cada paciente.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center animate-fade-in-up animation-delay-300">
                    <p className="body-lg text-[var(--muted)] mb-6">
                        Pronto para iniciar seu tratamento?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contato"
                            className="btn-primary"
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
                            className="btn-whatsapp"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Falar no WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
