import React from 'react';
import images from '../assets/images/newsDetail.png'

function NewsDetail() {
	return (
		<article>
			<div className='container mt-5'>
				<h4 className='text-center fw-bold'>Some News</h4>
				<p className='text-center'>15 November 2022</p>
				<div className='d-flex justify-content-center'>
					<img src={images} alt="news-detail" className='news-detail-image'/>                                            
				</div>
				<div className='mt-5 px-5'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
		</article>
	);
}

export default NewsDetail;