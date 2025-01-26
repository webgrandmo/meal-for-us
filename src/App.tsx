import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './component/layout/Header';
import Hero from './component/layout/Hero';
import LinkComponent from './component/ui/Link';

const App: React.FC = () => {
	return (
		<Router>
			<>
				<Header />
				<Hero
					title='Meal For Us'
					description='This is an app to help find a tasty meal for our family'>
					<LinkComponent
						href='/'
						version='primary'>
						Meal of the day
					</LinkComponent>
				</Hero>
				<div className='container'>
					<h1>My app</h1>
				</div>
			</>
		</Router>
	);
};

export default App;
