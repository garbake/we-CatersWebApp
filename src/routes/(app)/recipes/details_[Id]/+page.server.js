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
        id: recipe.id,
        collectionId: recipe.collectionId,
        name: recipe.name,
        description: recipe.description,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        display_image: recipe.display_image,
        likes: recipe.likes
        
        
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