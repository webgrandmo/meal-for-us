type ButtonAction = 'submit' | 'button';

interface ButtonProp {
	version: string;
	type: ButtonAction;
	children?: React.ReactNode;
}

const Button: React.FC<ButtonProp> = ({ version, type, children }: ButtonProp) => {
	return (
		<button
			type={type}
			className={`btn btn-${version} btn-lg px-4`}>
			{children}
		</button>
	);
};

export default Button;
