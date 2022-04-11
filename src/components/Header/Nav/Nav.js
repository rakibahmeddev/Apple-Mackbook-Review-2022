import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Nav({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className="menu-item font-medium py-1 px-3"
        style={{
          borderBottom: match ? "3px solid orange" : "",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default Nav;
