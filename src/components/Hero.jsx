import Image from 'next/image';

export default function Hero({
  title,
  highlight,
  subtitle,
  eyebrow,
  bgImage,
  children,
}) {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      {bgImage && (
        <Image
          src={bgImage}
          alt=""
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent pointer-events-none" />

      <div className="relative container-x pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="eyebrow text-gold mb-4">{eyebrow}</p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {title}
            {highlight && (
              <>
                {' '}
                <span className="text-gold">{highlight}</span>
              </>
            )}
          </h1>
          {subtitle && (
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
