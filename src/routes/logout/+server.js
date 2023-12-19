/** @type {import('./$types').PageServerLoad} */
import PocketBase from "pocketbase"
import { SECRET_URL } from "$env/static/private";
import { redirect } from "@sveltejs/kit";

const pb = new PocketBase(SECRET_URL);


export const POST = ({}) => {
    pb.authStore.clear();


    throw redirect(303, '/login')
}