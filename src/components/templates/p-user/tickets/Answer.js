import styles from "./answer.module.css";

const Answer = ({ type,title,body,createdAt,user }) => {
  console.log(body,createdAt);
  
  return (
    <section
      className={type == "user" ? styles.userTicket : styles.adminticket}
    >
      <div className={styles.ticket_main}>
        <p>{new Date(createdAt).toLocaleDateString('fa-IR')} </p>
        <div className="flex items-center flex-row-reverse">
          <div className="flex items-center flex-row-reverse justify-end gap-[5px]">
            <p>{user.name}</p>
            <span className="w-full text-sm text-gray-500">کاربر</span>
          </div>
          <img src="/images/shahin.jpg" className="w-20 rounded-full" alt="" />
        </div>
      </div>
      <div className={styles.ticket_text}>
        <p>{body} </p>
      </div>
    </section>
  );
};

export default Answer;
