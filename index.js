(function () {
    "use strict"; // Start of use strict

    var sidebar = document.querySelector(".sidebar");
    const aName = document.querySelectorAll(".a-name");
    const iconsM = document.querySelectorAll(".icons-menu");
    const center = document.querySelectorAll(".center");
    const logoSeia = document.querySelectorAll(".logo-seia");
    const imgPerfil = document.querySelectorAll(".img-perfil");
    var sidebarToggles = document.querySelectorAll(
        "#sidebarToggle, #sidebarToggleTop"
    );

    if (sidebar) {
        var collapseEl = sidebar.querySelector(".collapse");
        var collapseElementList = [].slice.call(
            document.querySelectorAll(".sidebar .collapse")
        );
        var sidebarCollapseList = collapseElementList.map(function (collapseEl) {
            return new bootstrap.Collapse(collapseEl, { toggle: false });
        });

        for (var toggle of sidebarToggles) {
            // Toggle the side navigation
            toggle.addEventListener("click", function (e) {
                document.body.classList.toggle("sidebar-toggled");
                sidebar.classList.toggle("toggled");

                //Arruma imagem perfil se modo retraido ativo
                imgPerfil.forEach((i) => {
                    i.classList.toggle("img-perfil-retraido");
                });

                //Esconde nomes se modo retraido ativo
                aName.forEach((a) => {
                    a.classList.toggle("d-none");
                });

                //verificar se toggled remover w-50 e colocar logo-seia-retraido
                if (sidebar.classList.contains("toggled")) {
                    logoSeia.forEach((l) => {
                        l.classList.remove("w-50");
                        l.classList.add("logo-seia-retraido");
                    });
                } else {
                    logoSeia.forEach((l) => {
                        l.classList.add("w-50");
                        l.classList.remove("logo-seia-retraido");
                    });
                }
                //Centraliza itens se modo retraido ativo
                center.forEach((c) => {
                    c.classList.toggle("center-retraido");
                });

                //Centraliza icones se modo retraido ativo
                iconsM.forEach((i) => {
                    i.classList.toggle("icons-menu-retraido");
                });

                if (sidebar.classList.contains("toggled")) {
                    for (var bsCollapse of sidebarCollapseList) {
                        bsCollapse.hide();
                    }
                }
            });
        }

        // Close any open menu accordions when window is resized below 768px
        window.addEventListener("resize", function () {
            var vw = Math.max(
                document.documentElement.clientWidth || 0,
                window.innerWidth || 0
            );

            if (vw < 768) {
                for (var bsCollapse of sidebarCollapseList) {
                    bsCollapse.hide();
                }
            }
        });
    }

    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over

    var fixedNaigation = document.querySelector("body.fixed-nav .sidebar");

    if (fixedNaigation) {
        fixedNaigation.on("mousewheel DOMMouseScroll wheel", function (e) {
            var vw = Math.max(
                document.documentElement.clientWidth || 0,
                window.innerWidth || 0
            );

            if (vw > 768) {
                var e0 = e.originalEvent,
                    delta = e0.wheelDelta || -e0.detail;
                this.scrollTop += (delta < 0 ? 1 : -1) * 30;
                e.preventDefault();
            }
        });
    }

    var scrollToTop = document.querySelector(".scroll-to-top");

    if (scrollToTop) {
        // Scroll to top button appear
        window.addEventListener("scroll", function () {
            var scrollDistance = window.pageYOffset;

            //check if user is scrolling up
            if (scrollDistance > 100) {
                scrollToTop.style.display = "block";
            } else {
                scrollToTop.style.display = "none";
            }
        });
    }
})(); // End of use strict

// TRocar tema

function switchTheme() {
    const lightTheme = document.getElementById("light-theme");
    const darkTheme = document.getElementById("dark-theme");
    const navLight = document.querySelectorAll(".navbar-light");

    if (lightTheme.disabled) {
        lightTheme.disabled = false;
        darkTheme.disabled = true;
    } else {
        lightTheme.disabled = true;
        darkTheme.disabled = false;
    }
}
