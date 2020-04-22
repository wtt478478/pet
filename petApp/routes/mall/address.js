var express = require('express');
var router = express.Router();
var request = require('request');
// 数据库
let db = require('../../config/mysql');

/**
 * @api {post} /api/address 添加收货地址
 * @apiName /address/add/
 * @apiGroup Address
 * 
 * @apiParam {String} name 收货人姓名.
 * @apiParam {String} tel 电话.
 * @apiParam {String} province 省.
 * @apiParam {String} city 市.
 * @apiParam {String} area 区.
 * @apiParam {String} street 街道.
 * @apiParam {String} [code] 邮编.
 * @apiParam {Number} isDefault 是否默认 1-默认,0-否.
 * 
 * @apiSampleRequest /api/address
 */
router.post('/', function(req, res) {
    let { name, tel, province, city, area, street, code, isDefault } = req.body;
    let { id } = req.user;
    let sql;
    if (isDefault == '1') {
        sql = `
        UPDATE addresses SET isDefault = 0 WHERE uid = ${id};
        INSERT INTO addresses(uid,name,tel,province,city,area,street,code,isDefault) VALUES(?,?,?,?,?,?,?,?,?);
        `
    } else {
        sql = `INSERT INTO addresses(uid,name,tel,province,city,area,street,code,isDefault) VALUES(?,?,?,?,?,?,?,?,?)`
    }
    db.query(sql, [id, name, tel, province, city, area, street, code, isDefault], function(results, fields) {
        res.json({
            status: true,
            msg: "添加成功！"
        });
    });
});
/**
 * @api {delete} /api/address 删除收货地址
 * @apiName addressDelete
 * @apiGroup Address
 * 
 * @apiParam {Number} id 收货地址id.
 * 
 * @apiSampleRequest /api/address
 */
router.delete("/", function(req, res) {
    let { id } = req.body;
    let sql = `DELETE FROM addresses WHERE id = ? `
    db.query(sql, [id], function(results, fields) {
        res.json({
            status: true,
            data: results,
            msg: "删除成功！"
        });
    })
});
/**
 * @api {put} /api/address 修改收货地址
 * @apiName addressUpdate
 * @apiGroup Address
 * 
 * @apiParam {Number} id 收货地址id.
 * @apiParam {String} name 收货人姓名.
 * @apiParam {String} tel 电话.
 * @apiParam {String} province 省.
 * @apiParam {String} city 市.
 * @apiParam {String} area 区.
 * @apiParam {String} street 街道.
 * @apiParam {String} [code] 邮编.
 * @apiParam {Number} isDefault 是否默认.1-默认,0-否.
 * 
 * @apiSampleRequest /api/address
 */
router.put("/", function(req, res) {
    let { id, name, tel, province, city, area, street, code, isDefault } = req.body;
    let { id: uid } = req.user;
    let sql;
    if (isDefault == '1') {
        sql = `
        UPDATE addresses SET isDefault = 0 WHERE uid = ${uid};
        UPDATE addresses SET uid = ?,name = ?,tel = ?,province = ?,city = ?,area = ?,street = ?,code = ?,isDefault = ? WHERE id = ?;
        `
    } else {
        sql = `UPDATE addresses SET uid = ?,name = ?,tel = ?,province = ?,city = ?,area = ?,street = ?,code = ?,isDefault = ? WHERE id = ?`
    }
    db.query(sql, [uid, name, tel, province, city, area, street, code, isDefault, id], function(results, fields) {
        res.json({
            status: true,
            msg: "修改成功！"
        });
    });
});

/**
 * @api {get} /api/address/list 获取收货地址列表
 * @apiName /address/list/
 * @apiGroup Address
 * 
 * @apiSampleRequest /api/address/list
 */
router.get('/list', function(req, res) {
    let { id } = req.user;
    var sql = `SELECT * FROM addresses WHERE uid = ? `
    db.query(sql, [id], function(results, fields) {
        if (!results.length) {
            res.json({
                status: false,
                msg: "暂无收货地址！"
            });
            return false;
        }
        res.json({
            status: true,
            data: results,
            msg: "获取成功！"
        });
    })
});

/**
 * @api {get} /api/address/detail 根据id获取收货地址详情
 * @apiName /address/detail/
 * @apiGroup Address
 * 
 * @apiParam {Number} id 收货地址id.
 * 
 * @apiSampleRequest /api/address/detail
 */
router.get("/detail", function(req, res) {
    let { id } = req.query;
    var sql = `SELECT * FROM addresses WHERE id = ? `
    db.query(sql, [id], function(results, fields) {
        if (!results.length) {
            res.json({
                status: false,
                msg: "暂无收货地址信息！"
            });
            return false;
        }
        res.json({
            status: true,
            data: results[0],
            msg: "获取成功！"
        });
    })
})

module.exports = router;