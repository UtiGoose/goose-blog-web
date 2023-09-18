import service from "../request";



// 获取分页数据
export function getPage(data) {
    return service({
		url: '/blog/getPage',
		method: 'post',
        data: data
	})
}

// 获取文章具体信息
export function getById(data) {
    return service({
		url: '/blog/getById',
		method: 'post',
        data: data
	})
}

// 获取分类列表
export function getClassificationList() {
    return service({
		url: '/classification/getList',
		method: 'get'
	})
}

// 获取用户信息
export function getUserInfo() {
    return service({
		url: '/blog/getUserInfo',
		method: 'get'
	})
}