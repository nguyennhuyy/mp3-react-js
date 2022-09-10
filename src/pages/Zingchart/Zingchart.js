import classNames from 'classnames/bind';
import { useReduxSelector } from '../../redux/useReduxSelector';
import styles from './Zingchart.module.scss';
import Chart from '../../components/Chart';
import SongItem from '../../components/SongItem/SongItem';
import { useState } from 'react';
import Button from '../../components/Button';
import { playSong } from '../../redux/slices';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

function Zingchart() {
	const dispatch = useDispatch();
	const [topHundred, setTopHundred] = useState(10);
	const [disPlayHundred, setDisPlayHundred] = useState(true);
	const { listSong } = useReduxSelector();
	const handleDisplayHundred = () => {
		setTopHundred(100);
		setDisPlayHundred(false);
	};
	const handlePlaySong = data => {
		dispatch(playSong(data));
	};
	if (listSong) {
		return (
			<div className={cx('wrapper')}>
				<div className={cx('box-heading')}>
					<h3 className={cx('heading-chart')}>#zingchart</h3>
				</div>
				<div className={cx('chart-map')}>
					<Chart />
				</div>
				<div className={cx('rank-songs')}>
					{listSong.data.map((item, index) => {
						if (index < topHundred) {
							return (
								<SongItem
									countNumber
									detailSong
									key={index}
									data={item}
									index={index}
									active
									className={cx('active-border')}
									onClick={() => handlePlaySong(item)}
								/>
							);
						}
						return null;
					})}
				</div>
				{disPlayHundred && (
					<div className={cx('top-hundred')}>
						<Button
							title='Xem Top 100'
							large
							className={cx('active-border-blue')}
							onClick={() => handleDisplayHundred()}
						/>
					</div>
				)}
			</div>
		);
	}
	return null;
}

export default Zingchart;
