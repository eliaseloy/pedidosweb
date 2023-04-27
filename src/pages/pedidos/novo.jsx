import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import "./pedidos.css";

function Novo() {
    return <>
        <Navbar />
        <div className="container-fluid mt-page form-pedido">
            <div className="ms-4 d-flex justify-content-between">
                <h2 className="d-inline">Novo Pedido</h2>
                <Link className="btn btn-success ms-5 mb-2" to="/pedidos/novo">Salvar Pedido</Link>
    
            </div>
        </div>
    </>
}

export default Novo;