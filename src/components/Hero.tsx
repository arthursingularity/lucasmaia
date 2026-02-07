'use client';

import { useState } from 'react';

export default function Hero() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    // URL do vídeo VSL - substituir pelo link real
    const vslVideoUrl = 'https://res.cloudinary.com/dsgkc7epl/video/upload/f_mp4,q_auto/video1_e4gn2r.mp4'; // Adicionar link do VSL aqui (formato embed)

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
                            <span className="font-semibold text-gradient">Movimento sem medo.</span>
                        </p>

                        {/* Description */}
                        <p className="subtitle-sm text-white/70 mb-10 max-w-xl animate-fade-in-up animation-delay-300">
                            Fisioterapia focada em coluna, dor crônica e reabilitação funcional, com recursos modernos e abordagem baseada em movimento.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
                            <a
                                href="https://wa.me/553193110555"
                                className="btn-primary text-center justify-center"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Agendar Avaliação
                            </a>
                        </div>
                    </div>

                    {/* VSL Video */}
                    <div className="relative animate-fade-in animation-delay-300">
                        <div className="relative">
                            {/* Decorative ring */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-[var(--accent)]/20 to-transparent rounded-3xl blur-2xl"></div>

                            {/* Video container - Aspect ratio 9:16 para vídeo vertical */}
                            <div
                                className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 mx-auto cursor-pointer group"
                                style={{ aspectRatio: '9/16', maxHeight: '550px', maxWidth: '310px' }}
                                onClick={() => setIsVideoPlaying(true)}
                            >
                                {isVideoPlaying && vslVideoUrl ? (
                                    // Video Player
                                    <video
                                        src={vslVideoUrl}
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
                                            src="/images/thumb1.png"
                                            alt="VSL Thumbnail"
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />

                                        {/* Overlay escuro para contraste */}
                                        <div className="absolute inset-0 bg-black/30"></div>

                                        {/* Play Button */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="relative z-10 w-20 h-20 rounded-full bg-[var(--accent)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                                <svg
                                                    className="w-8 h-8 text-white ml-1"
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

