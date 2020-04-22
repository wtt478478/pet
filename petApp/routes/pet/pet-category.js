const express = require('express');
const router = express.Router();
// 数据库
let db = require('../../config/mysql');
const fs = require("fs");
const path = require("path");
/**
 * @api {get} /pet/category 获取所有宠物分类
 * @apiName petCategory
 * @apiGroup pet-Category
 * 
 *
 * @apiSampleRequest /pet/category
 */
router.get("/category", function (req, res) {
    let sql = `SELECT * FROM pets_category `;
    db.query(sql, [], function (results, fields) {
        //成功
        res.json({
            status: true,
            msg: "success!",
            data: results
        });
    });
});



/**
 * @api {get} /pet/category/sub 获取子级分类
 * @apiName category/sub
 * @apiGroup pet-Category
 *
 * @apiParam {Number} pId 父级分类id。注：获取一级分类pId = 1，获取根分类pId = 0;
 *
 * @apiSampleRequest /pet/category/sub
 */
router.get("/sub", function (req, res) {
    let { pId } = req.query;
    let sql = `SELECT * FROM pets_category WHERE pId = ? `;
    db.query(sql, [pId], function (results, fields) {
        //成功
        res.json({
            status: true,
            msg: "success!",
            data: results
        });
    });
});

module.exports = router;