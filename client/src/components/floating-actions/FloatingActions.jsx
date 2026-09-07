import {
  Phone,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import {
  callClient,
  CONTACT_CONFIG,
} from "../config/contact";


// =========================================================
// WHATSAPP ICON
// =========================================================

function WhatsAppIcon({
  size = 21,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* WhatsApp outer circle */}
      <path
        d="M16 3C8.82 3 3 8.82 3 16C3 18.3 3.6 20.47 4.65 22.36L3.2 28.1L9.1 26.66C11.02 27.67 13.25 28.25 16 28.25C23.18 28.25 29 22.43 29 15.25C29 8.82 23.18 3 16 3Z"
        fill="currentColor"
      />

      {/* WhatsApp white inner area */}
      <path
        d="M16 7.05C11.03 7.05 7 11.08 7 16.05C7 17.78 7.49 19.4 8.34 20.8L7.25 24.82L11.4 23.76C12.73 24.59 14.31 25.05 16 25.05C20.97 25.05 25 21.02 25 16.05C25 11.08 20.97 7.05 16 7.05Z"
        fill="white"
      />

      {/* WhatsApp phone symbol */}
      <path
        d="M12.25 10.75C12.6 10.4 13.18 10.38 13.55 10.7L14.7 11.68C15.03 11.96 15.12 12.44 14.91 12.83L14.28 13.98C14.12 14.27 14.14 14.62 14.35 14.87C15.06 15.75 15.86 16.55 16.75 17.25C17 17.46 17.35 17.48 17.64 17.32L18.79 16.69C19.18 16.48 19.66 16.57 19.94 16.9L20.92 18.05C21.24 18.42 21.22 19 20.87 19.35L20.13 20.09C19.55 20.67 18.66 20.87 17.89 20.6C15.72 19.84 12.26 16.38 11.5 14.21C11.23 13.44 11.43 12.55 12.01 11.97L12.25 11.73V10.75Z"
        fill="currentColor"
      />
    </svg>
  );
}


// =========================================================
// FLOATING ACTIONS
// =========================================================

function FloatingActions() {
  const navigate = useNavigate();


  // =========================================================
  // WHATSAPP MESSAGE
  // =========================================================

  const whatsappMessage =
    "Hello Investorise, I am interested in your property projects.";


  // =========================================================
  // CALL HANDLER
  // =========================================================

  const handleCallClick = () => {
    const called = callClient();

    // Agar phone number configured nahi hai
    // to Contact page par bhejo
    if (!called) {
      navigate("/contact");
    }
  };


  // =========================================================
  // WHATSAPP HANDLER
  // =========================================================

  const handleWhatsAppClick = (event) => {
    // WhatsApp number configured nahi hai
    if (!CONTACT_CONFIG.whatsapp) {
      event.preventDefault();
      navigate("/contact");
    }
  };


  // =========================================================
  // WHATSAPP URL
  // =========================================================

  const whatsappUrl = CONTACT_CONFIG.whatsapp
    ? `https://wa.me/${CONTACT_CONFIG.whatsapp}?text=${encodeURIComponent(
        whatsappMessage
      )}`
    : "/contact";


  return (
    <>
      {/* =====================================================
          DESKTOP / TABLET FLOATING ACTIONS
      ====================================================== */}

      <div
        className="
          fixed
          bottom-5
          right-5
          z-50

          hidden
          flex-col
          gap-3

          sm:flex
        "
      >

        {/* =================================================
            WHATSAPP
        ================================================== */}

        <a
          href={whatsappUrl}
          target={
            CONTACT_CONFIG.whatsapp
              ? "_blank"
              : undefined
          }
          rel={
            CONTACT_CONFIG.whatsapp
              ? "noreferrer"
              : undefined
          }
          onClick={handleWhatsAppClick}
          aria-label="Chat on WhatsApp"
          className="
            group
            relative

            flex
            h-12
            w-12

            items-center
            justify-center

            rounded-full

            bg-[#25D366]

            text-white

            shadow-xl
            shadow-slate-900/20

            transition-all
            duration-300

            hover:-translate-y-1
            hover:scale-105

            hover:shadow-2xl
          "
        >

          <WhatsAppIcon
            size={23}
            className="text-white"
          />

          {/* TOOLTIP */}

          <span
            className="
              pointer-events-none

              absolute
              right-14

              whitespace-nowrap

              rounded-lg

              bg-slate-900

              px-3
              py-2

              text-[10px]
              font-bold

              text-white

              opacity-0

              shadow-lg

              transition

              group-hover:opacity-100
            "
          >
            Chat on WhatsApp
          </span>

        </a>


        {/* =================================================
            CALL
        ================================================== */}

        <button
          type="button"
          onClick={handleCallClick}
          aria-label="Call Investorise"
          className="
            group
            relative

            flex
            h-12
            w-12

            items-center
            justify-center

            rounded-full

            bg-slate-900

            text-white

            shadow-xl
            shadow-slate-900/20

            transition-all
            duration-300

            hover:-translate-y-1
            hover:scale-105
          "
        >

          <Phone
            size={19}
            className="fill-white"
          />

          {/* TOOLTIP */}

          <span
            className="
              pointer-events-none

              absolute
              right-14

              whitespace-nowrap

              rounded-lg

              bg-slate-900

              px-3
              py-2

              text-[10px]
              font-bold

              text-white

              opacity-0

              shadow-lg

              transition

              group-hover:opacity-100
            "
          >
            Call Now
          </span>

        </button>

      </div>


      {/* =====================================================
          MOBILE BOTTOM BAR
      ====================================================== */}

      <div
        className="
          fixed
          bottom-0
          left-0
          right-0

          z-50

          flex

          border-t
          border-slate-200

          bg-white

          p-2

          shadow-2xl

          sm:hidden
        "
      >

        {/* =================================================
            MOBILE WHATSAPP
        ================================================== */}

        <a
          href={whatsappUrl}
          target={
            CONTACT_CONFIG.whatsapp
              ? "_blank"
              : undefined
          }
          rel={
            CONTACT_CONFIG.whatsapp
              ? "noreferrer"
              : undefined
          }
          onClick={handleWhatsAppClick}
          aria-label="Chat on WhatsApp"
          className="
            flex
            flex-1

            items-center
            justify-center
            gap-2

            rounded-lg

            bg-[#25D366]

            py-3

            text-xs
            font-bold

            text-white

            transition-all
            duration-200

            active:scale-[0.98]
          "
        >

          <WhatsAppIcon
            size={18}
            className="text-white"
          />

          <span>
            WhatsApp
          </span>

        </a>


        {/* =================================================
            SPACING
        ================================================== */}

        <div className="w-2" />


        {/* =================================================
            MOBILE CALL
        ================================================== */}

        <button
          type="button"
          onClick={handleCallClick}
          aria-label="Call Investorise"
          className="
            flex
            flex-1

            items-center
            justify-center
            gap-2

            rounded-lg

            bg-slate-900

            py-3

            text-xs
            font-bold

            text-white

            transition-all
            duration-200

            active:scale-[0.98]
          "
        >

          <Phone
            size={15}
            className="fill-white"
          />

          <span>
            Call Now
          </span>

        </button>

      </div>
    </>
  );
}


export default FloatingActions;