export default function Card({
	image,
	name,
	barcode,
	price,
	originalPrice,
	off,
}) {
	return (
		<div className="border text-card-foreground  p-4 bg-white rounded-lg shadow-md">
			<div className=" flex">
				<img
					src={image}
					alt="Himalaya Green Tea "
					className="rounded-md mr-4 object-cover"
					width="150"
					height="100"
				/>
				<div>
					<div className="inline-flex items-center rounded-lg font-semibold bg-blue-400 text-blue-900 px-3 py-2">
						Pending
					</div>
					<h5 className="text-base font-semibold mt-3">{name}</h5>
					<p className="text-sm text-gray-500">Bar code ID: {barcode}</p>
					<div className="flex items-baseline mt-2">
						<span className="text-xl font-semibold text-green-600">
							₹{price}
						</span>
						<span className="text-sm text-gray-500 line-through ml-2">
							₹{originalPrice}
						</span>
						<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit text-xs font-semibold ml-2">
							₹{off} OFF
						</div>
					</div>
				</div>
			</div>
			<div className="items-center py-3 flex space-x-2 mt-4">
				<button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-8 py-2 bg-black text-white">
					Promote
				</button>
				<button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 border border-black">
					Promote Online
				</button>
				<button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 border border-black">
					Edit
				</button>
			</div>
		</div>
	);
}
