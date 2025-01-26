import { Link } from 'react-router-dom';

interface LinkProp {
	href: string;
	version: string;
	children: React.ReactNode;
}

const LinkComponent: React.FC<LinkProp> = ({ href, children, version }: LinkProp) => {
	return (
		<Link
			to={href}
			className={`btn btn-${version} btn-lg px-4`}>
			{children}
		</Link>
	);
};

export default LinkComponent;
