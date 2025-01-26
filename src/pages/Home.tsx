import Hero from '../component/layout/Hero';
import LinkComponent from '../component/ui/Link';

const Home = () => {
	return (
		<>
			<Hero
				title='Meal For Us'
				description='This is an app to help find a tasty meal for our family'>
				<LinkComponent
					href='/meal-of-the-day'
					version='primary'>
					Meal of the day
				</LinkComponent>
			</Hero>
		</>
	);
};

export default Home;
