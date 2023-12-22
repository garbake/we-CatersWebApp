import { error,redirect } from "@sveltejs/kit"
import {generateUsername} from '../utils'
import PocketBase from "pocketbase"


const pb = new PocketBase('http://127.0.0.1:8090');

export class Recipe {
   static updateRecipe = async({request, recipeId})=> {
        const formData = await request.formData();
        const data = Object.fromEntries([...formData]);
    
        const name = data.name
        const description = data.description
        const category = data.category
        const ingredients = data.ingredients
        const instructions = data.instructions
        const display_image = data.display_image
    
         //console.log(display_image.size);
        
        
        const updatedRecipe = {
          name,
          description,
          ingredients,
          instructions,
          //...(display_image.size !== 0 && { display_image }), // Include display_image only if size is not 0
          
          
      }
      
        try {
           await pb.collection('recipes').update(recipeId, updatedRecipe);
        } catch (err) {
          console.log('Error: ', err);
          throw error(err.status, err.message);
        }
         throw redirect(303, '/dashboard/manage_recipe')
      }

}