<script> 
  import {getImageURL} from "$lib/utils"
  import headerVideo from "$lib/videos/recipes.mp4";
  export let data;
</script>

<video muted autoplay>
  <source src={headerVideo} />
</video>


<div class="container mx-auto">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between gap-4">
      <div class="">
        <h1 class="text-xl font-bold text-red-500">Browse All Recipe</h1>
      </div>
      <div class="flex items-center gap-4">
        <div class="relative">
          <label class="sr-only" for="search"> Search </label>

          <input
            class="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
            id="search"
            type="search"
            placeholder="Search recipes..."
          />

          <button
            type="button"
            class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-red-700"
          >
            <span class="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
    {#each data?.getAllRecipes as recipe}
    <div>
        <a href="/recipes/details_{recipe.id}" class="block rounded-lg p-4 shadow-sm shadow-indigo-100 transition-all hover:shadow-xl">
            <img
              alt="Home"
              src={recipe.display_image
                ? getImageURL(recipe.collectionId, recipe.id, recipe.display_image,) 
                : `https://via.placeholder.com/80//?text=${recipe.name}`}
              class="h-56 w-full rounded-md object-cover"
            />
          
            <div class=" mt-2">
              <dl class="flex justify-between">
                <div>
                  <dt class="sr-only">Address</dt>
          
                  <dd class="font-medium">{recipe.name}</dd>
                </div>
                <div>
                  <dt class="sr-only">Price</dt>
          
                  <dd class="text-sm text-gray-500">{recipe.category}</dd>
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
    {/each}
    
  </div>


</div>


