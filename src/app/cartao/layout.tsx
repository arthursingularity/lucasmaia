import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cartão Digital | Dr. Lucas Maia - Fisioterapeuta',
    description: 'Cartão digital do Dr. Lucas Maia - Fisioterapeuta especialista em coluna vertebral em Belo Horizonte.',
};

export default function CartaoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
