import Link from "next/link";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""}`}
        >
          {/* Services */}
          <div className="space-y-2 sm:col-span-6 lg:col-span-3">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/cloud-solutions" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Cloud Solutions</Link></li>
              <li><Link href="/services/data-ai" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Data and Artificial Intelligence</Link></li>
              <li><Link href="/services/cyber-security" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Cybersecurity</Link></li>
              <li><Link href="/services/tech-transformation" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Technology Transformation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2 sm:col-span-6 lg:col-span-3">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="/careers" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="/contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Contact Us</a></li>
              <li><Link href="/insights" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Insights</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-2 sm:col-span-6 lg:col-span-3">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/case-studies" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Case Studies</Link></li>
              <li><a href="/blog" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Blog</a></li>
              <li><a href="/whitepapers" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Whitepapers</a></li>
              <li><a href="/support" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="space-y-4 sm:col-span-6 lg:col-span-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/dovetop-digital" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://twitter.com/dovetopdigital" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright and Legal Links */}
          <div className="sm:col-span-12 border-t border-gray-200 pt-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="text-sm text-gray-600">
                &copy; 2025 Dovetop Digital Limited. All rights reserved.
              </div>
              <div className="flex flex-wrap gap-6">
                <a href="/privacy-policy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
                <a href="/terms-conditions" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Terms & Conditions</a>
                <a href="/cookie-policy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Cookie Policy</a>
                <a href="/accessibility" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-6 md:-mt-16 h-24 md:h-60 w-full overflow-hidden" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-center text-[100px] md:text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Dovetop'] after:absolute after:inset-0 after:bg-gray-300/50 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Dovetop'] after:[text-shadow:0_1px_0_white]"></div>
      </div>
    </footer>
  );
}
