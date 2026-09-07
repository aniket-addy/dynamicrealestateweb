import {
  Quote,
  Star,
  ArrowRight,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Property Investor",
    location: "Noida",
    message:
      "Investorise made the entire property selection process simple. Their team understood my requirements and suggested projects that actually matched my investment goals.",
    rating: 5,
  },
  {
    id: 2,
    name: "Amit Verma",
    role: "Home Buyer",
    location: "Greater Noida",
    message:
      "The team was very professional and helpful throughout the process. From shortlisting properties to arranging site visits, everything was handled smoothly.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Singh",
    role: "Property Investor",
    location: "Delhi NCR",
    message:
      "I appreciated the clarity and guidance provided by the Investorise team. They helped me compare multiple projects before making my final decision.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-[720px] text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#b88b32]">
              Client Stories
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-[-0.035em] text-slate-900 sm:text-4xl lg:text-5xl">
            Trusted By People
            <span className="text-[#b88b32]"> Like You</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-sm leading-7 text-slate-500 sm:text-base">
            Real experiences from clients who trusted Investorise with their
            property and investment journey.
          </p>
        </div>

        {/* =====================================================
            TESTIMONIAL CAROUSEL
            Mobile/Tablet = 1 card + manual swipe
            Desktop = 3 cards grid
        ====================================================== */}

        <div
          className="
            mt-10

            flex
            snap-x
            snap-mandatory
            overflow-x-auto
            overscroll-x-contain

            gap-5

            pb-2

            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden

            md:grid
            md:grid-cols-2
            md:overflow-visible
            md:pb-0

            lg:grid-cols-3
          "
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="
                group
                relative

                min-w-full
                snap-start

                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6

                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#d6a84f]/40
                hover:shadow-xl

                sm:p-7

                md:min-w-0
              "
            >
              {/* Quote Icon */}
              <div className="absolute right-6 top-6">
                <Quote
                  size={38}
                  strokeWidth={1.2}
                  className="text-[#d6a84f]/20"
                />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    size={14}
                    fill="currentColor"
                    className="text-[#d6a84f]"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="mt-6 text-sm leading-7 text-slate-600">
                "{testimonial.message}"
              </p>

              {/* User */}
              <div className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-5">

                {/* Avatar */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#f7f0e2]
                    text-sm
                    font-extrabold
                    text-[#b88b32]
                  "
                >
                  {testimonial.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    {testimonial.name}
                  </h3>

                  <p className="mt-0.5 text-xs text-slate-500">
                    {testimonial.role} · {testimonial.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile swipe hint */}
        <div className="mt-4 text-center md:hidden">
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
            Swipe to explore
          </span>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
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
            Start Your Property Journey

            <ArrowRight
              size={14}
              className="transition-transform hover:translate-x-1"
            />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;