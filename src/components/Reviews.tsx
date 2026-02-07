'use client';

import { useEffect, useRef, useState } from 'react';

// Ícone do Google
const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107" />
    <path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00" />
    <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50" />
    <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.001-.001 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2" />
  </svg>
);

// Componente de estrelas
const Stars = ({ rating = 5 }: { rating?: number }) => (
  <div className="stars flex space-x-[1px]">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={i < rating ? '#FBBC04' : '#E8E8E8'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ))}
  </div>
);

// Lista de imagens de avatar disponíveis (nome do arquivo sem extensão)
const availableAvatars = ['jessicasampaio', 'rafaelamoises', 'alexandrebarbosa'];

// Avatar com imagem ou inicial colorida como fallback
const Avatar = ({ name, color }: { name: string; color: string }) => {
  // Gera o nome do arquivo baseado no nome (ex: "Jessica Sampaio" → "jessicasampaio")
  const imageName = name.toLowerCase().replace(/\s+/g, '');
  const hasImage = availableAvatars.includes(imageName);

  // Estilos do avatar com fallback (inicial colorida)
  const fallbackStyle: React.CSSProperties = {
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    backgroundColor: color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 600,
    fontSize: '14px',
    flexShrink: 0,
  };

  // Estilos do avatar com imagem
  const imageStyle: React.CSSProperties = {
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    objectFit: 'cover',
    flexShrink: 0,
  };

  if (!hasImage) {
    // Fallback: mostrar inicial colorida
    return (
      <div style={fallbackStyle}>
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={`/images/${imageName}.png`}
      alt={name}
      style={imageStyle}
    />
  );
};

interface Review {
  id: number;
  name: string;
  avatarColor: string;
  timeAgo: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Claudilene Lorenzo',
    avatarColor: '#FF6600',
    timeAgo: 'um ano atrás',
    rating: 5,
    text: 'Excelente profissional.competente,educado, cuidadoso e muito eficiente',
  },
  {
    id: 2,
    name: 'Jessica Sampaio',
    avatarColor: '#EA4335',
    timeAgo: '11 meses atrás',
    rating: 5,
    text: 'Profissional de excelência, extremamente atencioso e empático! Já são quase um ano de atendimentos a minha avó e somos gratos por tanta evolução, a forma de tratamento dele com certeza faz toda diferença. É sempre um prazer avaliar o Lucas!',
  },
  {
    id: 3,
    name: 'Rafaela Moises',
    avatarColor: '#34A853',
    timeAgo: '2 anos atrás',
    rating: 5,
    text: 'O Lucas é um excelente profissional! Ele é o fisioterapeuta da minha avó de 99 anos que é acamada. Sempre pontual, atencioso, humano. Está fazendo um trabalho impecável. Minha avó está cada dia melhor. As dores nas pernas diminuíram bastante.',
  },
  {
    id: 4,
    name: 'Leiliane Mota',
    avatarColor: '#FBBC04',
    timeAgo: '2 semanas atrás',
    rating: 5,
    text: 'Excelente profissional, resolveu minha dor em 1 sessão. Super indico.',
  },
  {
    id: 5,
    name: 'Jennifer Vieira',
    avatarColor: '#4285F4',
    timeAgo: '2 anos atrás',
    rating: 5,
    text: 'Presta um excelente atendimento! Eu confio nesse profissional nota 10!',
  },
  {
    id: 6,
    name: 'Isabela Penido',
    avatarColor: '#EA4335',
    timeAgo: 'um ano atrás',
    rating: 5,
    text: 'Encaminho vários pacientes à ele! Excelente profissional. Atualizado, educado e prestativo',
  },
  {
    id: 7,
    name: 'Claudia Lucimar',
    avatarColor: '#34A853',
    timeAgo: 'um ano atrás',
    rating: 5,
    text: 'Super indico,ótimo profissional ,responsável ,competente',
  },
  {
    id: 8,
    name: 'Alexandre Barbosa',
    avatarColor: '#FBBC04',
    timeAgo: 'um ano atrás',
    rating: 5,
    text: 'O Lucas é um profissional que merece 10 estrelas. Tem muito domínio do que faz, explica com clareza todos os pontos e faz questão de acompanhar os resultados após cada atendimento. É mais que recomendado!',
  },
];

