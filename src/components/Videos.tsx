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
                                style={{ aspectRatio: '9/16', maxHeight: '950px' }}
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
