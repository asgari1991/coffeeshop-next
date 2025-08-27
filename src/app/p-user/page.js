import Layout from '@/components/layouts/UserPanelLayout'
import Box from "@/components/templates/p-user/index/Box";
import Tickets from "@/components/templates/p-user/index/Tickets";
import Orders from "@/components/templates/p-user/index/Orders";
const Index = () => {
  return (
    <Layout>
        <main>
        <section className="flex flex-wrap gap-5 mt-12 px-10 ">
          <Box title="مجموع تیکت ها " value="20" />
          <Box title="مجموع کامنت ها " value="0" />
          <Box title="مجموع سفارشات" value="2" />
          <Box title="مجموع علاقه مندی ها" value="10" />
        </section>
        <section className="flex p-10 gap-2.5">
          <Tickets />
          <Orders />
        </section>
      </main>
    </Layout>
  )
}

export default Index