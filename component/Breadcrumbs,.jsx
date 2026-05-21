"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight, FaHouse } from "react-icons/fa6";

const Breadcrumbs = () => {
  const pathname = usePathname();

  // Split path and remove empty strings
  const pathSegments = pathname.split("/").filter((item) => item !== "");

  return (
    <nav
      aria-label="Breadcrumb"
      className=" max-w-[2560px] mx-auto flex px-[20px] lg:px-[72px] pb-8 text-[#8b5b1c]"
    >
      <ol className="flex items-center space-x-2 md:space-x-4">
        {/* Home Icon */}
        <li className="flex items-center text-[13px]">
          <Link
            href="/"
            className="flex items-center hover:text-[#deb887] transition-colors"
          >
            <FaHouse className="w-4 h-4 mr-2" />
            <span className="hidden md:block font-medium">Home</span>
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          // Capitalize and replace hyphens with spaces
          const label = segment.replace(/-/g, " ").toUpperCase();

          return (
            <li key={href} className="flex items-center text-[13px]">
              <FaChevronRight className="w-3 h-3 text-gray-500 mx-2" />
              {isLast ? (
                <span className="font-bold text-[#deb887] text-[13px] truncate max-w-[150px] md:max-w-none">
                  {label}
                </span>
              ) : (
                <Link
                  href={href}
                  className="hover:text-[#deb887]  text-[13px] transition-colors font-medium"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
