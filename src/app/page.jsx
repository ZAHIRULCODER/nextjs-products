import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

const data = [
	{
		id: 1,
		image:
			"https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-08/roman-reigns-wrestlemaniabacklash-5162021-wwe-ftr_1bb61qip6ta661kggkynu6jl3i.jpeg?itok=Ej6HRtVf",
		name: "Himalaya Green Tea 60s Classic",
		barcode: "alopa",
		price: 300,
		originalPrice: 390,
		off: 0,
	},
	{
		id: 2,
		image:
			"https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-08/roman-reigns-wrestlemaniabacklash-5162021-wwe-ftr_1bb61qip6ta661kggkynu6jl3i.jpeg?itok=Ej6HRtVf",
		name: "Himalaya Green Tea 60s Tulasi",
		barcode: "paljflaja",
		price: 300,
		originalPrice: 390,
		off: 0,
	},
	{
		id: 3,
		image:
			"https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-08/roman-reigns-wrestlemaniabacklash-5162021-wwe-ftr_1bb61qip6ta661kggkynu6jl3i.jpeg?itok=Ej6HRtVf",
		name: "Lipton Green Tea Honey Lemon 100gm",
		barcode: "pajalfa",
		price: 130,
		originalPrice: 130,
		off: 0,
	},
	{
		id: 4,
		image:
			"https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-08/roman-reigns-wrestlemaniabacklash-5162021-wwe-ftr_1bb61qip6ta661kggkynu6jl3i.jpeg?itok=Ej6HRtVf",
		name: "Recipto_party_papper",
		barcode: "1",
		price: 1,
		originalPrice: 1,
		off: 0,
	},
];

export default function Home() {
	return (
		<main>
			<Navbar />
			{/* cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
				{data.map((item) => (
					<Card key={item.id} {...item} />
				))}
			</div>
		</main>
	);
}
