import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Breadcrumbs Component
 * Dynamically generates breadcrumb links based on the current route.
 * @param {Array} customCrumbs - Optional array to provide custom breadcrumb links.
 * Each item should have { name: string, path: string }.
 */
const Breadcrumbs = ({ customCrumbs = [] }) => {
  const location = useLocation();

  // Extract the current path segments
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // Generate breadcrumbs dynamically from the path unless customCrumbs are provided
  const breadcrumbs = customCrumbs.length
    ? customCrumbs
    : pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const name = decodeURIComponent(segment).replace(/-/g, " ");
        return { name, path };
      });

  return (
    <nav className="my-4 ml-4 font-Fira " aria-label="Breadcrumb">
      <ol className="flex space-x-2 text-gray-600 text-md">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
          {breadcrumbs.length > 0 && (
            <span className="mx-2 text-gray-500">/</span>
          )}
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center font-Fira">
            {index === breadcrumbs.length - 1 ? (
              <span className="font-semibold text-gray-900">{crumb.name}</span>
            ) : (
              <Link to={crumb.path} className="hover:underline">
                {crumb.name}
              </Link>
            )}
            {index < breadcrumbs.length - 1 && (
              <span className="mx-2 text-gray-500">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  customCrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
};

export default Breadcrumbs;
