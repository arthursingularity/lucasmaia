'use client';

import { useState } from 'react';

// Ícone de Verificado
const VerifiedIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
    </svg>
);

// Ícone de Seta
const ArrowIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18l6-6-6-6" />
    </svg>
);

// Componente do ícone de WhatsApp
const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

// Componente do ícone de Instagram
const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);

// Componente do ícone de Website
const WebsiteIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
);

// Componente do ícone de Telefone
const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
);

// Componente do ícone de Localização
const LocationIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
);

// Componente do ícone de Calendário
const CalendarIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
    </svg>
);

// Ícone de Salvar
const SaveIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
        <path d="M17 21v-8H7v8M7 3v5h8" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
);

// Dados dos links principais
const mainLinks = [
    {
        id: 'whatsapp',
        icon: WhatsAppIcon,
        iconClass: 'whatsapp',
        title: 'WhatsApp',
        description: 'Fale comigo diretamente',
        href: 'https://wa.me/5531993110555',
        external: true,
    },
    {
        id: 'website',
        icon: WebsiteIcon,
        iconClass: 'website',
        title: 'Site Oficial',
        description: 'Conheça meu trabalho',
        href: 'https://www.lucasmaiafisio.com.br/',
        external: true,
    },
    {
        id: 'instagram',
        icon: InstagramIcon,
        iconClass: 'instagram',
        title: 'Instagram',
        description: '@dr.lucasmaia_',
        href: 'https://instagram.com/dr.lucasmaia_',
        external: true,
    },
    {
        id: 'phone',
        icon: PhoneIcon,
        iconClass: 'phone',
        title: 'Telefone',
        description: '(31) 99311-0555',
        href: 'tel:+5531993110555',
        external: false,
    },
    {
        id: 'location',
        icon: LocationIcon,
        iconClass: 'location',
        title: 'Localização',
        description: 'Rua Rodrigues Caldas, 670 - Santo Agostinho',
        href: 'https://www.google.com/maps/search/?api=1&query=Rua+Rodrigues+Caldas+670+Santo+Agostinho+Belo+Horizonte+MG+30190-120',
        external: true,
    },
];

export default function CartaoPage() {
    const handleSaveContact = () => {
        const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Dr. Lucas Maia
N:Maia;Lucas;;;Dr.
TITLE:Fisioterapeuta - Especialista em Coluna Vertebral
TEL;TYPE=CELL:+5531993110555
EMAIL:lucasmaia.fisio@gmail.com
URL:https://www.lucasmaiafisio.com.br/
ADR;TYPE=WORK:;;Belo Horizonte;MG;;Brasil
NOTE:Fisioterapeuta especialista em coluna vertebral, dor crônica e reabilitação.
END:VCARD`;

        const blob = new Blob([vcard], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Dr_Lucas_Maia.vcf';
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="cartao-container">
            {/* Background */}
            <div className="cartao-background-pattern" />

            {/* Linhas decorativas */}
            <div className="cartao-lines">
                <div className="cartao-line" />
                <div className="cartao-line" />
                <div className="cartao-line" />
                <div className="cartao-line" />
                <div className="cartao-line" />
            </div>

            {/* Content */}
            <div className="cartao-content">
                {/* Foto Redonda */}
                <div className="cartao-photo-container">
                    <div className="cartao-photo-wrapper">
                        <img
                            src="/images/fotoprincipal.jpg"
                            alt="Dr. Lucas Maia"
                            className="cartao-photo"
                        />
                    </div>
                </div>

                {/* Informações */}
                <div className="cartao-info-section">
                    <h1 className="cartao-name">Dr. Lucas Maia</h1>
                    <p className="cartao-title">Fisioterapeuta</p>
                    <p className="cartao-subtitle">Especialista em Coluna Vertebral</p>
                    <span className="cartao-crefito">CREFITO-4: 292009-F</span>
                </div>

                {/* Links */}
                <div className="cartao-links-section">
                    {mainLinks.map((link, index) => (
                        <a
                            key={link.id}
                            href={link.href}
                            target={link.external ? '_blank' : undefined}
                            rel={link.external ? 'noopener noreferrer' : undefined}
                            className="cartao-link-item"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={`cartao-link-icon ${link.iconClass}`}>
                                <link.icon />
                            </div>
                            <div className="cartao-link-content">
                                <p className="cartao-link-title">{link.title}</p>
                                <p className="cartao-link-description">{link.description}</p>
                            </div>
                            <div className="cartao-link-arrow">
                                <ArrowIcon />
                            </div>
                        </a>
                    ))}
                </div>

                {/* Botão Salvar Contato */}
                <button onClick={handleSaveContact} className="cartao-save-btn">
                    <SaveIcon />
                    Salvar Contato
                </button>

                {/* Divider */}
                <div className="cartao-divider" />

                {/* Footer */}
                <div className="cartao-footer">
                    <div className="cartao-logo">
                        <img
                            src="/images/logos/SECUNDARIA 03(1).png"
                            alt="Dr. Lucas Maia"
                            className="cartao-logo-img"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
