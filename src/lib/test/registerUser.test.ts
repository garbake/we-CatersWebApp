import { test, expect } from 'vitest';
import { register } from './register';
import { error, redirect } from "@sveltejs/kit"

test('Register function does not create a record when inputs are null', async () => {
  // Arrange
  const requestMock = {
    formData: async () => ({ get: () => null }), // Simulate null input
  };

});

