import { db } from "../config/database.js";

function DashboardClientes(callback) {
    let ssql = "select c.nome, sum(p.vl_total) as vl_total ";
    ssql += "from tab_pedido p ";
    ssql += "join tab_cliente c on (c.id_cliente = p.id_cliente) ";
    ssql += "where p.status = 'F' ";
    ssql += "group by c.nome ";
    ssql += "order by 2 desc ";
    ssql += "limit 5 ";

    db.query(ssql, [], function(err, result) {
        if (err) {
            callback(err, []);
        } else {
            let json = [["Cliente", "Vendas"]];
            result.map((cli) => {
                json.push([cli.nome, cli.vl_total]);
            });

            callback(undefined, json);
        }
    });
}

function DashboardVendas(callback) {
    let filtro = [];
    let ssql = "select month(p.dt_pedido) as mes, sum(p.vl_total) as vl_total ";
    ssql += "from tab_pedido p ";
    ssql += "where p.status = 'F' ";
    ssql += "group by month(p.dt_pedido) ";
    ssql += "order by 1 desc ";

    db.query(ssql, filtro, function(err, result) {
        if (err) {
            callback(err, []);
        } else {
            let json = [["Mês", "Vendas"]];
            result.map((r) => {
                json.push([r.mes, r.vl_total]);
            });

            callback(undefined, json);
        }
    });
}

function DashboardProdutos(callback) {
    let filtro = [];
    let ssql = "select o.descricao as produto, sum(i.vl_total) as vl_total ";
    ssql += "from tab_pedido p ";
    ssql += "join tab_pedido_item i on (i.id_pedido = p.id_pedido) ";
    ssql += "join tab_produto o on (o.id_produto = i.id_produto) ";
    ssql += "where p.status = 'F' ";
    ssql += "group by o.descricao ";
    ssql += "order by 2 desc ";
    ssql += "limit 5 ";

    db.query(ssql, filtro, function(err, result) {
        if (err) {
            callback(err, []);
        } else {
            let json = [["Produto", "Vendas"]];
            result.map((r) => {
                json.push([r.produto, r.vl_total]);
            });

            callback(undefined, json);
        }
    });
}

function DashboardCidades(callback) {
    let filtro = [];
    let ssql = "select c.cidade, (p.vl_total) as vl_total ";
    ssql += "from tab_pedido p ";
    ssql += "join tab_cliente c on (c.id_cliente = p.id_cliente) ";
    ssql += "where p.status = 'F' ";
    ssql += "group by c.cidade ";
    ssql += "order by 2 desc ";

    db.query(ssql, filtro, function(err, result) {
        if (err) {
            callback(err, []);
        } else {
            let json = [["Cidade", "Vendas"]];
            result.map((r) => {
                json.push([r.cidade, r.vl_total]);
            });

            callback(undefined, json);
        }
    });
}

export default { DashboardClientes, DashboardVendas, DashboardProdutos, DashboardCidades };