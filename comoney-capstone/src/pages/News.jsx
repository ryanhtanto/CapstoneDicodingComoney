import React from 'react';
import images from '../assets/images/news.jpg'
import NewsList from '../components/NewsList';
function News() {
	return (
		<section>
			<div className='container mt-4'>
				<h2 className='fw-bold mb-3 fs-4'>Daily Finance News</h2>
				<p></p>
				<NewsList />
			</div>
		</section>
	);
}

export default News;