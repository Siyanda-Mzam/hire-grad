import React from 'react';

const Pricing = () => {
	return (
		<div className="section grey-band">
				<div className="container">
					<div className="tile is-ancestor">
						<div className="tile is-parent container">
							<article className="tile is-child notification columns">
								<div className="column is-7 has-text-centered">
									<div className="centered column is-3 navy-band">
										<div className="">
											<p className="title is-1">12%</p>
											<p className="subtitle is-6">success fee</p>
										</div>
									</div>
								</div>

								<div className="column is-5">
									<p className="title">Pricing</p>
										<p className="subtitle is-5">
											Signing up for GenZ is free. If you hire someone
											through GenZ we charge 12% of first year salary.
											If things do not work out with the graduate in the
											first 3 months, we will give you the entire fee back.
										</p>
								</div>
							</article>
						</div>
					</div>
				</div>
		</div>
	);
}

export default Pricing;
