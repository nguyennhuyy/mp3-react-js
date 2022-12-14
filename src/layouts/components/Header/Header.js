import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import Logolight, { ThemeIcon } from '../../../assets/icons/Icons';
import Avatar from '../../../assets/images/avatar.jpg';
import SidebarRes from '../SidebarRes/SidebarRes';
import TippyWrapper from '../TippyWrapper';
import styles from './Header.module.scss';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import {
	ListMenuItemAvatar,
	ListMenuItemSetting
} from './HeaderMenu/ListHeaderMenuItem';
import Search from './Search/Search';

const cx = classNames.bind(styles);

function Header() {
	const [showSidebar, setShowSidebar] = useState(false);
	const checkIcon1 = useRef(null);
	const checkIcon2 = useRef(null);
	const handleCheckIcon1 = () => {
		const addCheckIcon1 = checkIcon1.current.style;
		const addCheckIcon2 = checkIcon2.current.style;
		if (checkIcon1) {
			addCheckIcon1.display = 'block';
			addCheckIcon2.display = 'none';
		}
	};
	const handleCheckIcon2 = () => {
		const addCheckIcon1 = checkIcon1.current.style;
		const addCheckIcon2 = checkIcon2.current.style;
		if (checkIcon2) {
			addCheckIcon1.display = 'none';
			addCheckIcon2.display = 'block';
		}
	};

	const handleShowSidebar = () => {
		setShowSidebar(prevSidebar => !prevSidebar);
	};

	return (
		<header className={cx('wrapper')}>
			<div className={cx('sidebar-responsive')}>
				<SidebarRes
					showSidebar={showSidebar}
					closeSidebar={handleShowSidebar}
				/>
			</div>
			<div className={cx('header-left')}>
				<div onClick={handleShowSidebar} className={cx('header-sort')}>
					<i className={cx('icon-sort', 'ic-sort')}></i>
				</div>
				<div className={cx('back-btn-header')}>
					<i className={cx('icon', 'ic-back')}></i>
				</div>
				<div className={cx('forward-btn-header')}>
					<i className={cx('icon', 'ic-forward')}></i>
				</div>
				<div className={cx('logo')}>
					<Link to='/'>
						<div className={cx('logo-item')}>
							<Logolight width='120px' />
						</div>
					</Link>
				</div>
				<Search />
			</div>
			<div className={cx('header-right')}>
				<Tippy content='Theme' className={cx('tippy-size')}>
					<div className={cx('header-theme')}>
						<ThemeIcon />
					</div>
				</Tippy>
				<Tippy content='N??ng c????p VIP' className={cx('tippy-size')}>
					<div className={cx('header-icon-vip')}>
						<i className={cx('icon-right', 'ic-20-VIP-2')}></i>
					</div>
				</Tippy>
				<Tippy content='Ta??i l??n' className={cx('tippy-size')}>
					<div className={cx('header-icon-upload')}>
						<input
							className={cx('header-upload')}
							type='file'
							accept='audio/*'
						/>
						<i className={cx('icon-right', 'ic-upload')}></i>
					</div>
				</Tippy>

				<HeadlessTippy
					interactive
					trigger='click'
					placement='bottom-end'
					render={attrs => (
						<div className={cx('header-menu')} tabIndex='-1' {...attrs}>
							<TippyWrapper>
								<HeaderMenu
									to='/danhsachchan'
									iconLeft={
										<i className={cx('icon-header-menu', 'ic-20-Block')}></i>
									}
									title={<p className={cx('menu-title')}>Danh sa??ch ch????n</p>}
								/>
								<HeadlessTippy
									interactive
									placement='left-start'
									render={attrs => (
										<div
											className={cx('header-menu-second')}
											tabIndex='-1'
											{...attrs}>
											<TippyWrapper>
												<div className={cx('option-header')}>
													<div
														className={cx('option-top')}
														onClick={handleCheckIcon1}>
														<div className={cx('option-item')}>
															<span className={cx('option-title')}>
																SQ ??? 128
															</span>
															<p className={cx('option-desc')}>
																Gi???m s??? d???ng d??? li???u cho c??c k???t n???i ch???m h??n.
															</p>
														</div>
														<i
															ref={checkIcon1}
															className={cx('icon-option-1', 'ic-check')}></i>
													</div>
													<div
														className={cx('option-bottom')}
														onClick={handleCheckIcon2}>
														<div className={cx('option-item')}>
															<span className={cx('option-title')}>
																HQ ??? 320
															</span>
															<p className={cx('option-desc')}>
																K???t h???p t???t nh???t gi???a vi???c s??? d???ng d??? li???u v??
																ch???t l?????ng ??m thanh.
															</p>
														</div>
														<i
															ref={checkIcon2}
															className={cx('icon-option-2', 'ic-check')}></i>
													</div>
												</div>
											</TippyWrapper>
										</div>
									)}>
									<HeaderMenu
										iconLeft={
											<i
												className={cx(
													'icon-header-menu',
													'ic-20-quaility'
												)}></i>
										}
										title={<p className={cx('menu-title')}>Ch????t l??????ng nha??c</p>}
										iconRight={
											<i
												ref={checkIcon1}
												className={cx(
													'icon-header-menu-right',
													'ic-go-right'
												)}></i>
										}
									/>
								</HeadlessTippy>
								<HeadlessTippy
									interactive
									placement='left-start'
									render={attrs => (
										<div
											className={cx('header-menu-second')}
											tabIndex='-1'
											{...attrs}>
											<div className={cx('wrapper-option-2')}>
												<div className={cx('option-2-item')}>
													<p className={cx('option-2-title')}>
														Lu??n pha??t nha??c toa??n ma??n hi??nh
													</p>
													<i className={cx('icon-menu-option', 'ic-check')}></i>
												</div>
												<div className={cx('option-2-item')}>
													<p className={cx('option-2-title')}>Giao di????n</p>
												</div>
											</div>
										</div>
									)}>
									<HeaderMenu
										iconLeft={
											<i
												className={cx(
													'icon-header-menu',
													'ic-20-Play-Outline'
												)}></i>
										}
										title={<p className={cx('menu-title')}>Giao di????n</p>}
										iconRight={
											<i
												className={cx(
													'icon-header-menu-right',
													'ic-go-right'
												)}></i>
										}
									/>
								</HeadlessTippy>
								<div className={cx('menu-line')}></div>
								{ListMenuItemSetting.map((item, key) => (
									<HeaderMenu
										key={key}
										to={item.to}
										iconLeft={item.iconLeft}
										title={item.title}
									/>
								))}
							</TippyWrapper>
						</div>
					)}>
					<Tippy content='Ca??i ??????t' className={cx('tippy-size')}>
						<div className={cx('header-icon-setting')}>
							<i className={cx('icon-right', 'ic-settings')}></i>
						</div>
					</Tippy>
				</HeadlessTippy>

				{true ? (
					<Link to='/login' className={cx('avatar-default')}>
						<img
							className={cx('img-default')}
							src='https://avatar.talk.zdn.vn/default.jpg'
							alt='default'
						/>
					</Link>
				) : (
					<HeadlessTippy
						interactive
						trigger='click'
						placement='bottom-end'
						render={attrs => (
							<div className={cx('wrapper-option-2')} tabIndex='-1' {...attrs}>
								<div className={cx('option-3-item')}>
									{ListMenuItemAvatar.map((item, key) => (
										<HeaderMenu
											key={key}
											to={item.to}
											iconLeft={item.iconLeft}
											title={item.title}
											className={item.className}
										/>
									))}
								</div>
							</div>
						)}>
						<div className={cx('header-avatar')}>
							<img src={Avatar} className={cx('avatar')} alt='avatar' />
						</div>
					</HeadlessTippy>
				)}
			</div>
		</header>
	);
}

export default Header;
