import React from 'react';

const renderTimelineArticles = () => {
	let timelineArticles = [];
	for (let i = 0; i < 3; i++) {
		timelineArticles.push(
			<div className="timeline-article">

				<div className="content-left-container">
					<div className="content-left">
						<p>
							When I orbited the Earth in a spaceship, I saw for
							the first time how beautiful our planet is. Mankind,
							let us preserve and increase this beauty, and not
							destroy it!
							<span className="article-number">01</span>
						</p>
					</div>
				</div>

				<div className="content-right-container">
					<div className="content-right">
						<p>
							When I orbited the Earth in a spaceship, I saw for
							the first time how beautiful our planet is.
							<span className="article-number">02</span>
						</p>
					</div>
				</div>
				<div className="meta-date">
					<span className="date">{2014 + i}</span>
				</div>
			</div>
		);
	}
	return timelineArticles;
}

export const Timeline = () => {
	return (
		<div className="card-content">
			<div className="content">
				<section id="conference-timeline">
					<div className="timeline-start">Start</div>
					<div className="conference-center-line"></div>
					<div className="conference-timeline-content">
						{renderTimelineArticles()}
					</div>
					<div className="timeline-end">End</div>
				</section>
			</div>
		</div>
	);
}

export default Timeline;
