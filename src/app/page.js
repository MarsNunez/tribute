"use client";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <div id="home">
      <nav className="drop-shadow-md bg-white w-full">
        <div className="flex items-center justify-between px-10 py-6 text-xl font-black">
          <h1>Mars.dev</h1>
          <i
            className="lni lni-menu text-2xl cursor-pointer"
            onClick={() => setShow(!show)}
          ></i>
        </div>
      </nav>

      {/* Side Options */}
      <div
        className={`absolute w-full -top-0 ${
          show ? "left-0" : "-left-[100%]"
        } duration-300 ease-in-out`}
      >
        <div className={`text-white text-2xl bg-[#061e07] h-screen`}>
          <div className="absolute h-screen w-full">
            <div className="flex justify-end pt-7 pr-8 text-3xl">
              <i
                className="lni lni-plus rotate-45 cursor-pointer"
                onClick={() => setShow(!show)}
              ></i>
            </div>
            <ul className="text-center flex flex-col gap-9 mt-[35vh]">
              <li onClick={() => setShow(false)}>
                <a href="#home">Home</a>
              </li>
              <li onClick={() => setShow(false)}>
                <a href="#about">About</a>
              </li>
              <li onClick={() => setShow(false)}>
                <a href="#projects">Projects</a>
              </li>
              <li onClick={() => setShow(false)}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-8 pb-28 bg-[#f9f8f8]">
        <img
          src="/img/mainImage.png"
          alt="Main Image"
          className="h-72 rounded-full mx-auto border-4 border-black"
        />
        <div className="max-w-md text-center mx-auto mt-12">
          <h1 className="font-black text-4xl">Front-End React Developer</h1>
          <p className="text-lg text-gray-500 my-7 font-normal">
            Hi, I'm Stefan Topalovic. A passionate Front-end React Developer
            based in Ireland, Serbia. 🍀
          </p>
          <div className="text-3xl flex justify-center gap-4">
            <i className="lni lni-linkedin-original"></i>
            <i className="lni lni-github-original"></i>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-center font-semibold text-xl px-2 pb-2 mb-10 border-b-2 border-gray-500 w-fit mx-auto">
            Tech Stack
          </h2>
          <div className="px-10 mt-5">
            <div className="grid grid-cols-3 text-6xl gap-5">
              <div className="border text-center pb-5 pt-8 bg-white hover:scale-110 ease-out duration-100">
                <i className="lni lni-html5"></i>
              </div>
              <div className="border text-center pb-5 pt-8 bg-white hover:scale-110 ease-out duration-100">
                <i className="lni lni-css3"></i>
              </div>
              <div className="border text-center pb-5 pt-8 bg-white hover:scale-110 ease-out duration-100">
                <i className="lni lni-tailwindcss"></i>
              </div>
              <div className="border text-center pb-5 pt-8 bg-white hover:scale-110 ease-out duration-100">
                <i className="lni lni-javascript"></i>
              </div>
              <div className="border text-center pb-5 pt-8 bg-white hover:scale-110 ease-out duration-100">
                <i className="lni lni-typescript"></i>
              </div>
              <div className="border text-center pb-5 pt-8 bg-white hover:scale-110 ease-out duration-100">
                <i className="lni lni-react"></i>
              </div>
              <div className="border text-center pb-5 pt-8 bg-white hover:scale-110 ease-out duration-100">
                <i className="lni lni-nextjs"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-10 pt-20 pb-16 text-center" id="about">
        <figure className="h-80 w-full rounded-xl overflow-hidden">
          <img
            src="/img/about.webp"
            className="h-full object-cover"
            alt="about image"
          />
        </figure>
        <h2 className="uppercase text-[#3bad40] font-bold text-lg mt-10 mb-5">
          About me
        </h2>
        <h3 className="font-bold text-2xl mb-5">
          A dedicated Front-end Developer based from Irland, Serbia 🍀
        </h3>
        <p className="text-gray-600 leading-8">
          As a Junior Front-End Developer, I possess an impressive arsenal of
          skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in
          designing and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
      </section>

      {/* Portfolio */}
      <section
        className="bg-[#f9f8f8] text-center pt-20 px-10 pb-20"
        id="projects"
      >
        <h2 className="uppercase text-[#3bad40] font-bold text-lg mb-5">
          Portfolio
        </h2>
        <h3 className="font-bold text-2xl mb-14">
          Each project is a unique piece of development 🧩
        </h3>
        <div className="flex flex-col gap-12">
          <div className="bg-white p-5 pb-7 rounded-xl drop-shadow-lg">
            <figure className="h-80 rounded-xl overflow-hidden">
              <img
                src="/img/end.jpg"
                alt="card image"
                className="h-full w-full object-cover"
              />
            </figure>
            <h4 className="font-bold text-lg uppercase mb-5 mt-8">
              Unleash the Code 🪙
            </h4>
            <p className="leading-7 text-gray-700">
              A car rental website is an online platform that allows users to
              rent cars for personal or business use. The website provides an
              interface for searching, comparing, and reserving cars.
            </p>
            <div className="flex justify-center mt-4 font-semibold text-white gap-3 flex-wrap">
              <div className="rounded-full px-4 py-2 bg-black">NextJS</div>
              <div className="rounded-full px-4 py-2 bg-[#22D3EE]">
                Tailwind
              </div>
            </div>
            <div className="flex justify-center gap-7 text-xl mt-6">
              <div className="flex items-center gap-1">
                Code <i className="lni lni-github-original text-2xl"></i>
              </div>
              <div className="flex items-center gap-1">
                Live Demo <i className="lni lni-checkmark-circle text-2xl"></i>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 pb-7 rounded-xl drop-shadow-lg">
            <figure className="h-80 rounded-xl overflow-hidden">
              <img
                src="/img/end.jpg"
                alt="card image"
                className="h-full w-full object-cover"
              />
            </figure>
            <h4 className="font-bold text-lg uppercase mb-5 mt-8">
              Unleash the Code 🪙
            </h4>
            <p className="leading-7 text-gray-700">
              A car rental website is an online platform that allows users to
              rent cars for personal or business use. The website provides an
              interface for searching, comparing, and reserving cars.
            </p>
            <div className="flex justify-center mt-4 font-semibold text-white gap-3 flex-wrap">
              <div className="rounded-full px-4 py-2 bg-black">NextJS</div>
              <div className="rounded-full px-4 py-2 bg-blue-600">Tailwind</div>
            </div>
            <div className="flex justify-center gap-7 text-xl mt-6">
              <div className="flex items-center gap-1">
                Code <i className="lni lni-github-original text-2xl"></i>
              </div>
              <div className="flex items-center gap-1">
                Live Demo <i className="lni lni-checkmark-circle text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="text-center py-20" id="contact">
        <h2 className="uppercase text-[#3bad40] font-bold text-lg mb-5">
          Contact
        </h2>
        <h3 className="font-bold text-2xl mb-14">
          Don't be shy! Hit me up! 👇
        </h3>
        <div className="flex flex-col gap-10">
          <div className="group border hover:border-green-600 duration-200 ease-in-out w-fit p-8 px-16 mx-auto rounded-lg cursor-pointer">
            <div className="border-2 border-black group-hover:border-green-600 group-hover:bg-green-600 duration-200 ease-in-out w-fit mx-auto text-5xl pt-4 pb-2 px-4 rounded-full">
              <i className="lni lni-map group-hover:text-white"></i>
            </div>
            <h5 className="mt-4 mb-2 font-bold text-lg">Location</h5>
            <p className="text-gray-600 group-hover:text-green-600 duration-200 ease-in-out">
              Dublin, Irland
            </p>
          </div>

          <div className="group border hover:border-green-600 duration-200 ease-in-out w-fit p-8 px-10 mx-auto rounded-lg cursor-pointer">
            <div className="border-2 border-black group-hover:border-green-600 group-hover:bg-green-600 duration-200 ease-in-out w-fit mx-auto text-5xl pt-4 pb-2 px-4 rounded-full">
              <i className="lni lni-envelope group-hover:text-white"></i>
            </div>
            <h5 className="mt-4 mb-2 font-bold text-lg">Location</h5>
            <p className="text-gray-600 group-hover:text-green-600 duration-200 ease-in-out">
              Throw me an email
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center bg-[#061e07] text-white py-16 text-lg">
        <p>
          Created by{" "}
          <a
            href="https://www.youtube.com/channel/UC4XpWwLaIyuxYUB3LGV8IjQ"
            className="underline"
          >
            Mars Nunez
          </a>
          🍀
        </p>
        <p>All rights reserved.</p>
        <div className="text-2xl flex justify-center gap-4 mt-5">
          <i className="lni lni-linkedin-original"></i>
          <i className="lni lni-github-original"></i>
        </div>
      </footer>
    </div>
  );
}
