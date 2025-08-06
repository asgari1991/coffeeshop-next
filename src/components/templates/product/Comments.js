import Comment from "@/components/modules/comment/Comment";

import CommentForm from "./CommentForm";

const Comments = ({comments}) => {
  return (
    <div>
      <p>نظرات (7) :</p>
      <hr />

      <main className="flex gap-[50px]">
        <div className='w-[50%]'>
          <p>
            7 دیدگاه برای کپسول قهوه SETPRESSO سازگار با دستگاه نسپرسو ( GOLD )
            ده -10- عددی
          </p>
          <div>
            {comments.map(comment=><Comment key={comment._id} {...comment} />)}
            
          </div>
        </div>
        <div className="w-[50%]">
          <CommentForm />
        </div>
      </main>
    </div>
  );
};

export default Comments;
