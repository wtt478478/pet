var express = require('express');
var router = express.Router();
// 数据库
var db = require('../../config/mysql');


/**
 * @api {get} /api/pet 获取宠物资料
 * @apiName PetInfo
 * @apiGroup Pet
 *
 * @apiParam { Number } id 宠物id.
 *
 * @apiSampleRequest /api/pet
 */
router.get('/list', async (req, res) => {
    let { user_id } = req.query;
    var sql = 'SELECT id, pet_name, user_id, pet_sex, pet_avatar, pet_varieties_id, pet_birth, pet_company_time, pet_sterilization_state, pet_weight FROM pets WHERE user_id = ? ';
    let results = await db.query(sql, [user_id]);
    if (results.length == 0) {
        res.json({
            status: false,
            msg: "查无此宠物！"
        });
        return;
    }
    res.json({
        status: true,
        data: results
    });
});

/**
 * @api {put} /api/pet 编辑宠物资料
 * @apiName PetUpdate
 * @apiGroup Pet
 *
 * @apiParam { Number } id 宠物id.
 * @apiParam { String } pet_name 宠物名.
 * @apiParam { number } user_id 用户id.
 * @apiParam { String } pet_sex 性别.
 * @apiParam { String } pet_avatar 头像.
 * @apiParam { String } pet_varieties_id 品种id.
 * @apiParam { String } pet_birth 生日.
 * @apiParam { String } pet_company_time 陪伴时间.
 * @apiParam { String } pet_sterilization_state 绝育状态.
 * @apiParam { number } pet_weight 体重.
 *
 * @apiSampleRequest /api/pet
 */

router.put('/', async (req, res) => {
    console.log(req);
    let { id, pet_name, user_id, pet_sex, pet_avatar, pet_varieties_id, pet_birth, pet_company_time, pet_sterilization_state, pet_weight } = req.body;
    let sql = 'UPDATE pets SET pet_name = ?,user_id = ?,pet_sex = ?,pet_avatar = ?,pet_varieties_id = ?,pet_birth = ?,pet_company_time = ?,pet_sterilization_state = ?,pet_weight = ? WHERE id = ?';
    let { affectedRows } = await db.query(sql, [pet_name, user_id, pet_sex, pet_avatar, pet_varieties_id, pet_birth, pet_company_time, pet_sterilization_state, pet_weight, id]);
    if (!affectedRows) {
        res.json({
            status: false,
            msg: "修改失败！"
        });
        return;
    }
    res.json({
        status: true,
        msg: "修改成功！"
    })
});


/**
 * @api {delete} /api/pet 删除账户
 * @apiName PetDelete
 * @apiGroup Pet
 *
 * @apiParam { Number } id 用户id.
 *
 * @apiSampleRequest /api/pet
 */

router.delete('/', async (req, res) => {
    let { id } = req.body;
    console.log(res)
    let sql = 'DELETE FROM pets WHERE id = ?';
    let results = await db.query(sql, [id]);
    console.log(results)
    res.json({
        status: true,
        msg: "删除成功"
    });
})


/**
 * @api {post} /api/pet/add 增加宠物
 * @apiName AddPet
 * @apiGroup Pet
 * @apiParam { String } pet_name 宠物名.
 * @apiParam { String } pet_sex 性别.
 * @apiParam { String } pet_avatar 头像.
 * @apiParam { String } pet_varieties_id 品种id.
 * @apiParam { String } pet_birth 生日.
 * @apiParam { String } pet_company_time 陪伴时间.
 * @apiParam { String } pet_sterilization_state 绝育状态.
 * @apiParam { number } pet_weight 体重.
 *
 * @apiSampleRequest /api/pet/add
 */

router.post("/add/", async (req, res) => {
    let {user_id, pet_name, pet_sex, pet_avatar, pet_varieties_id, pet_birth, pet_company_time, pet_sterilization_state, pet_weight } = req.body;
    var sql =
        'INSERT INTO pets (user_id,pet_name ,pet_sex , pet_avatar , pet_varieties_id , pet_birth , pet_company_time , pet_sterilization_state, pet_weight) VALUES (?,?, ? , ? , ?, ?, ?, ?, ?)';
    let { insertId, affectedRows } = await db.query(sql, [user_id,pet_name, pet_sex, pet_avatar, pet_varieties_id, pet_birth, pet_company_time, pet_sterilization_state, pet_weight]);
    if (!affectedRows) {
        res.json({
            status: false,
            msg: "添加失败！"
        });
        return;
    }
    res.json({
        status: true,
        msg: "添加成功"
    });
});

/**
 * @api {get} /api/pet/category 获取所有宠物分类
 * @apiName petCategory
 * @apiGroup pet-Category
 * 
 *
 * @apiSampleRequest /api/pet/category
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
 * @api {get} /api/pet/category/sub 获取子级分类
 * @apiName category/sub
 * @apiGroup pet-Category
 *
 * @apiParam {Number} pId 父级分类id。注：获取一级分类pId = 1，获取根分类pId = 0;
 *
 * @apiSampleRequest /api/pet/category/sub
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
