import Link from "next/link";
const Promote = () => {
  return (
    <div className="readable bg-[#f3f3f3]">
      <div data-aos="fade-up-right" className="container max-w-[1222px] mx-auto">
        <main className="main flex justify-between flex-row-reverse mt-20 mb-12 text-right">
          <section className="font-shabnam text-black w-1/2">
            <span className="text-[32px] text-brandGreen pt-10 ">خرید قهوه ، به سبک حرفه ای ها</span>
            <p>زیبایی امروز رو با قهوه “ست” کنید</p>
            <img data-aos="fade-left" src="/images/coffee-image-1.jpg" alt="" />
          </section>
          <section className="club relative bg-no-repeat w-[60%] bg-[url('/images/clubset1.jpg')]">
            <div className="absolute bottom-[20px] left-0 p-[30px] w-[411px] bg-white">
              <span className="text-[32px] text-brandGreen">باشگاه مشتریان ست</span>
              <p className="mt-2.5">برای مشتریان وفادار قهوه ست</p>
            </div>
          </section>
        </main>
        <main className="main flex justify-between flex-row-reverse mt-20 mb-12 text-right">
          <img width={660} height={530} src="/images/Home32.jpg" alt="" />
          <section data-aos="fade-up" className="why_coffee font-shabnam text-black w-1/2 px-[30px] py-[80px]">
            <img
              className="logo w-[80px] ml-auto pt-10 "
              src="/images/coffee-svg-2.svg"
              alt=""
            />
            <p className="title text-[44px] text-[#711d1c]">چرا قهوه ست</p>
            <p>
              برخورداری از تجربه و قدمت کافی و آگاهی از ذایقه مصرف کنندگان
              راهنمای ما در برآورده ساختن نیاز مشتریان قهوه تخصصی (موج سوم) است
              .تجربه ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان قهوه
              ضامن این ویژگیها است.
            </p>
            <div className="flex flex-row-reverse justify-start">
              <Link href="/about-us">
                <button className="red_btn bg-[#711d1c] border border-[#711d1c] text-white px-4 py-3 cursor-pointer mt-8 font-shabnam">بیشتر بخوانید</button>
              </Link>
              <Link href="/category">
                <button className="px-4 py-3 cursor-pointer border border-gray-400 mt-8 text-black bg-white font-shabnam">فروشگاه</button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Promote;
