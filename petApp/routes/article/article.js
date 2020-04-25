var express = require('express');
var router = express.Router();
// 数据库
var db = require('../../config/mysql');


/**
 * @api {get} /api/article/list 获取某分类下的文章列表
 * @apiDescription 注意：默认按照日期降序排序
 * @apiName ArticleCategory
 * @apiGroup Article
 *
 *
 * @apiSampleRequest /api/article/list
 */

router.get("/list", async (req, res) => {
	var sql = `SELECT * FROM article`;
	let results = await db.query(sql, []);
	if (results.length == 0) {
		res.json({
			status: false,
			msg: "获取成功",
		});
	} else {
		res.json({
			status: true,
			msg: "获取成功",
			data: results
		});
	}

});

/**
 * @api {get} /api/article/tag 获取tag名
 * @apiName ArticleTag
 * @apiGroup Tag
 * 
 * @apiParam { Number } id 父级id。一级分类的父类id=0;
 * 
 * @apiSampleRequest /api/article/tag
 */
router.get("/tag", async (req, res) => {
	var sql = 'SELECT * FROM article_tag';
	let results = await db.query(sql,[]);
	if (results.length == 0) {
		res.json({
			status: false,
			msg: "获取失败",
		});
	} else {
		res.json({
			status: true,
			msg: "获取成功",
			data: results
		});
	}
});


module.exports = router;
