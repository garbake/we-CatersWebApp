<script>
    import {getImageURL} from "$lib/utils"
    export let data;
</script>



  <!-- Recipe Content Section -->
  <div class="container mx-auto mt-8">
    <div class="mx-auto max-w-lg text-center p-4">
      <h1 class="text-2xl font-bold text-green-500 sm:text-3xl">{data.recipe.name}</h1>
    </div>
    <!-- Recipe Image -->
    <img src={data.recipe.display_image
            ? getImageURL(data.recipe.collectionId, data.recipe.id, data.recipe.display_image,) 
            : `https://via.placeholder.com/80//?text=${data.recipe.name}`} 
            alt=""
            class="w-full h-96  object-cover rounded-lg mb-4"
            />
      
    

    <!-- Recipe Details -->
    <div class="flex justify-between items-center mb-4">
      <div>
        <h2 class="text-xl font-bold text-green-500">Category</h2>
        <p class="text-gray-600">pasta</p>
      </div>
      <span class="text-xl font-bold"><i class="text-red-500 text-2xl fa-regular fa-heart p-1"></i>{data.recipe.likes}</span>
    </div>

    <div class="mb-4">
      <h3 class="text-xl font-bold text-green-500 ">Description</h3>
      <p class="text-gray-600">{data.recipe.description}</p>

    </div>
    <!-- Ingredients -->
    <div class="mb-4">
      <h3 class="text-xl font-bold text-green-500 mb-2">Ingredients</h3>
      <p class="text-gray-600">{data.recipe.ingredients}</p>
    </div>

    <!-- Instructions -->
    <div>
      <h3 class="text-xl font-bold text-green-500 mb-2">Instructions</h3>
      <p>{data.recipe.instructions}</p>
    </div>

  </div>