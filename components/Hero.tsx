import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative section-spacing pt-28 md:pt-36 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text column */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Field chip */}
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
              style={{
                backgroundColor: "var(--color-primary-fixed-dim)",
                color: "var(--color-primary)",
                fontFamily: "var(--font-body)",
              }}
            >
              Smart Poultry Incubation
            </span>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
              style={{
                color: "var(--color-on-surface)",
                fontFamily: "var(--font-display)",
              }}
            >
              Hatch Your Own Chicks,{" "}
              <span style={{ color: "var(--color-primary)" }}>
                Right on Your Farm
              </span>
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0"
              style={{
                color: "var(--color-on-surface-variant)",
                fontFamily: "var(--font-body)",
              }}
            >
              Take control of your poultry business with an easy-to-use,
              affordable incubation system designed for small farmers.
            </p>

            <p
              className="text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
              style={{
                color: "var(--color-on-surface-variant)",
                fontFamily: "var(--font-body)",
                opacity: 0.8,
              }}
            >
              No dependence on outside hatcheries. No complicated setup. Just
              simple, reliable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#cta"
                className="gradient-cta text-on-primary font-semibold px-8 py-3.5 rounded-(--radius-xl) hover:shadow-(--shadow-hover) transition-all duration-200 text-center"
              >
                Request a Demo
              </a>
              <a
                href="#features"
                className="font-semibold px-8 py-3.5 rounded-(--radius-xl) transition-all duration-200 text-center"
                style={{
                  backgroundColor: "var(--color-secondary-container)",
                  color: "var(--color-on-secondary-container)",
                }}
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Visual column — organic illustration area */}
          <div className="flex-1 flex justify-center lg:justify-end w-full max-w-md lg:max-w-lg">
            <div
              className="relative w-full aspect-square rounded-4xl overflow-hidden"
            >
              <Image
                src={"/prod.jpg"}
                alt="product image"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="eager"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
