const footer = document.getElementById("footer");

footer.innerHTML = `
  <footer class="bg-white border-t border-slate-200">
  <!-- Newsletter -->
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <!-- Logo / Tagline -->
      <div class="lg:col-span-4" data-aos="fade-up">
        <img
          src="./docs/assets/logo.png" 
          alt="Keys Heavy Towing & Recovery"
          class="h-34 w-auto object-contain"
        />
        <p class="mt-3 text-sm text-slate-600 leading-relaxed">
          Tavernier, FL • Serving Key West to Miami
        </p>
      </div>

      <!-- Newsletter form -->
      <div class="lg:col-span-8" data-aos="fade-up">
        <p class="text-slate-900 font-bold uppercase tracking-wide text-sm">
          Sign up for our newsletter
        </p>
        <p class="mt-2 text-sm text-slate-600 leading-relaxed">
          Subscribe for occasional updates about service coverage and availability.
        </p>

        <form class="mt-5 grid grid-cols-1 md:grid-cols-12 gap-3">
          <div class="md:col-span-9">
            <label class="sr-only" for="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email Address"
              class="w-full px-4 py-3 rounded-none border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/25 focus:border-blue-600"
            />
          </div>

          <div class="md:col-span-3">
            <button
              type="submit"
              class="w-full py-3 rounded-none bg-[#1b538e] hover:bg-[#1b538e]/80 text-white transition"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Footer Links Row -->
  <div class="border-t border-slate-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10">
        <!-- HQ -->
        <div class="md:col-span-4" data-aos="fade-up">
          <p class="text-slate-900 font-bold text-sm uppercase tracking-wide">Headquarters</p>
          <div class="mt-4 text-sm text-slate-600 leading-relaxed space-y-2">
            <p>90168 Overseas Highway</p>
            <p>Tavernier, Florida 33070</p>
            <p>
              p:
              <a href="tel:7866098524" class="text-[#1b538e] hover:underline">
                (786) 609-8524
              </a>
            </p>
          </div>
        </div>

        <!-- Links 1 -->
        <div class="md:col-span-4" data-aos="fade-up">
          <p class="text-slate-900 font-bold text-sm uppercase tracking-wide">Pages</p>
          <ul class="mt-4 space-y-3 text-sm text-slate-600">
            <li><a href="./index.html" class="hover:text-[#1b538e] transition">Home</a></li>
            <li><a href="./about.html" class="hover:text-[#1b538e] transition">About Us</a></li>
            <li><a href="./contact.html" class="hover:text-[#1b538e] transition">Contact Us</a></li>
          </ul>
        </div>

        <!-- Links 2 -->
        <div class="md:col-span-4" data-aos="fade-up">
          <p class="text-slate-900 font-bold text-sm uppercase tracking-wide">Quick Links</p>
          <ul class="mt-4 space-y-3 text-sm text-slate-600">
            <li><a href="./index.html#services" class="hover:text-[#1b538e] transition">Services</a></li>
            <li><a href="./index.html#testimonials" class="hover:text-[#1b538e] transition">Testimonials</a></li>
            <li>
              <a
                href="https://www.google.com/maps?q=90168+Overseas+Highway+Tavernier+FL+33070"
                target="_blank"
                class="hover:text-[#1b538e] transition"
              >
                Directions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom Bar -->
  <div class="border-t border-slate-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div class="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 text-sm text-slate-500">
        <div class="text-center sm:text-left">
          Copyright © 2026. Keys Heavy Towing &amp; Recovery
        </div>

        <div class="flex items-center justify-center gap-4">
          <a
            href="#"
            aria-label="Facebook"
            class="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#1b538e] hover:border-blue-200 hover:bg-blue-50 transition"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            class="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#1b538e] hover:border-blue-200 hover:bg-blue-50 transition"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>

        <div class="text-center sm:text-right">
          <a href="#" class="hover:text-[#1b538e] transition">Privacy Policy</a>
          <span class="text-slate-300 px-2">|</span>
          <a href="#" class="hover:text-[#1b538e] transition">Terms of Services</a>
        </div>
      </div>
    </div>
  </div>
</footer>
`;
