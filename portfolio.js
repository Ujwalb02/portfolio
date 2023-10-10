var active_nav_con = document.querySelector(".activecolor");
navigation = document.querySelector(".navig");
navigation_bar = document.querySelector(".navigbar");
typing_element = document.querySelector(".section2 .left h1");
typ_element = ["DEVELOPER", "DESIGNER"];
type_div = document.querySelector("#typecont div");
let all_bios = document.querySelectorAll(".links");
about = document.querySelector(".about");
about_line = document.querySelector(".about_line");
about_me = document.querySelector(".aboutme");
service = document.querySelector(".service");
service_line = document.querySelector(".service_line");
resume = document.querySelector(".resume");
resume_line = document.querySelector(".resume_line");
contact = document.querySelector(".contact");
contact_line = document.querySelector(".line");
contact_header = document.querySelector("#h21");
contact_form = document.querySelector(".cform");
my_info = document.querySelector(".my_info");
skills = document.querySelector(".skills");
fill_skill = document.querySelectorAll(".cover_div");
education = document.querySelector(".education");
education_div = document.querySelector(".education>div");
sslc = document.querySelector(".sslc");
puc = document.querySelector(".puc");
degree = document.querySelector(".degree");
edu_circle1 = document.querySelector(".circle1");
edu_circle2 = document.querySelector(".circle2");
edu_circle3 = document.querySelector(".circle3");
navigation_links = document.querySelectorAll(".navigcon");

const navigatingonclick = () => {
  if (window.innerWidth < 1000) {
    navigation.style.display = "none";
  }
};
for (element of navigation_links) {
  element.addEventListener("click", navigatingonclick);
}
nav_section1 = document.querySelector("#home_nav");
nav_section3 = document.querySelector("#about_nav");
nav_section4 = document.querySelector("#service_nav");
nav_section5 = document.querySelector("#resume_nav");
nav_section6 = document.querySelector("#contact_nav");

section1 = document.querySelector(".section1");
section2 = document.querySelector(".section2");
section3 = document.querySelector(".section3");
section4 = document.querySelector(".section4");
section5 = document.querySelector(".section5");
section6 = document.querySelector("#sectioncon");
hexagons = document.querySelectorAll(".hexagon");
hexagon1 = document.querySelector(".hex1");
hexagon2 = document.querySelector(".hex2");
hexagon3 = document.querySelector(".hex3");
hexagon4 = document.querySelector(".hex4");
const sections_heights = [
  { section: section1, section_nav: nav_section1 },
  { section: section2, section_nav: nav_section1 },
  { section: section3, section_nav: nav_section3 },
  { section: section4, section_nav: nav_section4 },
  { section: section5, section_nav: nav_section5 },
  { section: section6, section_nav: nav_section6 },
];

hexagon_array = [hexagon1, hexagon2, hexagon3, hexagon4];
document.addEventListener("DOMContentLoaded", (e) => {
  console.log(e);
});

var timer = 50;
education_obj = {
  1: sslc,
  2: puc,
  3: degree,
};
education_circle = {
  1: edu_circle1,
  2: edu_circle2,
  3: edu_circle3,
};
function color_fill() {
  fill_skill.forEach((element) => {
    element.classList.add("add_animation");
  });
}

function alter_active() {
  active_nav_con.classList.add("inactivecolor");
  active_nav_con.classList.remove("activecolor");
}
function alter_target(target) {
  target.classList.add("activecolor");
  target.classList.remove("inactivecolor");
}

const obscallback = function (entries) {
  const entry = entries[0];
  if (entry.isIntersecting == false) {
    section1.classList.add("sticky");
  }
  if (entry.isIntersecting) {
    section1.classList.remove("sticky");
  }
};
const obsoption = {
  root: null,
  threshold: [0, 0.2],
  rootMargin: "-100px",
};
const section2_observer = new IntersectionObserver(obscallback, obsoption);
section2_observer.observe(section2);

