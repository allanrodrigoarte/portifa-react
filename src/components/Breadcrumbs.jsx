import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav
      className="w-full bg-neutral-100 border-b border-neutral-300 text-sm px-4 py-2"
      aria-label="breadcrumb"
    >
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-neutral-600">
        <Link to="/" className="hover:underline font-medium text-black">
          Home
        </Link>
        {pathnames.map((value, index) => {
          const to = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;
          const label = decodeURIComponent(value).replace(/-/g, " ");

          return (
            <span key={to} className="flex items-center gap-2">
              <span className="text-neutral-400">{">"}</span>
              {isLast ? (
                <span className="text-black font-semibold">{label}</span>
              ) : (
                <Link to={to} className="hover:underline">
                  {label}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </nav>
  );
}
