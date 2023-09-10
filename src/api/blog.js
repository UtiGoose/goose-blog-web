import service from "../request";



// 获取分页数据
export function getPage(data) {
    return service({
		url: '/blog/getPage',
		method: 'post',
        data: data
	})
}