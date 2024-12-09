import React from "react";
import sponsor1 from "../../assets/Home/secailogo.svg";
import binaries from "../../assets/Home/blue_binaries.svg";
import cash from "../../assets/Home/cash-black.png";
import asal from "../../assets/Home/Mask group.svg";
import ensia_logo from "../../assets/Home/ensia_logo_with_text.svg";
export default function Sponsors() {
  return (
    <section className="min-h-screen flex items-center justify-center flex-col">
      <h2 className="text-2xl font-bold mb-12 text-center">Sponsors & Partners</h2>

      <div className="flex w-full items-start justify-center gap-2 sm:gap-12 relative">
        <div className="h-24 w-32 sm:h-56 sm:w-52 bg-dark z-20">
          <svg
            viewBox="0 0 269 291"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M268 281C268 286.247 263.747 290.5 258.5 290.5H10C4.7533 290.5 0.5 286.247 0.5 281V218.53C0.5 216.36 1.24289 214.255 2.6051 212.566L35.6733 171.562C37.1789 169.695 38 167.369 38 164.97V10C38 4.7533 42.2533 0.5 47.5 0.5H258.5C263.747 0.5 268 4.7533 268 10V281Z"
              fill="#161616"
              stroke="url(#paint0_linear_76_33)"
            />
            <rect x="59" y="46" width="187" height="200" />
            <image
              x="59"
              y="45.5"
              width="187"
              height="200"
              xlinkHref={cash}
            />
            <defs>
              <linearGradient
                id="paint0_linear_76_33"
                x1="153"
                y1="291"
                x2="153"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity="0" />
                <stop offset="0.13" stopColor="#666666" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="h-24 w-28 sm:h-52 sm:w-44 bg-dark z-20">
          <svg
            viewBox="0 0 232 291"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect
              x="1"
              y="0.5"
              width="230"
              height="290"
              rx="4.5"
              fill="#161616"
            />
            <rect
              x="1"
              y="0.5"
              width="230"
              height="290"
              rx="4.5"
              stroke="url(#paint0_linear_76_43)"
            />
            <image
              x="31.5"
              y="45.5"
              width="170"
              height="200"
              xlinkHref={ensia_logo}
            />
            <defs>
              <linearGradient
                id="paint0_linear_76_43"
                x1="116"
                y1="0"
                x2="116"
                y2="291"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.82" stopColor="#666666" />
                <stop offset="1" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="h-24 w-32 sm:h-56 sm:w-52 bg-dark z-20">
          <svg
            className=""
            viewBox="0 0 269 291"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M1 10C1 4.7533 5.25329 0.5 10.5 0.5H259C264.247 0.5 268.5 4.75329 268.5 10V72.4702C268.5 74.6401 267.757 76.7447 266.395 78.4338L233.327 119.438C231.821 121.305 231 123.631 231 126.03V281C231 286.247 226.747 290.5 221.5 290.5H10.5C5.25329 290.5 1 286.247 1 281V10Z"
              fill="#161616"
              stroke="url(#paint0_linear_76_42)"
            />
            <rect x="23.5" y="46" width="187" height="200" />
            <image
              x="30"
              y="45.5"
              width="187"
              height="200"
              xlinkHref={asal}
            />
            <defs>
              <linearGradient
                id="paint0_linear_76_42"
                x1="116"
                y1="0"
                x2="116"
                y2="291"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.89" stopColor="#666666" />
                <stop offset="1" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div
          className="absolute w-full  -bottom-40  sm:-bottom-40 mx-auto h-52 z-0 "
          style={{
            background: `radial-gradient(${"#0D4599"}  1%,  transparent 50%)`,
          }}
        ></div>

        <div className="absolute -bottom-52 -left-60 sm:-left-52  md:-bottom-52 md:left-2 z-10 ">
          <img
            src={binaries}
            alt="binaries"
            className=" "
          />
        </div>
      </div>
    </section>
  );
}
