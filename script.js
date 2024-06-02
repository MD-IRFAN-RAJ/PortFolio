const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.addEventListener('click', () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn) {
            if (pageTurn.classList.contains('turn')) {
                pageTurn.classList.remove('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 - index;
                }, 500);
            } else {
                pageTurn.classList.add('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 + index;
                }, 500);
            }
        } else {
            console.error(`Element with ID ${pageTurnId} not found.`);
        }
    });
});

//contact me when clicked
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

if (contactMeBtn) {
    contactMeBtn.onclick = (event) => {
    // Prevent default anchor behavior
        event.preventDefault();

        pages.forEach((page, index) => {
            setTimeout(() => {
                page.classList.add('turn');

                setTimeout(() => {
                    page.style.zIndex = 20 + index;
                }, 500);
            }, (index + 1) * 200 + 100);
        });
    };
} else {
     console.error('Contact Me button not found.');
}


// Create reverse index function
let totalPages =  pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

// Back profile button click
const backProfileBtn = document.querySelector('.back-profile');
backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => { 
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            },500); // Add a callback function here
        }, (index + 1) * 200 + 100);
    });
};


//opening animation

const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');
//opening animation(cover right animation)
setTimeout(() => { 
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => { 
    coverRight.style.zIndex=-1;
}, 2800)

//opening animation(page left or profile page animation)
setTimeout(() => { 
    pageLeft.style.zIndex=20;
}, 3200)
//opening animation(all pages right animation)
pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => { 
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            },500); // Add a callback function here
        }, (index + 1) * 200 + 2100);
    });




document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.send("service_y776xs2", "template_5v7z8jd", {
        name: document.getElementById('sendername').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully.');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send message.');
    });
});