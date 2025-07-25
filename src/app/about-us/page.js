import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";

import { authUser } from "@/utils/auth";


const page = async () => {
  const user = await authUser();

  return (
    <>
    
      <Navbar isLogin={user ? true : false}/>
       <Breadcrumb route={"درباره ما"} /> 
      <div className="text-black text-right max-w-[1222px] w-full px-[15px] mr-auto ml-auto mb-16">
        <section className="grid grid-cols-3 text-gray-500 leading-8 gap-[110px]" dir="rtl">
          <div className="grid gap-[5px] text-black">
            <span className="text-[14px]">درباره ما</span>
            <p className="text-[36px] leading-[2.4rem]">فنجان داغ خوارزمی قهوه ست</p>
          </div>
          <p>
            تجربه‌ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان ضامن این
            ویژگی‌هاست. از ویژگی‌های بارز مجموعه قهوه ست واردات مواد اولیه راسا
            به وسیله مدیریت مجموعه و انتخاب بهترین مواد اولیه جهت تولید قهوه
            است.
          </p>
          <p>
            مجموعه قهوه ست اولین مجموعه مرتبط با قهوه در ایران است که در سال
            2007 به عضویت انجمن تخصصی قهوه اروپا (Speciality coffee association
            of Europe) در آمده است.
          </p>
        </section>
        <main className="grid grid-cols-2 gap-[90px] mt-[150px] mb-[150px]">
          <div>
            <p  className="mt-5" dir='rtl'>
              مسیری را که بنیان‌گذاران «قهوه ست» در دهه 20 شمسی آغاز کرده‌اند
              اکنون وارد مرحله جدیدی شده است و مفتخریم اعلام کنیم در بهمن ماه 94
              موفق به اخذ مجوزهای مربوطه از وزارت بهداشت درمان و آموزش پزشکی و
              سازمان غذا دارو شده‌ایم و تولید سنتی و محدود قهوه را تبدیل به
              تولید صنعتی و انبوه کرده‌ایم.
            </p>
            <p className="mt-5" dir='rtl'>
              از دیگر افتخارات مجموعه «قهوه ست» اخذ مدرک دیپلم دانش قهوه از
              انجمن قهوه تخصصی اروپا در فروردین ماه سال 95 است. (SCAE Coffee
              Diploma)
            </p>
            <p className="mt-5" dir='rtl'>
              امید داریم با کسب دانش روز دنیا در این صنعت ارتقا کیفیت و تنوع
              محصول در حد استانداردهای جهانی را در آینده‌ای نزدیک شاهد باشیم.
            </p>
            <p className="mt-5 dir='rtl'">صاحب امتیاز: شرکت فنجان داغ خوارزمی</p>
          </div>
          <div>
            <span className="text-[14px]">Set Coffee</span>
            <p className="text-[35px]">داستان قهوه ست</p>
            <p>
              تجربه‌ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان ضامن این
              ویژگی‌هاست. از ویژگی‌های بارز مجموعه قهوه ست واردات مواد اولیه
              راسا به وسیله مدیریت مجموعه و انتخاب بهترین مواد اولیه جهت تولید
              قهوه است.
            </p>
            <p>
              مجموعه قهوه ست اولین مجموعه مرتبط با قهوه در ایران است که در سال
              2007 به عضویت انجمن تخصصی قهوه اروپا (Speciality coffee
              association of Europe) در آمده است و بسیاری از دوره‌های مربوط به
              فرآوری قهوه را مدیریت این مجموعه به صورت تخصصی در کارگاه‌های
              آموزشی این انجمن و همچنین کارگاه‌های تخصصی فرآوری قهوه به خصوص در
              زمینه بو دادن قهوه(Roasting) را در کشور آمریکا که از پیشگامان این
              صنعت است را گذرانده است. اکنون با پشتوانه دستاوردهای گذشته و
              تکنولوژی روز دنیا وارد مرحله تولید قهوه به صورت صنعتی و گسترده
              شده‌ایم و مفتخریم اعلام کنیم که «قهوه ست» از این پس یک نام تجاری
              صنعتی در صنعت قهوه ایران است
            </p>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default page;
