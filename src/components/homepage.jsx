import React from "react";

export default function Homepage() {
  const moveArrow = (e) => {
    try {
      const elem = e.target;
      const classElem = elem.getElementsByTagName("p")[0].classList;

      if (classElem.contains("translate-x-4"))
        classElem.remove("translate-x-4");
      else classElem.add("translate-x-4");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="homepage">
      <img
        id="homeBg"
        src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=2000&h=500&q=10"
        alt="Homepage img"
        style={{ borderRadius: "0% 0% 55% 55%" }}
      />

      <div className="container-fluid grid grid-rows-1 grid-flow-col gap-20 mt-6 m-4 p-10">
        <a 
          href="https://github.com/Aayush-1333"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={moveArrow}
          onMouseLeave={moveArrow}
        >
          <div className="github opacity-70 rounded-xl p-2 hover:opacity-100 border-4 border-red-600">
            <h2 className="text-3xl my-4 bg-purple-400 rounded-lg">
              GitHub Profile <p className="inline-block arrow">&#8594;</p>
            </h2>
            <p className="bg-purple-400 rounded-lg p-2">
              Check out my GitHub Profile with various projects on JS and Python
              languages
            </p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/aayush-chaurasia-249545217/"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={moveArrow}
          onMouseLeave={moveArrow}
        >
          <div className="linkedin opacity-70 rounded-xl p-2 hover:opacity-100 border-4 border-green-600">
            <h2 className="text-3xl my-4 bg-blue-500 rounded-lg">
              LinkedIn Profile <p className="inline-block arrow">&#8594;</p>
            </h2>
            <p className="bg-blue-500 rounded-lg p-2">
              Check out the LinkedIn Profile to get an idea about me
            </p>
          </div>
        </a>

        <a
          href="https://unstop.com/"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={moveArrow}
          onMouseLeave={moveArrow}
        >
          <div className="unstop opacity-70 rounded-xl p-2 hover:opacity-100 border-4 border-yellow-300">
            <h2 className="text-3xl my-4 bg-orange-500 rounded-lg">
              Unstop Profile <p className="inline-block arrow">&#8594;</p>
            </h2>
            <p className="bg-orange-500 rounded-lg p-2">
              Explore my Unstop Profile and know about me in the profile
              section!
            </p>
          </div>
        </a>
      </div>

      <footer className="bg-gradient-to-r from-fuchsia-500 to-fuchsia-900 p-2">
        <h1 className="text-left text-3xl">About the site</h1>
        <hr />
        <h4 className="text-2xl my-4">This site was created using ReactJS along with tailwindCSS framework</h4>
      </footer>
    </main>
  );
}
