import { Link } from 'react-router-dom';
import './index.css';

function BoxPost({title, slug, img}) {

	return (
		<div className="initial-box">

			<div>
				<h1 className="initial-box__title"> {title} </h1>

				<br />

				<Link target={'_blank'} to={`post/${slug}`} className="initial-box__title-link">
					<img src={img} alt='imagems' className='initial-box__image' />
				</Link>
				<br />

			</div>

		</div>
	)
}

export default BoxPost;