export default function Reviews() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons();
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScrollButtons);
      }
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="reviews-section section-padding"
    >
      <div className="reviews-container">
        {/* Header */}
        <div className={`section-header ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="eyebrow">AVALIAÇÕES</span>
          <h2 className="heading-1">O que nossos pacientes dizem</h2>
        </div>

        {/* Reviews Carousel */}
        <div className="reviews-carousel-wrapper">
          <button
            className={`scroll-btn scroll-btn-left ${!canScrollLeft ? 'hidden' : ''}`}
            onClick={() => scroll('left')}
            aria-label="Anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className={`reviews-carousel ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          >
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="review-card space-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="review-header flex justify-between">
                  <div className='flex items-center space-x-2'>
                    <Avatar name={review.name} color={review.avatarColor} />
                    <div className="review-meta">
                      <span className="review-name">{review.name}</span>
                      <span className="review-time">{review.timeAgo}</span>
                    </div>
                  </div>
                  <div className="google-icon-wrapper">
                    <GoogleIcon />
                  </div>
                </div>

                <Stars rating={review.rating} />

                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>

          <button
            className={`scroll-btn scroll-btn-right ${!canScrollRight ? 'hidden' : ''}`}
            onClick={() => scroll('right')}
            aria-label="Próximo"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* View All Link */}
        <div className={`view-all-link ${isVisible ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
          <a
            href="https://www.google.com/search?q=avalia%C3%A7%C3%B5es+sobre+dr.+lucas+maia+fisioterapeuta+especialista+em+coluna+vertebral+belo+horizonte&sca_esv=94f317455afcf545&rlz=1C1VDKB_pt-PTBR1061BR1061&sxsrf=ANbL-n6amQmkAzeiQ0w7oi9gGn5dVf5ukg%3A1770495038532&ei=PpyHaf-QIODR5OUPg4DpyAE&biw=1920&bih=945&ved=0ahUKEwj_p-T-l8iSAxXgKLkGHQNAGhkQ4dUDCBE&uact=5&oq=avalia%C3%A7%C3%B5es+sobre+dr.+lucas+maia+fisioterapeuta+especialista+em+coluna+vertebral+belo+horizonte&gs_lp=Egxnd3Mtd2l6LXNlcnAiYGF2YWxpYcOnw7VlcyBzb2JyZSBkci4gbHVjYXMgbWFpYSBmaXNpb3RlcmFwZXV0YSBlc3BlY2lhbGlzdGEgZW0gY29sdW5hIHZlcnRlYnJhbCBiZWxvIGhvcml6b250ZUjsqQFQAFi8pwFwA3gAkAEAmAGrAaAB7V-qAQQwLjk1uAEDyAEA-AEBmAJCoAK5QsICChAjGIAEGCcYigXCAgwQIxiABBgTGCcYigXCAg0QIxjwBRiABBgnGIoFwgIOEC4YgAQYsQMY0QMYxwHCAgsQABiABBixAxiDAcICDhAAGIAEGLEDGIMBGIoFwgIOEC4YgAQYsQMYgwEYigXCAgsQLhiABBixAxiDAcICEBAjGPAFGIAEGCcYyQIYigXCAggQLhiABBixA8ICCBAAGIAEGLEDwgIKEAAYgAQYQxiKBcICBRAAGIAEwgIEECMYJ8ICBBAAGAPCAgoQABiABBgUGIcCwgIGEAAYFhgewgIIEAAYogQYiQXCAgUQABjvBcICCBAAGIAEGKIEwgIFECEYoAHCAgcQIRigARgKwgIFECEYkgOYAwCSBwQzLjYzoAeDtwOyBwQwLjYzuAeyQsIHBzEuNTQuMTHIB4wBgAgA&sclient=gws-wiz-serp"
            target="_blank"
            rel="noopener noreferrer"
            className="google-reviews-link"
          >
            <GoogleIcon />
            <span>Ver todas as avaliações no Google</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <path d="M15 3h6v6" />
              <path d="M10 14L21 3" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .reviews-section {
          background: linear-gradient(180deg, #f8fafa 0%, #ffffff 100%);
          overflow: hidden;
        }

        .reviews-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .google-rating-summary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 1.5rem;
          padding: 0.75rem 1.5rem;
          background: white;
          border-radius: 50px;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
          display: inline-flex;
        }

        .rating-text {
          font-size: var(--text-sm);
          color: var(--muted);
        }

        .rating-text strong {
          color: var(--foreground);
          font-weight: var(--font-semibold);
        }

        .reviews-carousel-wrapper {
          position: relative;
          padding: 0 1rem;
        }

        .reviews-carousel {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 1rem 0.5rem 2rem;
        }

        .reviews-carousel::-webkit-scrollbar {
          display: none;
        }

        .review-card {
          flex: 0 0 280px;
          background: white;
          border-radius: 12px;
          padding: 1.25rem;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          scroll-snap-align: start;
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.04);
        }

        .review-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }

        .review-header {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: var(--font-semibold);
          font-size: var(--text-base);
          flex-shrink: 0;
        }

        .review-meta {
          flex: 1;
          min-width: 0;
        }

        .review-name {
          display: block;
          font-weight: var(--font-medium);
          font-size: var(--text-sm);
          color: var(--foreground);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .review-time {
          display: block;
          font-size: var(--text-xs);
          color: var(--muted-light);
        }

        .google-icon-wrapper {
          flex-shrink: 0;
        }

        .stars {
          display: flex;
          gap: 2px;
          margin-bottom: 0.75rem;
        }

        .review-text {
          font-size: var(--text-sm);
          line-height: 1.5;
          color: var(--foreground);
          margin: 0;
        }

        .scroll-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: white;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          z-index: 10;
          transition: all 0.3s ease;
          color: var(--primary);
        }

        .scroll-btn:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-50%) scale(1.05);
        }

        .scroll-btn-left {
          left: -1rem;
        }

        .scroll-btn-right {
          right: -1rem;
        }

        .scroll-btn.hidden {
          opacity: 0;
          pointer-events: none;
        }

        .view-all-link {
          text-align: center;
          margin-top: 2rem;
        }

        .google-reviews-link {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: white;
          border-radius: 50px;
          color: var(--foreground);
          font-weight: var(--font-medium);
          font-size: var(--text-sm);
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .google-reviews-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          color: var(--primary);
        }

        .opacity-0 {
          opacity: 0;
        }

        @media (max-width: 768px) {
          .reviews-carousel-wrapper {
            padding: 0;
          }

          .review-card {
            flex: 0 0 260px;
          }

          .scroll-btn {
            display: none;
          }

          .reviews-carousel {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        @media (min-width: 1024px) {
          .scroll-btn-left {
            left: -2rem;
          }

          .scroll-btn-right {
            right: -2rem;
          }

          .review-card {
            flex: 0 0 300px;
          }
        }
      `}</style>
    </section>
  );
}
