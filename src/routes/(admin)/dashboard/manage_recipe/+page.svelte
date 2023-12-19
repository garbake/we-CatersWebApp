<script>
  import { getImageURL } from '$lib/utils';
  import  Modal   from '$lib/components/Modal.svelte';
  export let data;

  let modalOpen = false;
  let currentRecipe ={};

  function openModal(recipe) {
    modalOpen = true;
    currentRecipe = recipe;
  }

  function closeModal() {
    modalOpen = false;
  }
  
</script>

<header>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="text-center sm:text-left">
        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
          All My Recipes
        </h1>
      </div>

      <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
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
            class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
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

        <a
          class="block rounded-lg bg-green-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-600 focus:outline-none focus:ring"
          type="button"
          href="/dashboard/manage_recipe/create"
        >
          Create Recipe
        </a>
      </div>
    </div>
  </div>
</header>

<div class="w-full overflow-hidden rounded-lg shadow-xs border">
  <div class="w-full overflow-x-auto">
    <table class="w-full whitespace-no-wrap">
      <thead>
        <tr
          class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b"
        >
          <th class="px-4 py-3">#</th>
          <th class="px-4 py-3">Recipe Name</th>
          <th class="px-4 py-3">Likes</th>
          <th class="px-4 py-3">Category</th>
          <th class="px-4 py-3">Date Added</th>
          <th class="px-4 py-3">Action</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y">
        {#each data?.getAllRecipes as recipe, index}
        <tr class="text-gray-700 dark:text-gray-400 hover:bg-gray-100">
          <td class="px-4 py-3 text-sm">
            <b>{index +1}</b>
          </td>
          <td class="px-4 py-3">
            <div class="flex items-center text-sm">
              <!-- Avatar with inset shadow -->
              <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                <img
                  class="object-cover w-full h-full rounded-t-none"
                  src={recipe.display_image
                        ? getImageURL(recipe.collectionId, recipe.id, recipe.display_image, '20x20') 
                        : `https://via.placeholder.com/80//?text=${recipe.name}`}
                  alt=""
                />
                <div
                  class="absolute inset-0 rounded-full shadow-inner"
                  aria-hidden="true"
                ></div>
              </div>
              <div>
                <p class="font-semibold"></p>
                <p class="text-xs text-gray-800 ">
                  {recipe.name}
                </p>
              </div>
            </div>
          </td>
          <td class="px-4 py-3 text-sm">
            {recipe.likes}
          </td>
          <td class="px-4 py-3 text-xs">
            <span
              class="px-2 py-1 font-semibold leading-tight text-green-500 bg-green-100 rounded-full"
            >
              {recipe.category}
            </span>
          </td>
          <td class="px-4 py-3 text-sm">
            {new Date(recipe.created).toLocaleString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            })}
            
          </td>

          <td class="px-4 py-3">
            <div class="flex items-center space-x-4 text-sm">
              <a
                href=""
                class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 rounded-lg focus:outline-none focus:shadow-outline-gray"
                aria-label="show"
              >
                <i
                  class="fa-regular fa-eye text-green-500 fa-xl hover:text-green-600"
                ></i>
              </a>

              <a
                href="/dashboard/manage_recipe/edit_{recipe.id}"
                class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                aria-label="Edit"
              >
                <i
                  class="fa-regular fa-pen-to-square text-blue-500 fa-xl hover:text-blue-600"
                ></i>
              </a>
              <!-- <form action="{{ route('property.destroy' , $property->id) }}" method="POST">
                  @csrf
                  @method('DELETE') -->

              <button
              on:click={() => openModal(recipe)}
                class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                aria-label="Delete"
                type="submit"
                
              >
                <i
                  class="fa-solid fa-trash-can text-red-500 fa-xl hover:text-red-600"
                ></i>
              </button>

              

            </div>
          </td>
        </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<Modal label={currentRecipe.id} bind:checked={modalOpen}>
  <div slot="heading">
    <h3 class="text-2xl">Delete {currentRecipe.name}</h3>
    <p class="text-base font-normal mt-2">
      Are you sure you want to delete this recipe? Once deleted, the recipe cannot be
      restored.
    </p>
  </div>
  <div slot="actions" class="flex w-full items-center justify-center space-x-2">
    <label for={currentRecipe.id} class="focus:outline-none text-white bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" on:click={closeModal}>Cancel</label>
    <form action="?/deleteRecipe" method="POST">
      <input type="hidden" name="id" value={currentRecipe.id} />
      <button type="submit" class="focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Delete</button>
    </form>
  </div>
</Modal>