window.addEventListener("scroll", () => {
  // console.log(window.pageYOffset);
  if (section4.offsetTop - window.scrollY < 320) {
    for (let i = 0; i < hexagon_array.length; i++) {
      timer += 300;
      setTimeout(() => {
        (hexagon_array[i].style.opacity = "1"),
          (hexagon_array[i].style.transform = "rotateY(360deg)");
      }, timer);
    }
  }
  if (section3.offsetTop - window.scrollY < 370) {
    about.style.animationName = "movement";
    about_line.style.animationName = "lin_mov";
  }
  if (section3.offsetTop - window.scrollY < 290) {
    about_me.style.animationName = "visible";
    my_info.style.animationName = "visible";
  }
  if (section5.offsetTop - window.scrollY < 370) {
    resume.style.animationName = "movement";
    resume_line.style.animationName = "lin_mov";
  }
  if (section5.offsetTop - window.scrollY < 340) {
    education.style.display = "flex";
    skills.style.display = "flex";
    skills.style.animationName = "moveskills";
    setTimeout(color_fill, 1000);
  }
  if (window.scrollY > 900) {
    service.style.animationName = "movement";
    service_line.style.animationName = "lin_mov";
  }
  if (section6.offsetTop - window.scrollY < 300) {
    contact.style.animationName = "movement";
    contact_line.style.animationName = "lin_mov";
    contact_header.style.animationName = "move_con";
    contact_form.style.animationName = "visible_box";
  }
  sections_heights.map((element) => {
    if (element.section.offsetTop - window.scrollY < 250) {
      alter_active();
      alter_target(element.section_nav);
      active_nav_con = element.section_nav;
    }
  });
});
dancebar = () => {
  type_div.classList.add("opadance");
};
i = 0;
j = -1;
display = () => {
  if (i < typ_element.length) {
    curr_element = typ_element[i];
    single_display = () => {
      if (j < curr_element.length) {
        j++;
        typing_element.textContent = curr_element.substring(0, j);
        setTimeout(single_display, 100);
      } else if (j == curr_element.length) {
        single_delete = () => {
          if (typing_element.textContent.length != 0) {
            typing_element.textContent = typing_element.textContent.slice(
              0,
              -1
            );
            setTimeout(single_delete, 100);
          } else {
            i += 1;
            j = 0;
            display();
          }
        };
        setTimeout(single_delete, 2000);
        dancebar();
        setTimeout(() => {
          type_div.classList.remove("opadance");
        }, 2000);
      }
    };
    single_display();
  } else {
    i = 0;
    j = 0;
    display();
  }
};
display();

let nav_active = false;
navigation_bar.addEventListener("click", (e) => {
  e.preventDefault();
  if (!nav_active) {
    navigation.style.display = "flex";
    nav_active = true;
  } else {
    navigation.style.display = "none";
    nav_active = false;
  }
});
all_bios.forEach((element) => {
  element.addEventListener("mouseenter", function () {
    element.querySelector(".fa-brands").style.animationName = "brands-mov";
    element.style.backgroundColor = "rgb(138, 217, 218)";
    element.style.transform = "scale(0.85)";
  });
  element.addEventListener("mouseleave", function () {
    element.querySelector(".fa-brands").style.animationName = "";
    element.style.backgroundColor = "#1E242C";
    element.style.transform = "scale(1)";
  });
});
education_obj_count = 1;
education_div.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-arrow-left") && education_obj_count > 1) {
    e.preventDefault();
    education_obj[education_obj_count].classList.add("educationinactive");
    education_circle[education_obj_count].classList.remove(
      "circle_activecolor"
    );
    education_obj[--education_obj_count].classList.remove("educationinactive");
    education_circle[education_obj_count].classList.add("circle_activecolor");
  }
  if (
    e.target.classList.contains("fa-arrow-right") &&
    education_obj_count < 3
  ) {
    e.preventDefault();
    education_obj[education_obj_count].classList.add("educationinactive");
    education_circle[education_obj_count].classList.remove(
      "circle_activecolor"
    );
    education_obj[++education_obj_count].classList.remove("educationinactive");
    education_circle[education_obj_count].classList.add("circle_activecolor");
  }
});

contactName = document.querySelector(".contact_name");
contactEmail = document.querySelector(".contact_email");
contactText = document.querySelector(".contact_text");
contactForm = document.querySelector(".cform");

const sendEmail = (e) => {
  e.preventDefault();
  var contactDetails = {
    name: contactName.value,
    email: contactEmail.value,
    text: contactText.value,
  };
  const templetId = "template_2xf4h8c";
  const serviceId = "service_dhpux6k";

  emailjs
    .send(serviceId, templetId, contactDetails)
    .then((res) => {
      contactName.value = "";
      contactEmail.value = "";
      contactText.value = "";
      alert("Mail sent successfully");
    })
    .catch((err) => {
      console.log("Failed to send the mail");
    });
};

contactForm.addEventListener("submit", sendEmail);
