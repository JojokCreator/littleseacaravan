import React from "react";
import Hero from "../components/Hero";
import Photos from "../components/Photos";

const Stays = () => {
	return (
		<div>
			<Hero
				heading="Stay with us"
				message="You will have the entire caravan for you and your family, ideal for you to have the space to make memories."
			/>
			<h2 className="font-bold text-2xl p-4 m-4">The Caravan</h2>
			<p className="p-4 m-4">
				Delightful, family friendly caravan, our is a lovely 2 bedroom, 6 berth, dog friendly holiday caravan on the Littlesea Haven Holiday Park. This Caravan is our families van, which we hire out to families. We offer stays starting on any day of the week. There is a minimum 3 night stay.
			</p>
			<Photos
				mainImage={"/9444e91e-dec7-4d6c-9917-a50a80af977c.jpg"}
				header={"Living Area"}
				image1={"/kitchen_thumb.jpg"}
				image2={"/living_thumb2.jpg"}
				image3={"/living_thumb.jpg"}
				image4={"/kitchen_thumb2.jpg"}
			/>
			<p className="p-4 m-4">
				The caravan has two bedrooms, one bathroom and a spacious open plan living area. It is perfect for families wanting to visit The surrounding area.
				You have the whole caravan to yourself. There is a picnic bench outside as well as space for one car.
				The kitchen is fully equipped. We are also able to provide bed linens on request.
			</p>
			<Photos
				mainImage={"/275479870_361931885941449_2329734142031350467_n.jpg"}
				header={"Sleeps 6 People"}
				image1={"/bathroom_thumb.jpg"}
				image2={"/275654129_287278310160713_5553281349045637634_n.jpg"}
				image3={"/bedroom_thumb.jpg"}
				image4={"/2aba04bd-6627-4a28-8689-7d98a270000bdfs_thumb.jpg"}
			/>
			<p className="p-4 m-4">
				Littlesea has plenty to do for everyone including restaurants, takeaways and play areas which are available for everyone to use. There are also two pools, entertainment and lots activities available with the purchase of a haven play pass.
				The area and the surrounding Jurassic coast has plenty to do. Coastal walks, beach days, castles and forts. There are plenty of places to hire water sports equipment nearby. The park is close to the seaside town of Weymouth, meaning plenty of opportunities
				to eat ice cream and build sandcastles.
			</p>
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
