interface HeroProp {
	title: string;
	description: string;
	children?: React.ReactNode;
}

const Hero: React.FC<HeroProp> = ({ title, description, children }: HeroProp) => {
	return (
		<>
			<div className='px-4 py-5 my-5 text-center'>
				<h1 className='display-5 fw-bold'>{title}</h1>
				<div className='col-lg-6 mx-auto'>
					<p className='lead mb-4'>{description}</p>
					<div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>{children}</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
