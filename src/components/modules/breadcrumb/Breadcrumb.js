import Link from "next/link";

const Breadcrumb = ({ route }) => {
  return (
    <div className="bg-cover bg-center mb-10 px-[60px] pt-[182px]"
  style={{backgroundImage: "url('https://set-coffee.com/wp-content/uploads/2022/06/back1.jpg')"}}>
      <p className="text-center text-[4.4rem] text-white">{route}</p>
      <div className="flex items-center justify-center flex-row-reverse gap-2.5 pb-[3.8rem] text-gray-400">
        <Link href={"/"} className="inline-block mt-[5px] mb-[5px] uppercase text-[14px] leading-[1.2]">خانه</Link>
        <span>/</span>
        <p className="inline-block mt-[5px] mb-[5px] uppercase text-[14px] leading-[1.2]">{route}</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
