import React, { useState, useEffect } from "react";

//internal imports
import { MENU_LINKS_URL } from "./../constants/awsGetEndpoints";
import getDataFromAWS from "./../utils/getDataFromAWS";

const Header = () => {
  const [menuLinksData, setMenuLinksData] = useState([]);

  useEffect(() => {
    // Load the menu links from API Gateway
    getDataFromAWS(MENU_LINKS_URL, setMenuLinksData);
  }, []);

  return (
    <header id="intro">
      <article className="fullheight">
        <div className="hgroup">
          <h1>Landon Hotel</h1>
          <h2>West London</h2>
          <p>
            <a href="#welcome">
              <img
                src="https://landonhotel.com/images/misc/arrow.png"
                alt="down arrow"
              />
            </a>
          </p>
        </div>
      </article>

      <nav id="nav">
        <div className="navbar">
          <div className="brand">
            <a href="#welcome">
              Landon <span>Hotel</span>
            </a>
          </div>
          <ul>
            {menuLinksData.map((link, i) => (
              <li key={i.toString()}>
                <a className={`icon ${link.class}`} href={link.href}>
                  <span>{link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
