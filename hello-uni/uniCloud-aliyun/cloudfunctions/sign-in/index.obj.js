// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const db = uniCloud.database();
const dbCmd = db.command
const scoresTable = db.collection('uni-id-scores')
module.exports = async function({user_id, ip}){
	let date = todayTimestamp()
	let {
		data: [userScore]
	} = await scoresTable.where({user_id}).orderBy("create_date","desc").limit(1).get()
	let balance = 0
	if([userScore]) {
		balance = userScore.balance
	}
	// 如果新做了核酸，给加积分,1次1分，商场购物可以用积分
	let score = 1
	balance += score
	let addScores = await scoresTable.add({
		user_id,
		balance,
		score,
		type: 1,
		create_date: Date.now()
	})
	console.log({addScores});
	return {
		score: balance
	}
	},
	/**
	 * method1方法描述
	 * @param {string} param1 参数1描述
	 * @returns {object} 返回值描述
	 */
	/* 
	method1(param1) {
		// 参数校验，如无参数则不需要
		if (!param1) {
			return {
				errCode: 'PARAM_IS_NULL',
				errMsg: '参数不能为空'
			}
		}
		// 业务逻辑
		
		// 返回结果
		return {
			param1 //请根据实际需要返回值
		}
	}
	*/
}

function todayTimestamp() {
	//时区
	let timeZone = new Date().getTimezoneOffset() / 60
	//获得相对于北京时间的时间戳
	let timestamp = Date.now() + 3600 * 1000 * (8 + timeZone)
	//一天一共多少毫秒
	const D = 3600 * 24 * 1000
	//去掉余数，再减去东8区的8小时 得到当天凌晨的时间戳
	return parseInt(timestamp / D) * D - 3600 * 1000 * 8
}