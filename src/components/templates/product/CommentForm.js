import { IoMdStar } from "react-icons/io";
import styles from "./commentForm.module.css";
import { useEffect, useState } from "react";
import { showSwal } from "@/utils/helpers";


const CommentForm = ({productID}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [score, setScore] = useState(5);
  const [isSaveUserInfo,setIsSaveUserInfo]=useState(false)
  const setCommentScore =(scoreValue) => {
    setScore(scoreValue);
   showSwal("امتیاز شما ثبت شد", "success", "ثبت امتیاز");
  }
  useEffect(()=>{
const userInfo=JSON.parse(localStorage.getItem('userInfo'))
setUsername(userInfo?.username)
setEmail(userInfo?.email)
  },[])
  const submitComment =async (e) => {
    e.preventDefault();
    if (!username || !email || !body) {
      showSwal("لطفا همه فیلدها را پر کنید", "error", "خطا");
      return;
    }
    const userInfo={
      username,
      email
    }
    localStorage.setItem("userInfo",JSON.stringify(userInfo))
    const comment={
      username,
      email,
      body,
      score,
      productID: productID
    }
    const res=await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
    console.log(res);
    if(res.status === 201){
      showSwal("دیدگاه شما با موفقیت ثبت شد", "success", "ثبت دیدگاه");
      setUsername("");
      setEmail("");
      setBody("");
      setScore(5);
    
  }
}
  return (
    <div className="w-full">
      <p className="text-sm font-shabnamBold h-[30px]">دیدگاه خود را بنویسید</p>
      <p>
        نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند{" "}
        <span className="text-red-600">*</span>
      </p>
      <div className={`${styles.rate} flex gap-[14px] items-baseline`}>
        <p className="relative bottom-1">امتیاز شما :</p>
        <div
          className="flex gap-0.5 pt-[0.2rem] text-lg text-gray-400"
          dir="rtl"
        >
          <IoMdStar onClick={()=>setCommentScore(5)} />
          <IoMdStar onClick={()=>setCommentScore(4)} />
          <IoMdStar onClick={()=>setCommentScore(3)} />
          <IoMdStar onClick={()=>setCommentScore(2)} />
          <IoMdStar onClick={()=>setCommentScore(1)} />
        </div>
      </div>
      <div className="grid gap-2.5 w-full mt-8">
        <label htmlFor="">
          دیدگاه شما
          <span className="text-red-500">*</span>
        </label>
        <textarea
          id="comment"
          name="comment"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          cols="45"
          rows="8"
          required=""
          placeholder=""
          className="rounded-md bg-white font-shabnam text-black border border-[rgb(103 103 103 /34%)] p-4 resize-none"
        ></textarea>
      </div>
      <div className="flex gap-[30px]">
        <div className="grid gap-2.5 w-full mt-8">
          <label htmlFor="">
            نام
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-white text-black font-shabnam rounded-sm p-[0.8rem] border border-[rgb(103 103 103 /34%)]"
          />
        </div>
        <div className="grid gap-2.5 w-full mt-8">
          <label htmlFor="">
            ایمیل
            <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white text-black font-shabnam rounded-sm p-[0.8rem] border border-[rgb(103 103 103 /34%)]"
          />
        </div>
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" name="" id="" value={isSaveUserInfo} onChange={(event)=>setIsSaveUserInfo((prevValue)=>!prevValue)} />
        <p className="text-sm font-shabnam">
          {" "}
          ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی
          می‌نویسم.
        </p>
      </div>
      <button className="py-3 px-[1.2rem] cursor-pointer mt-8 border-none transition-all duration-200 font-shabnam text-white bg-brandGreen hover:bg-mainBrown"
      onClick={submitComment}>
        ثبت
      </button>
    </div>
  );
};

export default CommentForm;
