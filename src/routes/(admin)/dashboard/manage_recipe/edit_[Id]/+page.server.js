import PocketBase from "pocketbase";
import { SECRET_URL } from "$env/static/private";
import { error, redirect } from "@sveltejs/kit";

const pb = new PocketBase(SECRET_URL);
export const load = async ({ params }) => {
  try {
    const recipeId = params.Id;

    const recipe = await pb.collection("recipes").getOne(recipeId, {expand: "category"});
    //const categoryData = recipe.expand?.category;
    
    const results = {
        name: recipe.name,
        description: recipe.description,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        display_image: recipe.display_image,
        collectionId: recipe.collectionId,
        id: recipe.id,
        
        //category: categoryData.name 
    };
    

    return{
        recipe: results
    };
   
  } catch (err) {
    console.error("Error:", err);
    throw error(err.status, err.message);
  }
};

export const actions ={
  updateRecipe: async({request, params})=> {
    const formData = await request.formData();
    const data = Object.fromEntries([...formData]);

    const name = data.name
    const description = data.description
    const category = data.category
    const ingredients = data.ingredients
    const instructions = data.instructions
    const display_image = data.display_image

     console.log(display_image.size);
    
    
    const updatedRecipe = {
      name,
      description,
      ingredients,
      instructions,
      ...(display_image.size !== 0 && { display_image }), // Include display_image only if size is not 0
      
      
  }
  console.log(params.Id)
    try {
       await pb.collection('recipes').update(params.Id, updatedRecipe);
    } catch (err) {
      console.log('Error: ', err);
      throw error(err.status, err.message);
    }
     throw redirect(303, '/dashboard/manage_recipe')
  }
};
