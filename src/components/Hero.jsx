import Image from 'next/image';

export default function Hero({
  title,
  highlight,
  highlightSuffix,
  subtitle,
  eyebrow,
  bgImage,
  children,
  centered = false,
}) {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      {bgImage && (
        <Image
          src={bgImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}

      {/* Layered overlays: solid navy base, then a strong left-to-right gradient
          that lets the image breathe through on the right, then a soft bottom fade
          so it blends cleanly into the next section. */}
      <div className="absolute inset-0 bg-navy/70" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(110deg, rgba(30,58,95,0.95) 0%, rgba(30,58,95,0.85) 45%, rgba(21,42,69,0.55) 100%)',
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent pointer-events-none" />

      {/* Subtle decorative gold orbs to add visual interest */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none hidden md:block" />

      <div
        className={`relative container-x px-5 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32 ${
          centered ? 'text-center flex flex-col items-center' : ''
        }`}
      >
        {eyebrow && centered && (
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full pl-2 pr-4 py-1.5 mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_rgba(201,162,39,0.7)]" />
            <span className="text-xs sm:text-sm font-medium text-white/90">{eyebrow}</span>
          </div>
        )}

        {eyebrow && !centered && (
          <p className="eyebrow text-gold mb-4">{eyebrow}</p>
        )}

        <h1
          className={`text-[2.25rem] sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 sm:mb-8 ${
            centered ? 'max-w-5xl' : 'max-w-3xl'
          }`}
        >
          {title}
          {highlight && (
            <>
              <br className="hidden md:block" />
              <span className="text-gold">{highlight}</span>
              {highlightSuffix && (
                <>
                  {' '}
                  <span className="whitespace-nowrap">{highlightSuffix}</span>
                </>
              )}
            </>
          )}
        </h1>

        {/* Thin gold accent line under the heading for visual anchor */}
        {centered && (
          <div className="w-16 sm:w-20 h-1 bg-gold rounded-full mb-6 sm:mb-8" />
        )}

        {subtitle && (
          <p
            className={`text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0 ${
              centered ? 'max-w-2xl' : 'max-w-2xl'
            }`}
          >
            {subtitle}
          </p>
        )}

        <div className={`w-full ${centered ? 'flex flex-col items-center' : ''}`}>
          {children}
        </div>
      </div>
    </section>
  );
}
