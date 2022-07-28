import config from '../configs';
import Home from '../pages/Home';
import Zingchart from '../pages/Zingchart';
import Radio from '../pages/Radio';
import Follow from '../pages/Follow';
import Profile from '../pages/Profile';
import DetailAlbum from '../components/DetailAlbum';
import Singer from '../components/Singer/Singer';
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
];
