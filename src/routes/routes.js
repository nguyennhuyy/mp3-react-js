import config from '../configs';
import Home from '../pages/Home';
import Zingchart from '../pages/Zingchart';
import Radio from '../pages/Radio';
import Follow from '../pages/Follow';
import Profile from '../pages/Profile';
import DetailAlbum from '../components/DetailAlbum';
import Singer from '../components/Singer/Singer';
import Newsong from '../pages/Newsong/Newsong';
import Top100 from '../pages/Top100';
import Type from '../pages/Type';
import Mv from '../pages/Mv';
export const publicRoutes = [
	{
		path: config.routes.profile,
		component: Profile,
	},
	{
		path: config.routes.home,
		component: Home,
	},
	{
		path: config.routes.zingchart,
		component: Zingchart,
	},
	{
		path: config.routes.radio,
		component: Radio,
	},
	{
		path: config.routes.follow,
		component: Follow,
	},
	{
		path: config.routes.album,
		component: DetailAlbum,
	},
	{
		path: config.routes.singer,
		component: Singer,
	},
	{
		path: config.routes.newsong,
		component: Newsong,
	},
	{
		path: config.routes.top100,
		component: Top100,
	},
	{
		path: config.routes.type,
		component: Type,
	},
	{
		path: config.routes.mv,
		component: Mv,
	},
];
