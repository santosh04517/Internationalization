import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-2 z-50 px-[6px] md:px-0">
      <div className="navbar max-w-7xl bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-box bg-black md:mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm bg-primary text-white dropdown-content rounded-box z-[1] mx-auto mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/mou">MoUs</Link>
              </li>
              <li>
                <Link to="scholarships">Scholarships</Link>
              </li>
              <li>
                <Link to="/internships">Internships</Link>
              </li>
              <li>
                <Link to="/faculty">Faculty Exchange</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
            </ul>
          </div>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal md:text-base lg:text-lg  px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="scholarships">Scholarships</Link>
            </li>
            <li>
              <Link to="/internships">Internships</Link>
            </li>
            <li>
              <Link to="/faculty">Faculty Exchange</Link>
            </li>

          </ul>
        </div>
        <div className="navbar-end">
        </div>
      </div>
    </div>
  );
};

export default Header;
