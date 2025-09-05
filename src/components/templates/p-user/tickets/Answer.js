import styles from "./answer.module.css";

const Answer = ({ type }) => {
  return (
    <section
      className={type == "user" ? styles.userTicket : styles.adminticket}
    >
      <div className={styles.ticket_main}>
        <p>8:56 1402/10/21 </p>
        <div className="flex items-center flex-row-reverse">
          <div className="flex items-center flex-row-reverse justify-end gap-[5px]">
            <p>شاهین مشکل گشا</p>
            <span className="w-full text-sm text-gray-500">کاربر</span>
          </div>
          <img src="/images/shahin.jpg" className="w-20 rounded-full" alt="" />
        </div>
      </div>
      <div className={styles.ticket_text}>
        <p>درود خسته نباشید</p>
      </div>
    </section>
  );
};

export default Answer;
