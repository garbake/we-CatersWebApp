import PocketBase from 'pocketbase';
import {SECRET_EMAIL,SECRET_PASSWORD,SECRET_URL} from '$env/static/private'


export async function load({}) {
    const pb = new PocketBase(SECRET_URL);
    await pb.admins.authWithPassword(SECRET_EMAIL,SECRET_PASSWORD);

    const getAllRecipes = await pb.collection("recipes").getFullList({ 
        sort: '-created', 
        expand:"category" });

    console.log(getAllRecipes)

    const results = getAllRecipes.map((result) => {
    const categoryData = result.expand?.category;

    console.log(result)
    // Log category data for each recipe
    console.log("Category Data:", categoryData);
        return {
          id: result.id,
          collectionId: result.collectionId,
          name: result.name,
          display_image: result.display_image,
          description: result.description,
          category: categoryData.name,
          likes: result.likes
        };
      });

    return {
        getAllRecipes: results
    };
};