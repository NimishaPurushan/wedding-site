import Countdown from "../../components/Countdown";
import Invitation from "../../components/Invitation";
import Layout from "../../components/Layout";
export default function Home() {
  return (
    <Layout>
      <Countdown />
        <Invitation />
    </Layout>
  );
}