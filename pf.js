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

   function sendMail() {
        var params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            number: document.getElementById("number").value,
            message: document.getElementById("message").value,
        };

        const serviceID = "service_pzdbqom";
        const templateID = "template_6a0173q";

        emailjs
            .send(serviceID, templateID, params)
            .then((res) => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("number").value = "";
                document.getElementById("message").value = "";
                alert("MESSAGE SENT SUCCESSFULLY");
            })
            .catch((err) => console.log(err));
    }

    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        sendMail(); // Call your sendMail function
    });


  
