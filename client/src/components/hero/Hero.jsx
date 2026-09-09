import { useEffect, useState } from "react";

import {
  ArrowRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const heroSlides = [
  {
    id: 1,
    eyebrow: "FIND. INVEST. GROW.",
    title: "Premium Projects.",
    titleLine2: "Promising Returns.",
    titleLine3: "Stronger Tomorrow.",
    description:
      "Discover verified real estate projects in prime locations and invest with confidence.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85",
    location: "Noida, Greater Noida",
  },
  {
    id: 2,
    eyebrow: "SMART INVESTMENTS.",
    title: "Invest In Growth.",
    titleLine2: "Build Your Future.",
    titleLine3: "Own The Opportunity.",
    description:
      "Explore high-potential residential and commercial projects selected for smart investors.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2200&q=85",
    location: "Yamuna Expressway",
  },
  {
    id: 3,
    eyebrow: "VERIFIED PROJECTS.",
    title: "Right Location.",
    titleLine2: "Right Property.",
    titleLine3: "Right Investment.",
    description:
      "From authority projects to premium builder developments, find opportunities that fit your goals.",
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
        min-h-[680px]
        w-full
        overflow-hidden
        bg-slate-950
        sm:min-h-[700px]
        lg:min-h-[730px]
      "
    >
      {/* =====================================================
          HERO BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0 z-0 h-full w-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`
              absolute
              inset-0
              h-full
              w-full
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
              className="
                absolute
                inset-0
                block
                h-full
                min-h-full
                w-full
                min-w-full
                object-cover
                object-[65%_center]
                sm:object-center
              "
            />
          </div>
        ))}

        {/* =====================================================
            DARK OVERLAY
        ====================================================== */}

        <div className="absolute inset-0 bg-slate-950/60" />

        {/* =====================================================
            LEFT GRADIENT
        ====================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-slate-950
            via-slate-950/80
            to-slate-950/20
          "
        />

        {/* =====================================================
            MOBILE EXTRA GRADIENT
        ====================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-slate-950/20
            via-transparent
            to-slate-950/80
            sm:hidden
          "
        />

        {/* =====================================================
            BOTTOM GRADIENT
        ====================================================== */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-48
            bg-gradient-to-t
            from-slate-950/90
            via-slate-950/30
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          HERO CONTENT CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          sm:px-6
          lg:px-10
        "
      >
        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div
          className="
            flex
            min-h-[680px]
            items-center
            pb-28
            pt-16
            sm:min-h-[700px]
            lg:min-h-[730px]
          "
        >
          <div className="w-full max-w-[700px]">
            {/* =================================================
                EYEBROW
            ================================================== */}

            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#d6a84f]/40
                bg-[#d6a84f]/10
                px-4
                py-2
                backdrop-blur-sm
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
                  text-[10px]
                  font-bold
                  tracking-[0.2em]
                  text-[#f0c96d]
                  sm:text-[11px]
                "
              >
                {currentSlide.eyebrow}
              </span>
            </div>

            {/* =================================================
                HEADING
            ================================================== */}

            <h1
              className="
                max-w-[720px]
                text-4xl
                font-extrabold
                leading-[1.08]
                tracking-[-0.03em]
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-[68px]
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
                DESCRIPTION
            ================================================== */}

            <p
              className="
                mt-6
                max-w-[560px]
                text-sm
                leading-7
                text-slate-200
                sm:text-base
              "
            >
              {currentSlide.description}
            </p>

            {/* =================================================
                LOCATION
            ================================================== */}

            <div
              className="
                mt-5
                flex
                items-center
                gap-2
                text-xs
                font-medium
                text-slate-300
              "
            >
              <MapPin
                size={15}
                className="shrink-0 text-[#e0b65c]"
              />

              <span>{currentSlide.location}</span>
            </div>
          </div>
        </div>

        {/* =====================================================
            TRUST STATS
            MOBILE = 2 x 2 GRID
            DESKTOP = HORIZONTAL
        ====================================================== */}

        <div
          className="
            absolute
            bottom-4
            left-4
            right-4
            z-10
            sm:left-6
            sm:right-6
            lg:left-10
            lg:right-10
          "
        >
          <div
            className="
              mx-auto
              grid
              max-w-[1120px]
              grid-cols-2
              gap-x-3
              gap-y-3

              sm:flex
              sm:items-center
              sm:justify-between
              sm:gap-3
              sm:overflow-x-auto
              sm:pb-1
              sm:scrollbar-hide
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
                    gap-2.5
                    rounded-xl
                    border
                    border-white/10
                    bg-slate-950/40
                    px-3
                    py-2
                    backdrop-blur-md

                    sm:min-w-[145px]
                    sm:border-0
                    sm:bg-transparent
                    sm:px-0
                    sm:py-0
                    sm:backdrop-blur-none
                  "
                >
                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-white/10
                      backdrop-blur-md
                    "
                  >
                    <Icon
                      size={15}
                      className="text-[#e0b65c]"
                    />
                  </div>

                  {/* TEXT */}

                  <div className="min-w-0">
                    <p
                      className="
                        text-xs
                        font-bold
                        leading-4
                        text-white
                      "
                    >
                      {stat.value}
                    </p>

                    <p
                      className="
                        truncate
                        text-[10px]
                        leading-4
                        text-slate-300
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
            SLIDER LEFT BUTTON
            HIDDEN ON MOBILE
        ====================================================== */}

        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="
            absolute
            left-3
            top-1/2
            z-20
            hidden
            h-11
            w-11
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/50
            bg-white/10
            text-white
            backdrop-blur-md
            transition
            hover:bg-white/20
            sm:flex
            lg:left-5
          "
        >
          <ChevronLeft size={21} />
        </button>

        {/* =====================================================
            SLIDER RIGHT BUTTON
            HIDDEN ON MOBILE
        ====================================================== */}

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="
            absolute
            right-3
            top-1/2
            z-20
            hidden
            h-11
            w-11
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/50
            bg-white/10
            text-white
            backdrop-blur-md
            transition
            hover:bg-white/20
            sm:flex
            lg:right-5
          "
        >
          <ChevronRight size={21} />
        </button>

        {/* =====================================================
            DESKTOP / TABLET SLIDER DOTS
            IMPORTANT:
            MOBILE PAR YE HIDDEN HAIN
        ====================================================== */}

        <div
          className="
            absolute
            bottom-[76px]
            left-1/2
            z-20
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
                    ? "w-8 bg-[#e0b65c]"
                    : "w-5 bg-white/50 hover:bg-white/80"
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          MOBILE SLIDER DOTS
          
          ❌ REMOVED COMPLETELY
          
          Yahan koi mobile dots nahi hain.
      ====================================================== */}

      {/* =====================================================
          BOTTOM TRANSITION
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-6
          bg-gradient-to-t
          from-white/5
          to-transparent
        "
      />
    </section>
  );
}

export default Hero;