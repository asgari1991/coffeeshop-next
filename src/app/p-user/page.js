import Layout from "@/components/layouts/UserPanelLayout";
import Box from "@/components/templates/p-user/index/Box";
import Tickets from "@/components/templates/p-user/index/Tickets";
import Orders from "@/components/templates/p-user/index/Orders";
import { authUser } from "@/utils/auth.server";
import TicketModel from "@/models/Ticket";
import CommentModel from "@/models/Comment";
import WishlistModel from "@/models/Wishlist";
const Index = async () => {
  const user = await authUser();
  
  
  const tickets = await TicketModel.find({ user: user._id })
    .limit(3)
    .populate("department", "title")
    .lean().sort({_id:-1})
  const allTickets = await TicketModel.find({ user: user._id })
  const comments = await CommentModel.find({ user: String(user._id) })
  const wishlist = await WishlistModel.find({ user: user._id })

  return (
    <Layout>
      <main>
        <section className="flex flex-wrap gap-5 mt-12 px-10 ">
          <Box title="مجموع تیکت ها " value={allTickets.length} />
          <Box title="مجموع کامنت ها " value={comments.length} />
          <Box title="مجموع سفارشات" value="2" />
          <Box title="مجموع علاقه مندی ها" value={wishlist.length} />
        </section>
        <section className="flex p-10 gap-2.5">
          <Tickets tickets={JSON.parse(JSON.stringify(tickets))} />
          <Orders />
        </section>
      </main>
    </Layout>
  );
};

export default Index;
