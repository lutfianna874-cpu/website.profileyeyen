document.addEventListener("DOMContentLoaded", function () {


    /* =================================
       CREATE STARS
    ================================= */

    const starsContainer =
        document.getElementById("stars");


    if (starsContainer) {

        for (let i = 0; i < 180; i++) {

            const star =
                document.createElement("span");

            star.className = "star";

            star.style.left =
                Math.random() * 100 + "%";

            star.style.top =
                Math.random() * 100 + "%";

            star.style.animationDelay =
                Math.random() * 4 + "s";

            star.style.animationDuration =
                (2 + Math.random() * 4) + "s";

            starsContainer.appendChild(star);

        }

    }



    /* =================================
       MOBILE MENU
    ================================= */

    const menuBtn =
        document.getElementById("menuBtn");

    const navMenu =
        document.getElementById("navMenu");


    if (menuBtn && navMenu) {

        menuBtn.addEventListener(
            "click",
            function () {

                navMenu.classList.toggle("open");

            }
        );

    }


    const navLinks =
        document.querySelectorAll(
            "#navMenu a"
        );


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navMenu.classList.remove(
                    "open"
                );

            }
        );

    });



    /* =================================
       CURSOR GLOW
    ================================= */

    const cursorGlow =
        document.querySelector(
            ".cursor-glow"
        );


    if (cursorGlow) {

        document.addEventListener(
            "mousemove",
            function (event) {

                cursorGlow.style.left =
                    event.clientX + "px";

                cursorGlow.style.top =
                    event.clientY + "px";

            }
        );

    }



    /* =================================
       GALLERY LIGHTBOX
    ================================= */

    const galleryItems =
        document.querySelectorAll(
            ".galaxy-frame"
        );


    const lightbox =
        document.getElementById(
            "lightbox"
        );


    const lightboxImage =
        document.getElementById(
            "lightboxImage"
        );


    const lightboxTitle =
        document.getElementById(
            "lightboxTitle"
        );


    const lightboxClose =
        document.getElementById(
            "lightboxClose"
        );



    galleryItems.forEach(
        function (item) {

            item.addEventListener(
                "click",
                function () {

                    const image =
                        item.getAttribute(
                            "data-image"
                        );

                    const title =
                        item.getAttribute(
                            "data-title"
                        );


                    lightboxImage.src =
                        image;

                    lightboxImage.alt =
                        title;

                    lightboxTitle.textContent =
                        title.toUpperCase();


                    lightbox.classList.add(
                        "show"
                    );


                    document.body.style.overflow =
                        "hidden";

                }
            );

        }
    );



    /* =================================
       CLOSE LIGHTBOX
    ================================= */

    function closeLightbox() {

        lightbox.classList.remove(
            "show"
        );

        document.body.style.overflow =
            "";

        lightboxImage.src =
            "";

    }


    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            closeLightbox
        );

    }


    if (lightbox) {

        lightbox.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === lightbox
                ) {

                    closeLightbox();

                }

            }
        );

    }



    /* =================================
       ESC KEY
    ================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeLightbox();

            }

        }
    );

});