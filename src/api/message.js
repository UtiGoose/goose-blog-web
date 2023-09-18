import service from "../request";

// 获取用户ip
export function getUserIp() {
    return service({
		url: '/message/getIp',
		method: 'get'
	})
}

export function getPage(data) {
    return service({
		url: '/message/getPage',
		method: 'post',
		data: data
	})
}