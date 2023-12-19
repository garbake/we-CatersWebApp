import PocketBase from "pocketbase"
import { SECRET_URL } from "$env/static/private";
import {generateUsername} from "$lib/utils"
import { error, redirect } from "@sveltejs/kit";

const pb = new PocketBase(SECRET_URL);

export const actions = {
    register: async ({request})=> {
    const formData = await request.formData();
    const data = Object.fromEntries([...formData]);


    let username = generateUsername(data.name.split(' ').join('')).toLowerCase();
    const results = {
        name: data.name,
        email: data.email, 
        password: data.password,
        passwordConfirm: data.passwordConfirm,
        username 
    }
    
    console.log(results.username);
    try{
        const record = await pb.collection('users').create(results);
    }catch(err) {
     console.log('Error: ', err)
     throw error(500, 'something went wrong')
    }
    throw redirect(303, '/login')
    
    }
};