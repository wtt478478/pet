var express = require('express');
var router = express.Router();
// 文件模块
const fs = require('fs');
const path = require('path');
//文件传输
// const formidable = require('formidable')
//图片处理
//uuid

/**
 * @api {post} /upload/common/ 通用图片上传API
 * @apiDescription 上传图片会自动检测图片质量，压缩图片，体积<2M，不限制尺寸，avatar存储至avatar文件夹,common存储至common文件夹
 * @apiName uploadCommon
 * @apiGroup Upload Image
 * 
 * @apiParam {File} file File文件对象;
 * @apiParam {String="common","avatar"} type 上传类型：avatar--头像上传；common--通用上传；
 * 
 * @apiSampleRequest /upload/common/
 * 
 * @apiSuccess {String} data 返回图片地址.
 */
router.post("/common", async function (req, res) {
	//上传类型

	let { type, size, url } = req.body;
	//判断是否为图片
	var reg = /^image\/\w+$/;
	var flag = reg.test(type);
	if (!flag) {
		res.json({
			status: false,
			msg: "格式错误，请选择一张图片!"
		});
		return;
	}
	//判断图片体积是否小于2M
	if (size >= 6 * 1024 * 1024) {
		res.json({
			status: false,
			msg: "图片体积太大，请压缩图片!"
		});
		return;
	}
	let fName = (new Date()).getTime();
	switch (type) {
		case "image/jpeg":
			fName = fName + ".jpg";
			break;
		case "image/png":
			fName = fName + ".png";
			break;
		default:
			fName = fName + ".png";
			break;
	}
	let uploadDir = "./public/images/common/" + fName;
	fs.rename(url, uploadDir, function (err) {
			res.json({
				status: true,
				msg: "图片上传处理成功!",
				data: `/images/common/` + fName
			});

	})
})


// 上传2

const multer = require('multer');

// 文件上传配置
const fileStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./public/images/common");
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});
// 导出配置

let fileUpdate= multer({ 'storage': fileStorage })


router.post('/', upload.fileUpdate.single('file'), function (req, res, next) {

	const file = req.file;
	console.log(file);
  
	//如果得到了文件，就返回上传成功
	if (file) {
	  return res.status(200).json({ success: true });
	} else {
	  return res.status(500).json({ success: false });
	}
  });

// /**
//  * @api {post} /upload/delete 删除图片API
//  * @apiDescription 如果上传错误的图片，通过此API删除错误的图片
//  * @apiName uploadDelete
//  * @apiGroup Upload Image
//  *
//  * @apiParam {String} src 图片文件路径,注：src='./images/goods/file.jpg'，必须严格按照规范路径，'./images'不可省略;
//  *
//  * @apiSampleRequest /upload/delete
//  */

router.post('/delete', function (req, res) {
	let realPath = path.resolve(__dirname, '../public/', req.body.src);
	fs.unlink(realPath, function (err) {
		if (err) throw err;
		res.json({
			status: true,
			msg: "success!"
		});
	})

});


module.exports = router;
