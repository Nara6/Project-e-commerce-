<template>
    <div class="nav flex gap-x-4 mt-4 h-[70px] w-full justify-around">
      <div class="flex gap-x-5">
        <img src="../assets/images/logo1.png" alt="" class="w-[70px] h-[70px]">
        <p class="flex items-center text-[30px]" style="font-family: 'Roboto', sans-serif;text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">Nara Shop</p>
      </div>
      <div class="flex gap-x-7 items-center text-[20px]" style="font-family: 'Lato', sans-serif;">
        <router-link to="/about">About us</router-link>
        <router-link to="/product">Categories</router-link>
        <router-link to="/contact">Contact us</router-link>
      </div>
      <div class="flex gap-x-4">
        <div class="flex items-center">
        <img class="absolute h-[27px] ml-1" src="../assets/images/search.svg" alt="">
        <input type="search" name="gsearch" class="bg-gray-300 w-[350px] h-[35px] pl-8 rounded-xl placeholder:text-[13px] placeholder:italic" placeholder="Search">
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
          <router-link to="/wishlist">
            <img src="../assets/images/heart-solid.svg" alt="" class="h-[35px] ">
          </router-link>
          <router-link to="/cart">
            <img src="../assets/images/Vector.svg" alt="" class="h-[35px]">
          </router-link>
        </div>
      </div>
      </div>
    </div>
    <div class="w-full p-[50px]">
        
        <div class="text-[20px] font-[600] pb-4">
            Shopping Cart
        </div>
        <div class="relative w-full m-auto">
            <table class=" w-[65%] pt-7 absolute left-0">
                <tr class="w-full text-left
                 border-t-[2px] border-b-[2px] font-bold">
                    <th class="p-4 ">Items</th>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Price</th>
                 </tr>
                <tr class="w-full
                  font-bold ">
                    <td>
                        <img src="../assets/images/iphone.png" alt="" class="w-[150px] h-[150px]">
                    </td>
                    <td>Iphone 14 pro max</td>
                    <td>
                        <input type="number" value="1" class="w-[70px] h-[50px] bg-[#EEEEEE] p-3">
                    </td>
                    <td>$ 999.99</td>
                </tr>
                <tr class="w-full
                 font-bold ">
                    <td>
                        <img src="../assets/images/iphone.png" alt="" class="w-[150px] h-[150px]">
                    </td>
                    <td>Iphone 14 pro max</td>
                    <td>
                        <input type="number" value="1" class="w-[70px] h-[50px] bg-[#EEEEEE] p-3">
                    </td>
                    <td>$ 999.99</td>
                </tr>
                <tr class="w-full
                 font-bold ">
                    <td>
                        <img src="../assets/images/iphone.png" alt="" class="w-[150px] h-[150px]">
                    </td>
                    <td>Iphone 14 pro max</td>
                    <td>
                        <input type="number" value="1" class="w-[70px] h-[50px] bg-[#EEEEEE] p-3">
                    </td>
                    <td>$ 999.99</td>
                </tr>
                
            </table>
            <div class="absolute right-0 flex w-[30%] h-[350px] p-4 border-[1px] flex-col bg-[#F5F5F5]">
                <div class="text-[20px] border-b-[1px] w-full font-bold">
                    Summary (1Item)
                </div>
                <div class="flex flex-col pt-4 pb-4 gap-y-4 border-b-[1px]">
                    <div class="flex justify-between">
                        <span>Subtotal</span>
                        <span>$999.99</span>

                    </div>
                    <div class="flex justify-between">
                        <span>Shipping</span>
                        <span>-</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Est. Taxes</span>
                        <span>-</span>
                    </div>
                </div>
                <div class="flex justify-between pt-4">
                    <span>Total</span>
                    <span>$999.99</span>
                </div>
                <div class="flex justify-center pt-6 pb-2">
                    <router-link to="/cart/checkout">
                        <button class="w-[200px] p-3 bg-black text-[15px] text-white font-bold rounded-[20px]">Continues Checkout</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>