document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       LOADER
    ===================================== */

    const loader =
        document.querySelector(".loader");

    setTimeout(function () {

        if (loader) {

            loader.style.opacity = "0";

            setTimeout(function () {

                loader.style.display = "none";

            }, 800);

        }

    }, 1300);



    /* =====================================
       CREATE STARS
    ===================================== */

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
                2 + Math.random() * 4 + "s";

            starsContainer.appendChild(star);

        }

    }



    /* =====================================
       SHOOTING STARS
    ===================================== */

    const shootingContainer =
        document.getElementById("shootingStars");


    function createShootingStar() {

        if (!shootingContainer) return;

        const star =
            document.createElement("div");

        star.className =
            "shooting-star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 60 + "%";

        shootingContainer.appendChild(star);


        setTimeout(function () {

            star.remove();

        }, 2000);

    }


    setInterval(
        createShootingStar,
        3500
    );



    /* =====================================
       REVEAL ANIMATION
    ===================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal, .reveal-left, .reveal-right"
        );


    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "active"
                        );

                    }

                });

            },
            {
                threshold: .12
            }
        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });



    /* =====================================
       MOBILE MENU
    ===================================== */

    const menuBtn =
        document.querySelector(".menu-btn");

    const navMenu =
        document.querySelector(".navbar ul");


    if (menuBtn && navMenu) {

        menuBtn.addEventListener(
            "click",
            function () {

                navMenu.classList.toggle(
                    "open"
                );

            }
        );

    }


    const navLinks =
        document.querySelectorAll(
            ".navbar ul a"
        );


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (navMenu) {

                    navMenu.classList.remove(
                        "open"
                    );

                }

            }
        );

    });



    /* =====================================
       CURSOR GLOW
    ===================================== */

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



    /* =====================================
       PLANET PARALLAX
    ===================================== */

    const planets =
        document.querySelectorAll(
            ".planet"
        );


    window.addEventListener(
        "scroll",
        function () {

            const scrollY =
                window.scrollY;

            planets.forEach(
                function (planet, index) {

                    const speed =
                        (index + 1) * .025;

                    planet.style.transform =
                        `translateY(${scrollY * speed}px)`;

                }
            );

        }
    );



    /* =====================================
       ACTIVE NAVBAR
    ===================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navItems =
        document.querySelectorAll(
            '.navbar a[href^="#"]'
        );


    const sectionObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        navItems.forEach(
                            function (link) {

                                link.classList.remove(
                                    "active"
                                );


                                if (
                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    "#" +
                                    entry.target.id
                                ) {

                                    link.classList.add(
                                        "active"
                                    );

                                }

                            }
                        );

                    }

                });

            },
            {
                rootMargin:
                    "-30% 0px -60% 0px"
            }
        );


    sections.forEach(function (section) {

        sectionObserver.observe(section);

    });



    /* =====================================
       3D TILT
    ===================================== */

    const cards =
        document.querySelectorAll(
            ".achievement-card, .skill-card"
        );


    cards.forEach(function (card) {

        card.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    (y - centerY) /
                    25;

                const rotateY =
                    (centerX - x) /
                    25;


                card.style.transform =
                    `perspective(700px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-5px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "";

            }
        );

    });



    /* =====================================
       RANDOM SPARKLES
    ===================================== */

    function createSparkle() {

        const sparkle =
            document.createElement("div");

        sparkle.innerHTML = "✦";

        sparkle.style.position =
            "fixed";

        sparkle.style.left =
            Math.random() * 100 + "%";

        sparkle.style.top =
            Math.random() * 100 + "%";

        sparkle.style.color =
            "rgba(214,174,190,.7)";

        sparkle.style.fontSize =
            "8px";

        sparkle.style.pointerEvents =
            "none";

        sparkle.style.zIndex =
            "3";

        sparkle.style.transition =
            "opacity 1.5s ease, transform 1.5s ease";

        document.body.appendChild(
            sparkle
        );


        requestAnimationFrame(function () {

            sparkle.style.opacity =
                "0";

            sparkle.style.transform =
                "translateY(-20px) scale(1.5)";

        });


        setTimeout(function () {

            sparkle.remove();

        }, 1500);

    }


    setInterval(
        createSparkle,
        1200
    );



    /* =====================================
       MUSIC
    ===================================== */

    const music =
        document.getElementById("music");

    const musicBtn =
        document.getElementById("musicBtn");


    if (music && musicBtn) {

        musicBtn.addEventListener(
            "click",
            function () {

                if (music.paused) {

                    music.play()
                        .then(function () {

                            musicBtn.innerHTML =
                                "❚❚";

                        })
                        .catch(function () {

                            alert(
                                "Klik tombol sekali lagi untuk memutar musik."
                            );

                        });

                } else {

                    music.pause();

                    musicBtn.innerHTML =
                        "♫";

                }

            }
        );

    }



    /* =====================================
       HERO PARALLAX
    ===================================== */

    const heroVisual =
        document.querySelector(
            ".hero-visual"
        );


    if (heroVisual) {

        document.addEventListener(
            "mousemove",
            function (event) {

                const x =
                    (event.clientX /
                        window.innerWidth -
                        .5) * 12;

                const y =
                    (event.clientY /
                        window.innerHeight -
                        .5) * 12;


                heroVisual.style.transform =
                    `translate(${x}px, ${y}px)`;

            }
        );

    }



    /* =====================================
       SMOOTH SCROLL
    ===================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });


});