import BarChart from "assets/css/components/BarChart";
import DataTable from "assets/css/components/DataTable";
import DonutChart from "assets/css/components/DonutChart";
import Footer from "assets/css/components/Footer";
import NavBar from "assets/css/components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">DASHBOARD DE VENDAS</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Taxa de sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Taxa de sucesso (%)</h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3"><h2 className="text-primary">Todas vendas</h2></div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
