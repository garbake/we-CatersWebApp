<div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl">
    <div class="hidden bg-cover lg:block lg:w-1/2" style="background-image: url('https://images.unsplash.com/photo-1532939624-3af1308db9a5?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');"></div>

    <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div class="flex justify-center mx-auto">
            <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="">
        </div>

        <p class="mt-3 text-xl text-center text-gray-600 ">
            Register For An Account
        </p>
        <form
            method="POST"
            action="?/register">
        <div class="mt-4">
            <label class="block mb-2 text-sm font-medium text-gray-600 " for="username">Name</label>
            <input required name="name" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text"  />
        </div>

        <div class="mt-4">
            <label class="block mb-2 text-sm font-medium text-gray-600 " for="username">Email Address</label>
            <input required name="email" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
        </div>

        <div class="mt-4">
            <label class="block mb-2 text-sm font-medium text-gray-600 " for="password">Password</label>
            <input required name="password" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="password" />
        </div>
        <div class="mt-4">
            <label class="block mb-2 text-sm font-medium text-gray-600 " for="password">Confirm Password</label>
            <input required name="passwordConfirm" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="password" />
        </div>

        

        <div class="mt-6">
            <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50" type="submit">
                Register
            </button>
        </div>
    </form>

        <div class="flex items-center justify-between mt-4">
            <span class="w-1/5 border-b  md:w-1/4"></span>

            <a href="#" class="text-xs text-gray-500 uppercase  hover:underline">or </a>

            <span class="w-1/5 border-b  md:w-1/4"></span>
        </div>
        <p class="mt-2 text-xs font-light text-center text-gray-400"> Already have an account? <a href="/login" class="font-medium text-red-500  hover:underline">Login</a></p>
    </div>
</div>