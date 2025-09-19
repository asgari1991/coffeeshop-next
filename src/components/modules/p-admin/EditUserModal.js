import { IoClose } from "react-icons/io5";
import styles from "@/styles/p-user/accountDetails.module.css";
import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { showSwal } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import { validatePassword } from "@/utils/auth";
const EditUserModal = ({ hideModal, title, selectedUser }) => {
    const [name, setName] = useState(selectedUser?.name || "");
      const [email, setEmail] = useState(selectedUser?.email || "");
      const [phone, setPhone] = useState(selectedUser?.phone || "");
      const [userID,setUserID]=useState(selectedUser?._id || "")
      const [password,setPassword]=useState("")
      const router=useRouter()
      const updateUser = async () => {
          // Validation (You)
          if(!name || !email || !phone ){
            showSwal("لطفا تمامی فیلدها را پر کنید","error","فهمیدم")
          }
      
          const userNewInfos = {
            userID,
            name,
            email,
            phone,
           
          };
      
          const res = await fetch("/api/user", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userNewInfos),
          });
      
          if (res.status === 200) {
            swal({
              title: "اطلاعات مورد نظر با موفقیت آپدیت شد",
              icon: "success",
              buttons: "فهمیدم",
            }).then(()=>{
                hideModal()
                router.refresh()
            })}
        }
        const changePassword=async()=>{
          const isValidPassword=validatePassword(password)
          if(!isValidPassword){
            showSwal("رمز عبور باید بیش از 8 کاراکتر و داری حرف بزرگ و کوچک و کاراکتر خاص باشد","error","فهمیدم")
            return}
            const res=await fetch("/api/user/password",{
              method:"PUT",
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify({id:userID,password})
            })
            if(res.status===200){
              swal({
                title: "رمز عبور با موفقیت تغییر کرد",
                icon: "success",
                buttons: "فهمیدم",
              })
            }
          }
  return (
    <div className="fixed inset-0 w-full h-screen p-4 flex justify-center z-[99]">
      <div onClick={hideModal} className="fixed inset-0 w-full h-screen bg-black/40 z-[99]"></div>
      <div className="w-[1000px] my-36 mx-auto bg-white rounded-md p-4 z-[999] h-[550px]">
        <div className="flex justify-between pb-2 border-b border-black/30">
          <span>{title}</span>
          <IoClose onClick={hideModal} className=" cursor-pointer" />
        </div>
         <main>
            <div className={`${styles.details} p-5`}>
               
                <div className="flex items-end w-full gap-[30px]">
                  <section className="flex w-full flex-col gap-[30px]">
                    <div>
                      <label>نام کاربری</label>
                      <input
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="لطفا نام کاربری خود را وارد کنید"
                        type="text"
                      />
                    </div>
                    <div>
                      <label>ایمیل</label>
                      <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="لطفا ایمیل خود را وارد کنید"
                        type="text"
                      />
                    </div>
                    <div>
                      <label>شماره تماس</label>
                      <input
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        placeholder="لطفا شماره تماس خود را وارد کنید"
                        type="number"
                      />
                    </div>
                  </section>
                  <section className="flex w-full flex-col gap-5">
                    <div className={styles.uploader}>
                      <img src="/images/shahin.jpg" alt="" className="w-[200px] block rounded-full border-2 border-panelBrown" />
                      <div className=" flex flex-col mt-2.5 gap-2.5 items-baseline relative w-full">
                        <div className="w-full flex flex-col mt-2.5 gap-2.5 items-baseline relative">
                          <button className="w-full mt-[38px]">
                            <IoCloudUploadOutline />
                            تغییر
                          </button>
                          <input type="file" name="" id="" className=" absolute block w-full h-full opacity-0 left-[1px] top-1 cursor-pointer " />
                        </div>
                        <button>
                          <MdOutlineDelete />
                          حذف
                        </button>
                      </div>
                    </div>
                    <div>
                      <label>رمز عبور</label>
                      <div className="flex items-baseline gap-2.5">
                        <input type="password" onChange={(event)=>setPassword(event.target.value)} />
                        <button className="w-[120px]" onClick={changePassword}>تغییر رمز عبور</button>
                      </div>
                    </div>
                  </section>
                </div>
                <button
                  type="submit"
                 onClick={updateUser}
                  className={styles.submit_btn}
                >
                  ثبت تغییرات
                </button>
              </div>
            </main>
      </div>
    </div>
  );
};

export default EditUserModal;
