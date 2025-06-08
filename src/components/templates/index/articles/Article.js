import { MdOutlineSms } from "react-icons/md";
import styles from "./article.module.css";
import { IoShareSocialOutline } from "react-icons/io5";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const Card = () => {
  return (
    <div className="relative overflow-hidden">
      <Link className={styles.img_container} href={"/article/123"}>
        <img
          src="./images/coffeemilk.jpg"
          alt="coffee milk"
        />
      </Link>
      <div className="date absolute top-3 right-3 py-[0.3rem] px-2 bg-white grid rounded text-black">
        <span>24</span>
        <span>بهمن</span>
      </div>
      <div className={styles.details}>
        <span className={styles.tag}>قهوه</span>
        <Link href={"/article/123"} className="title break-words my-[10px] leading-[1.4] block text-[23px]">
          مصرف قهوه با شیر برای کاهش التهاب
        </Link>
        <div>
          <p>نویسنده</p>
          <img
            src="https://secure.gravatar.com/avatar/665a1a4dc7cc052eaa938253ef413a78?s=32&d=mm&r=g"
            alt=""
          />
          <p>Mohebi</p>
          <div>
            <MdOutlineSms />
            <span>0</span>
          </div>
          <div className={styles.share}>
            <IoShareSocialOutline />
            <div className={styles.tooltip}>
              <Link href={"/"}>
                <FaTelegram />
              </Link>
              <Link href={"/"}>
                <FaLinkedinIn />
              </Link>
              <Link href={"/"}>
                <FaPinterest />
              </Link>
              <Link href={"/"}>
                <FaTwitter />
              </Link>
              <Link href={"/"}>
                <FaFacebookF />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
