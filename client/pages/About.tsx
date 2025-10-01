import Navigation from "../components/Navigation";

export default function About() {
  return (
    <div
      className="min-h-screen bg-cream-bg relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #F5F1E8 0%, #F5F1E8 50%, rgba(232, 244, 244, 0.20) 100%)",
      }}
    >
      <Navigation />

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col items-center gap-32">
          {/* About Me Header & Profile Section */}
          <div className="flex flex-col items-start gap-20 w-full max-w-4xl">
            <div className="flex justify-center w-full">
              <h1
                className="text-teal-primary font-arimo font-bold text-center"
                style={{
                  fontSize: "clamp(3rem, 5vw, 4.5rem)",
                  lineHeight: "1",
                  letterSpacing: "-1px",
                }}
              >
                About Me.
              </h1>
            </div>

            {/* Profile Section */}
            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 w-full">
              {/* Profile Image */}
              <div className="flex-shrink-0 mx-auto lg:mx-0">
                <div
                  className="bg-teal-primary/10 rounded-full overflow-hidden"
                  style={{ width: "288px", height: "288px" }}
                >
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/4086dca41231284cb5756d896135085f85550725?width=576"
                    alt="Raj - Product Owner"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Profile Text */}
              <div className="flex flex-col gap-8 flex-1">
                <h2
                  className="text-teal-primary font-arimo font-bold"
                  style={{
                    fontSize: "clamp(2rem, 3vw, 3rem)",
                    lineHeight: "1.375",
                    letterSpacing: "-0.5px",
                  }}
                >
                  I'm a Product Owner working remotely from San Francisco,
                  California.
                </h2>

                <div className="flex flex-col gap-6">
                  <p
                    className="text-text-gray font-arimo"
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.625",
                    }}
                  >
                    Over the past 5 years, I've worked in various areas of
                    digital product development, including front-end
                    development, user experience design, product strategy, and
                    agile team management. I'm proud to have led numerous
                    successful product launches.
                  </p>

                  <p
                    className="text-text-gray font-arimo"
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.625",
                    }}
                  >
                    These days, I focus on leading product development at
                    innovative tech companies, bridging the gap between user
                    needs and business objectives while empowering engineering
                    teams to build exceptional digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Video CV Section */}
          <div className="flex flex-col items-center gap-8 w-full max-w-4xl">
            <div className="flex flex-col items-center gap-3">
              <h2
                className="text-teal-primary font-arimo font-bold text-center"
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 3.75rem)",
                  lineHeight: "1",
                  letterSpacing: "-1px",
                }}
              >
                Watch My Video CV.
              </h2>
              <p
                className="text-text-gray font-arimo text-center"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.556",
                }}
              >
                Learn more about my journey, skills, and passion for product
                development
              </p>
            </div>

            {/* Video Player */}
            <div
              className="relative w-full rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
              style={{
                height: "clamp(320px, 50vw, 505px)",
                background: "rgba(255, 255, 255, 0.80)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div
                className="absolute inset-1 rounded-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(71, 171, 171, 0.20) 0%, rgba(255, 107, 107, 0.10) 50%, rgba(71, 171, 171, 0.30) 100%)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-80"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(71, 171, 171, 0.30) 0%, rgba(255, 107, 107, 0.20) 100%)",
                  }}
                />

                {/* Decorative circles */}
                <div
                  className="absolute border-2 border-white/30 rounded-full opacity-[0.26] hidden sm:block"
                  style={{
                    width: "clamp(120px, 15vw, 177px)",
                    height: "clamp(120px, 15vw, 177px)",
                    left: "50%",
                    top: "32%",
                    transform: "translateX(-50%)",
                  }}
                />
                <div
                  className="absolute border-2 border-white/50 rounded-full opacity-[0.03] hidden sm:block"
                  style={{
                    width: "clamp(80px, 10vw, 120px)",
                    height: "clamp(80px, 10vw, 120px)",
                    left: "50%",
                    top: "38%",
                    transform: "translateX(-50%)",
                  }}
                />

                {/* Duration badge */}
                <div
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3 py-2 rounded-full bg-black/50 flex items-center justify-center"
                  style={{ minWidth: "59px", height: "32px" }}
                >
                  <span className="text-white font-arimo text-sm leading-5">
                    5:30
                  </span>
                </div>

                {/* Play button */}
                <div
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-white/90 shadow-2xl cursor-pointer hover:bg-white transition-colors duration-200"
                  style={{
                    width: "clamp(64px, 8vw, 96px)",
                    height: "clamp(64px, 8vw, 96px)",
                    paddingLeft: "4px",
                  }}
                >
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 10.9377C9.99979 10.2339 10.1853 9.54248 10.5378 8.93329C10.8902 8.3241 11.3972 7.81869 12.0075 7.4681C12.6178 7.11751 13.3098 6.93416 14.0136 6.93655C14.7174 6.93894 15.4081 7.12699 16.016 7.48171L40.01 21.4777C40.6155 21.8291 41.1182 22.3332 41.4679 22.9397C41.8175 23.5462 42.0019 24.2339 42.0025 24.934C42.0031 25.6341 41.8199 26.3221 41.4713 26.9292C41.1227 27.5363 40.6209 28.0413 40.016 28.3937L16.016 42.3937C15.4081 42.7484 14.7174 42.9365 14.0136 42.9389C13.3098 42.9413 12.6178 42.7579 12.0075 42.4073C11.3972 42.0567 10.8902 41.5513 10.5378 40.9421C10.1853 40.3329 9.99979 39.6415 10 38.9377V10.9377Z"
                      fill="#47ABAB"
                      stroke="#47ABAB"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Video controls bar */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between px-5 py-5 rounded-3xl border border-white/20 bg-white/10">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-white font-arimo font-bold text-lg leading-7">
                      Video Introduction
                    </h3>
                    <p className="text-white/90 font-arimo text-sm leading-5">
                      Discover my approach to product ownership and team
                      collaboration
                    </p>
                  </div>

                  <button className="flex items-center gap-4 px-4 py-2 rounded-2xl bg-white/20 hover:bg-white/30 transition-colors duration-200">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.83337 3.70836C3.8333 3.47376 3.89514 3.24329 4.01263 3.04022C4.13012 2.83716 4.29911 2.66869 4.50254 2.55183C4.70597 2.43496 4.93663 2.37385 5.17123 2.37464C5.40584 2.37544 5.63608 2.43812 5.83871 2.55636L13.8367 7.2217C14.0385 7.33882 14.2061 7.50686 14.3227 7.70903C14.4392 7.9112 14.5007 8.14043 14.5009 8.37379C14.5011 8.60715 14.44 8.83648 14.3238 9.03885C14.2076 9.24123 14.0403 9.40956 13.8387 9.52703L5.83871 14.1937C5.63608 14.3119 5.40584 14.3746 5.17123 14.3754C4.93663 14.3762 4.70597 14.3151 4.50254 14.1982C4.29911 14.0814 4.13012 13.9129 4.01263 13.7098C3.89514 13.5068 3.8333 13.2763 3.83337 13.0417V3.70836Z"
                        stroke="white"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-white font-arimo text-sm leading-5">
                      Watch Now
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* My Journey Section */}
          <div className="flex flex-col gap-10 w-full max-w-4xl">
            <h2
              className="text-teal-primary font-arimo font-bold"
              style={{
                fontSize: "clamp(2.5rem, 4vw, 3.75rem)",
                lineHeight: "1",
                letterSpacing: "-1px",
              }}
            >
              My Journey.
            </h2>

            <div className="flex flex-col gap-6">
              <p
                className="text-text-gray font-arimo"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.625",
                }}
              >
                I'm a passionate Product Owner with over 5 years of experience
                leading digital product development and building
                cross-functional teams. My journey started with curiosity about
                how technology can solve real problems, and it has evolved into
                a deep love for creating meaningful digital experiences that
                delight users and drive business value.
              </p>

              <p
                className="text-text-gray font-arimo"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.625",
                }}
              >
                With over 100 projects under my belt, I've worked across various
                industries and product domains, always striving to understand
                user needs deeply and align them with business objectives. I
                believe in data-driven decision making, continuous discovery,
                and empowering teams to build products that users love.
              </p>

              <p
                className="text-text-gray font-arimo"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.625",
                }}
              >
                When I'm not defining product strategy, you'll find me mentoring
                aspiring product managers, staying updated with the latest
                product management frameworks, or collaborating with the product
                community through workshops and speaking engagements.
              </p>
            </div>
          </div>

          {/* What I Do Section */}
          <div className="flex flex-col gap-10 w-full max-w-4xl">
            <h2
              className="text-teal-primary font-arimo font-bold"
              style={{
                fontSize: "clamp(2.5rem, 4vw, 3.75rem)",
                lineHeight: "1",
                letterSpacing: "-1px",
              }}
            >
              What I Do.
            </h2>

            <div className="grid grid-cols-1 gap-8">
              {/* Product Strategy & Vision */}
              <div className="flex items-start gap-6 p-8 rounded-3xl border border-teal-primary/10 bg-white/60">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-primary to-emerald-400 shadow-lg flex-shrink-0">
                  <svg
                    width="28"
                    height="29"
                    viewBox="0 0 28 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 26.5416C20.4433 26.5416 25.6666 21.3182 25.6666 14.8749C25.6666 8.4316 20.4433 3.20825 14 3.20825C7.55666 3.20825 2.33331 8.4316 2.33331 14.8749C2.33331 21.3182 7.55666 26.5416 14 26.5416Z"
                      stroke="white"
                      strokeWidth="2.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 21.875C17.866 21.875 21 18.741 21 14.875C21 11.009 17.866 7.875 14 7.875C10.134 7.875 7 11.009 7 14.875C7 18.741 10.134 21.875 14 21.875Z"
                      stroke="white"
                      strokeWidth="2.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 17.2084C15.2887 17.2084 16.3334 16.1637 16.3334 14.8751C16.3334 13.5864 15.2887 12.5417 14 12.5417C12.7114 12.5417 11.6667 13.5864 11.6667 14.8751C11.6667 16.1637 12.7114 17.2084 14 17.2084Z"
                      stroke="white"
                      strokeWidth="2.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="text-teal-primary font-arimo font-bold text-2xl leading-8">
                    Product Strategy & Vision
                  </h3>
                  <p
                    className="text-text-gray font-arimo"
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.625",
                    }}
                  >
                    Defining clear product vision, strategy, and roadmaps that
                    align with business goals and customer needs.
                  </p>
                </div>
              </div>

              {/* Stakeholder Management */}
              <div className="flex items-start gap-6 p-8 rounded-3xl border border-teal-primary/10 bg-white/60">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-primary to-emerald-400 shadow-lg flex-shrink-0">
                  <svg
                    width="28"
                    height="29"
                    viewBox="0 0 28 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.6666 24.875V22.5417C18.6666 21.304 18.175 20.117 17.2998 19.2418C16.4246 18.3667 15.2377 17.875 14 17.875H6.99998C5.7623 17.875 4.57532 18.3667 3.70015 19.2418C2.82498 20.117 2.33331 21.304 2.33331 22.5417V24.875"
                      stroke="white"
                      strokeWidth="2.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.6667 4.02417C19.6674 4.2836 20.5536 4.86798 21.1863 5.68558C21.819 6.50317 22.1623 7.50771 22.1623 8.5415C22.1623 9.5753 21.819 10.5798 21.1863 11.3974C20.5536 12.215 19.6674 12.7994 18.6667 13.0588"
                      stroke="white"
                      strokeWidth="2.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.6667 24.8749V22.5416C25.6659 21.5076 25.3218 20.5032 24.6883 19.686C24.0548 18.8688 23.1678 18.2851 22.1667 18.0266"
                      stroke="white"
                      strokeWidth="2.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 13.2083C13.0773 13.2083 15.1666 11.119 15.1666 8.54167C15.1666 5.96434 13.0773 3.875 10.5 3.875C7.92265 3.875 5.83331 5.96434 5.83331 8.54167C5.83331 11.119 7.92265 13.2083 10.5 13.2083Z"
                      stroke="white"
                      strokeWidth="2.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="text-teal-primary font-arimo font-bold text-2xl leading-8">
                    Stakeholder Management
                  </h3>
                  <p
                    className="text-text-gray font-arimo"
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.625",
                    }}
                  >
                    Collaborating with cross-functional teams, managing
                    stakeholder expectations, and ensuring alignment across the
                    organization.
                  </p>
                </div>
              </div>

              {/* Product Discovery & Research */}
              <div className="flex items-start gap-6 p-8 rounded-3xl border border-teal-primary/10 bg-white/60">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-primary to-emerald-400 shadow-lg flex-shrink-0">
                  <svg
                    width="28"
                    height="29"
                    viewBox="0 0 28 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 17.2083C17.7333 16.0416 18.3167 15.2249 19.25 14.2916C20.4167 13.2416 21 11.7249 21 10.2083C21 8.35174 20.2625 6.57126 18.9497 5.2585C17.637 3.94575 15.8565 3.20825 14 3.20825C12.1435 3.20825 10.363 3.94575 9.05025 5.2585C7.7375 6.57126 7 8.35174 7 10.2083C7 11.3749 7.23333 12.7749 8.75 14.2916C9.56667 15.1083 10.2667 16.0416 10.5 17.2083"
                      stroke="white"
                      strokeWidth="2.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 21.875H17.5"
                      stroke="white"
                      strokeWidth="2.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.6667 26.5417H16.3334"
                      stroke="white"
                      strokeWidth="2.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="text-teal-primary font-arimo font-bold text-2xl leading-8">
                    Product Discovery & Research
                  </h3>
                  <p
                    className="text-text-gray font-arimo"
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.625",
                    }}
                  >
                    Conducting user research, market analysis, and competitive
                    assessments to inform product decisions and validate
                    hypotheses.
                  </p>
                </div>
              </div>

              {/* Data-Driven Decision Making */}
              <div className="flex items-start gap-6 p-8 rounded-3xl border border-teal-primary/10 bg-white/60">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-primary to-emerald-400 shadow-lg flex-shrink-0">
                  <svg
                    width="28"
                    height="29"
                    viewBox="0 0 28 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.6667 8.54175H25.6667V15.5417"
                      stroke="white"
                      strokeWidth="2.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.6666 8.54175L15.75 18.4584L9.91665 12.6251L2.33331 20.2084"
                      stroke="white"
                      strokeWidth="2.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="text-teal-primary font-arimo font-bold text-2xl leading-8">
                    Data-Driven Decision Making
                  </h3>
                  <p
                    className="text-text-gray font-arimo"
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.625",
                    }}
                  >
                    Leveraging analytics, metrics, and user feedback to
                    prioritize features and measure product success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Expertise Section */}
          <div className="flex flex-col gap-10 w-full max-w-4xl">
            <div className="flex flex-col items-center gap-4">
              <h2
                className="text-teal-primary font-arimo font-bold text-center"
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 3.75rem)",
                  lineHeight: "1",
                  letterSpacing: "-1px",
                }}
              >
                Skills & Expertise.
              </h2>
              <p
                className="text-text-gray font-arimo text-center"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.556",
                }}
              >
                Product ownership tools and methodologies I work with
              </p>
            </div>

            {/* Skills Grid */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Agile & Scrum",
                "Product Strategy",
                "User Stories",
                "Roadmapping",
                "Stakeholder Management",
                "Market Research",
                "Data Analysis",
                "A/B Testing",
                "User Research",
                "Prioritization",
                "OKRs & KPIs",
                "Backlog Management",
                "Product Discovery",
                "Go-to-Market",
                "Feature Definition",
                "Sprint Planning",
                "Jira & Confluence",
                "Figma & Design Tools",
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 rounded-2xl border border-teal-primary/20 bg-white/60 hover:bg-white/80 transition-colors duration-200"
                >
                  <span
                    className="font-arimo text-gray-800"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.429",
                    }}
                  >
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
