import { db } from "../config/database.js";

function Listar(busca, callback) {
    let filtro = [];
    let ssql = "select id_cond_pagto, cond_pagto from tab_cond_pagto ";

    if (busca) {
        ssql += "where cond_pagto like ?";
        filtro.push('%' + busca + '%');
    }

    db.query(ssql, filtro, function(err, result) {
        if (err) {
            callback(err, []);
        } else {
            callback(undefined, result);
        }
    })
}

export default {Listar};