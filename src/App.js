import { BrowserRouter} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Intro from "./components/Intro/OneCol";
import About from "./components/About/OneCol";
import Contact from "./components/contact/Contact";
import $ from "../node_modules/jquery/dist/jquery";
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
$(document).ready(function(){
  $('#1').show();
  $('.tab-header li span').click(function(e){
    $('.tab-desc').hide();
    e.preventDefault();
    if($(this).hasClass('active')){
      $('.tab-header li a').removeClass('active');
      $(this).addClass('active');
    }
    else{
      $('.tab-header li span').removeClass('active');
      $(this).addClass('active');
    }
    let data_id = $(this).attr('data-tab-id');
    $('#'+data_id).show();
  });
});


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
            <section id="about">
              <About
                title="Biography"
                subtitle="About me"
                desc="I am professional web developer with  1.5 years of experience. I'm from Karnataka. I'm happy to work on new challanges."
                name='Ambarish Patil'
                age='22'
                address="Gulbarga, Karnataka"
                phone="7406374886"
                email='ambrishnpatil86@gmail.com'
              />
            </section>
            <section className="contact" id="contact">
                <Contact title="Get in touch" subtitle="contact" 
                desc="If you have any opportunity relavant to my profile. You can contact me and fill below form I'll replay back shortly." />
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
