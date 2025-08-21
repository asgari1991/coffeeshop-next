'use client';

import { showSwal } from '@/utils/helpers';
import React, { useEffect, useState } from 'react'
import { CiHeart } from "react-icons/ci";
function AddToWishlist({productID}) {
const [user, setUser] = useState({})
  useEffect(()=>{
    const authUser=async () => {
      const res=await fetch('/api/auth/me')
      console.log('res', res);
      if (res.status === 200) {
        const data = await res.json();
        setUser({...data});
      }
     
    }
     authUser()
  },[])
    const addToWishlist=async (event) => {
      event.preventDefault()
        if (!user._id) {
         return showSwal('برای افزودن به علاقه مندی ها باید وارد شوید','warning',  'ورود');}
        const wish={
          user:user._id,
          product:productID
        }
      const res=await fetch('/api/wishlist', {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(wish)
      })
      if (res.status === 201) {
        showSwal('محصول با موفقیت به علاقه مندی ها اضافه شد', 'success', 'فهمیدم')
      }
        
    }
  return (
   <div className="flex items-center gap-1" onClick={addToWishlist}>
             <CiHeart className="text-xl" />
             <a
               href="/"
               className="text-sm transition-all duration-200 hover:text-gray-500 hover:cursor-pointer"
             >
               افزودن به علاقه مندی ها
             </a>
           </div>
  )
}

export default AddToWishlist