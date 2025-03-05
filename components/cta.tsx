import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";
import CustomForm from "@/components/craco/custom-form";

export default function Cta() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
          </div>
          {/* Stripes illustration */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={Stripes}
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 border-y text-3xl font-bold text-gray-200 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.700/.7),transparent)1] md:mb-12 md:text-4xl">
              Book a free consultation and you'll get:
            </h2>
						<div className="grid overflow-hidden sm:grid-cols-2 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
							<article>
								<h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
									{/* <svg
										className="fill-blue-500"
										xmlns="http://www.w3.org/2000/svg"
										width={16}
										height={16}
									>
										<path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
									</svg> */}
									<svg
										className="fill-blue-500"
										xmlns="http://www.w3.org/2000/svg"
										width={16}
										height={16}
									>
										<path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
									</svg>
									<span>Deep-dive into your current tech landscape</span>
								</h3>
								<h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
									<svg
										className="fill-blue-500"
										xmlns="http://www.w3.org/2000/svg"
										width={16}
										height={16}
									>
										<path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
									</svg>
									<span>Understand your teething problems</span>
								</h3>
								<h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
									<svg
										className="fill-blue-500"
										xmlns="http://www.w3.org/2000/svg"
										width={16}
										height={16}
									>
										<path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
									</svg>
									<span>Identify the areas that need improvement</span>
								</h3>
							</article>
							<article>
								<h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
									<svg
										className="fill-blue-500"
										xmlns="http://www.w3.org/2000/svg"
										width={16}
										height={16}
									>
										<path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
									</svg>
									<span>Recommend the best solution to scale 100%</span>
								</h3>
								<h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
									<svg
										className="fill-blue-500"
										xmlns="http://www.w3.org/2000/svg"
										width={16}
										height={16}
									>
										<path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
									</svg>
									<span>Develop a plan to implement it</span>
								</h3>
								<h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
									<svg
										className="fill-blue-500"
										xmlns="http://www.w3.org/2000/svg"
										width={16}
										height={16}
									>
										<path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
									</svg>
									<span>Highlight how to stay ahead of the curve</span>
								</h3>
							</article>
          	</div>
						<CustomForm/>
            {/* <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <a
                className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                href="#0"
              >
                <span className="relative inline-flex items-center">
                  Start Free Trial{" "}
                  <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
