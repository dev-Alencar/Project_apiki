import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import HTMLReactParser from 'html-react-parser'
import './index.css'
function Post() {
	const [post, setPost] = useState([]);
	const { slug } = useParams();

	const getPost = () => {
		fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
		.then((res) => res.json())
		.then((data) => {
			setPost(data);
		})
	}

	useEffect(() => {
		getPost();
	}, []);

  return (
	<div className='postBoxContent'>
		<div>
			{ post.map((item, index) => <h1 key={index} className="PostTitle"> {item.title.rendered} </h1>
			)}
		</div>

		<div className="postBoxContentInto"> 
			{ post.map((item, index) => <img key={index} src={item.yoast_head_json.og_image[0].url} className="postImage"  />
			)}
		</div>

		<div>
			{ 
			
			post.map((item, index) => <p key={index}> {HTMLReactParser(item.content.rendered)} 
			</p>)
			
			}
		</div>

	</div>
  );
}

export default Post;
