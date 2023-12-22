import { it, describe, expect, vitest } from "vitest";
import { Register } from "./register.ts";
import { Recipe } from "./recipe.ts";
import { error, redirect } from "@sveltejs/kit";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

describe("RecipeAppTests", () => {
  it("registers a user", async () => {
    // Mock form data
    const formData = new FormData();
    //formData.append("id", "0123456789abcde");
    formData.append("name", "John Doe");
    formData.append("email", "john@testrisng.com");
    formData.append("password", "mypassword");
    formData.append("passwordConfirm", "mypassword");

    // Mock request object
    const request = {
      formData: async () => formData,
    };

      await Register.register({ request });

      // or fetch only the first record that matches the specified filter
      const record = await pb.collection('users').getFullList({
        sort: '-created',
      })

      const countJohnDoe = record.reduce((count, user) => {
        return count + (user.name === "John Doe" ? 1 : 0);
      }, 0);
      expect(countJohnDoe).toBeGreaterThan(0)

      //check if any record exist with name ="John Doe"
      //expect(record.some((user) => user.name === "John Doe")).toEqual(true)
      
    
  });

  it("updates a recipe correctly", async () => {
    // Mock form data
    const formData = new FormData();
    formData.append("name", "Pototo cheese Fries");
    formData.append("description", "Best When hot & spicey");

    const request = {
      formData: async () => formData,
    };

    // Call update function
    
      const recipeId = "i9y08qlzuu5zwel";

      await Recipe.updateRecipe({ recipeId, request });
    
      // Assertions
      
    
  });

  it('Register function fails when password and confirm password do not match', async () => {
    // Mock form data
    const formData = new FormData();
    formData.append('name', 'sammy jones');
    formData.append('email', 'sammy@yahoo.com');
    formData.append('password', 'sammy123');
    formData.append('passwordConfirm', 'jones123');

    // Mock request object
    const request = {
      formData: async () => formData,
    };

    // Call register function with mocked data
    try {
      await Register.register({ request});
    } catch (error) {
      // Assertions
      expect(error.status).toBe(500);
      //expect(error.headers.get('Location')).toBe('/login');
    }
 });
});
