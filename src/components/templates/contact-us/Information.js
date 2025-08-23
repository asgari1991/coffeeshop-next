import {
  FaEnvelopeOpenText,
  FaInternetExplorer,
  FaPhone,
  FaTelegramPlane,
} from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";
import { BiSolidContact } from "react-icons/bi";

const Information = () => {
  return (
    <section className='w-1/2 mt-12'>
      <span className="text-gray-600 text-sm">تماس با ما</span>
      <p className="text-2xl mb-8 mt-4">اطلاعات تماس</p>
      <div className="flex flex-row-reverse justify-start gap-[14px] items-start text-gray-500">
        <PiCoffeeFill className="w-8 h-8" />
        <p className="text-base mb-8 mt-4">شرکت فنجان داغ خوارزمی (کارخانه قهوه ست )</p>
      </div>
      <div className="flex flex-row-reverse justify-start gap-[14px] items-start text-gray-500">
        <FaInternetExplorer className="w-8 h-8" />
        <p className="text-base mb-8 mt-4">set-coffee.com</p>
      </div>
      <div className="flex flex-row-reverse justify-start gap-[14px] items-start text-gray-500">
        <BiSolidContact className="w-8 h-8" />
        <p className="text-base mb-8 mt-4">
          {" "}
          تهران. پاکدشت . شهرک صنعتی خوارزمی. فاز 2 . بلوار بهارستان. خیابان
          ماگنولیا بلوک آ117{" "}
        </p>
      </div>
      <div className="flex flex-row-reverse justify-start gap-[14px] items-start text-gray-500">
        <FaPhone className="w-8 h-8" />
        <p className="text-base mb-8 mt-4">021-36479228</p>
      </div>
      <div className="flex flex-row-reverse justify-start gap-[14px] items-start text-gray-500">
        <FaEnvelopeOpenText className="w-8 h-8"/>
        <p className="text-base mb-8 mt-4">offee[at]set-coffee.com</p>
      </div>
      <div className="flex flex-row-reverse justify-start gap-[14px] items-start text-gray-500">
        <FaEnvelopeOpenText className="w-8 h-8"/>
        <p className="text-base mb-8 mt-4">whole[at]set-coffee.com</p>
      </div>
      <div className="flex flex-row-reverse justify-start gap-[14px] items-start text-gray-500">
        <FaTelegramPlane className="w-8 h-8"/>
        <p className="text-base mb-8 mt-4">تماس با مدیریت از طریق واتساپ و یا تلگرام : 09366726563</p>
      </div>
    </section>
  );
};

export default Information;
