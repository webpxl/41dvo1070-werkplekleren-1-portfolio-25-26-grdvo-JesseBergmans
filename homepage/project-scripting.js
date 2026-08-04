document.addEventListener("DOMContentLoaded", () => {
    const imageButtons = document.querySelectorAll(".image-button");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeButton = document.getElementById("lightbox-close");

    let lastFocusedButton = null;

    if (!lightbox || !lightboxImg || !closeButton) {
        console.warn("De lightbox-elementen konden niet worden gevonden.");
        return;
    }

    function openLightbox(image, button) {
        lastFocusedButton = button;

        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;

        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

        closeButton.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");

        lightboxImg.src = "";
        lightboxImg.alt = "";

        document.body.style.overflow = "";

        if (lastFocusedButton) {
            lastFocusedButton.focus();
        }
    }

    imageButtons.forEach((button) => {
        const image = button.querySelector("img");

        if (!image) {
            return;
        }

        button.addEventListener("click", () => {
            openLightbox(image, button);
        });
    });

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", (event) => {
        const lightboxIsOpen =
            lightbox.classList.contains("is-open");

        if (event.key === "Escape" && lightboxIsOpen) {
            closeLightbox();
        }
    });
});