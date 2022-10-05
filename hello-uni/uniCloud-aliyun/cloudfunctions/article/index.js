'use strict';

// 获取数据库的引用
const db = uniCloud.database()
// 获取集合的引用
const articleCollection = db.collection('article')
const contentCollection = db.collection('content')
exports.main = async (event, context) => {
	switch(event.type) {
		case 'list':
		return await articleCollection.get()
		break;
		case 'content':
		let article_id = event.id
		let res = await contentCollection.where({
			article_id
		}).get()
		return res
		break;
	}
	
};
