import React from 'react';
import images from '../assets/images/news.png'
function NewsListPage() {
        return (
                <section>
                        <div className='container mt-5'>
                                <h4 className='fw-bold'>Daily Finance News</h4>
                                <div class="card mb-3 mt-3">
                                        <div class="row no-gutters">
                                                <div class="col-md-4">
                                                        <img src={images} className="news-img" alt="news-thumbnail"/>
                                                </div>
                                                <div class="col-md-8">
                                                        <div class="card-body">
                                                                <h5 class="card-title fw-bold mb-0">Card title</h5>
                                                                <p class="card-text"><small class="text-muted">15 November 2022</small></p>
                                                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        );
}

export default NewsListPage;