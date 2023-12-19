import PocketBase from 'pocketbase';
import { error, redirect } from '@sveltejs/kit';
import {SECRET_EMAIL,SECRET_PASSWORD,SECRET_URL} from '$env/static/private'

const pb = new PocketBase(SECRET_URL);

export async function load({}) {
    await pb.admins.authWithPassword(SECRET_EMAIL,SECRET_PASSWORD);

    const getAllRecipes = await pb.collection("recipes").getFullList({ 
        sort: '-created', 
        expand:"category" });

    console.log(getAllRecipes)

    const results = getAllRecipes.map((result) => {
    const categoryData = result.expand?.category;

    
        return {
          id: result.id,
          collectionId: result.collectionId,
          name: result.name,
          display_image: result.display_image,
          category: categoryData.name,
          created: result.created,
          likes: result.likes
        };
      });

    return {
        getAllRecipes: results
    };
};

export const actions = {
	deleteRecipe: async ({ request}) => {
    const formData = await request.formData()
    const data = Object.fromEntries([...formData]);
		const id = data.id 
    console.log(id)

		try {
			await pb.collection('recipes').delete(id);
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
		return {
			success: true
		};
	}
};