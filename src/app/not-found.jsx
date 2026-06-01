import Link from 'next/link';

export const metadata = {
  title: 'Pagina non trovata',
};

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-24">
      <div className="container-x text-center">
        <h1 className="text-7xl font-bold text-navy mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Pagina non trovata
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <Link href="/" className="btn-primary btn-navy">
          <span>Torna alla home</span>
        </Link>
      </div>
    </section>
  );
}
