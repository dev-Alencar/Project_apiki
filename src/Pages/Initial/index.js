import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/index'
import './index.css'

function Initial() {
	const [categories, setCategories] = useState([]);

	const getPosts = () => {
		fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			setCategories(data);
		})
	}

	useEffect(() => {
		getPosts();
	}, []);

  return (
	<div>
		<header>
			<Header/>
		</header>

		<section>
			{
				categories.map((item, index) => 
				<div key={index} className="initial-box">

					<div className='initial-box-into'>
					<h1 className="initial-title"> {item.title.rendered} </h1>

					<br />

					<Link target={'_blank'}  to={`post/${item.slug}`} className="initial-link"> 
						<img src={item && item.yoast_head_json && item.yoast_head_json.og_image	[0].url} alt='imagems' className='initial-image' />
					</Link>
					<br/>

					</div>

				</div>
				)
			}
		</section>
	</div>
  );
}

export default Initial;