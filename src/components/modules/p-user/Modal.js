import { IoClose } from "react-icons/io5";

const Modal = ({ hideModal, title, children }) => {
  return (
    <div className="fixed inset-0 w-full h-screen p-4 flex justify-center z-[99]">
      <div onClick={hideModal} className="fixed inset-0 w-full h-screen bg-black/40 z-[99]"></div>
      <div className="w-[600px] my-36 mx-auto bg-white rounded-md p-4 z-[999] h-fit">
        <div className="flex justify-between pb-2 border-b border-black/30">
          <span>{title}</span>
          <IoClose onClick={hideModal} className=" cursor-pointer" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
