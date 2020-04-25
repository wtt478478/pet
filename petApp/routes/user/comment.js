var express = require('express');
var router = express.Router();
// 数据库
var db = require('../../config/mysql');

/**
 * @api {post} /api/comment/add 添加新的评论
 * @apiName AddComment
 * @apiGroup Comment
 *
 * @apiParam { Number } user_id 用户id.
 * @apiParam { Number } dynamic_id 标签id.
 * @apiParam { String } content 评论内容.
 *
 * @apiSampleRequest /api/comment/add
 */

router.post("/add/", async (req, res) => {
	let { user_id, dynamic_id, content } = req.body;
	var sql =
		'INSERT INTO comment (user_id ,dynamic_id , content , create_time ) VALUES (?, ? , ? , ?, ?, ?, CURRENT_TIMESTAMP())';
	let { insertId, affectedRows } = await db.query(sql, [user_id, dynamic_id , content ]);
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
 * @api {delete} /api/comment/delete 删除指定id的评论
 * @apiName DeleteComment
 * @apiGroup Comment
 *
 * @apiParam { Number } id 动态id
 *
 * @apiSampleRequest /api/comment/
 */

router.delete('/', async (req, res) => {
	let { id } = req.body;
	var sql = 'DELETE FROM comment WHERE id = ?';
	let results = await db.query(sql, [id]);
	res.json({
		status: true,
		msg: "删除成功"
	});
});

/**
 * @api {get} /api/comment/list 获取指定动态下的评论列表
 * @apiName CommentList
 * @apiGroup Comment
 *
 * @apiParam { Number } dynamic_id 动态id
 *
 * @apiSampleRequest /api/comment/list
 */
router.get('/list', async (req, res) => {
	let { dynamic_id } = req.query;
	var sql = 'SELECT * FROM comment WHERE dynamic_id = ?';
	let results = await db.query(sql, [dynamic_id]);
	res.json({
		status: true,
		msg: "获取成功",
		data: results
	});
});


module.exports = router;
