import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-full border border-teal-primary/10 backdrop-blur-sm"
        style={{
          background: "rgba(255, 255, 255, 0.60)",
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10)",
        }}
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`
                relative px-6 py-2.5 rounded-full font-arimo text-base leading-6 transition-all duration-200 ease-in-out
                ${
                  isActive
                    ? "bg-teal-primary text-white"
                    : "bg-teal-primary/10 text-text-gray hover:bg-teal-primary/20 hover:text-teal-primary"
                }
              `}
              style={{
                minWidth:
                  item.name === "Home"
                    ? "92px"
                    : item.name === "About"
                      ? "93px"
                      : item.name === "Projects"
                        ? "106px"
                        : item.name === "Experience"
                          ? "126px"
                          : "104px",
              }}
            >
              <span className="flex justify-center">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
