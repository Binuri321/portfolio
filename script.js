


let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset=sec.offsetTop = 150;
        let height =sec.offsetHeight;
        let id=sec.getAttribute('id');

        if (top>=offset && top <offset +height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
                });
        };

    });
    let header=document.querySelectorAll('header');
    header.classList.toggle('sticky',window.scrollY>100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

 ScrollReveal({ 
    //reset: true ,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed = new Typed('.single-text', {
    strings: ['Data Analyst'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});



const emailBtn = document.getElementById('email-btn');
const emailBox = document.getElementById('email-box');
const copyEmail = document.getElementById('copy-email');
const emailText = document.getElementById('email-text');

emailBtn.onclick = () => {
    emailBox.style.display =
        emailBox.style.display === 'flex' ? 'none' : 'flex';
};

copyEmail.onclick = () => {
    navigator.clipboard.writeText(emailText.innerText);
    copyEmail.classList.replace('bx-copy', 'bx-check');
    
    setTimeout(() => {
        copyEmail.classList.replace('bx-check', 'bx-copy');
    }, 1500);
};

const readMoreBtn = document.getElementById("read-more-btn");
const moreText = document.getElementById("more-text");

readMoreBtn.addEventListener("click", () => {
    if (moreText.style.display === "inline") {
        moreText.style.display = "none";
        readMoreBtn.innerText = "Read More";
    } else {
        moreText.style.display = "inline";
        readMoreBtn.innerText = "Read Less";
    }
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent page refresh

    // Prepare the parameters to send
    const templateParams = {
        user_name: document.getElementById("user_name").value,
        user_email: document.getElementById("user_email").value,
        user_mobile: document.getElementById("user_mobile").value,
        user_subject: document.getElementById("user_subject").value,
        user_message: document.getElementById("user_message").value
    };

    emailjs.send("service_u87bufr", "template_sofh6j6", templateParams)
    .then(() => {
        alert("Email sent successfully!");
        contactForm.reset(); // clear the form
    })
    .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send email. Check console for details.");
    });
});



const modal = document.getElementById('service-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.getElementById('close-modal');

document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();

        const service = btn.getAttribute('data-service');

        if (service === 'powerbi') {
            modalTitle.innerText = 'Power BI Dashboards & Reports';
            modalDescription.innerText =
                'Design and develop interactive Power BI dashboards using SQL, Excel, and DAX. Focused on data modeling, KPI tracking, trend analysis, and transforming complex datasets into clear business insights.';
        }

        if (service === 'powerapps') {
            modalTitle.innerText = 'Power Apps Development';
            modalDescription.innerText =
                'Build low-code Power Apps for business process automation. Experience in creating user-friendly forms, connecting data sources, and integrating Power Apps with Power BI and SharePoint.';
        }

        if (service === 'powerautomate') {
            modalTitle.innerText = 'Power Automate Flows';
            modalDescription.innerText =
                'Create automated workflows using Power Automate to streamline repetitive tasks, trigger email notifications, integrate multiple systems, and improve operational efficiency.';
        }

        modal.style.display = 'flex';
    });
});

closeModal.onclick = () => {
    modal.style.display = 'none';
};

window.onclick = e => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
};


