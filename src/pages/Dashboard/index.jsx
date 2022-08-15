import { Container } from "./style.js";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Simulação from "../../components/Simulação";
import Contact from "../../components/Contact";
import About from "../../components/About";
import Table from "../../components/Table";
import Marketing from "../../components/Marketing";

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <About />
      <Simulação />
      <Table />
      <Marketing />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Dashboard;
