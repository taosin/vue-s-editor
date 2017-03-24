const leftmenus = [{
	name:'订单管理',
	opened:true,
	icon:'glyphicon glyphicon-user',
	child:[{
		name:'订单列表',
		url:'/user/list'
	}, {
		name:'添加订单',
		url:'/order/list'
	}]
},
{
	name:'用户管理',
	opened:false,
	icon:'glyphicon glyphicon-user',
	child:[{
		name:'用户列表',
		url:''
	}, {
		name:'用户列表',
		url:''
	}, {
		name:'添加用户',
		url:''
	}]
},
{
	name:'文章管理',
	opened:false,
	icon:'glyphicon glyphicon-user',
	child:[{
		name:'文章列表',
		url:''
	}, {
		name:'发布文章',
		url:''
	}]
}];
export const getLeftMenus = ({
	dispatch
}) => {
	dispatch('getLeftMenus', leftmenus);
};