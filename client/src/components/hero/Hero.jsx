import { useEffect, useState } from "react";

import {
  Building2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const heroSlides = [
  {
    id: 1,

    // Desktop content
    eyebrow: "FIND. INVEST. GROW.",
    title: "Premium Projects.",
    titleLine2: "Promising Returns.",
    titleLine3: "Stronger Tomorrow.",

    // Mobile content
    mobileEyebrow: "REAL ESTATE INVESTMENT",
    mobileTitle: "Better Homes.",
    mobileTitleLine2: "Brighter Future.",
    mobileDescription:
      "Verified projects. Prime locations. Trusted by investors.",

    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85",

    location: "Noida, Greater Noida",
  },

  {
    id: 2,

    // Desktop content
    eyebrow: "SMART INVESTMENTS.",
    title: "Invest In Growth.",
    titleLine2: "Build Your Future.",
    titleLine3: "Own The Opportunity.",

    // Mobile content
    mobileEyebrow: "SMART INVESTMENTS",
    mobileTitle: "Invest In Growth.",
    mobileTitleLine2: "Build Your Future.",
    mobileDescription:
      "High-potential projects. Prime locations. Smart investments.",

    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2200&q=85",

    location: "Yamuna Expressway",
  },

  {
    id: 3,

    // Desktop content
    eyebrow: "VERIFIED PROJECTS.",
    title: "Right Location.",
    titleLine2: "Right Property.",
    titleLine3: "Right Investment.",

    // Mobile content
    mobileEyebrow: "VERIFIED PROJECTS",
    mobileTitle: "Right Location.",
    mobileTitleLine2: "Right Investment.",
    mobileDescription:
      "Verified properties in locations built for future growth.",

    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=85",

    location: "Delhi NCR & Beyond",
  },
];

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Happy Clients",
  },

  {
    icon: Building2,
    value: "50+",
    label: "Premium Projects",
  },

  {
    icon: ShieldCheck,
    value: "100%",
    label: "Verified Listings",
  },

  {
    icon: Sparkles,
    value: "Expert",
    label: "Investment Support",
  },
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = heroSlides[activeSlide];

  // =========================================================
  // AUTO SLIDER
  // =========================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // =========================================================
  // SLIDER CONTROLS
  // =========================================================

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <section
      className="
        relative
        isolate
        block
        h-[520px]
        min-h-0
        w-full
        max-w-full
        overflow-hidden
        bg-slate-950

        sm:h-[520px]

        lg:h-[540px]

        /* MOBILE */
        max-sm:h-[220px]
        max-sm:min-h-[220px]
        max-sm:rounded-b-[14px]
      "
    >
      {/* =====================================================
          BACKGROUND SLIDES
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          z-0
          h-full
          w-full
          overflow-hidden
        "
      >
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`
              absolute
              inset-0
              h-full
              w-full
              overflow-hidden
              transition-opacity
              duration-1000
              ease-in-out

              ${
                index === activeSlide
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }
            `}
          >
            <img
              src={slide.image}
              alt={slide.title}
              draggable="false"
              className="
                absolute
                inset-0
                block
                h-full
                w-full
                max-w-none
                object-cover
                object-center

                /* MOBILE IMAGE */
                max-sm:object-[65%_center]
              "
            />
          </div>
        ))}

        {/* ===================================================
            DARK OVERLAY
        ==================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-slate-950/45

            max-sm:bg-slate-950/30
          "
        />

        {/* ===================================================
            LEFT GRADIENT
        ==================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-r
            from-slate-950
            via-slate-950/75
            to-slate-950/10

            max-sm:from-slate-950/90
            max-sm:via-slate-950/50
            max-sm:to-transparent
          "
        />

        {/* ===================================================
            MOBILE BOTTOM GRADIENT
        ==================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            h-20
            bg-gradient-to-t
            from-slate-950/80
            via-slate-950/20
            to-transparent
            sm:hidden
          "
        />

        {/* ===================================================
            DESKTOP BOTTOM GRADIENT
        ==================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            hidden
            h-28
            bg-gradient-to-t
            from-slate-950/95
            via-slate-950/30
            to-transparent

            sm:block
          "
        />
      </div>

      {/* =====================================================
          DESKTOP CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          h-full
          w-full
          max-w-[1440px]
          overflow-hidden
          px-5

          sm:px-6

          lg:px-10
        "
      >
        <div
          className="
            flex
            h-full
            w-full
            items-start
            pt-[58px]

            sm:pt-[64px]

            lg:pt-[62px]

            max-sm:hidden
          "
        >
          <div
            className="
              w-full
              max-w-[620px]

              sm:max-w-[680px]

              lg:max-w-[700px]
            "
          >
            {/* =================================================
                DESKTOP EYEBROW
            ================================================== */}

            <div
              className="
                mb-3
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#d6a84f]/40
                bg-[#d6a84f]/10
                px-3.5
                py-1.5
                backdrop-blur-sm

                sm:mb-4
                sm:px-4
                sm:py-2
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-[#e0b65c]
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  tracking-[0.18em]
                  text-[#f0c96d]

                  sm:text-[10px]
                "
              >
                {currentSlide.eyebrow}
              </span>
            </div>

            {/* =================================================
                DESKTOP HEADING
            ================================================== */}

            <h1
              className="
                m-0
                max-w-[700px]
                text-[36px]
                font-extrabold
                leading-[1.04]
                tracking-[-0.035em]
                text-white

                sm:text-[44px]

                md:text-[50px]

                lg:text-[54px]
              "
            >
              <span className="block">
                {currentSlide.title}
              </span>

              <span className="block">
                {currentSlide.titleLine2}
              </span>

              <span className="block text-[#e0b65c]">
                {currentSlide.titleLine3}
              </span>
            </h1>

            {/* =================================================
                DESKTOP DESCRIPTION
            ================================================== */}

            <p
              className="
                mt-3
                mb-0
                max-w-[530px]
                text-[13px]
                leading-5
                text-slate-200

                sm:mt-4
                sm:text-sm
                sm:leading-6
              "
            >
              {currentSlide.description}
            </p>

            {/* =================================================
                DESKTOP LOCATION
            ================================================== */}

            <div
              className="
                mt-3
                flex
                items-center
                gap-2
                text-[11px]
                font-medium
                text-slate-300

                sm:mt-4
                sm:text-xs
              "
            >
              <MapPin
                size={14}
                className="shrink-0 text-[#e0b65c]"
              />

              <span>{currentSlide.location}</span>
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE CONTENT
            COMPLETELY DIFFERENT FROM DESKTOP
        ====================================================== */}

        <div
          className="
            absolute
            inset-0
            z-20
            hidden

            max-sm:block
          "
        >
          <div
            className="
              absolute
              left-0
              top-0
              w-[72%]
              px-5
              pt-5
            "
          >
            {/* =================================================
                MOBILE EYEBROW
            ================================================== */}

            <div
              className="
                mb-2
                flex
                items-center
                gap-1.5
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#e0b65c]
                "
              />

              <span
                className="
                  text-[8px]
                  font-bold
                  tracking-[0.16em]
                  text-[#f0c96d]
                "
              >
                {currentSlide.mobileEyebrow}
              </span>
            </div>

            {/* =================================================
                MOBILE HEADING
            ================================================== */}

            <h2
              className="
                m-0
                text-[28px]
                font-extrabold
                leading-[0.98]
                tracking-[-0.04em]
                text-white
              "
            >
              <span className="block">
                {currentSlide.mobileTitle}
              </span>

              <span className="block text-[#e0b65c]">
                {currentSlide.mobileTitleLine2}
              </span>
            </h2>

            {/* =================================================
                MOBILE DESCRIPTION
            ================================================== */}

            <p
              className="
                m-0
                mt-2
                max-w-[260px]
                text-[9px]
                font-medium
                leading-[1.35]
                text-slate-200
              "
            >
              {currentSlide.mobileDescription}
            </p>
          </div>

          {/* ===================================================
              MOBILE LOCATION
          ==================================================== */}

          <div
            className="
              absolute
              bottom-4
              left-5
              flex
              items-center
              gap-1.5
            "
          >
            <MapPin
              size={12}
              strokeWidth={2.5}
              className="text-[#e0b65c]"
            />

            <span
              className="
                text-[9px]
                font-semibold
                text-white
              "
            >
              {currentSlide.location}
            </span>
          </div>

          {/* ===================================================
              MOBILE DOTS
          ==================================================== */}

          <div
            className="
              absolute
              bottom-5
              right-5
              flex
              items-center
              gap-1.5
            "
          >
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`
                  h-1
                  rounded-full
                  transition-all
                  duration-300

                  ${
                    index === activeSlide
                      ? "w-5 bg-[#e0b65c]"
                      : "w-3 bg-white/60"
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            DESKTOP TRUST STATS
            HIDDEN ON MOBILE
        ====================================================== */}

        <div
          className="
            absolute
            bottom-4
            left-5
            right-5
            z-20

            sm:left-6
            sm:right-6

            lg:left-10
            lg:right-10

            max-sm:hidden
          "
        >
          <div
            className="
              mx-auto
              grid
              w-full
              max-w-[1000px]
              grid-cols-2
              gap-2

              sm:flex
              sm:items-center
              sm:justify-between
              sm:gap-4
            "
          >
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-white/10
                    bg-slate-950/45
                    px-2.5
                    py-1.5
                    backdrop-blur-md

                    sm:min-w-[140px]
                    sm:border-0
                    sm:bg-transparent
                    sm:px-0
                    sm:py-0
                    sm:backdrop-blur-none
                  "
                >
                  <div
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-md
                      bg-white/10

                      sm:h-8
                      sm:w-8
                    "
                  >
                    <Icon
                      size={14}
                      className="text-[#e0b65c]"
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        m-0
                        text-[11px]
                        font-bold
                        leading-4
                        text-white
                      "
                    >
                      {stat.value}
                    </p>

                    <p
                      className="
                        m-0
                        truncate
                        text-[9px]
                        leading-3
                        text-slate-300

                        sm:text-[10px]
                        sm:leading-4
                      "
                    >
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            DESKTOP LEFT ARROW
        ====================================================== */}

        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="
            absolute
            left-3
            top-1/2
            z-30
            hidden
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-white/10
            text-white
            backdrop-blur-md
            transition
            hover:bg-white/20

            sm:flex

            lg:left-5
          "
        >
          <ChevronLeft size={19} />
        </button>

        {/* =====================================================
            DESKTOP RIGHT ARROW
        ====================================================== */}

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="
            absolute
            right-3
            top-1/2
            z-30
            hidden
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-white/10
            text-white
            backdrop-blur-md
            transition
            hover:bg-white/20

            sm:flex

            lg:right-5
          "
        >
          <ChevronRight size={19} />
        </button>

        {/* =====================================================
            DESKTOP DOTS
        ====================================================== */}

        <div
          className="
            absolute
            bottom-[60px]
            left-1/2
            z-30
            hidden
            -translate-x-1/2
            items-center
            gap-2

            sm:flex
          "
        >
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300

                ${
                  index === activeSlide
                    ? "w-7 bg-[#e0b65c]"
                    : "w-4 bg-white/40 hover:bg-white/70"
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          BOTTOM EDGE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-1
          bg-black/10
        "
      />
    </section>
  );
}

export default Hero;