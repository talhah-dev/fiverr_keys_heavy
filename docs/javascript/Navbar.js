const navbar = document.getElementById("navbar");

navbar.innerHTML = `
<header class="bg-black text-white">
  <!-- Top mini bar -->
  <div class="hidden md:block border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-end gap-6">
      <div class="flex items-center gap-3 ml-4">
        <a href="#" aria-label="Facebook" class="hover:text-blue-300 transition">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="Instagram" class="hover:text-blue-300 transition">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>

  <!-- Main nav -->
  <div class="border-b bg-[#1c1c1e] border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <!-- Logo -->
      <a href="./index.html" class="flex items-center gap-3">
        <img src="./docs/assets/logo.png" alt="Keys Heavy Towing & Recovery" class="h-16 w-auto object-contain" />
      </a>

      <!-- Desktop links -->
      <nav class="hidden lg:flex items-center gap-8">
        <a href="./index.html" class="text-sm hover:text-blue-300 transition">HOME</a>
        <a href="./about.html" class="text-sm hover:text-blue-300 transition">ABOUT</a>
        <a href="./contact.html" class="text-sm hover:text-blue-300 transition">CONTACT</a>

        <a
          href="tel:7866098524"
          class="ml-2 inline-flex items-center justify-center px-5 py-3 bg-[#1b538e] hover:bg-blue-800 transition text-sm"
        >
          (786) 609-8524
        </a>
      </nav>

      <!-- Mobile button -->
      <button
        id="menuBtn"
        class="lg:hidden w-11 h-11 border border-white/15 hover:border-white/25 transition flex items-center justify-center"
        aria-label="Open menu"
        aria-expanded="false"
      >
        <i class="fa-solid fa-bars text-lg"></i>
      </button>
    </div>

    <!-- Mobile menu (smooth open/close) -->
    <div
      id="mobileMenu"
      class="lg:hidden overflow-hidden max-h-0 opacity-0 transition-all duration-300 ease-in-out border-t border-white/10"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col gap-4">
        <a href="./index.html" class="py-2 hover:text-blue-300 transition">Home</a>
        <a href="./about.html" class="py-2 hover:text-blue-300 transition">About</a>
        <a href="./contact.html" class="py-2 hover:text-blue-300 transition">Contact</a>

        <a
          href="tel:7866098524"
          class="mt-2 inline-flex items-center justify-center px-5 py-3 bg-[#1b538e] hover:bg-blue-800 transition"
        >
          Call (786) 609-8524
        </a>

        <div class="pt-3 border-t border-white/10 flex items-center gap-4">
          <a href="#" aria-label="Facebook" class="hover:text-blue-300 transition">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Instagram" class="hover:text-blue-300 transition">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</header>

`;

const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

const openMenu = () => {
  btn.setAttribute("aria-expanded", "true");
  menu.classList.remove("max-h-0", "opacity-0");
  menu.classList.add("max-h-[420px]", "opacity-100");
};

const closeMenu = () => {
  btn.setAttribute("aria-expanded", "false");
  menu.classList.add("max-h-0", "opacity-0");
  menu.classList.remove("max-h-[420px]", "opacity-100");
};

btn.addEventListener("click", () => {
  const expanded = btn.getAttribute("aria-expanded") === "true";
  expanded ? closeMenu() : openMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) closeMenu();
});