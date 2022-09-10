import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Button({
	to,
	href,
	submit,
	ref,
	title,
	small,
	large,
	green,
	orange,
	bigLarge,
	onClick,
	className,
	iConRight,
	...PassProps
}) {
	const classes = cx('wrapper', {
		to,
		href,
		small,
		large,
		green,
		orange,
		bigLarge,
		onClick,
		[className]: className
	});
	let Comp = 'button';
	const props = {
		onClick,
		...PassProps
	};
	if (to) {
		props.to = to;
		Comp = Link;
	} else if (href) {
		props.href = href;
		Comp = 'a';
	}
	return (
		<Comp type={submit} className={classes} {...props}>
			<span className={cx('title')}>{title}</span>
			{iConRight}
		</Comp>
	);
}

Button.propTypes = {
	to: propTypes.string,
	href: propTypes.string,
	title: propTypes.string.isRequired,
	small: propTypes.any,
	large: propTypes.any,
	onClick: propTypes.func,
	className: propTypes.string
};
export default Button;
