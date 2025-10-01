import Navigation from "../components/Navigation";

export default function Index() {
  return (
    <div
      className="min-h-screen bg-cream-bg flex items-center justify-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #F5F1E8 0%, #F5F1E8 50%, rgba(232, 244, 244, 0.30) 100%)",
      }}
    >
      <Navigation />
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20 hidden lg:block">
        {/* Plus icon - top left */}
        <svg
          className="absolute w-8 h-8 xl:w-9 xl:h-9"
          style={{ left: "10%", top: "15%" }}
          viewBox="0 0 34 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.09718 17.5338H26.9028"
            stroke="#47ABAB"
            strokeWidth="2.12203"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 7.63098V27.4366"
            stroke="#47ABAB"
            strokeWidth="2.12203"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Star icon - top right */}
        <svg
          className="absolute w-10 h-10 xl:w-11 xl:h-11"
          style={{ right: "8%", top: "18%" }}
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.3166 5.10634C19.39 4.71352 19.5984 4.35874 19.9058 4.10343C20.2132 3.84812 20.6003 3.70836 20.9999 3.70836C21.3995 3.70836 21.7865 3.84812 22.0939 4.10343C22.4013 4.35874 22.6098 4.71352 22.6831 5.10634L24.4829 14.6238C24.6107 15.3004 24.9395 15.9228 25.4264 16.4097C25.9133 16.8966 26.5357 17.2255 27.2124 17.3533L36.7298 19.153C37.1226 19.2264 37.4774 19.4348 37.7327 19.7422C37.988 20.0496 38.1278 20.4367 38.1278 20.8363C38.1278 21.2359 37.988 21.6229 37.7327 21.9303C37.4774 22.2377 37.1226 22.4462 36.7298 22.5196L27.2124 24.3193C26.5357 24.4471 25.9133 24.7759 25.4264 25.2628C24.9395 25.7498 24.6107 26.3722 24.4829 27.0488L22.6831 36.5662C22.6098 36.959 22.4013 37.3138 22.0939 37.5691C21.7865 37.8244 21.3995 37.9642 20.9999 37.9642C20.6003 37.9642 20.2132 37.8244 19.9058 37.5691C19.5984 37.3138 19.39 36.959 19.3166 36.5662L17.5169 27.0488C17.3891 26.3722 17.0602 25.7498 16.5733 25.2628C16.0864 24.7759 15.464 24.4471 14.7873 24.3193L5.26993 22.5196C4.87711 22.4462 4.52233 22.2377 4.26702 21.9303C4.01171 21.6229 3.87195 21.2359 3.87195 20.8363C3.87195 20.4367 4.01171 20.0496 4.26702 19.7422C4.52233 19.4348 4.87711 19.2264 5.26993 19.153L14.7873 17.3533C15.464 17.2255 16.0864 16.8966 16.5733 16.4097C17.0602 15.9228 17.3891 15.3004 17.5169 14.6238L19.3166 5.10634Z"
            stroke="#47ABAB"
            strokeWidth="2.56857"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34.6991 3.71246V10.562"
            stroke="#47ABAB"
            strokeWidth="2.56857"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M38.1238 7.13724H31.2743"
            stroke="#47ABAB"
            strokeWidth="2.56857"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.30098 37.9601C9.19243 37.9601 10.7257 36.4268 10.7257 34.5353C10.7257 32.6439 9.19243 31.1106 7.30098 31.1106C5.40954 31.1106 3.87622 32.6439 3.87622 34.5353C3.87622 36.4268 5.40954 37.9601 7.30098 37.9601Z"
            stroke="#47ABAB"
            strokeWidth="2.56857"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Small plus icon - bottom left */}
        <svg
          className="absolute w-6 h-6"
          style={{ left: "8%", bottom: "28%" }}
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.98746 12.5208H20.0125"
            stroke="#47ABAB"
            strokeWidth="1.50269"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 5.5083V19.5334"
            stroke="#47ABAB"
            strokeWidth="1.50269"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Medium star icon - bottom right */}
        <svg
          className="absolute w-7 h-7 xl:w-8 xl:h-8"
          style={{ right: "12%", bottom: "38%" }}
          viewBox="0 0 30 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.8341 3.82012C13.8849 3.54805 14.0293 3.30232 14.2422 3.12549C14.4551 2.94866 14.7232 2.85187 15 2.85187C15.2767 2.85187 15.5448 2.94866 15.7577 3.12549C15.9706 3.30232 16.115 3.54805 16.1658 3.82012L17.4123 10.4119C17.5008 10.8806 17.7286 11.3117 18.0658 11.6489C18.4031 11.9861 18.8341 12.2139 19.3028 12.3024L25.8946 13.5489C26.1667 13.5997 26.4124 13.7441 26.5892 13.957C26.7661 14.1699 26.8629 14.438 26.8629 14.7148C26.8629 14.9915 26.7661 15.2596 26.5892 15.4725C26.4124 15.6854 26.1667 15.8298 25.8946 15.8806L19.3028 17.1271C18.8341 17.2156 18.4031 17.4434 18.0658 17.7806C17.7286 18.1179 17.5008 18.5489 17.4123 19.0176L16.1658 25.6094C16.115 25.8815 15.9706 26.1272 15.7577 26.304C15.5448 26.4808 15.2767 26.5776 15 26.5776C14.7232 26.5776 14.4551 26.4808 14.2422 26.304C14.0293 26.1272 13.8849 25.8815 13.8341 25.6094L12.5876 19.0176C12.4991 18.5489 12.2714 18.1179 11.9341 17.7806C11.5969 17.4434 11.1658 17.2156 10.6971 17.1271L4.10533 15.8806C3.83327 15.8298 3.58754 15.6854 3.41071 15.4725C3.23388 15.2596 3.13708 14.9915 3.13708 14.7148C3.13708 14.438 3.23388 14.1699 3.41071 13.957C3.58754 13.7441 3.83327 13.5997 4.10533 13.5489L10.6971 12.3024C11.1658 12.2139 11.5969 11.9861 11.9341 11.6489C12.2714 11.3117 12.4991 10.8806 12.5876 10.4119L13.8341 3.82012Z"
            stroke="#47ABAB"
            strokeWidth="1.77901"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.488 2.85468V7.59869"
            stroke="#47ABAB"
            strokeWidth="1.77901"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.86 5.22668H22.116"
            stroke="#47ABAB"
            strokeWidth="1.77901"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.5119 26.5748C6.82193 26.5748 7.88391 25.5128 7.88391 24.2028C7.88391 22.8927 6.82193 21.8307 5.5119 21.8307C4.20188 21.8307 3.13989 22.8927 3.13989 24.2028C3.13989 25.5128 4.20188 26.5748 5.5119 26.5748Z"
            stroke="#47ABAB"
            strokeWidth="1.77901"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Main Heading */}
          <div className="flex flex-col items-center">
            <h1
              className="text-teal-primary font-arimo font-bold leading-none tracking-tight"
              style={{
                fontSize: "clamp(3rem, 8vw, 8rem)",
                letterSpacing: "-3.2px",
                lineHeight: "1",
              }}
            >
              Hi. I'm Raj.
            </h1>
            <h2
              className="text-teal-primary font-arimo font-bold leading-none tracking-tight"
              style={{
                fontSize: "clamp(3rem, 8vw, 8rem)",
                letterSpacing: "-3.2px",
                lineHeight: "1",
              }}
            >
              A Product Owner.
            </h2>
          </div>

          {/* Description */}
          <p
            className="text-text-gray font-arimo text-center max-w-3xl"
            style={{
              fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
              lineHeight: "1.33",
            }}
          >
            I'm passionate about crafting experiences that are engaging,
            accessible, and user-centric.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center"
        style={{
          width: "24px",
          height: "40px",
          borderRadius: "33554400px",
          border: "2px solid rgba(71, 171, 171, 0.30)",
          paddingTop: "19.435px",
        }}
      >
        <div
          className="bg-teal-primary"
          style={{
            width: "4px",
            height: "6px",
            borderRadius: "33554400px",
          }}
        />
      </div>
    </div>
  );
}
