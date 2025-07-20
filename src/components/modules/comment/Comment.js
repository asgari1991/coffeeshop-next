import { FaStar } from "react-icons/fa";
const Comment = () => {
  return (
    <section className="flex items-center gap-[25px] font-shabnam mt-4 pb-[25px] border-b border-b-[rgba(0,0,0,0.218)]">
      <img src="/images/shahin.jpg" className=' w-[60px] h-[60px] rounded-full' alt="" />
      <div>
        <div className="flex items-baseline justify-between">
          <div className="flex gap-[5px] items-baseline">
            <strong>shahin</strong>
            <p>۲۸ آذر ۱۴۰۱</p>
          </div>
          <div className="flex gap-1 text-orange-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <p className="mb-0.5 mt-2.5">
          قهوه بسیار خوش عطر و طعمیه…کاش کم کم مدل های کپسول ها رو متنوع تر
          کنید.
        </p>
      </div>
    </section>
  );
};

export default Comment;
