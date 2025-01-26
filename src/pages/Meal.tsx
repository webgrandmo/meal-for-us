import { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv/config';

interface Meal {
	idMeal: string;
	strMeal: string;
	strMealThumb: string;
	// Add other fields as needed from the API response
}
const SingleMeal: React.FC = () => {
	const [meals, setMeals] = useState<Meal[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	useEffect(() => {
		const fetchMeals = async () => {
			try {
				const response = await axios.get<{ meals: Meal[] }>('https://www.themealdb.com/api/json/v1/1/random.php');
				setMeals(response.data.meals);
			} catch (error) {
				setError('Failed to fetch meals');
			} finally {
				setLoading(false);
			}
		};

		fetchMeals();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}
	return (
		<>
			{meals.map((meal) => (
				<div
					className='container col-xxl-8 px-4 py-5'
					key={meal.idMeal}>
					<div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
						<div className='col-10 col-sm-8 col-lg-6'>
							<img
								src='https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg'
								className='d-block mx-lg-auto img-fluid'
								alt='Bootstrap Themes'
								width='700'
								height='500'
								loading='lazy'
							/>
						</div>
						<div className='col-lg-6'>
							<h1 className='display-5 fw-bold lh-1 mb-3'>{meal.strMeal}</h1>
							<p className='lead'>
								Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid
								system, extensive prebuilt components, and powerful JavaScript plugins.
							</p>
							<div className='d-grid gap-2 d-md-flex justify-content-md-start'>
								<button
									type='button'
									className='btn btn-primary btn-lg px-4 me-md-2'>
									Primary
								</button>
								<button
									type='button'
									className='btn btn-outline-secondary btn-lg px-4'>
									Default
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default SingleMeal;
