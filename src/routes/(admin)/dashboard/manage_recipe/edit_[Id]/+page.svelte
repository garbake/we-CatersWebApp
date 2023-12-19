<script>
  import { getImageURL } from '$lib/utils';
  export let data;
</script>


<section>
  <div class="mx-auto max-w-screen-xl   sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg py-5">
        <div class="text-center text-2xl font-bold text-red-400 sm:text-3xl">
            <h1>Edit Recipe</h1>
            
        </div>
      </div>

    <div class=" rounded-lg bg-gray-50 p-8 shadow-lg lg:col-span-3 lg:p-12">
      <form 
        action="?/updateRecipe" 
        method="POST"
        enctype="multipart/form-data"
        class="space-y-4">
        <div>
          <label class="p-2 font-medium" for="name">Name</label>
          <input
            class="w-full rounded-lg border border-gray-300 p-3 text-sm"
            value={data.recipe.name}
           name="name"/>
      </div>


        <div>
          <label class="p-2 text-sm font-medium" for="name">Description</label>

          <textarea
            class="w-full rounded-lg border border-gray-300 p-3 text-sm"
            value={data.recipe.description}
            rows="8"
            name="description"
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
              value="jo6p7chrshvhmvu"
              name="category"
            />

            <label
              for="option1"
              class="block w-full rounded-lg border border-gray-300 p-3 text-gray-600 hover:border-black peer-checked:border-none peer-checked:bg-green-400 peer-checked:text-white"
              
            >
              <span class="text-sm"> Finger Foods </span>
            </label>
          </div>

          <div>
            <input class="peer sr-only"
              id="option2"
              type="radio"
              value="gzrvners89kqkaj"
              name="category"
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
              name="category"
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
          <label class="p-2 text-sm font-medium" for="name">Ingredients</label>

          <textarea
            class="w-full rounded-lg border border-gray-300  p-3 text-sm"
            value={data.recipe.ingredients}
            rows="8"
            name="ingredients"
          ></textarea>
        </div>

        <div>
          <label class="p-2 text-sm font-medium" for="name">Instructions</label>

          <textarea
            class="w-full rounded-lg border border-gray-300 p-3 text-sm"
            value={data.recipe.instructions}
            name="instructions"
          ></textarea>
        </div>

        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900"
            >Display Picture </label>
        
            {#if data.recipe.display_image}
            <div class="w-20 hover:cursor-pointer relative mb-3">
              <div class="absolute -top-1.5 -right-1 hover:cursor-pointer bg-red-400 rounded-full p-1">
                <button formaction="" class="">
                  <i class="fa-solid fa-trash-can text-white text-2xl"></i>
                </button>
              </div>
            
              <div>
                <img
                  class="rounded-md"
                  src={getImageURL(
                    data.recipe.collectionId,
                    data.recipe.id,
                    data.recipe.display_image,
                    '80x80'
                  )}
                  alt="project thumbnail"
                />
              </div>
            </div>
            {/if}
            
            
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none   dark:placeholder-gray-400"
            name="display_image"
            type="file"
          />
          <p
            class="mt-1 text-sm text-gray-500 dark:text-gray-300"
            name="display_image"
          >
            PNG or JPG (MAX. 800x400px).
          </p>
        </div>

        <div class="mt-4">
          <button
            type="submit"
            class="inline-block w-full rounded-lg bg-green-500 hover:bg-green-600 px-5 py-3 font-medium text-white sm:w-auto"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  </div>
</section>