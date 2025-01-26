import { Link } from 'react-router-dom';
import logo from '../../assets/meal-logo.svg';
const Header: React.FC = () => {
	return (
		<nav className='navbar navbar-light bg-light'>
			<div className='container'>
				<Link
					className='navbar-brand'
					to='/'>
					<img
						src={logo}
						alt='Meal For Us Logo. Cutlery and plate'
						width={48}
						height={48}
						className='icon'
					/>
					Meal For Us
				</Link>
			</div>
		</nav>
	);
};

export default Header;
