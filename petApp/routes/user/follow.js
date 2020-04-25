var express = require('express');
var router = express.Router();
// 数据库
var db = require('../../config/mysql');



/**
 * @api {get} /api/follow 获取用户关注的人
 * @apiName FollowList
 * @apiGroup Follow
 *
 * @apiParam { Number } user_id 用户id.
 *
 * @apiSampleRequest /api/follow
 */
router.get('/', async (req, res) => {
    let { user_id } = req.query;
    var sql = 'SELECT * FROM follow WHERE user_id = ? ';
    let results = await db.query(sql, [user_id]);
    if (results.length == 0) {
        res.json({
            status: false,
            msg: "无关注的人！"
        });
        return;
    }
    res.json({
        status: true,
        data: results
    });
});


module.exports = router;
