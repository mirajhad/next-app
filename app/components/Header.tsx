import React from "react";
import Link from "next/link";
import { useState } from "react";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link href="/">Clevercotton Mouth</Link>
        </div>
        <div className="links">
          <Link href="/about">About</Link>
          {/* <Link href="/about/team">Our Team</Link> */}
          <Link href="/code/repos">Projects</Link>
          <Link href="https://docs.google.com/document/d/1jzDuJwufQP1gnDf4J0RmS_kNzqyVHF8A/edit?usp=sharing&ouid=102018352199651796710&rtpof=true&sd=true">Resume</Link>
          <Link href="https://dev.to/mirajhad">Blog</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
