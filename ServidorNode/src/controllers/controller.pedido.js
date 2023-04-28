import modelPedido from "../models/model.pedido.js";

function Listar(req, res) {
    modelPedido.Listar(req.query.status, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
}

function ListarId(req, res) {
    modelPedido.ListarId(req.params.id_pedido, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(Object.keys(result).length > 0 ? 200 : 404).json(result);
        }
    });
}

function InserirPedido(req, res) {
    modelPedido.InserirPedido(req.body, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
}

function EditarPedido(req, res) {
    modelPedido.EditarPedido(req.params.id_pedido, req.body, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
}

function ExcluirPedido(req, res) {
    modelPedido.ExcluirPedido(req.params.id_pedido, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
}

function StatusPedido(req, res) {
    modelPedido.StatusPedido(req.params.id_pedido, req.body.status, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(Object.keys(result).length > 0 ? 200 : 404).json(result);
        }
    });
}

export default { Listar, ListarId, InserirPedido, EditarPedido, ExcluirPedido, StatusPedido };