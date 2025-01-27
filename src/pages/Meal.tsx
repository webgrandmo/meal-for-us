import { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv/config';
import Spinner from '../component/ui/Spinner';
import LinkComponent from '../component/ui/Link';

interface Meal {
	idMeal: string;
	strMeal: string;
	strMealThumb: string;
	strInstructions: string;
	strCategory: string;
	strArea: string;
	strTags: string;
	strYoutube: string;
	strIngredient1: string;
	strIngredient2: string;
	strIngredient3: string;
	strIngredient4: string;
	strIngredient5: string;
	strIngredient6: string;
	strIngredient7: string;
	strIngredient8: string;
	strIngredient9: string;
	strIngredient10: string;
	strIngredient11: string;
	strIngredient12: string;
	strIngredient13: string;
	strIngredient14: string;
	strIngredient15: string;
	strIngredient16: string;
	strIngredient17: string;
	strIngredient18: string;
	strIngredient19: string;
	strIngredient20: string;
	strMeasure1: string;
	strMeasure2: string;
	strMeasure3: string;
	strMeasure4: string;
	strMeasure5: string;
	strMeasure6: string;
	strMeasure7: string;
	strMeasure8: string;
	strMeasure9: string;
	strMeasure10: string;
	strMeasure11: string;
	strMeasure12: string;
	strMeasure13: string;
	strMeasure14: string;
	strMeasure15: string;
	strMeasure16: string;
	strMeasure17: string;
	strMeasure18: string;
	strMeasure19: string;
	strMeasure20: string;
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
		return <Spinner />;
	}

	if (error) {
		return <div>{error}</div>;
	}
	return (
		<>
			{meals.map((meal, index) => (
				<>
					<div
						className='container col-xxl-8 px-4 py-5'
						key={meal.idMeal}>
						<div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
							<div className='col-10 col-sm-8 col-lg-6'>
								<img
									src={meal.strMealThumb}
									className='d-block mx-lg-auto img-fluid'
									alt={meal.strMeal}
									width='700'
									height='500'
									loading='lazy'
								/>
								<div className='d-grid gap-2 d-md-flex justify-content-md-start'>
									<p>Category: {meal.strCategory}</p>
									<p>Country: {meal.strArea}</p>
									{meal.strTags && <p>Tags: {meal.strTags}</p>}
								</div>
							</div>
							<div className='col-lg-6'>
								<h1 className='display-5 fw-bold lh-1 mb-3'>{meal.strMeal}</h1>
								<p className='lead'>{meal.strInstructions}</p>
								<div className='d-flex justify-content-start'>
									{meal.strYoutube && (
										<LinkComponent
											href={meal.strYoutube}
											version='primary'>
											Checkout video recipe
										</LinkComponent>
									)}
								</div>
							</div>
						</div>
					</div>
					<div className='container'>
						<div className='table-responsive'>
							<table className='table table-hover'>
								<thead>
									<tr>
										<th>Ingredients</th>
										<th>Measure</th>
									</tr>
								</thead>
								<tbody>
									{meal.strIngredient1 ? (
										<tr>
											<td>{meal.strIngredient1}</td>
											<td>{meal.strMeasure1}</td>
										</tr>
									) : null}
									{meal.strIngredient2 ? (
										<tr>
											<td>{meal.strIngredient2}</td>
											<td>{meal.strMeasure2}</td>
										</tr>
									) : null}
									{meal.strIngredient3 ? (
										<tr>
											<td>{meal.strIngredient3}</td>
											<td>{meal.strMeasure3}</td>
										</tr>
									) : null}
									{meal.strIngredient4 ? (
										<tr>
											<td>{meal.strIngredient4}</td>
											<td>{meal.strMeasure4}</td>
										</tr>
									) : null}
									{meal.strIngredient5 ? (
										<tr>
											<td>{meal.strIngredient5}</td>
											<td>{meal.strMeasure5}</td>
										</tr>
									) : null}
									{meal.strIngredient6 ? (
										<tr>
											<td>{meal.strIngredient6}</td>
											<td>{meal.strMeasure6}</td>
										</tr>
									) : null}
									{meal.strIngredient7 ? (
										<tr>
											<td>{meal.strIngredient7}</td>
											<td>{meal.strMeasure7}</td>
										</tr>
									) : null}
									{meal.strIngredient8 ? (
										<tr>
											<td>{meal.strIngredient8}</td>
											<td>{meal.strMeasure8}</td>
										</tr>
									) : null}
									{meal.strIngredient9 ? (
										<tr>
											<td>{meal.strIngredient9}</td>
											<td>{meal.strMeasure9}</td>
										</tr>
									) : null}
									{meal.strIngredient10 ? (
										<tr>
											<td>{meal.strIngredient10}</td>
											<td>{meal.strMeasure10}</td>
										</tr>
									) : null}
									{meal.strIngredient11 ? (
										<tr>
											<td>{meal.strIngredient11}</td>
											<td>{meal.strMeasure11}</td>
										</tr>
									) : null}
									{meal.strIngredient12 ? (
										<tr>
											<td>{meal.strIngredient12}</td>
											<td>{meal.strMeasure12}</td>
										</tr>
									) : null}
									{meal.strIngredient13 ? (
										<tr>
											<td>{meal.strIngredient13}</td>
											<td>{meal.strMeasure13}</td>
										</tr>
									) : null}
									{meal.strIngredient14 ? (
										<tr>
											<td>{meal.strIngredient14}</td>
											<td>{meal.strMeasure14}</td>
										</tr>
									) : null}
									{meal.strIngredient15 ? (
										<tr>
											<td>{meal.strIngredient15}</td>
											<td>{meal.strMeasure15}</td>
										</tr>
									) : null}
									{meal.strIngredient16 ? (
										<tr>
											<td>{meal.strIngredient16}</td>
											<td>{meal.strMeasure16}</td>
										</tr>
									) : null}
									{meal.strIngredient17 ? (
										<tr>
											<td>{meal.strIngredient17}</td>
											<td>{meal.strMeasure17}</td>
										</tr>
									) : null}
									{meal.strIngredient18 ? (
										<tr>
											<td>{meal.strIngredient18}</td>
											<td>{meal.strMeasure18}</td>
										</tr>
									) : null}
									{meal.strIngredient19 ? (
										<tr>
											<td>{meal.strIngredient19}</td>
											<td>{meal.strMeasure19}</td>
										</tr>
									) : null}
									{meal.strIngredient20 ? (
										<tr>
											<td>{meal.strIngredient20}</td>
											<td>{meal.strMeasure20}</td>
										</tr>
									) : null}
								</tbody>
							</table>
						</div>
						<div className='d-flex justify-content-space-between align-items-center'></div>
					</div>
				</>
			))}
		</>
	);
};

export default SingleMeal;
