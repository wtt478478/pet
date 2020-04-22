/*
 Navicat Premium Data Transfer

 Source Server         : app
 Source Server Type    : MySQL
 Source Server Version : 80015
 Source Host           : localhost:3306
 Source Schema         : pet_app

 Target Server Type    : MySQL
 Target Server Version : 80015
 File Encoding         : 65001

 Date: 18/04/2020 13:51:50
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for address
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '收货地址id',
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '姓名',
  `tel` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '手机号',
  `province` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '省',
  `city` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '市',
  `area` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '区',
  `street` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '街道',
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮编',
  `isDefault` int(3) NULL DEFAULT NULL COMMENT '是否默认',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '文章更新时间',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '文章标题',
  `content` varchar(8000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '文章内容',
  `main_photo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '文章主图',
  `create_time` timestamp(0) NULL DEFAULT NULL COMMENT '文章发布时间',
  `update_time` timestamp(0) NULL DEFAULT NULL COMMENT '文章更新时间',
  `visited` int(11) NULL DEFAULT NULL COMMENT '浏览量',
  `tag_id` int(2) NULL DEFAULT NULL COMMENT '文章标签id',
  `cate_id` int(4) NULL DEFAULT NULL COMMENT '文章分类id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, '这些SPA你家宝贝都试过了吗？', '<p>宠物SPA，听上去是不是很高大上，瞬间有种“人不如狗”的挫败感？宠物都有SPA了，我还只是做个简单的足疗。其实呀，宠物SPA在宠物美容界已经不算什么稀罕事了，很多宠物美容会所都有设置。不过，就大多数人来说，可能对宠物SPA还不是特别了解。宠物SPA是不是也和我们人类一样工序复杂呢？下面小编就给大家介绍几种常见的宠物SPA。<img src=\"../images/pets/dog1.jpg\" /> 1.芳香浴疗程：选用天然植物性芳香成分与死海盐相调和+专业护肤护毛成分，润泽和清洁被毛，放松的半身浴以及散发的芳香可以治愈一些宠物疾病，使宠物在一种放松状态下，完成养毛护肤的过程。\r\n\r\n2.海洋疗法：采用含有海泥和海藻成分的深海泥，去除平时无法洗净的毛孔深处的废物垃圾，并给体内补充氨基酸成分。可以使长毛犬的被毛变得滑爽轻飘，使短毛犬的被毛变得滋润光泽，护理效果定能让您感到满意!  <img src=\"../images/pets/dog1.jpg\" /> 3.扶养泥疗法：改善皮肤粗糙，促进血液循环。消炎并抑制皮肤肿胀，防止细菌繁殖，去除皮屑，消除体味，保湿并改善毛色。\r\n\r\n4.芦荟疗法：芦荟含芦荟素，大黄素和12中营养物质可有效去味、美毛、去虫、虱、强效修复皮毛、消炎止痒。<img src=\"../images/pets/dog1.jpg\" /> 5.茶树油疗法：杀菌、抗菌、防腐及抑制微菌\r\n\r\n6.薰衣草疗法：舒缓紧张神经、抗沮丧、镇定降血压\r\n\r\n7.椰子油疗法：适合北方，可有效滋润毛皮、锁住毛发水含量\r\n\r\n8.花香精油疗法：舒缓情绪、对皮肤、消化道和呼吸系统有很好的保健效果 <img src=\"../images/pets/dog1.jpg\" /> 是不是有点眼花缭乱了？其实宠物SPA发展至今，已经成了一种集香熏、精油、泡浴、按摩及日常毛发护理及花茶与音乐为一体的具有养生与美容效果的护毛及保护皮肤健康的方式。这么丰富多彩的生活，你家宝贝都试过了吗？</p>', '<img src=\"../images/pets/dog1.jpg\" />', '2019-04-26 14:55:21', '2019-04-27 14:55:21', 1290, 1, 1);
INSERT INTO `article` VALUES (2, '讲真，主子打到底要不要穿龙袍', '<p>很多铲屎君都觉得主子穿上各种各样的衣服会更加可爱、吸引眼球。但往往很多喵咪一穿上衣服就浑身不自在，走路特别奇葩，穿起龙袍变成疯子… <img src=\"../images/pets/dog1.jpg\" /> 所以问题来了：到底猫咪要不要穿衣服呢？<img src=\"../images/pets/dog1.jpg\" /> 因喵而异\r\n\r\n其实像喵咪这种这么怕冷的生物来说，穿衣服最大的好处就是保暖了。特别是短毛和无毛猫。因为天气转冷，长毛猫就会自己换成厚实的毛发来抵御寒冬，但短毛和无毛猫毛发本身就短，再怎么长都起不了很好的御寒效果。即使呆在家里，不开暖气的南方室内也只有10-15度甚至更低，所以猫咪是受不了如此低的温度的哦。<img src=\"../images/pets/dog1.jpg\" /> 而且不同喵咪有不同的性格，有些猫咪十分讨厌皇袍加身的感觉，但有些猫咪却很买账，特别喜欢穿衣服，而且还会摆各种pose给你拍照，模特上身。<img src=\"../images/pets/dog1.jpg\" /> 所以如果铲屎君想为猫咪添衣保暖，需要做的就是购买适合猫咪体型的衣服，材质也要选好，尽量简单不要有过多的装饰品，避免猫咪误食。甚至可以将自己不穿的T恤进行适当的裁剪和修改，一件又经济又实用的龙袍也是不错的选择哦。\r\n <img src=\"../images/pets/dog1.jpg\" /> 如果购买衣服时最好能摸到衣服的材质，柔软、厚薄适中的最好不过啦。网购的话要看清楚详情页、参考一下买家的评价哟~ <img src=\"../images/pets/dog1.jpg\" />如果猫咪实在不喜欢穿衣服，也有别的保暖技巧。例如给猫窝加个宠物加热垫、提供保温灯或暖炉（注意防止猫咪烫伤，也不要长时间开着，家里没人的时候要关掉），提供加热过的食物与饮水，多给猫咪梳毛以促进血液循环和毛发更换，这样猫咪就能过一个温暖入心的冬天啦~<img src=\"../images/pets/dog1.jpg\" /> </p>', '<img src=\"../images/pets/dog1.jpg\" />', '2020-04-14 06:55:21', '2020-04-14 13:32:07', 3360, 1, 1);
INSERT INTO `article` VALUES (3, '入秋冬，宠物的营养需要注意什么？', '<p>天气渐渐变冷，宠物在饮食方面也有一些需要注意的地方。\r\n\r\n一、饮食一定要平衡\r\n\r\n不少宠友误认为毛孩子们在冬天热量消耗大，饮食量要增加，就不断补充高蛋白、高脂肪的食物。但其实这并不科学，还会增加狗狗的身体负担。\r\n\r\n二、微量元素不能少\r\n\r\n冬季寒冷干燥，容易患感冒等疾病，选择一些维生素均衡的主粮，比如包含少量动物肝脏，红薯，胡萝卜类的主粮，有助于增强免疫力。\r\n <img src=\"../images/pets/dog1.jpg\" /> 三、要摄入足够的钙物质\r\n\r\n天气寒冷，很多宠物都减少了户外活动时间，接触阳光少了很容易出现缺钙的现象，可以选择鱼肝油以补充维生素D，还应让他们多吃一些富含钙质的食物，如鱼类主粮等。\r\n\r\n四、室内外温差大\r\n\r\n短毛犬类，在室内外温差较大的情况下，需要协助它们调整体温。\r\n\r\n五、选对主粮或辅食\r\n\r\n1.鸡肉 <img src=\"../images/pets/dog1.jpg\" />冬季是流感高发的季节，选择鸡肉类主粮可以利用鸡肉平和的食物性质，协助抵抗流感病毒。协助排毒和清理体内致病杆菌。\r\n\r\n2.羊肉\r\n  <img src=\"../images/pets/dog1.jpg\" /> 选择羊肉类主粮，可起到暖身健体的功效。羊肉性温，可以暖体促进血液循环等好处。\r\n\r\n3.牛肉 <img src=\"../images/pets/dog1.jpg\" /> 牛肉有滋补的功效，丰富的营养可以协助肌肉健康成长。选择牛肉成分的主粮，可以促进发育，保持机体处于好的代谢状态。\r\n\r\n4.鱼肉 <img src=\"../images/pets/dog1.jpg\" /> 不要以为狗不吃鱼，鱼肉类的主粮不仅高营养，低负担，不同的鱼肉还富含不同的独特优势，比如三文鱼富含Ω-3脂肪酸，还有抗氧化神奇的花青素。金枪鱼富含DHA和EPA，鳕鱼营养价值最高，负担最低，也是鱼肝油的主要来源。鱼肉成本高，加工工艺复杂，因此优质的鱼肉类主粮也是很难得的。\r\n\r\n这个秋冬季，您家的狗狗吃的是什么呢？\r\n </p>', '<img src=\"../images/pets/dog1.jpg\" />', '2020-04-14 13:39:18', NULL, 1070, 1, 2);
INSERT INTO `article` VALUES (4, '雪天遛狗须知', '<p>北方已经度过了今年的第一场雪，相信第二场大雪已经距离不远了。看着窗外漫天飞舞的雪花，狗狗一定早就跳着脚闹着要出去玩，但这个时候可不能放它出去，如果想让狗狗感受冬天的到来，还是要等到雪停了再说。\r\n\r\n大多狗狗是非常喜欢雪的，但如果想带狗狗出门可不能跟平时一样，最好做一些准备。 <img src=\"../images/pets/dog1.jpg\" />这样的天气首先要考虑的其实不是狗狗，而是家长自己。保证家长自己的安全是一切行动的前提，尤其是老年人更要注意这点。一双防滑的鞋子，保暖舒适的外套，还有狗狗的牵引绳都是必备物品，在带狗狗外出的时候千万不要跟随狗狗在湿滑的地面奔跑。<img src=\"../images/pets/dog1.jpg\" />帮狗狗做好保暖工作也是必须的。如果你的狗狗属于怕冷的犬类，最好在出门前帮它穿上保暖的外套。不过通常来说狗狗是不怕冷的，如果出门的时间并不长的话也就不需要给狗狗穿衣服了。<img src=\"../images/pets/dog1.jpg\" />防泥水是雪天带狗狗出门必需要注意的一点。如果狗狗有小雨衣的话，这个时候就帮它穿上吧，没有的话也可以给它穿一些平时不穿的衣服。因为狗狗在奔跑的时候会将脚上的泥水甩的身上，如果有衣服的话回家之后可以减少很多麻烦。\r\n<img src=\"../images/pets/dog1.jpg\" />带狗狗出门玩耍回来之后，一定要记得给狗狗检查一下它的小爪子。如果你的狗狗平时不会上床的话，基本也没有洗的必要。但是有一点要注意，如果你的狗狗爪子上有较长的毛的话，回家之后一定要将毛里的小冰碴都清理干净，不然回家之后这些冰碴化掉之后就有可能会将狗狗的爪子冻伤，而且潮湿还会造成狗狗趾间瘙痒。\r\n<img src=\"../images/pets/dog1.jpg\" />一切都准备妥当之后就可以带狗狗出门踏雪了，在这样的雪地中狗狗一定是一副兴奋的样子，家长一定要看好自己的狗狗不要让它乱跑，保证安全才是第一位。</p>', '<img src=\"../images/pets/dog1.jpg\" />', '2020-04-14 13:43:17', NULL, 839, 1, 1);
INSERT INTO `article` VALUES (5, '冬季取暖。小心猫咪中暑', '<p>冬天也会中暑？\r\n\r\n没错，现在北方已经都供暖了，南方加大了空调力度，室内温度非常高，很多猫咪都受到了热射病的危害。各位家长也一定要注意哦。<img src=\"../images/pets/dog1.jpg\" />那么热射病是什么原因导致的呢？\r\n\r\n猫咪本身是一种怕热、喜暖的动物。听起来可能非常奇怪，但是事实正是如此。猫咪的正常体温比人类要高，但是猫咪体表缺乏汗腺，体热不易散发，长毛猫尤甚。\r\n\r\n通常来说，猫咪最适宜的温湿度应该是温度18-29℃，湿度40%-70%之间。<img src=\"../images/pets/dog1.jpg\" />现在很多北方的家庭供暖效果非常好，或者南方的空调开的过大，就会导致室内局部温度过高。通常猫咪是不会主动往温度过高的地方钻的，但是如果家长由于某些需要需要将猫咪装笼时一定要注意笼子摆放的位置，谨防猫咪中暑。上班之前，也注意为留在家里的毛孩子通风，不要使屋里过度闷热。可以在家里准备一盆凉水，水分蒸发可以吸热，也可以确保猫咪脱水时可以补充水分。\r\n\r\n家长们出门时也不要忘了家里的毛孩子哦。\r\n\r\n</p>', '<img src=\"../images/pets/dog1.jpg\" />', '2020-04-14 13:45:46', NULL, 1220, 3, 1);
INSERT INTO `article` VALUES (6, '新年穿新衣，宠物来拜年', '<p>过年啦，是不是已经为自己准备了过年的新衣？只知道给自己准备而没给家里主子们准备新衣？那怎么可以？！\r\n\r\n在中国的传统中，过新年穿新衣的历史由来已久，它和舞龙、舞狮、敲锣打鼓、贴春联、放鞭炮、挂灯笼一样，是节日喜庆中不可缺少的部分，多姿多彩的春节新衣，把节日的气氛烘托得更加浓烈，更加美好。<img src=\"../images/pets/dog1.jpg\" /><img src=\"../images/pets/dog1.jpg\" />新年伊始，万象更新，从里到外都有一种新的气象，所以要穿新衣。衣服就很像穿在身上的春联，表示对春天的庆贺。过年穿新衣是有讲究的，它蕴含着驱邪气、讨吉祥的寓意，是我国自古以来的一项民俗传统。\r\n<img src=\"../images/pets/dog1.jpg\" /><img src=\"../images/pets/dog1.jpg\" />新年伊始，万象更新，从里到外都有一种新的气象，所以要穿新衣。衣服就很像穿在身上的春联，表示对春天的庆贺。过年穿新衣是有讲究的，它蕴含着驱邪气、讨吉祥的寓意，是我国自古以来的一项民俗传统。\r\n<img src=\"../images/pets/dog1.jpg\" /><img src=\"../images/pets/dog1.jpg\" />所以啦~新年穿新衣这么大的事可不能忘了，给自家宝贝们穿上美美的新衣，寓意为它们在新年有新气象，新的一年里健健康康！\r\n</p>', '<img src=\"../images/pets/dog1.jpg\" />', '2020-04-14 13:58:11', NULL, 354, 4, 2);
INSERT INTO `article` VALUES (7, '真实什么鸟都能虐单身狗了', '<p>关于“爱情鸟”有一个凄美的传说，以前有一个大财主看上附近湖边一个美丽的渔家姑娘，欲纳为小妾。这个可怜又美丽的姑娘逃脱不了当时封建社会的枷锁，遂在一个月黑风高的晚上与心上人双双投湖自尽，后都化作“苦娃子”每晚在水草边对唱“苦啊——苦啊”的情歌互诉衷肠。\r\n\r\n第一名：鸳鸯\r\n\r\n鸳鸯最有趣的特性是“止则相耦，飞则成双”。千百年来，鸳鸯一直是夫妻和睦相处、相亲相爱的美好象征，也是中国文艺作品中坚贞不移的纯洁爱情的化身，备受赞颂。传说，鸳鸯是终生不二的情侣，然而，真相是它们每年配成一对儿繁殖后代到了来年繁殖的时期就各自另寻新欢了（鸟都能一年换一个……）<img src=\"../images/pets/dog1.jpg\" />第二名：黑颈天鹅\r\n\r\n天鹅一生严守一夫一妻制,若一方死亡,另一方则不食不眠,一意殉情,所以人们把天鹅比喻成忠贞爱情的象征。\r\n<img src=\"../images/pets/dog1.jpg\" />第三名：金刚鹦鹉\r\n\r\n“夫妇”相惜的生存让人类自愧不如。<img src=\"../images/pets/dog1.jpg\" />第四名：牡丹鹦鹉\r\n\r\n牡丹鹦鹉也被称为情侣鹦鹉Agapornis，希腊语中「Agape」是爱的意思，而「Ornis」则是雀鸟的意思。情侣鹦鹉是一种非常喜欢群居且极深情的鹦鹉，情侣鹦鹉因其深情的天性而得名。情侣鹦鹉会与伴侣形影不离，相依相偎，而且多数会厮守终生。<img src=\"../images/pets/dog1.jpg\" />第五名：冠鹤\r\n\r\n冠鹤也是出了名的“最佳情人”。他们生性活泼喜欢跳舞，有时成双结对地跳，有时也围成一圈集体跳。开跳之前，一只只灰冠鹤总是先文雅地相互鞠躬，“美丽的小姐，我能请您跳支舞吗？”，然后再展现自己优美的舞姿。真是“绅士”和“大家闺秀”的结合呢。<img src=\"../images/pets/dog1.jpg\" />第六名：大雁\r\n\r\n大雁从不独活，一群大雁里很少会出现单数。一只死去，另一只也会自杀或者郁郁而亡。<img src=\"../images/pets/dog1.jpg\" />第七名：杜鹃\r\n\r\n传说中，杜鹃是思念自己情郎的女人变化而来。事实上杜鹃就是模范“夫妇”。不过它们从来不筑巢,不孵卵,不育雏……雌杜鹃会偷偷将卵产仔其它鸟的巢里并衔走巢里原有的卵，让别人“喜当妈”……大概是“婚恋观”和“价值观”不同吧，它们“夫妇”是浪漫逍遥了，就是对娃太不负责任了！<img src=\"../images/pets/dog1.jpg\" />第八名：红嘴相思鸟\r\n\r\n相思鸟鸟如其名，是鸟类中一夫一妻的典范，若情侣中一方死亡另一方也会因相思忧郁而亡。<img src=\"../images/pets/dog1.jpg\" />第九名：喜鹊\r\n\r\n古代传说中，一直就有“鹊桥相会”故事，那么喜鹊就成为案情传递的信物，自然就是爱情的代名词。<img src=\"../images/pets/dog1.jpg\" />第十名：欧亚鸲（知更鸟）\r\n\r\n此鸟根据科学考证，在动物界中，是数一数二的一生一个伴侣的鸟儿。\r\n<img src=\"../images/pets/dog1.jpg\" />\r\n不论是一生一夫一妻还是每年换配偶，这些鸟儿不会“脚踏两条船”，看着它们秀恩爱，不知道单身狗的内心是什么感受呢？</p>', '<img src=\"../images/pets/dog1.jpg\" />', '2020-04-14 13:58:07', NULL, 541, 2, 2);

-- ----------------------------
-- Table structure for article_category
-- ----------------------------
DROP TABLE IF EXISTS `article_category`;
CREATE TABLE `article_category`  (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '分类名称',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article_category
-- ----------------------------
INSERT INTO `article_category` VALUES (1, '宠物必读');
INSERT INTO `article_category` VALUES (2, '宠物专题');

-- ----------------------------
-- Table structure for article_tag
-- ----------------------------
DROP TABLE IF EXISTS `article_tag`;
CREATE TABLE `article_tag`  (
  `id` int(2) NOT NULL AUTO_INCREMENT COMMENT '文章标签id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '文章标签的名称',
  `code` int(4) NOT NULL COMMENT '文章标签的代码',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article_tag
-- ----------------------------
INSERT INTO `article_tag` VALUES (1, '养护', 2001);
INSERT INTO `article_tag` VALUES (2, '选购', 2002);
INSERT INTO `article_tag` VALUES (3, '医疗', 2003);
INSERT INTO `article_tag` VALUES (4, '产品', 2204);
INSERT INTO `article_tag` VALUES (5, '其他', 2205);

-- ----------------------------
-- Table structure for carts
-- ----------------------------
DROP TABLE IF EXISTS `carts`;
CREATE TABLE `carts`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '购物车id',
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `goods_id` int(11) NOT NULL COMMENT '商品id',
  `goods_num` int(11) NOT NULL COMMENT '商品数量',
  `status` tinyint(4) NULL DEFAULT NULL COMMENT '1-正常，0-禁用，-1-删除',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '评论id',
  `user_id` int(11) NOT NULL COMMENT '评论的用户id',
  `dynamic_id` int(11) NOT NULL COMMENT '评论的动态id',
  `content` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '评论的内容',
  `create_time` datetime(6) NOT NULL COMMENT '评论的时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES (1, 1, 2, '好可爱 ', '2020-04-14 14:12:35.000000');
INSERT INTO `comment` VALUES (2, 2, 1, '我get到了新技能', '2020-04-14 14:13:35.000000');

-- ----------------------------
-- Table structure for dynamic
-- ----------------------------
DROP TABLE IF EXISTS `dynamic`;
CREATE TABLE `dynamic`  (
  `id` bigint(16) NOT NULL AUTO_INCREMENT COMMENT '动态id',
  `user_id` int(11) NOT NULL COMMENT '发表此动态用户id',
  `dynamic_content` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '动态的内容',
  `dynamic_createtime` datetime(6) NULL DEFAULT NULL COMMENT '动态创建时间',
  `pictrues` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '动态发表的图片',
  `comment_number` int(11) NULL DEFAULT NULL COMMENT '评论数',
  `praise_number` int(11) NULL DEFAULT NULL COMMENT '点赞数',
  `tag_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '动态的标签id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dynamic
-- ----------------------------
INSERT INTO `dynamic` VALUES (1, 1, '今日份的表情包', '2020-04-14 14:03:31.000000', '<img src=\"../images/pets/dog1.jpg\" />', 2, 5, '1');
INSERT INTO `dynamic` VALUES (2, 2, '每天我都把我家鸟当大爷伺候', '2020-04-14 14:03:31.000000', '<img src=\"../images/pets/dog1.jpg\" />', 2, 5, '1');
INSERT INTO `dynamic` VALUES (3, 1, '今天也是爱捡球的狗子啊', '2020-04-14 14:03:31.000000', '<img src=\"../images/pets/dog1.jpg\" />', 3, 10, '2');

-- ----------------------------
-- Table structure for dynamic_tag
-- ----------------------------
DROP TABLE IF EXISTS `dynamic_tag`;
CREATE TABLE `dynamic_tag`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '文章标签id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '文章标签名',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dynamic_tag
-- ----------------------------
INSERT INTO `dynamic_tag` VALUES (1, '推荐');
INSERT INTO `dynamic_tag` VALUES (2, '最新');
INSERT INTO `dynamic_tag` VALUES (3, '颜值');
INSERT INTO `dynamic_tag` VALUES (4, '明星');

-- ----------------------------
-- Table structure for fans
-- ----------------------------
DROP TABLE IF EXISTS `fans`;
CREATE TABLE `fans`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL COMMENT '用户id',
  `follower` int(11) NULL DEFAULT NULL COMMENT '粉丝id',
  `status` tinyint(2) NULL DEFAULT NULL COMMENT '关注状态：是否取消关注',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '关注时间',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for follow
-- ----------------------------
DROP TABLE IF EXISTS `follow`;
CREATE TABLE `follow`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '关系id',
  `user_id` int(11) NULL DEFAULT NULL COMMENT '用户id',
  `follow_id` int(11) NULL DEFAULT NULL COMMENT '关注的人的id',
  `status` tinyint(2) NULL DEFAULT NULL COMMENT '关注状态：是否取消关注',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '关注时间',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of follow
-- ----------------------------
INSERT INTO `follow` VALUES (1, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `follow` VALUES (2, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `follow` VALUES (3, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `follow` VALUES (4, NULL, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for good_category
-- ----------------------------
DROP TABLE IF EXISTS `good_category`;
CREATE TABLE `good_category`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '名称',
  `pId` int(11) NOT NULL COMMENT '父级id',
  `level` int(11) NULL DEFAULT NULL COMMENT '层级',
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 100 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of good_category
-- ----------------------------
INSERT INTO `good_category` VALUES (1, '狗狗专区', 0, 1, NULL);
INSERT INTO `good_category` VALUES (2, '猫咪专区', 0, 1, NULL);
INSERT INTO `good_category` VALUES (3, '定制专区', 0, 1, NULL);
INSERT INTO `good_category` VALUES (4, '品牌', 0, 1, NULL);
INSERT INTO `good_category` VALUES (5, '主粮', 1, 2, NULL);
INSERT INTO `good_category` VALUES (6, '零食', 1, 2, NULL);
INSERT INTO `good_category` VALUES (7, '保健品', 1, 2, NULL);
INSERT INTO `good_category` VALUES (8, '日用品', 1, 2, NULL);
INSERT INTO `good_category` VALUES (9, '清洁护理', 1, 2, NULL);
INSERT INTO `good_category` VALUES (10, '医疗', 1, 2, NULL);
INSERT INTO `good_category` VALUES (11, '玩具', 1, 2, NULL);
INSERT INTO `good_category` VALUES (12, '服饰/狗窝', 1, 2, NULL);
INSERT INTO `good_category` VALUES (13, '主粮', 2, 2, NULL);
INSERT INTO `good_category` VALUES (14, '零食', 2, 2, NULL);
INSERT INTO `good_category` VALUES (15, '保健品', 2, 2, NULL);
INSERT INTO `good_category` VALUES (16, '日用品', 2, 2, NULL);
INSERT INTO `good_category` VALUES (17, '清洁护理', 2, 2, NULL);
INSERT INTO `good_category` VALUES (18, '医疗', 2, 2, NULL);
INSERT INTO `good_category` VALUES (19, '玩具', 2, 2, NULL);
INSERT INTO `good_category` VALUES (20, '服饰/猫窝', 2, 2, NULL);
INSERT INTO `good_category` VALUES (21, '吉祥物', 75, 3, NULL);
INSERT INTO `good_category` VALUES (22, '周边商品', 7, 3, NULL);
INSERT INTO `good_category` VALUES (23, '刊物', 75, 3, NULL);
INSERT INTO `good_category` VALUES (24, 'A', 4, 2, NULL);
INSERT INTO `good_category` VALUES (25, 'B', 4, 2, NULL);
INSERT INTO `good_category` VALUES (26, 'C', 4, 2, NULL);
INSERT INTO `good_category` VALUES (27, 'D', 4, 2, NULL);
INSERT INTO `good_category` VALUES (28, 'F', 4, 2, NULL);
INSERT INTO `good_category` VALUES (29, 'G', 4, 2, NULL);
INSERT INTO `good_category` VALUES (30, 'H', 4, 2, NULL);
INSERT INTO `good_category` VALUES (31, 'I', 4, 2, NULL);
INSERT INTO `good_category` VALUES (32, 'J', 4, 2, NULL);
INSERT INTO `good_category` VALUES (33, 'K', 4, 2, NULL);
INSERT INTO `good_category` VALUES (34, 'L', 4, 2, NULL);
INSERT INTO `good_category` VALUES (35, 'M', 4, 2, NULL);
INSERT INTO `good_category` VALUES (36, 'N', 4, 2, NULL);
INSERT INTO `good_category` VALUES (37, 'Y', 4, 2, NULL);
INSERT INTO `good_category` VALUES (38, '小型犬', 5, 3, NULL);
INSERT INTO `good_category` VALUES (39, '中型犬', 5, 3, NULL);
INSERT INTO `good_category` VALUES (40, '大型犬', 5, 3, NULL);
INSERT INTO `good_category` VALUES (41, '罐头', 6, 3, NULL);
INSERT INTO `good_category` VALUES (42, '肉质零食', 6, 3, NULL);
INSERT INTO `good_category` VALUES (43, '果冻', 6, 3, NULL);
INSERT INTO `good_category` VALUES (44, '饼干素食', 6, 3, NULL);
INSERT INTO `good_category` VALUES (45, '奶制零食', 6, 3, NULL);
INSERT INTO `good_category` VALUES (46, '综合营养', 7, 3, NULL);
INSERT INTO `good_category` VALUES (47, '调理肠胃', 7, 3, NULL);
INSERT INTO `good_category` VALUES (49, '美毛护肤', 7, 3, NULL);
INSERT INTO `good_category` VALUES (50, '工具', 8, 3, NULL);
INSERT INTO `good_category` VALUES (51, '牵引系列', 8, 3, NULL);
INSERT INTO `good_category` VALUES (52, '出行装备', 8, 3, NULL);
INSERT INTO `good_category` VALUES (53, '沐浴系列', 9, NULL, '3');
INSERT INTO `good_category` VALUES (54, '尿布', 9, 3, NULL);
INSERT INTO `good_category` VALUES (55, '体内驱虫', 10, 3, NULL);
INSERT INTO `good_category` VALUES (56, '耳部清洁', 10, 3, NULL);
INSERT INTO `good_category` VALUES (57, '休闲玩具', 11, 3, NULL);
INSERT INTO `good_category` VALUES (58, '狗窝', 12, 3, NULL);
INSERT INTO `good_category` VALUES (59, '服饰', 12, 3, NULL);
INSERT INTO `good_category` VALUES (60, '干粮', 13, 3, NULL);
INSERT INTO `good_category` VALUES (61, '湿粮', 13, 3, NULL);
INSERT INTO `good_category` VALUES (62, '肉质零食', 14, 3, NULL);
INSERT INTO `good_category` VALUES (63, '猫条/猫草', 14, 3, NULL);
INSERT INTO `good_category` VALUES (64, '综合营养', 15, 3, NULL);
INSERT INTO `good_category` VALUES (65, '调理肠胃', 15, 3, NULL);
INSERT INTO `good_category` VALUES (66, '工具', 16, 3, NULL);
INSERT INTO `good_category` VALUES (67, '猫砂', 16, 3, NULL);
INSERT INTO `good_category` VALUES (68, '沐浴洗列', 17, 3, NULL);
INSERT INTO `good_category` VALUES (69, '尿布', 17, 3, NULL);
INSERT INTO `good_category` VALUES (70, '体内驱虫', 18, 3, NULL);
INSERT INTO `good_category` VALUES (71, '耳部清洁', 18, 3, NULL);
INSERT INTO `good_category` VALUES (72, '休闲玩具', 19, 3, NULL);
INSERT INTO `good_category` VALUES (73, '猫爬架', 19, 3, NULL);
INSERT INTO `good_category` VALUES (74, '猫窝', 20, 3, NULL);
INSERT INTO `good_category` VALUES (75, '宠物定制', 3, 2, NULL);
INSERT INTO `good_category` VALUES (76, '爱丽思', 24, 3, NULL);
INSERT INTO `good_category` VALUES (77, '爱倍', 24, 3, NULL);
INSERT INTO `good_category` VALUES (78, '贝建宁', 25, 3, NULL);
INSERT INTO `good_category` VALUES (79, '比瑞吉', 25, 3, NULL);
INSERT INTO `good_category` VALUES (80, 'Canine', 26, 3, NULL);
INSERT INTO `good_category` VALUES (81, '臭味滚', 26, 3, NULL);
INSERT INTO `good_category` VALUES (82, '得乐', 27, 3, NULL);
INSERT INTO `good_category` VALUES (83, '多乐米', 27, 3, NULL);
INSERT INTO `good_category` VALUES (84, '福来恩', 28, 3, NULL);
INSERT INTO `good_category` VALUES (85, '福莱希', 28, 3, NULL);
INSERT INTO `good_category` VALUES (86, 'GIGWI', 29, 3, NULL);
INSERT INTO `good_category` VALUES (87, '谷登', 29, 3, NULL);
INSERT INTO `good_category` VALUES (88, '哈利贝贝', 30, 3, NULL);
INSERT INTO `good_category` VALUES (89, '哈乐喜', 30, 3, NULL);
INSERT INTO `good_category` VALUES (90, 'ISPET', 31, 3, NULL);
INSERT INTO `good_category` VALUES (91, '金盾', 32, 3, NULL);
INSERT INTO `good_category` VALUES (92, '佳乐滋', 32, 3, NULL);
INSERT INTO `good_category` VALUES (93, '渴望', 33, 3, NULL);
INSERT INTO `good_category` VALUES (94, '寇塔', 33, 3, NULL);
INSERT INTO `good_category` VALUES (95, '路斯', 34, 3, NULL);
INSERT INTO `good_category` VALUES (96, '魔球', 35, 3, NULL);
INSERT INTO `good_category` VALUES (97, '耐吉斯', 36, 3, NULL);
INSERT INTO `good_category` VALUES (98, '伊丽', 37, 3, NULL);
INSERT INTO `good_category` VALUES (99, '牙乐口', 37, 3, NULL);
INSERT INTO `good_category` VALUES (100, '优宠', 37, 3, NULL);

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `cate_1st` int(11) NOT NULL COMMENT '一级分类id',
  `cate_2nd` int(11) NOT NULL COMMENT '二级分类id',
  `cate_3rd` int(11) NULL DEFAULT NULL COMMENT '三级分类id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '商品名称',
  `hotPoint` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '商品热点描述',
  `price` decimal(10, 2) NOT NULL COMMENT '商品价格',
  `marketPrice` decimal(10, 2) NOT NULL COMMENT '市场价',
  `cost` decimal(10, 2) NOT NULL COMMENT '成本加',
  `discount` decimal(10, 2) NULL DEFAULT NULL COMMENT '折扣',
  `inventory` int(11) NOT NULL COMMENT '库存',
  `articleNo` int(20) NOT NULL COMMENT '货号',
  `img_lg` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '商品主图720',
  `img_md` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '商品主图360',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for order_address
-- ----------------------------
DROP TABLE IF EXISTS `order_address`;
CREATE TABLE `order_address`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单地址id',
  `order_id` int(11) NOT NULL COMMENT '订单id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '姓名',
  `tel` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '手机号码',
  `province` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '省',
  `city` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '市',
  `area` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '区',
  `street` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '街道',
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮编',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for order_goods
-- ----------------------------
DROP TABLE IF EXISTS `order_goods`;
CREATE TABLE `order_goods`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单商品id',
  `order_id` int(11) NOT NULL COMMENT '订单id',
  `goods_id` int(11) NULL DEFAULT NULL COMMENT '商品id',
  `goods_num` int(11) NULL DEFAULT NULL COMMENT '商品数量',
  `goods_price` double(20, 2) NULL DEFAULT NULL COMMENT '商品价格',
  `status` tinyint(4) NULL DEFAULT NULL COMMENT '0-禁用，1-正常，-1-删除',
  `update_time` timestamp(0) NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for order_status
-- ----------------------------
DROP TABLE IF EXISTS `order_status`;
CREATE TABLE `order_status`  (
  `id` int(11) NOT NULL,
  `code` tinyint(10) NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `text` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单id',
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `payment` double(20, 0) NULL DEFAULT NULL COMMENT '支付金额',
  `payment_type` tinyint(2) NULL DEFAULT NULL COMMENT '1-在线支付，2-货到付款',
  `pay_time` datetime(0) NULL DEFAULT NULL COMMENT '支付时间',
  `ship_time` datetime(0) NULL DEFAULT NULL COMMENT '发货时间',
  `ship_fee` double(20, 0) NULL DEFAULT NULL COMMENT '邮费',
  `ship_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '快递公司',
  `ship_number` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '快递单号',
  `received_time` datetime(0) NULL DEFAULT NULL COMMENT '收货时间',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `finish_time` datetime(0) NULL DEFAULT NULL COMMENT '交易完成时间',
  `close_time` datetime(0) NULL DEFAULT NULL COMMENT '交易关闭时间',
  `order_state` int(10) NULL DEFAULT NULL COMMENT '状态字典',
  `state` tinyint(4) NULL DEFAULT NULL COMMENT '1-正常，0-禁用，-1-删除',
  `refund_state` tinyint(4) NULL DEFAULT NULL COMMENT '退款状态',
  `comment_state` tinyint(4) NULL DEFAULT NULL COMMENT '评论状态',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for pets
-- ----------------------------
DROP TABLE IF EXISTS `pets`;
CREATE TABLE `pets`  (
  `id` int(11) NOT NULL COMMENT '宠物id',
  `user_id` int(11) NOT NULL COMMENT '宠物对应的主人',
  `pet_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '宠物名',
  `pet_sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '宠物性别',
  `pet_avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '宠物头像',
  `pet_varieties_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '宠物品种id',
  `pet_birth` date NULL DEFAULT NULL COMMENT '宠物生日',
  `pet_company_time` int(2) NULL DEFAULT NULL COMMENT '宠物陪伴时间',
  `pet_sterilization_state` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '宠物绝育状态',
  `pet_weight` double NULL DEFAULT NULL COMMENT '宠物体重',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for pets_category
-- ----------------------------
DROP TABLE IF EXISTS `pets_category`;
CREATE TABLE `pets_category`  (
  `id` int(4) NOT NULL AUTO_INCREMENT COMMENT '宠物种类id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '宠物种类名称',
  `pId` int(4) NOT NULL COMMENT '宠物父级id',
  `level` int(2) NULL DEFAULT NULL,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 82 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pets_category
-- ----------------------------
INSERT INTO `pets_category` VALUES (1, '狗狗', 0, 1, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (2, '猫猫', 0, 1, '../images/pets/cat1.jpg');
INSERT INTO `pets_category` VALUES (3, '兔子', 0, 1, '../images/pets/cat1.jpg');
INSERT INTO `pets_category` VALUES (4, '鼠类', 0, 1, '../images/pets/cat1.jpg');
INSERT INTO `pets_category` VALUES (5, '宠物鸟', 0, 1, '../images/pets/cat1.jpg');
INSERT INTO `pets_category` VALUES (6, '宠物龟', 0, 1, '../images/pets/cat1.jpg');
INSERT INTO `pets_category` VALUES (7, '其他', 0, 1, '../images/pets/cat1.jpg');
INSERT INTO `pets_category` VALUES (8, '阿拉斯加雪橇犬', 1, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (9, '边境牧羊犬', 1, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (10, '比熊犬', 1, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (11, '博美犬', 1, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (12, '柴犬', 1, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (13, '德国牧羊犬', 1, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (14, '贵宾犬', 1, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (15, '哈士奇', 1, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (16, '金毛', 1, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (17, '拉布拉多犬', 1, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (18, '秋田犬', 1, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (19, '萨摩耶', 1, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (20, '波斯猫', 2, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (21, '布偶猫', 2, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (22, '俄罗斯蓝猫', 2, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (23, '加拿大无毛猫', 2, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (24, '美国短毛猫', 2, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (25, '美国卷耳猫', 2, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (26, '挪威森林猫', 2, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (27, '苏格兰折耳猫', 2, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (28, '喜马拉雅猫', 2, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (29, '孟买猫', 2, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (30, '英国短毛猫', 2, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (31, '金吉拉猫', 2, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (32, '安哥拉兔', 3, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (33, '大耳白兔', 3, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (34, '法国垂耳兔', 3, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (35, '荷兰兔', 3, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (36, '美国长毛垂耳兔', 3, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (37, '狮子兔', 3, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (38, '喜马拉雅兔', 3, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (39, '英国斑点兔', 3, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (40, '中国白兔', 3, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (41, '花鼠', 4, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (42, '花栗鼠', 4, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (43, '黑腹仓鼠', 4, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (44, '黑线仓鼠', 4, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (45, '荷兰猪', 4, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (46, '金丝熊', 4, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (47, '龙猫', 4, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (48, '松鼠', 4, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (49, '三线鼠', 4, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (50, '美洲花鼠', 4, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (51, '小毛足鼠', 4, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (52, '坎贝尔侏儒仓鼠', 4, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (53, '金丝雀', 5, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (54, '八哥', 5, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (55, '牡丹鹦鹉', 5, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (56, '横斑鹦鹉', 5, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (57, '金刚鹦鹉', 5, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (58, '虎皮鹦鹉', 5, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (59, '玄凤鹦鹉', 5, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (60, '四喜', 5, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (61, '绣眼鸟', 5, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (62, '芙蓉鸟', 5, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (63, '玉鸟', 5, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (64, '白玉鸟', 5, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (65, '巴西龟', 6, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (66, '长寿龟', 6, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (67, '地图龟', 6, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (68, '金钱龟', 6, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (69, '果核龟', 6, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (70, '剃刀龟', 6, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (71, '小臭蛋', 6, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (72, '中华草龟', 6, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (73, '红腿象龟', 6, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (74, '保温壁虎', 7, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (75, '豹纹壁虎', 7, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (76, '高冠变色龙', 7, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (77, '非洲刺猬', 7, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (78, '蜗牛', 7, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (79, '狐狸', 7, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (80, '刺猬', 7, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (81, '猕猴', 7, 2, '../images/pets/dog1.jpg');
INSERT INTO `pets_category` VALUES (82, '其他', 7, 2, '../images/pets/dog1.jpg');

-- ----------------------------
-- Table structure for photo_album
-- ----------------------------
DROP TABLE IF EXISTS `photo_album`;
CREATE TABLE `photo_album`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '.............................................................',
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `picture` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '相册里的图片',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户密码',
  `tel` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户手机号码',
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户头像',
  `sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '性别',
  `age` int(11) NULL DEFAULT NULL COMMENT '用户年龄',
  `city` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户所在城市',
  `user_des` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户个人说明',
  `user_job` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户个人职业',
  `user_haunted` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户常出没地',
  `user_hobby` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户兴趣爱好',
  `user_lover_pet` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户喜欢的宠物',
  `user_petCare_time` int(11) NULL DEFAULT NULL COMMENT '用户养宠年限',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, '旺财', '123456', '15207826441', '../images/avatar.jpg', '男', 22, '柳州', '活泼开朗', '程序员', '未绝育', '唱歌', '狗狗', 3);
INSERT INTO `users` VALUES (2, '黄小米吃大米', '123', '15777255440', '../images/avatar.jpg', '女', 23, '柳州', '乐观', '程序员', '绝育', '跳舞', '猫咪', 1);
INSERT INTO `users` VALUES (3, '不爱吃鱼的猫', '123', '17853243262', '../images/avatar.jpg', '女', 22, '青岛', '乐观', '教师', '绝育', '跳舞', '猫咪', 2);
INSERT INTO `users` VALUES (4, 'turtle', '123', '17866639837', '../images/avatar.jpg', '男', 23, '青岛', '乐观', '健身教练', '未绝育', '健身', '狗狗', 1);
INSERT INTO `users` VALUES (5, '薇薇', '123', '13481911806', '../images/avatar.jpg', '女', 28, '南宁', '爱美', '时尚杂志主编', '绝育', '看秀', '狗狗', 5);
INSERT INTO `users` VALUES (6, '胖迪妈咪', '123', '17864270620', '../images/avatar.jpg', '女', 40, '上海', '爱笑', '家庭主妇', '绝育', '养鸟', '鸟', 1);

SET FOREIGN_KEY_CHECKS = 1;
