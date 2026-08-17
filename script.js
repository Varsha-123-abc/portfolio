// =========================================================
// Portfolio JavaScript
// =========================================================

// Current year
const year = new Date().getFullYear();

const footer = document.querySelector("footer");

if (footer) {
    footer.innerHTML = `
        <p>Designed & Built by Varsha Bhati</p>
        <p>© ${year} Varsha Bhati</p>
    `;
}


// =========================================================
// Scroll reveal animation
// =========================================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);

sections.forEach((section) => {

    section.classList.add("hidden");

    observer.observe(section);

});


// =========================================================
// Active navigation
// =========================================================

const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {

            link.classList.add("active");

        }

    });

});

// =========================================================
// Project Image Viewer
// =========================================================

function openImage(imageSource) {

    const modal = document.getElementById("imageModal");
    const expandedImage = document.getElementById("expandedImage");

    expandedImage.src = imageSource;

    modal.classList.add("show");

}


function closeImage() {

    const modal = document.getElementById("imageModal");

    modal.classList.remove("show");

}
