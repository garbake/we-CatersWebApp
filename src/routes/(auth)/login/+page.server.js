/** @type {import('./$types').PageServerLoad} */

import PocketBase from "pocketbase"
import { error,redirect } from "@sveltejs/kit";
import { SECRET_URL } from "$env/static/private";

const pb = new PocketBase(SECRET_URL);

export const actions = {
    login: async ({request}) => {
        const formData = await request.formData();
        const data = Object.fromEntries([...formData]);

        const results = {
            email: data.email, 
            password: data.password
        }

        try{
            const authData = await pb.collection('users').authWithPassword(data.email, data.password);
            console.log(pb.authStore.isValid);
            console.log(pb.authStore.token);
            console.log(pb.authStore.model.id);

        }catch (err) {
         console.log('Error: ', err);
         throw error(500, 'something went wrong logging in');
        }
        throw redirect(303, '/')
        
    }

    
};

// export const actions = {
//     login: async ({request, locals}) => {
//         const formData = await request.formData();
//         const data = Object.fromEntries([...formData]);

//         const results = {
//             email: data.email, 
//             password: data.password
//         }

//         try{
//            await locals.pb.collection('users').authWithPassword(data.email, data.password);
//             console.log(locals.pb.authStore.isValid);
            

//         }catch (err) {
//          console.log('Error: ', err);
//          throw error(500, 'something went wrong logging in');
//         }
//         throw redirect(303, '/')
        
//     }

    
// };