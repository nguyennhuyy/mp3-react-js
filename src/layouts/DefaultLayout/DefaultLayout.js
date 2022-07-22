import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import propTypes from 'prop-types';

import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Songs } from '../../components/Context';
import Playing from '../../components/Playing/Playing';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
	const [songs, setSongs] = useState([]);
	const [dataSong, setDataSong] = useState([]);
	const [dataDetailAlbum, setDataDetailAlbum] = useState([]);

	useEffect(() => {
		const postSong = async () => {
			const res = await fetch('/api/songs');
			const data = await res.json();
			setSongs(data[0]);
			setDataSong(data);
		};
		postSong();
	}, []);
	useEffect(() => {
		const postDetailAlbum = async () => {
			const res = await fetch('/api/detailalbum');
			const data = await res.json();

			setDataDetailAlbum(data);
		};
		postDetailAlbum();
	}, []);

	const handleSetSong = (id) => {
		const songid = dataSong.find((item) => item.id === id);
		if (!songid) {
			setSongs(dataSong[0]);
		} else {
			setSongs(songid);
		}
	};
	const handleSetDetailSong = (id) => {
		const songid = dataDetailAlbum.find((item) => item.id === id);
		if (!songid) {
			setSongs(dataDetailAlbum[0]);
		} else {
			setSongs(songid);
		}
	};
	return (
		<Songs.Provider
			value={{
				songs,
				dataSong,
				dataDetailAlbum,
				setSongs,
				handleSetSong,
				handleSetDetailSong,
			}}>
			<div className={cx('wrapper')}>
				<Sidebar />
				<div className={cx('container')}>
					<Header />
					<div className={cx('content')}>{children}</div>
				</div>
				<div className={cx('playing')}>
					<Playing />
				</div>
			</div>
		</Songs.Provider>
	);
}

DefaultLayout.propTypes = {
	children: propTypes.node.isRequired,
};
export default DefaultLayout;
