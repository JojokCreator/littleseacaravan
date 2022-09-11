import React from "react";
import Hero from "../components/Hero";
import Photos from "../components/Photos";

const Stays = () => {
	return (
		<div>
			<Hero
				heading="Stay with us"
				message="Littlesea Holiday Park is brimming with things
				to do and see! There are two heated indoor and outdoor pools. Plus
			tennis, archery and a Natural Trail for budding explorers. The park is
			close to the seaside town of Weymouth, meaning plenty of opportunities
			to eat ice cream and build sandcastles."
			/>
			<h2 className="font-bold text-2xl p-4 m-4">The Caravan</h2>
			<p className="p-4 m-4">
				Delightful, family friendly caravan, our is a lovely 2 bedroom, 6 berth, dog friendly holiday caravan on the Littlesea Haven Holiday Park. You will have the entire caravan for you and your family, ideal for you to have the space to make memories. This Caravan is our families van, which we hire out to families.

				We hire the entire caravan for you, your family and fury animals to make memories together.
			</p>
			<Photos 
			mainImage={"/9444e91e-dec7-4d6c-9917-a50a80af977c.jpg"}
			header={"Living Area"}
			image1={"/kitchen_thumb.jpg"}
			image2={"/living_thumb2.jpg"}
			image3={"/living_thumb.jpg"}
			image4={"/kitchen_thumb2.jpg"}
			/>
			
			<Photos 
			mainImage={"/275479870_361931885941449_2329734142031350467_n.jpg"}
			header={"Sleeps 6 People"}
			image1={"/bathroom_thumb.jpg"}
			image2={"/275654129_287278310160713_5553281349045637634_n.jpg"}
			image3={"/bedroom_thumb.jpg"}
			image4={"/2aba04bd-6627-4a28-8689-7d98a270000bdfs_thumb.jpg"}
			/>
			<Photos 
			mainImage={"/278075197_312388834337296_8826556924680014577_n.jpg"}
			header={"Activities"}
			image1={"/277979504_667783274489354_4614835511071287641_n.jpg"}
			image2={"/activities_thumb.jpg"}
			image3={"/activity_thumb.jpg"}
			image4={"/278111153_1048985652629691_6184023553561585616_n.jpg"}
			/>
		</div>
	);
};
export default Stays;
