// 分类
const state = {
	leftmenus: [],
};

// mutations
const mutations = {
	getLeftMenus(allState, datas) {
		allState.leftmenus = datas;
	},
};

export default {
	state,
	mutations
};
