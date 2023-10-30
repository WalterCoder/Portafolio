//NAVBAR
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.
  addEventListener("click",() =>{
hamburger.classList.remove("active");
navMenu.classList.remove("active");

  }))


   //About Me section

   const revealBtn = document.querySelector('.reveal-btn');
   const hiddenContent = document.querySelector('.hidden-content');
 
 
   function revealContent() {
     if(hiddenContent.classList.contains('reveal-btn')
     ){
 
       hiddenContent.classList.remove('reveal-btn')
     }else{
       hiddenContent.classList.add('reveal-btn')
     }
 
 
   }
 
   revealBtn.addEventListener('click', revealContent);
 
 
 

  //SKILLS GALLERY

  let scrollContainer = document.querySelector(".gallery");
  let backBtn = document.getElementById("backBtn");
  let nextBtn = document.getElementById("nextBtn");
  
  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
  });
  
  nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
  });
  
  backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
  });

  //CONTACT FORM

  function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "full.walter.stack@gmail.com",
      Password: "nekito007",
      To: 'full.walter.stack@gmail.com',
      From: document.getElementById("email").value,
      Subject: "New Contact Form Enquiry",
      Body: "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone no: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully")
    );
  }

 

  
