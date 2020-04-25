var express = require('express');
var router = express.Router();
// 数据库
var db = require('../../config/mysql');

/**
 * @api {post} /api/dynamic/add 添加新的动态
 * @apiName AddDynamic
 * @apiGroup Dynamic
 *
 * @apiParam { Number } user_id 用户id.
 * @apiParam { Number } tag_id 标签id.
 * @apiParam { String } dynamic_content 动态内容.
 * @apiParam { String } pictrue 动态图片.
 * @apiParam { number } comment_number 评论数.
 * @apiParam { number } praise_number 点赞数.
 *
 * @apiSampleRequest /api/dynamic/add
 */

router.post("/add/", async (req, res) => {
	let { user_id, tag_id, dynamic_content, pictrue, comment_number, praise_number } = req.body;
	var sql =
		'INSERT INTO dynamic (user_id ,tag_id , dynamic_content , pictrue , comment_number ,praise_number, dynamic_createtime ) VALUES (?, ? , ? , ?, ?, ?, CURRENT_TIMESTAMP())';
	let { insertId, affectedRows } = await db.query(sql, [user_id, tag_id, dynamic_content, pictrue, comment_number, praise_number]);
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
 * @api {delete} /api/dynamic/ 删除指定id的动态
 * @apiName DeleteDynamic
 * @apiGroup Dynamic
 *
 * @apiParam { Number } id 动态id
 *
 * @apiSampleRequest /api/dynamic/
 */

router.delete('/', async (req, res) => {
	let { id } = req.body;
	var sql = 'DELETE FROM dynamic WHERE id = ?';
	let results = await db.query(sql, [id]);
	res.json({
		status: true,
		msg: "删除成功"
	});
});

/**
 * @api {get} /api/dynamic/detail 获取指定id的动态详情
 * @apiName DynamicDetail
 * @apiGroup Dynamic
 *
 * @apiParam { Number } id 文章id
 *
 * @apiSampleRequest /api/dynamic/detail
 */
router.get('/detail', async (req, res) => {
	let { id } = req.query;
	var sql = 'SELECT * FROM dynamic WHERE id = ?';
	let results = await db.query(sql, [id]);
	if(results.length==0){
		res.json({
			status: false,
			msg: "获取失败",
		});
		return false;
	}
	res.json({
		status: true,
		msg: "获取成功",
		data: results[0]
	});
});

/**
 * @api {get} /api/dynamic/userList 获取指定用户的动态列表
 * @apiName UserDynamicList
 * @apiGroup Dynamic
 *
 * @apiParam { Number } id 文章id
 *
 * @apiSampleRequest /api/dynamic/userList
 */
router.get('/userList', async (req, res) => {
	let { user_id } = req.query;
	var sql = 'SELECT * FROM dynamic WHERE user_id = ?';
	let results = await db.query(sql, [user_id]);
	if(results.length==0){
		res.json({
			status: false,
			msg: "获取失败",
		});
		return false;
	}
	res.json({
		status: true,
		msg: "获取成功",
		data: results
	});
});


// 获取所有文章列表,默认按照日期降序排序，分页 pagesize(一页数量) pageindex(第几页)
/**
 * 1   LIMIT 10    OFFSET 0
 * 2   LIMIT 10    OFFSET 10
 * 3   LIMIT 10    OFFSET 20
 * 4   LIMIT 10    OFFSET 30
 * ....
 * n   LIMIT 10    OFFSET 10*(n-1)
 */
/**
 * @api {get} /api/dynamic/list 获取所有动态列表
 * @apiDescription 注意：默认按照日期降序排序
 * @apiName DynamicList
 * @apiGroup Dynamic
 *
 * @apiParam { Number } pagesize 每一页文章数量.
 * @apiParam { Number } pageindex 第几页.
 *
 * @apiSuccess {Object[]} data 文章数组.
 * @apiSuccess {Number} total 文章总数.
 * 
 * @apiSampleRequest /api/dynamic/list
 */
router.get("/list", async (req, res) => {
	let sql = `SELECT * FROM dynamic `;
	let results=await db.query(sql, []);
	if(results.length==0){
		res.json({
			status: false,
			msg: "获取失败",
		});
		return false;
	}
	res.json({
		status: true,
		msg: "获取成功",
		data: results
	});
});

// });
// router.get("/list", async (req, res) => {
// 	let { pagesize, pageindex } = req.query;
// 	pagesize = parseInt(pagesize);
// 	var offset = pagesize * (pageindex - 1);
// 	var sql =
// 		`SELECT d.*, DATE_FORMAT(dynamic_createtime,"%Y-%m-%d %T") AS dynamic_time , t.name AS tag_name FROM dynamic d LEFT JOIN dynamic_tag t ON d.tag_id = t.id ORDER BY dynamic_createtime DESC LIMIT ? OFFSET ?;SELECT FOUND_ROWS() as total`;
// 	let results = await db.query(sql, [pagesize, offset]);
// 	res.json({
// 		status: true,
// 		msg: "获取成功",
// 		...results[1][0],
// 		data: results[0],
// 	});
// });

/**
 * @api {get} /api/dynamic/category 获取某分类下的动态
 * @apiDescription 注意：默认按照日期降序排序
 * @apiName DynamicCategory
 * @apiGroup Dynamic
 *
 * @apiParam { Number } id 分类id.
 * @apiParam { Number } pagesize 每一页文章数量.
 * @apiParam { Number } pageindex 第几页.
 *
 * @apiSampleRequest /api/dynamic/category
 */

router.get("/category", async (req, res) => {
	let { pagesize, pageindex, id } = req.query;
	pagesize = parseInt(pagesize);
	let offset = pagesize * (pageindex - 1);
	var sql =
		`SELECT d.*,DATE_FORMAT(dynamic_createtime,"%Y-%m-%d %T") AS dynamic_time, t.name AS tag_name FROM dynamic d LEFT JOIN dynamic_tag t ON d.tag_id = t.id ORDER BY create_date DESC  LIMIT ? OFFSET ? WHERE tag_id = ?`;
	let results = await db.query(sql, [pagesize, offset, id]);
	if(results.length==0){
		res.json({
			status: false,
			msg: "获取失败",
		});
		return false;
	}
	res.json({
		status: true,
		msg: "获取成功",
		data: results
	});
});


module.exports = router;
