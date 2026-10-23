import type { Metadata } from 'next';
import Industries from '@/legacy-pages/Industries';
export const metadata: Metadata = { title: 'Industries', description: 'Advisory support for banks, FinTechs, NBFCs, MSBs, and regulated organisations.', alternates: { canonical: '/industries' } };
export default function Page() { return <Industries />; }
