import { FaRegStar, FaStar } from "react-icons/fa";
const Comment = ({username,body,email,score,date}) => {
  return (
    <section className="flex items-center gap-[25px] font-shabnam mt-4 pb-[25px] border-b border-b-[rgba(0,0,0,0.218)]">
      <img src="/images/shahin.jpg" className=' w-[60px] h-[60px] rounded-full' alt="" />
      <div>
        <div className="flex items-baseline justify-between">
          <div className="flex gap-[5px] items-baseline">
            <strong>{username}</strong>
            <p> {new Date(date).toLocaleDateString("fa-IR")}</p>
          </div>
          <div className="flex gap-1 text-orange-400">
                {new Array(score).fill(0).map((item,index)=>(
            <FaStar key={index} />
                      ))}
                      {new Array(5-score).fill(0).map((item,index)=>(
            <FaRegStar key={index} />
                      ))}
            
          </div>
        </div>
        <p className="mb-0.5 mt-2.5">
          {body}
        </p>
      </div>
    </section>
  );
};

export default Comment;
