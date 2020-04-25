const express = require('express');
const router = express.Router();
// 数据库
let db = require('../../config/mysql');
const fs = require("fs");
const path = require("path");
/**
 * @api {get} /api/pet/category 获取所有宠物分类
 * @apiName petCategory
 * @apiGroup pet-Category
 * 
 *
 * @apiSampleRequest /api/category
 */
router.get("/", async function (req, res) {
    let sql = `SELECT * FROM pets_category `;
    let results = await db.query(sql, []);
    console.log(results)
    res.json({
        status: true,
        msg: "success!",
        data: results
    });
});



/**
 * @api {get} /api/pet/category/sub 获取指定id分类
 * @apiName category/sub
 * @apiGroup pet-Category
 *
 * @apiParam {Number} id 分类id。
 *
 * @apiSampleRequest /api/category/detail
 */
router.get("/detail", async function (req, res) {
    let { id } = req.query;
    console.log(id)
    let sql = `SELECT * FROM pets_category WHERE id = ? `;
    let result = await db.query(sql, [id]);
    // console.log(result)
    if (result) {
        //成功
        res.json({
            status: true,
            msg: "success!",
            data: result[0]
        });
    }else{
        res.json({
            status: false,
            msg: "fail!",
        });
    }


});

module.exports = router;