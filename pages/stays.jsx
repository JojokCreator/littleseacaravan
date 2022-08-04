import React from "react";
import Hero from "../components/Hero";
import Photos from "../components/Photos";

const Stays = () => {
	return (
		<div>
			<Hero
				heading="Stay with us"
				message="Littlesea is a great choice for real relaxation in a beautiful area. The dramatic Jurassic Coast is yours to explore and the popular town of Weymouth is a short drive away for seaside fun. Chill out on the sun loungers while the kids enjoy a splash in the outdoor pool. Fancy an action-packed Haven holiday? There are activities including Archery Coaching, Adventure Golf and 4x4 Off-Roaders. Caravan holidays at Littlesea are how memories are made!"
			/>
      <h2 className="font-bold text-2xl p-4">Things to do at Littlesea </h2>
			<p className="p-4">
				Littlesea Holiday Park is brimming with things
				to do and see! There are two heated indoor and outdoor pools. Plus
				tennis, archery and a Natural Trail for budding explorers. The park is
				close to the seaside town of Weymouth, meaning plenty of opportunities
				to eat ice cream and build sandcastles.
			</p>
			<Photos />
		</div>
	);
};
export default Stays;
