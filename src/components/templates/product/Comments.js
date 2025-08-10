import Comment from "@/components/modules/comment/Comment";

import CommentForm from "./CommentForm";

const Comments = ({comments,productID}) => {
  return (
    <div>
      <p>نظرات ({comments.filter(comment=>comment.isAccept).length}) :</p>
      <hr />

      <main className="flex gap-[50px]">
        <div className='w-[50%]'>
          <p>
            7 دیدگاه برای کپسول قهوه SETPRESSO سازگار با دستگاه نسپرسو ( GOLD )
            ده -10- عددی
          </p>
          <div>
            {comments.map(comment=>comment.isAccept && <Comment key={comment._id} {...comment} />)}
            
          </div>
        </div>
        <div className="w-[50%]">
          <CommentForm productID={productID} />
        </div>
      </main>
    </div>
  );
};

export default Comments;
