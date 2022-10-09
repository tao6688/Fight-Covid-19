'use strict';

// 获取数据库的引用
const db = uniCloud.database()
// 获取集合的引用
const postCollection = db.collection('post')
const commentCollection = db.collection('comment')
exports.main = async (event, context) => {
	let res
	switch(event.type) {
		case 'list':
		return await postCollection.get()
		break;
		case 'detail':
		let article_id = event.id
		res = await postCollection.where({
			_id: article_id
		}).get()
		return res
		break;
		case 'add':
		let {picture,title,introduction,content,browse_num,comment_num,praise_num} = event
		return await postCollection.add({
			picture,title,introduction,content,browse_num,comment_num,praise_num
		})
		break;
		case "comment":
		res = await commentCollection.where({
			post_id:event.id
		}).get()
		return res
		break;
		
		case "add_com":
		let {user_name,user_picture,user_content,post_id} = event
		return await commentCollection.add({
			user_name,user_picture,user_content,post_id
		})
		break
	}
};
