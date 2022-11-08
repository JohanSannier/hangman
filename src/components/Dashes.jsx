import React from "react";

const Dashes = ({ dashes }) => {
  return (
    <section className="dashes">
      {dashes.map((dash, index) => (
        <div className="dash" key={index} id={`dash-${index}`}>
          <p className="white-space"></p>
        </div>
      ))}
    </section>
  );
};

export default Dashes;
