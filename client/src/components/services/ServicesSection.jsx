import {
  SearchCheck,
  TrendingUp,
  MapPinned,
  FileCheck2,
  Handshake,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: SearchCheck,
    number: "01",
    title: "Property Discovery",
    description:
      "Find residential, commercial and land opportunities that match your requirements.",
    features: [
      "Verified property options",
      "Location-based recommendations",
      "Requirement-based property search",
    ],
  },
  {
    id: 2,
    icon: TrendingUp,
    number: "02",
    title: "Investment Advisory",
    description:
      "Get guidance on locations, projects and opportunities based on your investment goals.",
    features: [
      "Investment-focused guidance",
      "Location insights",
      "Project comparison",
    ],
  },
  {
    id: 3,
    icon: MapPinned,
    number: "03",
    title: "Site Visit Assistance",
    description:
      "Plan and coordinate property visits so you can experience projects before deciding.",
    features: [
      "Site visit coordination",
      "Project walkthrough",
      "Location assistance",
    ],
  },
  {
    id: 4,
    icon: FileCheck2,
    number: "04",
    title: "Documentation Support",
    description:
      "Get assistance throughout the documentation and property buying process.",
    features: [
      "Documentation guidance",
      "Buying process support",
      "Transaction coordination",
    ],
  },
  {
    id: 5,
    icon: Handshake,
    number: "05",
    title: "Deal Assistance",
    description:
      "Our team helps you move from property selection to a smoother transaction.",
    features: [
      "Deal coordination",
      "Property selection support",
      "Transaction assistance",
    ],
  },
  {
    id: 6,
    icon: Building2,
    number: "06",
    title: "Project Consultation",
    description:
      "Understand project details, amenities, location advantages and investment potential.",
    features: [
      "Project details",
      "Amenities & location insights",
      "Investment potential discussion",
    ],
  },
];

function ServicesSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-[700px] text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
           

            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#b88b32]">
              What We Do
            </span>

            
          </div>

          <h2 className="text-3xl font-extrabold tracking-[-0.035em] text-slate-900 sm:text-4xl lg:text-5xl">
            Complete Real Estate
            <span className="text-[#b88b32]"> Support</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-sm leading-7 text-slate-500 sm:text-base">
            From finding the right property to completing your investment
            journey, we provide reliable support at every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#d6a84f]/50
                  hover:shadow-xl
                  sm:p-7
                "
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#f7f0e2]
                      transition-colors
                      duration-300
                      group-hover:bg-[#d6a84f]
                    "
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.8}
                      className="text-[#b88b32] transition-colors group-hover:text-slate-950"
                    />
                  </div>

                  <span className="text-sm font-extrabold text-slate-200">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-lg font-extrabold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-5 space-y-2.5">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2
                        size={14}
                        className="shrink-0 text-[#b88b32]"
                      />

                      <span className="text-xs font-medium text-slate-600">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom */}
                <div className="mt-7 border-t border-slate-100 pt-5">
                  <a
                    href="/contact"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-xs
                      font-extrabold
                      text-slate-900
                      transition
                      hover:text-[#b88b32]
                    "
                  >
                    Get Assistance

                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;