var express = require('express');
var router = express.Router();
// 数据库
var db = require('../../config/mysql');

var jwt = require('jsonwebtoken');

/**
 * @api {post} /user/register 注册普通用户
 * @apiName UserRegister
 * @apiGroup User
 *
 * @apiParam { String } username 用户名.
 * @apiParam { String } password 密码. 
 * @apiParam { String } tel 手机号码.
 * 
 * @apiSampleRequest /api/user/register
 */
router.post('/register', async (req, res) => {
<<<<<<< HEAD
    let { username, tel, password } = req.body;
=======
    let { username,tel, password  } = req.body;
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96
    // 查询账户是否重名
    var sql = 'SELECT * FROM users WHERE tel = ?';
    let results = await db.query(sql, [tel]);
    // 重名
    if (results.length) {
        res.json({
            msg: "账户已存在",
            status: false,
        });
        return;
    }
    // 无重名
    var sql = 'INSERT INTO users (username,tel,password) VALUES (?,?,?)';
    let { insertId, affectedRows } = await db.query(sql, [username, tel, password]);

    let playload = {
        id: insertId
    };
    // 生成token
    let token = jwt.sign(playload, 'secret', { expiresIn: '24h' });
    if (affectedRows) {
        res.json({
            msg: "注册成功！",
            status: true,
            data: {
                token,
                id: insertId
            }

        });
    }
});
/**
 * @api {post} /user/login 登录普通用户
 * @apiName UserLogin
 * @apiGroup User
 *
 * @apiParam { String } tel 手机号.
 * @apiParam { String } password 密码.
 *
 * @apiSampleRequest /api/user/login
 */
router.post('/login', async (req, res) => {
    let { tel, password } = req.body;
<<<<<<< HEAD
    console.log(tel, password);
=======
    console.log(tel,password);
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96
    let sql = `SELECT * FROM users WHERE tel = ? AND password = ?`;
    let results = await db.query(sql, [tel, password]);

    if (results.length == 0) {
        res.json({
            msg: "账号或密码错误！",
            status: false,
        });
        return false;
    }
    let { id } = results[0];

    let playload = {
        id: id
    }

    // 生成token
    let token = jwt.sign(playload, 'secret', { expiresIn: '24h' });
    res.json({
        msg: "登陆成功！",
        status: true,
        data: {
            token,
            id
        }
    });
});
/**
 * @api {post} /user/login/forget 用户更改密码
 * @apiName UserLoginForget
 * @apiGroup User
 *
 * @apiParam { String } tel 手机号.
 * @apiParam { String } password 密码.
 *
 * @apiSampleRequest /api/user/login/forget
 */
router.put('/login/forget', async (req, res) => {
    let { tel, password } = req.body;
    console.log(tel, password);
    let sql = `UPDATE users SET password = ? WHERE tel= ?`;
    let { affectedRows } = await db.query(sql, [password, tel]);

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
 * @api {get} /user 获取用户个人资料
 * @apiName UserInfo
 * @apiGroup User
 *
 * @apiParam { Number } id 用户id.
 *
 * @apiSampleRequest /api/user
 */
router.get('/', async (req, res) => {
    let { id } = req.query;
    var sql = 'SELECT username, sex, tel, avatar, age, city, user_des, user_job, user_haunted, user_hobby, user_lover_pet, user_petCare_time FROM users WHERE id = ? ';
    let results = await db.query(sql, [id]);
    if (results.length == 0) {
        res.json({
            status: false,
            msg: "查无此人！"
        });
        return;
    }
    res.json({
        status: true,
        data: results[0]
    });
});

/**
 * @api {put} /user 编辑个人资料
 * @apiName UserUpdate
 * @apiGroup User
 *
 * @apiParam { Number } id 用户id.
 * @apiParam { String } username 用户名.
 * @apiParam { String } sex 性别.
 * @apiParam { String } tel 手机号码.
 * @apiParam { String } avatar 头像.
 * @apiParam { number } age 年龄.
 * @apiParam { String } city 所在城市.
 * @apiParam { String } user_des 用户描述.
 * @apiParam { String } user_job 职业.
 * @apiParam { String } user_haunted 常出没地.
 * @apiParam { String } user_hobby 兴趣爱好.
 * @apiParam { String } user_lover_pet 喜欢的宠物.
 * @apiParam { number } user_petCare_time 养宠年限.
 *
 * @apiSampleRequest /api/user
 */

router.put('/', async (req, res) => {
    console.log(req)
    let { id, username, sex, tel, avatar, age, city, user_des, user_job, user_haunted, user_hobby, user_lover_pet, user_petCare_time } = req.body;
    let sql = 'UPDATE users SET username = ?,sex = ?,tel = ?,avatar = ?,age = ?,city = ?,user_des = ?,user_job = ?,user_haunted = ?,user_hobby = ?,user_lover_pet = ?,user_petCare_time = ? WHERE id = ?';
    let { affectedRows } = await db.query(sql, [username, sex, tel, avatar, age, city, user_des, user_job, user_haunted, user_hobby, user_lover_pet, user_petCare_time, id]);
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
 * @api {delete} /user 删除账户
 * @apiName UserDelete
 * @apiGroup User
 *
 * @apiParam { Number } id 用户id.
 *
 * @apiSampleRequest /user
 */

// router.delete('/', async (req, res) => {
//     let { id } = req.query;
//     let sql = 'DELETE FROM user WHERE id = ?';
//     let results = await db.query(sql, [id]);
//     res.json({
//         status: true,
//         msg: "删除成功"
//     });
// })


/**
 * @api {get} /user/list 获取用户列表
 * @apiName UserList
 * @apiGroup User
 *
 * @apiSampleRequest /user/list
 */

// router.get('/list', async (req, res) => {
//     var sql = 'SELECT id,username,nickname,sex,tel FROM user';
//     let results = await db.query(sql);
//     res.json({
//         status: true,
//         data: results
//     });
// });

module.exports = router;
