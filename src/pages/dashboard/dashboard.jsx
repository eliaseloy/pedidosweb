import { useEffect, useState } from "react";
import Grafico from "../../components/grafico/grafico.jsx";
import Navbar from "../../components/navbar/navbar.jsx";

function Dashboard() {

    const [dados_clientes, setDadosClientes] = useState([]);
    const [dados_vendas, setDadosVendas] = useState([]);
    const [dados_produtos, setDadosProdutos] = useState([]);
    const [dados_cidades, setDadosCidades] = useState([]);

    function GraficoClientes() {
        setDadosClientes([
            ["Cliente", "Vendas"],
            ["microsoft", 5200],
            ["IBM", 4900],
            ["Apple", 4200],
            ["Facebook", 3210],
            ["Google", 2140]
        ]);
    }

    function GraficoVendas() {
        setDadosVendas([
            ["Mês", "Vendas"],
            ["Jan", 5200],
            ["Fev", 4900],
            ["Mar", 7200],
            ["Abr", 3210],
            ["Mai", 5362],
            ["Jun", 6200],
            ["Jul", 6852],
            ["Ago", 4210],
            ["Set", 5630],
            ["Out", 8452],
            ["Nov", 4250],
            ["Dez", 6325]
        ]);
    }

    function GraficoProdutos() {
        setDadosProdutos([
                ["Produto", "Vendas"],
                ["Teclado", 5200],
                ["Monitor", 4900],
                ["HD", 7200],
                ["Fone", 3210],
                ["Webcam", 5362]
        ]);
    }

    function GraficoCidades() {
        setDadosCidades([
            ["Cidade", "Vendas"],
            ["São Paulo", 5200],
            ["Rio de Janeiro", 4900],
            ["Teresina", 7200],
            ["Florianópolis", 3210],
            ["Belo Horizonte", 5362]
        ]);
    }

    function MontarGraficos() {
        GraficoClientes();
        GraficoVendas();
        GraficoProdutos();
        GraficoCidades();
    }

    useEffect(() => {
        MontarGraficos();
    }, []);

return <>
        <Navbar />

        <div className="container-fluid mt-page">
            <div className="ms-4 d-flex justify-content-between">
                <h2>Dashboard</h2>
                <button className="btn btn-primary me-4" onClick={MontarGraficos}>Atualizar</button>
            </div>

            <div className="row">
                <div className="col-md-6 p-5">
                        <Grafico titulo="Venda por cliente (top 5)"
                            chartType="Bar"
                            dados={dados_clientes}
                            legenda={false}
                        />
                </div>
                
                <div className="col-md-6 p-5">
                        <Grafico titulo="Vendas anual"
                            chartType="Line"
                            dados={dados_vendas}
                            legenda={false}
                        />
                </div>
                
                <div className="col-md-6 p-5">
                        <Grafico titulo="Vendas por Produto (Top 5)"
                            chartType="PieChart"
                            dados={dados_produtos}
                            legenda={true}
                        />
                </div>
                
                <div className="col-md-6 p-5">
                        <Grafico titulo="Vendas por Cidade (Top 5)"
                            chartType="BarChart"
                            dados={dados_cidades}
                            legenda={false}
                        />
                </div>
            </div>
        </div>
    </>

}

export default Dashboard;