import {
  ArrowRight,
  ArrowUpRight,
  Quote,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function About() {
  const navigate = useNavigate();

  const stats = [
    {
      number: "10+",
      label: "Years of Experience",
    },
    {
      number: "500+",
      label: "Happy Clients",
    },
    {
      number: "100+",
      label: "Projects",
    },
    {
      number: "25+",
      label: "Locations",
    },
  ];

  const values = [
    {
      number: "01",
      title: "Transparency",
      description:
        "Clear information, honest advice and complete transparency at every stage of your property journey.",
    },
    {
      number: "02",
      title: "Client First",
      description:
        "Every recommendation starts with understanding your goals, priorities and long-term expectations.",
    },
    {
      number: "03",
      title: "Long-Term Perspective",
      description:
        "We focus on decisions that create sustainable value rather than short-term opportunities.",
    },
    {
      number: "04",
      title: "Trust",
      description:
        "Strong relationships are built through consistency, accountability and doing what we promise.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Understand",
      description:
        "We begin by understanding your requirements, financial goals and preferred locations.",
    },
    {
      number: "02",
      title: "Explore",
      description:
        "Our team identifies relevant projects and opportunities that match your objectives.",
    },
    {
      number: "03",
      title: "Evaluate",
      description:
        "We help you compare options, understand risks and make an informed decision.",
    },
    {
      number: "04",
      title: "Move Forward",
      description:
        "Once you are confident, we support you throughout the next steps of your property journey.",
    },
  ];

  const team = [
    {
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
      name: "Strategy & Leadership",
      role: "Leadership Team",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
      name: "Property Advisors",
      role: "Real Estate Advisory",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
      name: "Client Support",
      role: "Customer Experience",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* =========================================================
          HERO + NAVBAR
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#071525]">
        {/* Background */}
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=90"
          alt="Modern city buildings"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#061323]/80" />

        {/* Left Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061323] via-[#061323]/80 to-[#061323]/30" />

        {/* Navbar */}
        <div className="relative z-20">
          <Navbar variant="light" />
        </div>

        {/* =======================================================
            SHORT HERO CONTENT
        ======================================================= */}
        <div className="relative z-10 mx-auto flex min-h-[490px] max-w-7xl items-center px-6 pb-16 pt-10 lg:min-h-[510px] lg:px-8 lg:pb-20">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-12 bg-[#d8b36a]" />

              <p className="text-sm font-semibold tracking-[0.32em] text-[#d8b36a]">
                ABOUT US
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-light leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[64px]">
              Real People.
              <br />

              <span className="text-white">
                Real Insights.
              </span>

              <br />

              <span className="font-serif italic text-[#d8b36a]">
                A Better Tomorrow.
              </span>
            </h1>

            {/* Small Gold Line */}
            <div className="mt-7 h-px w-14 bg-[#d8b36a]" />
          </div>
        </div>
      </section>

      <main>
        {/* =========================================================
            OUR STORY
        ========================================================= */}
        <section
          id="our-story"
          className="overflow-hidden bg-[#f8f7f4] px-6 py-20 lg:px-8 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              {/* Image Collage */}
              <div className="relative min-h-[500px]">
                {/* Main Image */}
                <div className="absolute left-0 top-8 h-[390px] w-[76%] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=85"
                    alt="Modern real estate property"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Secondary Image */}
                <div className="absolute bottom-0 right-0 h-[250px] w-[48%] overflow-hidden border-[8px] border-[#f8f7f4]">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"
                    alt="Luxury property interior"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Floating Card */}
                <div className="absolute bottom-24 left-[12%] bg-[#071525] px-7 py-6 text-white shadow-xl">
                  <p className="text-[10px] font-semibold tracking-[0.3em] text-[#d8b36a]">
                    OUR BELIEF
                  </p>

                  <p className="mt-2 font-serif text-2xl italic">
                    More Than
                    <br />
                    Property.
                  </p>
                </div>

                {/* Small Label */}
                <div className="absolute right-4 top-0 rotate-[-7deg] font-serif text-2xl italic text-[#b38a45]">
                  A Better Tomorrow
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="mb-5 flex items-center gap-4">
                  <span className="h-px w-11 bg-[#b38a45]" />

                  <p className="text-sm font-semibold tracking-[0.3em] text-[#b38a45]">
                    OUR STORY
                  </p>
                </div>

                <h2 className="text-4xl font-light leading-[1.1] text-[#071525] sm:text-5xl">
                  A Real Estate Advisory
                  <br />
                  Built On{" "}
                  <span className="font-serif italic text-[#b38a45]">
                    Trust.
                  </span>
                </h2>

                <p className="mt-7 text-lg leading-8 text-slate-600">
                  Real estate is more than buying a property. It is about
                  making decisions that shape your future, your family and
                  your financial journey.
                </p>

                <p className="mt-5 leading-8 text-slate-500">
                  At Investorise, we bring together market understanding,
                  property knowledge and a client-first approach to make real
                  estate decisions simpler and more meaningful.
                </p>

                <p className="mt-5 leading-8 text-slate-500">
                  Whether you are looking for your first investment, a home for
                  your family or your next growth opportunity, our role is to
                  give you clarity before you make a decision.
                </p>

                <button
                  onClick={() => navigate("/contact")}
                  className="group mt-8 inline-flex items-center gap-3 border-b border-[#071525] pb-2 text-sm font-semibold text-[#071525]"
                >
                  Talk To Our Experts

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            STATS
        ========================================================= */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`
                  px-6 py-9
                  lg:px-10 lg:py-11
                  ${
                    index < 2
                      ? "border-b border-slate-200"
                      : ""
                  }
                  ${
                    index % 2 === 0
                      ? "border-r border-slate-200"
                      : ""
                  }
                  lg:border-b-0
                  ${
                    index !== stats.length - 1
                      ? "lg:border-r"
                      : "lg:border-r-0"
                  }
                `}
              >
                <p className="font-serif text-4xl text-[#071525] lg:text-5xl">
                  {stat.number}
                </p>

                <p className="mt-2 text-sm font-medium tracking-wide text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            PURPOSE
        ========================================================= */}
        <section className="bg-[#071525] px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              {/* Heading */}
              <div>
                <div className="mb-5 flex items-center gap-4">
                  <span className="h-px w-11 bg-[#d8b36a]" />

                  <p className="text-sm font-semibold tracking-[0.3em] text-[#d8b36a]">
                    OUR PURPOSE
                  </p>
                </div>

                <h2 className="text-4xl font-light leading-tight !text-white sm:text-5xl">
                  Guided by Purpose.
                  <br />

                  <span className="font-serif italic text-[#d8b36a]">
                    Driven by People.
                  </span>
                </h2>

                <p className="mt-7 max-w-md leading-8 text-white/60">
                  We believe better real estate decisions happen when people
                  have access to better information, honest guidance and
                  meaningful choices.
                </p>
              </div>

              {/* Mission / Vision */}
              <div className="grid gap-px bg-white/10 sm:grid-cols-2">
                {/* Mission */}
                <div className="bg-[#0b1d31] p-8 lg:p-10">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#d8b36a]/50 text-[#d8b36a]">
                    <span className="font-serif text-xl">M</span>
                  </div>

                  <h3 className="mt-7 text-2xl font-medium !text-white">
                    Our Mission
                  </h3>

                  <p className="mt-4 leading-7 text-white/55">
                    To simplify real estate decisions by connecting people
                    with trusted opportunities, relevant insights and
                    dependable support.
                  </p>
                </div>

                {/* Vision */}
                <div className="bg-[#0b1d31] p-8 lg:p-10">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#d8b36a]/50 text-[#d8b36a]">
                    <span className="font-serif text-xl">V</span>
                  </div>

                  <h3 className="mt-7 text-2xl font-medium !text-white">
                    Our Vision
                  </h3>

                  <p className="mt-4 leading-7 text-white/55">
                    To become a trusted real estate advisory platform known
                    for transparency, expertise and long-term relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            VALUES
        ========================================================= */}
        <section className="bg-white px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-11 bg-[#b38a45]" />

                <p className="text-sm font-semibold tracking-[0.3em] text-[#b38a45]">
                  OUR VALUES
                </p>
              </div>

              <h2 className="text-4xl font-light leading-tight text-[#071525] sm:text-5xl">
                The Principles Behind
                <br />

                <span className="font-serif italic">
                  Everything We Do.
                </span>
              </h2>
            </div>

            <div className="mt-14 grid gap-x-12 md:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.number}
                  className="border-t border-slate-200 py-8"
                >
                  <div className="flex gap-6">
                    <span className="font-serif text-lg text-[#b38a45]">
                      {value.number}
                    </span>

                    <div>
                      <h3 className="text-2xl font-medium text-[#071525]">
                        {value.title}
                      </h3>

                      <p className="mt-3 max-w-lg leading-7 text-slate-500">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            APPROACH
        ========================================================= */}
        <section className="bg-[#f8f7f4] px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              {/* Left */}
              <div>
                <div className="mb-5 flex items-center gap-4">
                  <span className="h-px w-11 bg-[#b38a45]" />

                  <p className="text-sm font-semibold tracking-[0.3em] text-[#b38a45]">
                    OUR APPROACH
                  </p>
                </div>

                <h2 className="text-4xl font-light leading-tight text-[#071525] sm:text-5xl">
                  A Simpler Path to
                  <br />

                  <span className="font-serif italic">
                    Smarter Decisions.
                  </span>
                </h2>

                <p className="mt-7 max-w-md leading-8 text-slate-500">
                  From the first conversation to the final decision, we focus
                  on making every step clear and comfortable.
                </p>
              </div>

              {/* Right */}
              <div>
                {process.map((item) => (
                  <div
                    key={item.number}
                    className="grid gap-5 border-t border-slate-300 py-7 sm:grid-cols-[60px_170px_1fr]"
                  >
                    <span className="font-serif text-xl text-[#b38a45]">
                      {item.number}
                    </span>

                    <h3 className="text-xl font-medium text-[#071525]">
                      {item.title}
                    </h3>

                    <p className="leading-7 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            TEAM
        ========================================================= */}
        <section className="bg-white px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <div className="mb-5 flex items-center gap-4">
                  <span className="h-px w-11 bg-[#b38a45]" />

                  <p className="text-sm font-semibold tracking-[0.3em] text-[#b38a45]">
                    THE PEOPLE
                  </p>
                </div>

                <h2 className="text-4xl font-light text-[#071525] sm:text-5xl">
                  People Behind
                  <br />

                  <span className="font-serif italic">
                    Your Next Move.
                  </span>
                </h2>
              </div>

              <p className="max-w-md leading-7 text-slate-500">
                A team that combines property expertise, market understanding
                and a genuine commitment to helping clients move forward with
                confidence.
              </p>
            </div>

            <div className="mt-14 grid gap-7 md:grid-cols-3">
              {team.map((member) => (
                <div key={member.name}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071525] to-transparent p-7 pt-24">
                      <p className="text-xs font-semibold tracking-[0.2em] text-[#d8b36a]">
                        {member.role}
                      </p>

                      <h3 className="mt-2 text-xl font-medium text-white">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className="relative min-h-[500px] overflow-hidden bg-[#071525]">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90"
            alt="Luxury modern interior"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#071525]/75" />

          <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-11 bg-[#d8b36a]" />

                <p className="text-sm font-semibold tracking-[0.3em] text-[#d8b36a]">
                  LET'S TALK
                </p>
              </div>

              <h2 className="text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
                A better tomorrow
                <br />
                starts with a
                <br />

                <span className="font-serif italic text-[#d8b36a]">
                  better decision.
                </span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-white/65">
                Whether you're buying, investing or simply exploring your
                options, our experts are here to help you make your next move
                with confidence.
              </p>

              <button
                onClick={() => navigate("/contact")}
                className="group mt-8 inline-flex items-center gap-3 bg-[#d8b36a] px-7 py-4 text-sm font-semibold text-[#071525] transition hover:bg-white"
              >
                Get In Touch

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>

            {/* Side Words */}
            <div className="absolute bottom-9 right-6 hidden flex-col gap-2 text-right text-xs font-semibold tracking-[0.4em] text-white/30 lg:flex">
              <span>INVEST</span>
              <span>GROW</span>
              <span>BELONG</span>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <Footer />
    </div>
  );
}

export default About;