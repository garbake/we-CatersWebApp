/** @type {import('./$types').LayoutServerLoad} */

import PocketBase from "pocketbase"
import { SECRET_URL } from "$env/static/private";

const pb = new PocketBase(SECRET_URL);

export const load = ({ }) => {
	// if (pb.authStore.model.id) {
	// 	return {
	// 		user: pb.authStore.model.id
	// 	};
	// }

    console.log(pb.authStore.isValid);
    // console.log(pb.authStore.token);
    // onsole.log(pb.authStore.model.id);


    
            

};