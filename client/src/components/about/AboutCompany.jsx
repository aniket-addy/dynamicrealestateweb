import {
  ArrowRight,
  Search,
  BarChart3,
  GitCompareArrows,
  Compass,
  CheckCircle2,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function AboutCompany() {
  const navigate = useNavigate();

  const journey = [
    {
      number: "01",
      icon: Search,
      title: "Understand",
      description:
        "We start with what actually matters to you — your requirement, budget, goals and preferred location.",
    },
    {
      number: "02",
      icon: BarChart3,
      title: "Research",
      description:
        "We study projects, developers, locations, connectivity and market opportunities before presenting options.",
    },
    {
      number: "03",
      icon: GitCompareArrows,
      title: "Compare",
      description:
        "Instead of showing endless listings, we help you compare the opportunities that make sense for you.",
    },
    {
      number: "04",
      icon: Compass,
      title: "Guide",
      description:
        "From site visits to the final decision, our team stays involved so you can move ahead with clarity.",
    },
  ];

  const principles = [
    "Research before recommendation",
    "Clarity before commitment",
    "Long-term value over quick decisions",
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#d6a84f]/10 blur-3xl" />

        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#d6a84f]/10 blur-3xl" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            TOP INTRO
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">

          {/* Small label */}

          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-px w-8 bg-[#d6a84f]" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#e0b65c]">
                About Investorise
              </span>
            </div>

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Real estate is not just about finding a property. It is about
              understanding whether that property is right for you.
            </p>
          </div>

          {/* Main heading */}

          <div>
            <h2
              className="
                max-w-4xl
                text-4xl
                font-extrabold
                leading-[1.05]
                tracking-[-0.045em]
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              We Don't Just
              <span className="text-[#d6a84f]"> Show Properties.</span>

              <br />

              We Help You
              <span className="text-[#d6a84f]"> Decide.</span>
            </h2>
          </div>

        </div>

        {/* =====================================================
            MAIN STORY
        ====================================================== */}

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* ===================================================
              LEFT — STORY / PHILOSOPHY
          ==================================================== */}

          <div className="lg:sticky lg:top-24 lg:self-start">

            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-6
                sm:p-8
              "
            >

              {/* Top accent */}

              <div className="absolute left-0 top-0 h-1 w-24 bg-[#d6a84f]" />

              <div className="flex items-start justify-between gap-5">

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Our Philosophy
                  </p>

                  <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                    Less Noise.
                    <span className="block text-[#d6a84f]">
                      Better Decisions.
                    </span>
                  </h3>
                </div>

                {/* Experience */}

                <div className="shrink-0 text-right">
                  <p className="text-4xl font-extrabold tracking-tight text-white">
                    10+
                  </p>

                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                    Years
                  </p>
                </div>

              </div>

              <div className="mt-7 h-px bg-white/10" />

              <p className="mt-7 text-sm leading-7 text-slate-400">
                Property buyers today have access to more information than
                ever. But more information does not always mean a better
                decision.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Investorise brings research, market understanding and
                personalized guidance together so that you can focus on the
                opportunities that genuinely fit your goals.
              </p>

              {/* Principles */}

              <div className="mt-7 space-y-3">
                {principles.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-[#d6a84f]"
                    />

                    <span className="text-xs font-semibold text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}

              <button
                type="button"
                onClick={() => navigate("/about")}
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#d6a84f]
                  px-5
                  py-3
                  text-xs
                  font-extrabold
                  text-slate-950
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#e3bb67]
                "
              >
                Discover Investorise

                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

            </div>
          </div>

          {/* ===================================================
              RIGHT — HOW WE WORK
          ==================================================== */}

          <div>

            <div className="mb-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#d6a84f]">
                How We Work
              </p>

              <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                From Requirement
                <span className="text-[#d6a84f]"> To Right Decision.</span>
              </h3>
            </div>

            {/* Journey */}

            <div className="relative">

              {/* Vertical line */}

              <div
                className="
                  absolute
                  bottom-8
                  left-[23px]
                  top-8
                  hidden
                  w-px
                  bg-gradient-to-b
                  from-[#d6a84f]
                  via-white/10
                  to-transparent
                  sm:block
                "
              />

              <div className="space-y-4">

                {journey.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.number}
                      className="
                        group
                        relative
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.035]
                        p-5
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#d6a84f]/40
                        hover:bg-white/[0.06]
                        sm:p-6
                      "
                    >

                      <div className="flex gap-5">

                        {/* Number / Icon */}

                        <div className="relative z-10 shrink-0">

                          <div
                            className="
                              flex
                              h-12
                              w-12
                              items-center
                              justify-center
                              rounded-xl
                              border
                              border-[#d6a84f]/20
                              bg-slate-950
                              transition-all
                              duration-300
                              group-hover:border-[#d6a84f]
                              group-hover:bg-[#d6a84f]
                            "
                          >
                            <Icon
                              size={19}
                              strokeWidth={1.8}
                              className="
                                text-[#d6a84f]
                                transition-colors
                                group-hover:text-slate-950
                              "
                            />
                          </div>

                        </div>

                        {/* Content */}

                        <div className="min-w-0 flex-1">

                          <div className="flex items-start justify-between gap-4">

                            <div>
                              <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#d6a84f]">
                                Step {item.number}
                              </span>

                              <h4 className="mt-1 text-lg font-extrabold text-white">
                                {item.title}
                              </h4>
                            </div>

                            <span className="hidden text-2xl font-extrabold text-white/5 sm:block">
                              {item.number}
                            </span>

                          </div>

                          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                            {item.description}
                          </p>

                        </div>

                      </div>

                    </div>
                  );
                })}

              </div>
            </div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div className="mt-14 border-t border-white/10 pt-8">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                The Investorise Difference
              </p>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                Because the right property is not the one that looks best on
                paper. It is the one that makes sense for your next chapter.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/about")}
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-2
                text-xs
                font-extrabold
                text-white
                transition
                hover:text-[#d6a84f]
              "
            >
              Know More About Us

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutCompany;