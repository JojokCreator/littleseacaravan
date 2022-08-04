import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Slider from './../components/Slider';
import { sliderData } from '../components/SliderData';
import Instagram from '../components/Instagram'

export default function Home() {

	return (
		<div>
			<Head>
				<title>Littlesea Caravan</title>
				<meta name="description" content="content" />
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<Hero heading={'Littlesea Caravan'} message={'A Prestige caravan within the grounds of Havens Littlesea holiday site where there is fun for all the family!'}/>
			<Slider slides={sliderData}/>
			<Instagram images={sliderData}/>
		</div>
	);
}

//border-2 border-red-500
