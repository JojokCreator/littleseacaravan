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
			<h2 className="font-bold text-2xl p-4">The Caravan</h2>
			<p className="p-4">
				Delightful, family friendly caravan, our is a lovely 2 bedroom, 6 berth, dog friendly holiday caravan on the Littlesea Haven Holiday Park. You will have the entire caravan for you and your family, ideal for you to have the space to make memories. This Caravan is our families van, which we hire out to families.

				We hire the entire caravan for you, your family and fury animals to make memories together.
			</p>
			<Photos 
			mainImage={"/9444e91e-dec7-4d6c-9917-a50a80af977c.jpg"}
			header={"Living Area"}
			image1={"/4a64b9a0-1d40-4426-af49-431638283b97.jpg"}
			image2={"/86079a3c-3f77-41ca-bf3b-a4112771f807.jpg"}
			image3={"/82cb5e28-34b7-49ea-89d4-471c20678712.jpg"}
			image4={"/270e4139-896d-423f-a1a3-c5dd14d877d7.jpg"}
			/>
			<Photos 
			mainImage={"/275479870_361931885941449_2329734142031350467_n.jpg"}
			header={"Sleeps 6 People"}
			image1={"/275574534_1030066490935027_781147433819565446_n.jpg"}
			image2={"/275479870_361931885941449_2329734142031350467_n.jpg"}
			image3={"/0363c8bd-6890-4879-b89a-552bf4e9fe26.jpg"}
			image4={"/2aba04bd-6627-4a28-8689-7d98a270000bdfs.jpg"}
			/>
		</div>
	);
};
export default Stays;
