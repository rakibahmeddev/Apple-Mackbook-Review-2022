import React from "react";

const FAQ = () => {
  return (
    <div>
      <div class=" flex items-center justify-center bg-gradient-to-b from-blue-800 to-blue-600 h-64">
        <h2 className="md:text-5xl text-3xl text-white text-center font-medium">
          FAQ
        </h2>
      </div>
      <div className="py-20 px-20 bg-slate-50">
        <div className="w-full  grid md:grid-cols-2 gap-10 mt-20">
          <div className="">
            <div
              id="accordion-open"
              data-accordion="open"
              className="shadow-2xl"
            >
              <h2 id="accordion-open-heading-1">
                <button
                  type="button"
                  class="flex justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                  data-accordion-target="#accordion-open-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-open-body-1"
                >
                  <span class="flex items-center">
                    <svg
                      class="mr-2 w-5 h-5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>{" "}
                    What is Context API?
                  </span>
                  <svg
                    data-accordion-icon=""
                    class="w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-open-body-1"
                class=""
                aria-labelledby="accordion-open-heading-1"
              >
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    Context API is the alternative to props drilling or moving
                    props from grandparent to child to parent and so on. This is
                    the way for reactjs to effectively produce global variable
                    that can be passed around Context is also touted as lighter
                    approach fot state management. Context API added in reactjs
                    version 16 as a new feature. Now its became very popular for
                    share state across the entire code using Context API more
                    easly and lightly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div
              id="accordion-open"
              data-accordion="open"
              className="shadow-2xl"
            >
              <h2 id="accordion-open-heading-1">
                <button
                  type="button"
                  class="flex justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                  data-accordion-target="#accordion-open-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-open-body-1"
                >
                  <span class="flex items-center">
                    <svg
                      class="mr-2 w-5 h-5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>{" "}
                    What is difference between Block element and Inline element
                    in HTML?
                  </span>
                  <svg
                    data-accordion-icon=""
                    class="w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-open-body-1"
                class=""
                aria-labelledby="accordion-open-heading-1"
              >
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    There are two values of display block and inline. Compare to
                    inline block the difference is that inline block allows to
                    set height and width in the elements. And with inline block
                    elements the top and bottom margins and paddings are
                    respected but inline block elements are not. Compared to
                    block elements the major difference is that inline block
                    elements does not add a line break after the elements thats
                    why elements can sit next to others elements. Some inline
                    elements are anchor tag, button tag, image tag, input tag,
                    span tag. And some of block elements are header tag, div
                    tag, footer tag, paragraph tag, ul/li tag.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
