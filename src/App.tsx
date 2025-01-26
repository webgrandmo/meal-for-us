import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './component/layout/Header';
import Home from './pages/Home';

import SingleMeal from './pages/Meal';

const App: React.FC = () => {
	return (
		<Router>
			<>
				<Header />
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/meal-of-the-day'
						element={<SingleMeal />}
					/>
				</Routes>
			</>
		</Router>
	);
};

export default App;
