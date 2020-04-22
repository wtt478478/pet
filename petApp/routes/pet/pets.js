var express = require('express');
var router = express.Router();
// 数据库
var db = require('../../config/mysql');


/**
 * @api {get} /pet 获取宠物资料
 * @apiName PetInfo
 * @apiGroup Pet
 *
 * @apiParam { Number } id 宠物id.
 *
 * @apiSampleRequest /pet
 */
router.get('/', async (req, res) => {
    let { id } = req.query;
    var sql = 'SELECT pet_name, user_id, pet_sex, pet_avatar, pet_varieties_id, pet_birth, pet_company_time, pet_sterilization_state, pet_weight FROM pets WHERE id = ? ';
    let results = await db.query(sql, [id]);
    if (results.length == 0) {
        res.json({
            status: false,
            msg: "查无此宠物！"
        });
        return;
    }
    res.json({
        status: true,
        data: results[0]
    });
});

/**
 * @api {put} /pet 编辑宠物资料
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
 * @apiSampleRequest /pet
 */

router.put('/', async (req, res) => {
    let { id, pet_name, user_id, pet_sex, pet_avatar, pet_varieties_id, pet_birth, pet_company_time, pet_sterilization_state, pet_weight } = req.body;
    let sql = 'UPDATE users SET pet_name = ?,user_id = ?,pet_sex = ?,pet_avatar = ?,pet_varieties_id = ?,pet_birth = ?,pet_company_time = ?,pet_sterilization_state = ?,pet_weight = ? WHERE id = ?';
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
 * @api {delete} /pet 删除账户
 * @apiName PetDelete
 * @apiGroup Pet
 *
 * @apiParam { Number } id 用户id.
 *
 * @apiSampleRequest /pet
 */

router.delete('/', async (req, res) => {
    let { id } = req.query;
    let sql = 'DELETE FROM pets WHERE id = ?';
    let results = await db.query(sql, [id]);
    res.json({
        status: true,
        msg: "删除成功"
    });
})


/**
 * @api {post} /pet/add 增加宠物
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
 * @apiSampleRequest /pet/add
 */

router.post("/add/", async (req, res) => {
	let { pet_name, pet_sex, pet_avatar, pet_varieties_id, pet_birth, pet_company_time, pet_sterilization_state, pet_weight } = req.body;
	var sql =
		'INSERT INTO pets (pet_name ,pet_sex , pet_avatar , pet_varieties_id , pet_birth , pet_company_time , pet_sterilization_state, pet_weight) VALUES (?, ? , ? , ?, ?, ?, ?, ?)';
	let { insertId, affectedRows } = await db.query(sql, [pet_name ,pet_sex , pet_avatar , pet_varieties_id , pet_birth , pet_company_time , pet_sterilization_state, pet_weight]);
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



module.exports = router;
