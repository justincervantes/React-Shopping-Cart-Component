import React from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand">
        There are {totalCounters} counter components in the counters component
      </span>
    </nav>
  );
};

export default Navbar;
