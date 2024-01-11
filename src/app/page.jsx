export default function Home() {
	return (
		<main>
			<div className="bg-white">
				<div className="mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between py-6">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<img
									className="h-12 w-12 object-cover"
									src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-08/roman-reigns-wrestlemaniabacklash-5162021-wwe-ftr_1bb61qip6ta661kggkynu6jl3i.jpeg?itok=Ej6HRtVf"
									alt="Brand logo"
									width="48"
									height="48"
								/>
							</div>
							<div className="ml-4">
								<h1 className="text-xl font-semibold leading-tight text-gray-900">
									Unilever
								</h1>
								<p className="text-sm font-medium text-gray-500">brand test</p>
							</div>
						</div>
						<div className="flex items-center space-x-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className="h-6 w-6 text-gray-500">
								<circle cx="11" cy="11" r="8"></circle>
								<path d="m21 21-4.3-4.3"></path>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className="h-6 w-6 text-gray-500">
								<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
								<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
							</svg>
						</div>
					</div>
					<div className="mt-4 flex items-center justify-between">
						<div className="flex space-x-4">
							<div className="inline-flex items-center  text-white rounded-full border px-6 py-1 text-xs font-semibold bg-purple-600">
								Products - 4
							</div>
							<div className="inline-flex items-center text-purple-600 rounded-full px-6 py-1 text-xs font-semibold bg-purple-300">
								Promotions - 4
							</div>
							<div className="inline-flex items-center text-purple-600 rounded-full px-6 py-1 text-xs font-semibold bg-purple-300">
								Online Promotions - 1
							</div>
						</div>
						<div className="flex space-x-2">
							<button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 bg-yellow-400 text-yellow-900">
								New Product +
							</button>
							<button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 bg-yellow-400 text-yellow-900">
								Create Site +
							</button>
							<button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 bg-yellow-400 text-yellow-900">
								Bulk Upload ↓
							</button>
						</div>
					</div>
				</div>
				{/* cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
					<div className="border text-card-foreground  p-4 bg-white rounded-lg shadow-md">
						<div className=" flex">
							<img
								src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-08/roman-reigns-wrestlemaniabacklash-5162021-wwe-ftr_1bb61qip6ta661kggkynu6jl3i.jpeg?itok=Ej6HRtVf"
								alt="Himalaya Green Tea "
								className="rounded-md mr-4 object-cover"
								width="150"
								height="100"
							/>
							<div>
								<div className="inline-flex items-center rounded-lg font-semibold bg-blue-400 text-blue-900 px-3 py-2">
									Pending
								</div>
								<h5 className="text-lg font-semibold mt-3">
									Himalaya Green Tea 60s Classic
								</h5>
								<p className="text-sm text-gray-500">Bar code ID: alopa</p>
								<div className="flex items-baseline mt-2">
									<span className="text-xl font-semibold text-green-600">
										₹300
									</span>
									<span className="text-sm text-gray-500 line-through ml-2">
										₹390
									</span>
									<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit text-xs font-semibold ml-2">
										₹0 OFF
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

					<div className="border text-card-foreground  p-4 bg-white rounded-lg shadow-md">
						<div className=" flex">
							<img
								src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-08/roman-reigns-wrestlemaniabacklash-5162021-wwe-ftr_1bb61qip6ta661kggkynu6jl3i.jpeg?itok=Ej6HRtVf"
								alt="Himalaya Green Tea"
								className="rounded-md mr-4 object-cover"
								width="150"
								height="100"
							/>
							<div>
								<div className="inline-flex items-center rounded-lg font-semibold bg-blue-400 text-blue-900 px-3 py-2">
									Pending
								</div>
								<h5 className="text-lg font-semibold mt-3">
									Himalaya Green Tea 60s Classic
								</h5>
								<p className="text-sm text-gray-500">Bar code ID: alopa</p>
								<div className="flex items-baseline mt-2">
									<span className="text-xl font-semibold text-green-600">
										₹300
									</span>
									<span className="text-sm text-gray-500 line-through ml-2">
										₹390
									</span>
									<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit text-xs font-semibold ml-2">
										₹0 OFF
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

					<div className="border text-card-foreground  p-4 bg-white rounded-lg shadow-md">
						<div className=" flex">
							<img
								src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-08/roman-reigns-wrestlemaniabacklash-5162021-wwe-ftr_1bb61qip6ta661kggkynu6jl3i.jpeg?itok=Ej6HRtVf"
								alt="Himalaya Green Tea"
								className="rounded-md mr-4 object-cover"
								width="150"
								height="100"
							/>
							<div>
								<div className="inline-flex items-center rounded-lg font-semibold bg-blue-400 text-blue-900 px-3 py-2">
									Pending
								</div>
								<h5 className="text-lg font-semibold mt-3">
									Himalaya Green Tea 60s Classic
								</h5>
								<p className="text-sm text-gray-500">Bar code ID: alopa</p>
								<div className="flex items-baseline mt-2">
									<span className="text-xl font-semibold text-green-600">
										₹300
									</span>
									<span className="text-sm text-gray-500 line-through ml-2">
										₹390
									</span>
									<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit text-xs font-semibold ml-2">
										₹0 OFF
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

					<div className="border text-card-foreground  p-4 bg-white rounded-lg shadow-md">
						<div className=" flex">
							<img
								src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-08/roman-reigns-wrestlemaniabacklash-5162021-wwe-ftr_1bb61qip6ta661kggkynu6jl3i.jpeg?itok=Ej6HRtVf"
								alt="Himalaya Green Tea"
								className="rounded-md mr-4 object-cover"
								width="150"
								height="100"
							/>
							<div>
								<div className="inline-flex items-center rounded-lg font-semibold bg-blue-400 text-blue-900 px-3 py-2">
									Pending
								</div>
								<h5 className="text-lg font-semibold mt-3">
									Himalaya Green Tea 60s Classic
								</h5>
								<p className="text-sm text-gray-500">Bar code ID: alopa</p>
								<div className="flex items-baseline mt-2">
									<span className="text-xl font-semibold text-green-600">
										₹300
									</span>
									<span className="text-sm text-gray-500 line-through ml-2">
										₹390
									</span>
									<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit text-xs font-semibold ml-2">
										₹0 OFF
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
				</div>
			</div>
		</main>
	);
}
