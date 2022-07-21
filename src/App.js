import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { getCurrentAge } from "./util/GetCurrentAge";
import Profile from "./components/Profile/Profile";
import Intro from "./components/Intro/OneCol";
import About from "./components/About/OneCol";
import Contact from "./components/contact/Contact";
import $ from "../node_modules/jquery/dist/jquery";
import Footer from "./components/footer/Footer";
import Work from "./components/Work/Work";
import "./App.css";
window.addEventListener("scroll", () => {
  if (window.scrollY !== 0) {
    document
      .querySelector(".portfolio-left-container")
      .classList.add("scrolled");
    document
      .querySelector(".portfolio-right-container")
      .classList.add("scrolled");
  } else {
    document
      .querySelector(".portfolio-left-container")
      .classList.remove("scrolled");
    document
      .querySelector(".portfolio-right-container")
      .classList.remove("scrolled");
  }
});

$(document).ready(function () {
  $("#1").show();
  $(".tab-header li span").click(function (e) {
    $(".tab-desc").hide();
    e.preventDefault();
    if ($(this).hasClass("active")) {
      $(".tab-header li a").removeClass("active");
      $(this).addClass("active");
    } else {
      $(".tab-header li span").removeClass("active");
      $(this).addClass("active");
    }
    let data_id = $(this).attr("data-tab-id");
    $("#" + data_id).show();
  });
  $(".to-top").click(function () {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
});
AOS.init();
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="portfolio-container">
          <div className="portfolio-left-container">
            {/* Introduction */}
            <section className="intro" id="home">
              <Intro
                title="Web developer"
                subtitle="Introduction"
                desc="Building and maintaining all kinds of websites as well as a mobile application. Manage technical aspects, meet customer requirements."
              />
            </section>
            {/* About section */}
            <section id="about" data-aos="fade-right" data-aos-duration="1000">
              <About
                title="Biography"
                subtitle="About me"
                desc={`I am professional web developer with 2 years of experience. I'm from Karnataka. I'm happy to work on new challanges.`}
                name="Ambarish Patil"
                age={getCurrentAge(1998)}
                address="Gulbarga, Karnataka"
                phone="7406374886"
                email="ambrishnpatil86@gmail.com"
              />
            </section>
            <section id="work" data-aos="fade-left" data-aos-duration="1000">
              <Work />
            </section>
            <section
              className="contact"
              id="contact"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <Contact
                title="Get in touch"
                subtitle="contact"
                desc="If you have any opportunity relavant to my profile. You can contact me and fill below form I'll replay back shortly."
              />
            </section>
            <section className="footer">
              <Footer />
            </section>
          </div>

          <div className="portfolio-right-container">
            <Profile />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
