import { Line } from 'react-chartjs-2';
import classNames from 'classnames/bind';
import styles from './Chart.module.scss';

import {
	Chart as ChartJs,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
const cx = classNames.bind(styles);

function Chart() {
	ChartJs.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	);
	const chartData = {
		data: {
			labels: [
				'10:00',
				'12:00',
				'14:00',
				'16:00',
				'18:00',
				'20:00',
				'22:00',
				'00:00',
				'02:00',
				'04:00',
				'06:00',
				'08:00',
			],
			datasets: [
				{
					label: 'Em Nên Dừng Lại',
					data: [
						10546, 9950, 9480, 12034, 11434, 10019, 9329, 8937, 9963, 10041,
						9519, 9575, 10196, 11150, 10589, 6814, 5070, 3799, 3160, 3164, 4738,
						10273, 10998, 10806,
					],
					borderColor: '#4a90e2',
					borderWidth: 1.5,
					tension: 0.4,
					pointBackgroundColor: '#fff',
					pointBorderColor: '#4a90e2',
					pointBorderWidth: 3,
					hoverRadius: 5,
					pointRadius: 0,
				},
				{
					label: 'Vì Mẹ Anh Bắt Chia Tay',
					data: [
						8039, 7383, 6811, 9549, 8764, 7499, 6917, 6524, 7559, 7702, 7032,
						7097, 7614, 8699, 8048, 6213, 4501, 3182, 2620, 2593, 4268, 7606,
						8208, 8318,
					],
					borderColor: '#27bd9c',
					borderWidth: 1.5,
					tension: 0.4,
					pointBackgroundColor: '#fff',
					pointBorderColor: '#27bd9c',
					pointBorderWidth: 3,
					hoverRadius: 5,
					pointRadius: 0,
				},
				{
					label: 'Thương Em',
					data: [
						7391, 6905, 6232, 8665, 7928, 7181, 6526, 5935, 6516, 6779, 6680,
						6651, 6825, 7665, 7537, 5933, 4489, 3272, 2769, 2751, 3429, 5384,
						6494, 6906,
					],
					borderColor: '#e35050',
					borderWidth: 1.5,
					tension: 0.4,
					pointBackgroundColor: '#fff',
					pointBorderColor: '#e35050',
					pointBorderWidth: 3,
					hoverRadius: 5,
					pointRadius: 0,
				},
			],
		},

		options: {
			animation: {
				hover: {
					duration: 1000,
					easing: 'linear',
					from: 1,
					to: 0,
					loop: true,
				},
			},
			responsive: true,
			plugins: {
				legend: {
					display: false,
					position: 'left',
				},
				tooltip: {
					mode: 'index',
					position: 'nearest',
					intersect: false,
					yAlign: 'bottom',
					backgroundColor: '#27bd9c',
					displayColors: false,
					lable: {
						display: false,
					},
				},
			},
			interaction: {
				mode: 'dataset',
				intersect: false,
			},
			stacked: false,

			scales: {
				x: {
					display: true,
				},
				y: {
					display: false,
				},
			},
			pan: {
				enabled: true,
				mode: 'x',
			},
			zoom: {
				enabled: true,
				mode: 'x',
			},
		},
	};
	return (
		<Line
			className={cx('wrapper')}
			data={chartData.data}
			options={chartData.options}
		/>
	);
}

export default Chart;
