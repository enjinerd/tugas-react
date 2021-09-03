import React from 'react';
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <main className="flex flex-col min-h-screen">
        <section
          id="header"
          className="flex flex-col space-y-2 md:space-y-0 md:flex-row items-center justify-center md:justify-between lg:container px-4 py-4  md:flex-row md:px-6"
        >
          <img
            src="img/logo-ALTA.png"
            alt="logo-alta"
            className="md:mx-32 w-28"
          />
          <nav className="flex items-center justify-center flex-wrap md:flex-row block px-3 py-2 space-x-4 md:space-x-8 uppercase md:mx-12 font-medium text-sm md:text-base">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/experience ">Experience</a>
            <a id="contact" href="/contact_us">
              Contact
            </a>
          </nav>
        </section>
        <section
          className="w-full content items-center justify-center fle-1x md:flex-1 px-4 py-6 mx-auto md:px-6 md:py-12 bg-no-repeat bg-cover bg-top"
          style={{ backgroundImage: "url('img/bg-img.png')"}}
        >
          <div className="justify-center flex flex-row mt-12 space-x-6 md:space-x-10 md:mt-24">
            <img
              className="rounded-full w-32 h-32 md:w-96 md:h-96"
              src="img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"
              alt="anne"
            />
            <div className="flex flex-col justify-center">
              <p className="font-medium text-lg md:text-2xl md:mb-2">
                Hi, my name is
              </p>
              <p className="font-semibold text-2xl md:text-8xl md:my-2">
                Anne Sulivan
              </p>
              <p className="font-medium text-xl md:text-4xl md:my-2">
                I build things for the web
              </p>
              <a href="contact_us.html">
                <button className="btn-touch rounded-full py-2 px-4 w-32 text-sm md:text-base md:w-40 text-white my-4 hover:bg-yellow-800">
                  Get In Touch
                </button>
              </a>
            </div>
          </div>
        </section>
        <section className="project flex flex-col items-center justify-center mt-8 md:mt-16 space-y-6 my-6">
          <p className="font-bold text-2xl md:text-4xl">Projects</p>
          <div className="flex flex-col px-16 md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&     auto=format&fit=crop&w=750&q=80"
                alt="Mountain"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-md mb-2">Montana</div>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80"
                alt="Mountain"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-md mb-2">Sesan</div>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&     auto=format&fit=crop&w=750&q=80"
                alt="Mountain"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-md mb-2">Sesan</div>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="project flex flex-col items-center justify-center mt-8 md:mt-16 space-y-8 my-6">
          <p className="font-bold text-2xl md:text-4xl">Social Media</p>
          <div className="flex flex-row space-x-4 md:space-x-16">
            <div className="p-2 md:p-4 bg-primary rounded-full">
              <img src="img/ic_fb@2x.png" alt="fb" />
            </div>
            <div className="p-2 md:p-4 bg-primary rounded-full">
              <img src="img/ic-twitter@2x.png" alt="twitter" />
            </div>
            <div className="p-2 md:p-4 bg-primary rounded-full">
              <img src="img/ic-linkedin@2x.png" alt="linkedin" />
            </div>
          </div>
        </section>
        <footer className="flex items-center justify-between text-white font-medium px-4 py-6 text-lg md:px-6">
          © 2021 - D15 Roni Ardiyanto
        </footer>
      </main>
      <main class="h-screen w-full flex-col md:flex md:flex-row md:items-stretch mx-auto my-auto px-auto py-auto md:space-x-48">
        <section
          id="side-container"
          class="h-full items-center justify-center px-24 py-64 bg-no-repeat bg-cover bg-top"
          style={{backgroundImage: "linear-gradient(0deg, rgba(25, 52, 94, 0.65), rgba(25, 52, 94, 0.65)), url('img/charles-rRWiVQzLm7k-unsplash.jpg')"}}
        >
          <img
            class="opacity-70 w-64 h-auto"
            src="img/logo-ALTA-v2@2x.png"
            alt="alta"
          />
        </section>
        <section
          id="contact-form"
          class="h-screen md:h-auto py-6 md:py-0 md:my-8 md:my-0 items-center md:items-start md:justify-center flex flex-col space-y-4 font-medium"
        >
          <p class="text-xl md:text-2xl text-center">Contact Us</p>
          <form class="text-lg flex flex-col justify-start space-y-2 md:space-y-4 md:w-96">
            <div class="flex flex-col">
              <label for="full-name">
                Full Name<span class="text-red-800">*</span>
              </label>
              <input
                id="full-name"
                class="border border-gray-400 md:w-full text-base px-2 md:px-4"
                name="full-name"
                type="text"
                placeholder="Your Full Name Here..."
              />
            </div>
            <div class="flex flex-col">
              <label for="email">
                Email Address<span class="text-red-800">*</span>
              </label>
              <input
                id="email"
                class="border border-gray-400 md:w-96 text-base px-2 md:px-4"
                name="email"
                type="email"
                placeholder="example@domain.com"
              />
            </div>
            <div class="flex flex-col">
              <label for="phone">
                Phone Number<span class="text-red-800">*</span>
              </label>
              <input
                id="phone"
                class="border border-gray-400 text-base px-2 md:px-4"
                name="phone"
                type="text"
                placeholder="085703890xxxxx"
              />
            </div>
            <div class="flex flex-col">
              <label for="nationality">Nationality</label>
              <select
                id="phone"
                class="border bg-white border-gray-400 md:w-96 text-base px-2 md:px-4 py-1"
                name="phone"
                type="text"
              >
                <option value="indonesia">Indonesia</option>
                <option value="singapore">Singapore</option>
                <option value="us">United States</option>
                <option value="japan">Japan</option>
              </select>
            </div>
            <div class="flex flex-col">
              <label for="nationality">Message</label>
              <textarea
                id="phone"
                class="border border-gray-400 md:w-96 text-base px-2 md:px-4 py-1 h-12 md:h-32"
                name="phone"
                type="text"
                placeholder="Your Message Here.."
              ></textarea>
            </div>
          </form>
          <button
            type="submit"
            class="btn-submit rounded-full py-2 px-4 text-sm md:text-base text-white my-4"
          >
            Submit
          </button>
        </section>
        <footer
          id="footer"
          class="hidden flex items-center justify-between text-white font-medium px-4 py-6 text-lg md:px-6"
        >
          © 2021 - D15 Roni Ardiyanto
        </footer>
      </main>
    </React.Fragment>
  );
}

export default App;
