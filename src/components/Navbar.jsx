import FilterButton from "./FilterButton";

export default function Navbar() {
	return (
		<nav>
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
				<FilterButton />
			</div>
		</nav>
	);
}
