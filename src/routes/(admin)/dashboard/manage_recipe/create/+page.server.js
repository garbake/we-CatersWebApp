import PocketBase from 'pocketbase';
import {SECRET_EMAIL,SECRET_PASSWORD,SECRET_URL} from '$env/static/private'

export const actions={
    

    create: async({request}) =>{
        const pb = new PocketBase(SECRET_URL);
        await pb.admins.authWithPassword(SECRET_EMAIL,SECRET_PASSWORD);
        const formData = await request.formData()
        const data = Object.fromEntries([...formData]);

console.log
        const name = data.name
        const description = data.description
        const category = data.category
        const ingredients = data.ingredients
        const instructions = data.instructions
        const display_image = data.display_image

        const newRecipe = {
                    name,
                    description,
                    category,
                    ingredients,
                    instructions,
                    display_image
                }
        
        const record = await pb.collection('recipes').create(newRecipe);
        
    }
    
}