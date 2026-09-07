import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  HandCoins,
  ShieldCheck,
  TrendingUp,
  UserRoundCheck,
  Phone,
} from "lucide-react";

import {
  callClient,
  CONTACT_CONFIG,
} from "../config/contact";

const trustPoints = [
  {
    id: 1,
    icon: BadgeCheck,
    title: "Verified Projects",
    description:
      "We list only carefully verified projects for transparency and peace of mind.",
  },
  {
    id: 2,
    icon: UserRoundCheck,
    title: "Expert Guidance",
    description:
      "Get personalized advice from our real estate experts at every step.",
  },
  {
    id: 3,
    icon: HandCoins,
    title: "Best Price Guarantee",
    description:
      "Get competitive pricing and transparent deals with complete clarity.",
  },
  {
    id: 4,
    icon: Headphones,
    title: "End-to-End Support",
    description:
      "From property selection and site visits to documentation and possession.",
  },
  {
    id: 5,
    icon: TrendingUp,
    title: "High ROI Potential",
    description:
      "Explore high-growth locations and projects selected for long-term value.",
  },
];

function WhyChooseInvestorise() {
  // =========================================================
  // CENTRAL CALL HANDLER
  // =========================================================

  const handleExpertCall = () => {
    const called = callClient();

    // Agar phone number configured nahi hai
    // to Contact page par redirect hoga
    if (!called) {
      window.location.href = "/contact";
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#fcfbf8] py-16 sm:py-20 lg:py-24">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Soft glow */}
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#f3ead8]/50 blur-3xl" />

        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#f5eee2]/60 blur-3xl" />

        {/* Architectural line pattern */}
        <div className="absolute right-[-20px] top-16 hidden opacity-[0.12] lg:block">
          <div className="flex items-end gap-3">
            <div className="h-40 w-10 border border-[#b88b32]" />
            <div className="h-56 w-16 border border-[#b88b32]" />
            <div className="h-72 w-20 border border-[#b88b32]" />
            <div className="h-48 w-12 border border-[#b88b32]" />
          </div>
        </div>

        <div className="absolute left-[-40px] bottom-10 hidden opacity-[0.08] lg:block">
          <div className="h-44 w-44 rotate-45 border border-[#b88b32]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-4xl text-center">

          {/* Eyebrow */}

          <div className="mb-5 flex items-center justify-center gap-4">

            <span className="h-px w-12 bg-[#c59645]" />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#b88b32] sm:text-[11px]">
              Why Choose Investorise
            </span>

            <span className="h-px w-12 bg-[#c59645]" />

          </div>

          {/* Heading */}

          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-[#0c1d3d] sm:text-5xl lg:text-[58px]">

            Your Trust,

            <span className="font-extrabold text-[#b88b32]">
              {" "}Our Commitment
            </span>

          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base lg:text-[17px] lg:leading-8">
            We bring you real estate solutions with integrity, expertise,
            and a people-first approach, ensuring a seamless and secure
            property journey.
          </p>

        </div>

        {/* =====================================================
            TRUST CARDS
        ====================================================== */}

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5">

          {trustPoints.map((point) => {
            const Icon = point.icon;

            return (
              <div
                key={point.id}
                className="group relative overflow-hidden rounded-[20px] border border-[#eee9df] bg-white px-6 py-7 text-center shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d9bd88] hover:shadow-[0_20px_45px_rgba(15,23,42,0.10)]"
              >

                {/* =================================================
                    TOP NUMBER
                ================================================== */}

                <div className="absolute right-5 top-5">

                  <span className="text-[15px] font-medium tracking-wide text-[#d8cdbd] transition-colors duration-300 group-hover:text-[#c39a59]">
                    {String(point.id).padStart(2, "0")}
                  </span>

                </div>

                {/* =================================================
                    ICON
                ================================================== */}

                <div className="mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#eadfc9] bg-[#fbf7ef] transition-all duration-500 group-hover:scale-105 group-hover:border-[#c99b52] group-hover:bg-[#f8efdf]">

                  <Icon
                    size={29}
                    strokeWidth={1.7}
                    className="text-[#17243d] transition-all duration-300 group-hover:text-[#b88b32]"
                  />

                </div>

                {/* =================================================
                    TITLE
                ================================================== */}

                <h3 className="mt-6 min-h-[24px] text-[15px] font-extrabold tracking-[-0.01em] text-[#0d1d3b] sm:text-[16px]">
                  {point.title}
                </h3>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <p className="mx-auto mt-3 min-h-[72px] max-w-[220px] text-[12px] leading-[1.65] text-slate-500">
                  {point.description}
                </p>

                {/* =================================================
                    ARROW
                ================================================== */}

                <div className="mt-5 flex justify-center">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c99b52] bg-white transition-all duration-300 group-hover:bg-[#b88b32]">

                    <ArrowRight
                      size={17}
                      strokeWidth={1.8}
                      className="text-[#17243d] transition-colors duration-300 group-hover:text-white"
                    />

                  </div>

                </div>

                {/* =================================================
                    BOTTOM HOVER LINE
                ================================================== */}

                <span className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 bg-[#c59645] transition-all duration-500 group-hover:w-20" />

              </div>
            );
          })}

        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div className="relative mt-8 overflow-hidden rounded-[20px] border border-[#dfcda9] bg-[#fbf8f1]">

          {/* Decorative background */}

          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-[0.08]">
            <div className="absolute right-8 top-[-30px] h-48 w-48 rounded-full border-[20px] border-[#b88b32]" />
            <div className="absolute right-24 top-10 h-32 w-32 rounded-full border border-[#b88b32]" />
          </div>

          <div className="relative flex flex-col gap-6 px-5 py-6 sm:px-7 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-5">

            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_5px_18px_rgba(15,23,42,0.08)]">

                <ShieldCheck
                  size={22}
                  strokeWidth={1.8}
                  className="text-[#b88b32]"
                />

              </div>

              <div>

                <p className="text-[14px] font-extrabold tracking-[-0.01em] text-[#0d1d3b] sm:text-[15px]">
                  Your real estate journey starts here.
                </p>

                <p className="mt-1 text-[11px] leading-5 text-slate-500 sm:text-xs">
                  Talk to our experts and find the right property, the right way.
                </p>

              </div>

            </div>

            {/* =================================================
                BENEFITS
            ================================================== */}

            <div className="hidden items-center lg:flex">

              {/* Benefit 1 */}

              <div className="flex items-center gap-3 px-6">

                <ShieldCheck
                  size={22}
                  strokeWidth={1.7}
                  className="text-[#b88b32]"
                />

                <div>
                  <p className="text-[11px] font-bold text-slate-800">
                    Trusted Advice
                  </p>
                  <p className="mt-0.5 text-[9px] text-slate-500">
                    Expert guidance
                  </p>
                </div>

              </div>

              <div className="h-10 w-px bg-[#dfd3bd]" />

              {/* Benefit 2 */}

              <div className="flex items-center gap-3 px-6">

                <UserRoundCheck
                  size={22}
                  strokeWidth={1.7}
                  className="text-[#b88b32]"
                />

                <div>
                  <p className="text-[11px] font-bold text-slate-800">
                    Personalized Support
                  </p>
                  <p className="mt-0.5 text-[9px] text-slate-500">
                    At every step
                  </p>
                </div>

              </div>

              <div className="h-10 w-px bg-[#dfd3bd]" />

              {/* Benefit 3 */}

              <div className="flex items-center gap-3 px-6">

                <TrendingUp
                  size={22}
                  strokeWidth={1.7}
                  className="text-[#b88b32]"
                />

                <div>
                  <p className="text-[11px] font-bold text-slate-800">
                    Better Opportunities
                  </p>
                  <p className="mt-0.5 text-[9px] text-slate-500">
                    Growth-focused
                  </p>
                </div>

              </div>

            </div>

            {/* =================================================
                CTA BUTTON
            ================================================== */}

            <button
              type="button"
              onClick={handleExpertCall}
              className="group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-[#0d1d3b] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(13,29,59,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#162b50] hover:shadow-[0_12px_25px_rgba(13,29,59,0.22)] sm:w-auto"
            >

              <Phone
                size={16}
                strokeWidth={2}
                className="lg:hidden"
              />

              <span>
                Talk To An Expert
              </span>

              <ArrowRight
                size={17}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseInvestorise;