import React from 'react';
import images from '../assets/images/news.jpg'
function NewsListPage() {
	return (
		<section>
			<div className='container mt-4'>
				<h4 className='fw-bold mb-3'>Daily Finance News</h4>
				<div className="card">
					<div className="card-body p-0">
						<div className="row">
							<div className="col-lg-4 col-md-5 col-sm-12">
								<img src={images} className="news-img" alt="news-thumbnail"/>
							</div>
							<div className="col-lg-8 col-md-7 col-sm-12 p-4">
								<h2 className="fw-bold medium__font"><a className='text-decoration-none text-dark cursor-p' href='/news/detail'>Some News</a></h2>
								<p><small class="text-muted small__font">15 November 2022</small></p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default NewsListPage;