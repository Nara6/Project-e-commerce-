<template>
    <div class="wrapper mt-4 w-full">
        <div class="nav flex gap-x-4 h-[70px] w-full justify-around">
            <div class="flex gap-x-5">
                <img src="../assets/images/logo1.png" alt="" class="w-[70px] h-[70px]">
                <p class="flex items-center text-[30px]" style="font-family: 'Roboto', sans-serif;text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">Nara Shop</p>
            </div>
        <div class="flex gap-x-7 items-center text-[20px]" style="font-family: 'Lato', sans-serif;">
            <a href="/about">About us</a>
            <a href="#">Categories</a>
            <a href="/contact">Contact us</a>
        </div>
        <div class="flex gap-x-4">
            <div class="flex items-center">
            <img class="absolute h-[27px] ml-1" src="../assets/images/search.svg" alt="">
            <input type="text" class="bg-gray-300 w-[350px] h-[35px] pl-8 rounded-xl placeholder:text-[13px] placeholder:italic" placeholder="Search">
        </div>
        <div class="flex items-center flex-col justify-center">
            <div class="flex gap-x-3 hover:cursor-pointer">
                <div class="h-[40px] group relative ">
                    <img src="../assets/images/user_svgrepo.com.svg" alt="" class="h-[35px] ">
                    <div class="hidden group-hover:block flex-col absolute font-bold
                    bg-white w-[80px] h-[80px] rounded-md drop-shadow-2xl p-2">
                    <router-link to="/auth/login" class="py-2 block hover:text-blue-400">Login</router-link>
                    <router-link to="/auth/signup" class="block w-[100px] hover:text-blue-400">Sign up</router-link>
                    </div>
                </div>
            <img src="../assets/images/heart-solid.svg" alt="" class="h-[35px] ">
            <img src="../assets/images/Vector.svg" alt="" class="h-[35px]">
            </div>
        </div>
        </div>
        </div>

        <div class="w-full p-[50px] mt-4 bg-[#F4F4F4]">
            <span class="font-bold"
             style="color:rgba(0, 0, 0, 0.50);">Home / 
             <span class="text-[#EC3535]">Your Wishlist</span></span>
        </div>

        <div class="w-full p-[50px] flex gap-7">
          <div class="w-[230px] h-[300px] rounded-[10px] border-[1px]
            flex flex-col gap-2 relative">
            <div class="w-[45px] h-[45px] rounded-[50%] justify-center items-center
             bg-red-500 absolute right-4 top-5 flex hover:bg-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M22.3959 8.89418C22.3959 5.94944 20.0086 3.56226 17.0639 3.56226C15.1252 3.56226 13.4333 4.60038 12.5 6.14767C11.5667 4.60038 9.87487 3.56226 7.93617 3.56226C4.99144 3.56226 2.60425 5.94944 2.60425 8.89418C2.60425 9.56736 2.73425 10.2088 2.96185 10.8018C4.72492 15.8731 12.5001 21.438 12.5001 21.438C12.5001 21.438 20.2752 15.8731 22.0383 10.8018C22.2659 10.2088 22.3959 9.56736 22.3959 8.89418Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="pl-5">
              <img src="../assets/images/iphone-adapter.png" alt="">
            </div>
            <div class="w-full text-center font-bold">
              Wireless Charger
            </div>
            <div class="font-bold text-red-500 text-center">
              $ 55.55
            </div>
          </div>
          <div class="w-[230px] h-[300px] rounded-[10px] border-[1px]
          flex flex-col gap-2 relative">
            <div class="w-[45px] h-[45px] rounded-[50%] justify-center items-center
             bg-red-500 absolute right-4 top-5 flex hover:bg-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M22.3959 8.89418C22.3959 5.94944 20.0086 3.56226 17.0639 3.56226C15.1252 3.56226 13.4333 4.60038 12.5 6.14767C11.5667 4.60038 9.87487 3.56226 7.93617 3.56226C4.99144 3.56226 2.60425 5.94944 2.60425 8.89418C2.60425 9.56736 2.73425 10.2088 2.96185 10.8018C4.72492 15.8731 12.5001 21.438 12.5001 21.438C12.5001 21.438 20.2752 15.8731 22.0383 10.8018C22.2659 10.2088 22.3959 9.56736 22.3959 8.89418Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="pl-5">
              <img src="../assets/images/iphone-adapter.png" alt="">
            </div>
            <div class="w-full text-center font-bold">
              Wireless Charger
            </div>
            <div class="font-bold text-red-500 text-center">
              $ 55.55
            </div>
          </div>
        </div>
    </div>
</template>