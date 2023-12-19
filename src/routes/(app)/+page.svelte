<script>
  import "../app.css";
</script>

<section
  class="h-1/2 relative bg-[url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat"
>
  <div
    class="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl mx-auto text-center ltr:sm:text-left">
      <h1 class="text-white text-3xl font-extrabold sm:text-5xl">
        Let us find your

        <strong class="block font-extrabold text-rose-600">
          Forever recipe.
        </strong>
      </h1>

      <p class="text-white mt-4 max-w-lg sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div class="mt-8 flex flex-wrap gap-4 text-center ml-10">
        <a
          href="#"
          class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

<div class="container mx-auto mt-10">
  <div class="p-3">
    <h1 class="text-3xl font-bold">Featured Reciepes</h1>
  </div>

  <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
    <div>
      <a href="#" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
        <img
          alt="Home"
          src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          class="h-56 w-full rounded-md object-cover"
        />

        <div class="mt-2">
          <dl>
            <div>
              <dt class="sr-only">Price</dt>

              <dd class="text-sm text-gray-500">$240,000</dd>
            </div>

            <div>
              <dt class="sr-only">Address</dt>

              <dd class="font-medium">123 Wallaby Avenue, Park Road</dd>
            </div>
          </dl>

          <div class="mt-6 flex items-center gap-8 text-xs">
            <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                class="h-4 w-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>

              <div class="mt-1.5 sm:mt-0">
                <p class="text-gray-500">Parking</p>

                <p class="font-medium">2 spaces</p>
              </div>
            </div>

            <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                class="h-4 w-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>

              <div class="mt-1.5 sm:mt-0">
                <p class="text-gray-500">Bathroom</p>

                <p class="font-medium">2 rooms</p>
              </div>
            </div>

            <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                class="h-4 w-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>

              <div class="mt-1.5 sm:mt-0">
                <p class="text-gray-500">Bedroom</p>

                <p class="font-medium">4 rooms</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>
