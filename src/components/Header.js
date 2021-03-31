import React, { useState, useEffect } from "react";

const Header = () => {
  const [menuLinksData, setMenuLinksData] = useState([]);

  const loadMenuLinksData = async () => {
    const responce = await fetch(
      "https://bwwzzcct1m.execute-api.us-east-2.amazonaws.com/menu-links"
    );

    const result = await responce.json();

    setMenuLinksData(result);
  };

  useEffect(() => {
    // Load the menu links from API Gateway
    loadMenuLinksData();
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
