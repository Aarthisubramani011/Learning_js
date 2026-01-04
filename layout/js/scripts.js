document.addEventListener("DOMContentLoaded", function () {

    // ===== SIDEBAR TOGGLE =====
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");

    if (menuBtn) {
        menuBtn.addEventListener("click", function () {
            sidebar.classList.toggle("collapsed");
            mainContent.classList.toggle("expanded");
        });
    }

    // ===== PROFILE DROPDOWN =====
    const profileBtn = document.getElementById("profile-btn");
    const profileMenu = document.getElementById("profile-menu");

    if (profileBtn) {
        profileBtn.addEventListener("click", function (e) {
            e.stopPropagation(); // stop bubbling
            profileMenu.classList.toggle("show");
        });
    }

    // Close profile dropdown when clicking outside
    document.addEventListener("click", function () {
        if (profileMenu) {
            profileMenu.classList.remove("show");
        }
    });

    // ===== SIDEBAR DROPDOWNS =====
    const dropdownItems = document.querySelectorAll(".menu-item.dropdown");

    dropdownItems.forEach(function (item) {
        item.addEventListener("click", function () {

            const content = item.nextElementSibling;

            // Toggle arrow rotation
            item.classList.toggle("open");

            // Show / Hide dropdown content
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });

});
