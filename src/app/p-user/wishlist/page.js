import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import styles from "@/styles/p-user/wishlist.module.css";
import Product from "@/components/templates/p-user/wishlist/Product";
import connectToDB from "@/configs/db";

import WishlistModel from "@/models/Wishlist";
import { authUser } from "@/utils/auth.server";

const page = async () => {
  connectToDB();
  const user = await authUser();
  const wishlist = await WishlistModel.find({ user: user._id }).populate(
    "product"
  );
 

  return (
    <UserPanelLayout>
      <main>
        <h1 className={styles.title}>
          <span className="bg-white px-4 mr-16">علاقه مندی ها</span>
        </h1>
        <div className="flex flex-wrap gap-5 justify-around px-[30px]">
          {wishlist.length &&
            wishlist.map((wish) => (<Product key={wish._id} productID={String(wish.product._id)} name={wish.product.name} price={wish.product.price} score={wish.product.score} />))}
        </div>

        {wishlist.length === 0 && (
          <p className="text-white bg-panelBrown py-[0.7rem] px-8 w-max my-60 mx-auto text-2xl rounded">محصولی وجود ندارد</p>
        )}
      </main>
    </UserPanelLayout>
  );
};

export default page;
