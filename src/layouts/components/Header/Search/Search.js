import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchItem from '../../../../components/SongItem/SongItem';
import { makeServer } from '../../../../fakeApi';
import { playSong } from '../../../../redux/slices';
import TippyWrapper from '../../TippyWrapper/TippyWrapper';
import styles from './Search.module.scss';

makeServer();

const cx = classNames.bind(styles);

function Search() {
	const dispatch = useDispatch();
	const [searchValue, setSearchValue] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const [focusInput, setFocusInput] = useState(true);
	const urlRefInput = useRef();

	useEffect(() => {
		const postData = async () => {
			const res = await fetch('/api/songs');
			const data = await res.json();
			setSearchResult(data);
		};
		postData();
	}, [searchValue]);

	const handleChange = (e) => {
		const searchValue = e.target.value;
		if (!searchValue.startsWith(' ')) {
			setSearchValue(e.target.value);
		}
	};

	const handHideSearch = () => {
		setFocusInput(false);
	};
	const handleClearInput = () => {
		setSearchValue('');
		urlRefInput.current.focus();
		setSearchResult([]);
	};

	const handlePlaySong = (data) => {
		dispatch(playSong(data));
	};
	return (
		<HeadlessTippy
			appendTo={() => document.body}
			placement='bottom'
			interactive
			visible={focusInput && searchValue.length > 0}
			onClickOutside={handHideSearch}
			render={(attrs) => (
				<div className={cx('search-result')} tabIndex='-1' {...attrs}>
					<TippyWrapper>
						<h3 className={cx('search-title')}>Gợi ý kết quả</h3>
						{searchResult.map((item) => (
							<SearchItem
								key={item.id}
								data={item}
								onClick={() => handlePlaySong(item)}
							/>
						))}
					</TippyWrapper>
				</div>
			)}>
			<div className={cx('wrapper')}>
				<div className={cx('search-btn-header')}>
					<i className={cx('icon-search', 'ic-search')}></i>
				</div>
				<div className={cx('input-wrapper')}>
					<input
						ref={urlRefInput}
						value={searchValue}
						type='text'
						spellCheck={false}
						className={cx('input-control')}
						placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
						onChange={handleChange}
						onFocus={() => setFocusInput(true)}
					/>
					{!!searchValue && (
						<div className={cx('clear-input')} onClick={handleClearInput}>
							<i className={cx('icon-close', 'ic-close')}></i>
						</div>
					)}
				</div>
			</div>
		</HeadlessTippy>
	);
}

export default Search;
