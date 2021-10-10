import React from "react";
import SearchAirport from "./SearchAirport";


import "./../Main.css";
function Search() {
  return (
    <div>
      <div className="portfolio-popup open">
        <div className="pp-inner">
          <div className="pp-content">
            <div className="pp-header">
              <div className="pp-thumbnail">
                <img src="./img/portfolio/3.jpg" alt="" />
              </div>
              <h3>Airport ID, Name, City, or State:</h3>
            </div>
            <div className="pp-body">
              <SearchAirport />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
