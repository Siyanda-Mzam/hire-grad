import React from 'react';

const WhyHireGrads = () => {
	return (
		<div className="section">
				<div className="container">
					<div className="columns">
						<div className="column is-7 is-half content">
							<h1>Access a curated list of graduates</h1>
							<br />
							<h4><strong>Only the best</strong></h4>
							<p>Our team curates the graduates who apply to GenZ
								and you’ll only see top candidates.</p>
							<br/>
							<h4><strong>Ready to move</strong></h4>
							<p>Discover talented graduates ready to grow their careers</p>
						</div>
						<div className="section column is-5 is-half content">

						<div className="card">
							<div className="card-content">
								<div className="media">
									<div className="media-left">
										<figure id="sample-image" className="image is-100x100">
											<img src="https://placehold.it/280"
												alt="Placeholder image" />
										</figure>
									</div>
									<div className="media-content">
										<p className="title is-4">Brand New</p>
										<p className="subtitle is-6">M.A. Political Studies</p>
										<span className="media-details">
										<table className="table is-narrow">
											<tbody>
												<tr>
													<td>
														<i className="fa fa-map-marker" aria-hidden="true">
														</i>
													</td>
													<td>
														<span className=" subtitle is-6 card-text-pull">
															Johannesburg
														</span>
													</td>
												</tr>

												<tr>
													<td>
														<i className="fa fa-money" aria-hidden="true"></i>
													</td>
													<td>
														<span className=" subtitle is-6 card-text-pull">
															R55 000/month
														</span>
													</td>
												</tr>

												<tr>
													<td>
														<i className="fa fa-graduation-cap"
															aria-hidden="true"></i>
													</td>
													<td>
														<span className=" subtitle is-6 card-text-pull">
															Rhodes University
														</span>
													</td>
												</tr>
											</tbody>
										</table>
										</span>
									</div>
								</div>
							</div>
						</div>


						</div>
					</div>
				</div>
		</div>
	);
}

export default WhyHireGrads;
