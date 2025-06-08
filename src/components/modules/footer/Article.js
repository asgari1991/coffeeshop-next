import Link from "next/link";
const Article = ({ title, img, comments, date, href }) => {
  return (
    <Link href={href} className="flex gap-4 items-center flex-row-reverse my-4">
      <img width={75} height={65} src={img} alt="" />
      <div>
        <p className='font-shabnamBold'>{title}</p>
        <div className="flex justify-end gap-[14px] text-white/50 pt-2">
          <p>{comments}</p>
          <p dir="rtl">{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default Article;
