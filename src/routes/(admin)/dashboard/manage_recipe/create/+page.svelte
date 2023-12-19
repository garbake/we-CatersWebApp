<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>




<section>
  <div class="mx-auto max-w-screen-xl   sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg py-5">
        <div class="text-center text-2xl font-bold text-red-400 sm:text-3xl">
            <h1>Create a Recipe</h1>
            
        </div>
      </div>
    <div class=" rounded-lg bg-gray-50 p-8 shadow-lg lg:col-span-3 lg:p-12">
      <form action="?/create" method="post" class="space-y-4" enctype="multipart/form-data">
        <div>
          <label class="p-2 font-medium" for="name">Name</label>
          <input
            class="w-full rounded-lg border border-gray-300 p-3 text-sm"
            placeholder="Name"
            type="text"
            required name="name"
          />
        </div>

        <div>
          <label class="p-2 font-medium" for="Description">Description</label>

          <textarea
            class="w-full rounded-lg border border-gray-300 p-3 text-sm"
            placeholder="Description"
            rows="8"
            required name="description"
          ></textarea>
        </div>

        <div class="">
          <h1 class=" block mb-2 text-sm font-medium text-gray-900">Category</h1>
        </div>

        <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
          <div>
            <input
              class="peer sr-only"
              id="option1"
              type="radio"
              tabindex="-1"
              value="jo6p7chrshvhmvu"
              required name="category"
            />

            <label
              for="option1"
              class="block w-full rounded-lg border border-gray-300 p-3 text-gray-600 hover:border-black peer-checked:border-none peer-checked:bg-green-400 peer-checked:text-white"
            >
              <span class="text-sm"> Finger Food </span>
            </label>
          </div>

          <div>
            <input
              class="peer sr-only"
              id="option2"
              type="radio"
              value="gzrvners89kqkaj"
              required name="category"
            />

            <label
              for="option2"
              class="block w-full rounded-lg border border-gray-300 p-3 text-gray-600 hover:border-black peer-checked:border-none peer-checked:bg-green-400 peer-checked:text-white"
            >
              <span class="text-sm"> Soup </span>
            </label>
          </div>

          <div>
            <input
              class="peer sr-only"
              id="option3"
              type="radio"
              value="mc092pmc430e7c4"
              required name="category"
            />

            <label
              for="option3"
              class="block w-full rounded-lg border border-gray-300 p-3 text-gray-600 hover:border-black peer-checked:border-none peer-checked:bg-green-400 peer-checked:text-white"
            >
              <span class="text-sm"> Pasta </span>
            </label>
          </div>
        </div>

        <div>
          <label class="p-2 font-medium" for="message">Ingredients</label>

          <textarea
            class="w-full rounded-lg border border-gray-300  p-3 text-sm"
            placeholder="Ingredients"
            rows="8"
            required name="ingredients"
          ></textarea>
        </div>

        <div>
          <label class="p-2 font-medium" for="message">Instructions</label>

          <textarea
            class="w-full rounded-lg border border-gray-300 p-3 text-sm resize-none"
            placeholder="Instructions"
            rows="8"
            required name="instructions"
            resize-none
          ></textarea>
        </div>

        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-900"
            for="file_input">Upload Display Picture </label
          >
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none   dark:placeholder-gray-400"
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
             name ="display_image"
          />
          <p
            class="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            PNG or JPG (MAX. 800x400px).
          </p>
        </div>

        <div class="mt-4">
          <button
            type="submit"
            class="inline-block w-full rounded-lg bg-green-500 hover:bg-green-600 px-5 py-3 font-medium text-white sm:w-auto"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
</section>
