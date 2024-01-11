export default function FilterButton() {
	return (
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
	);
}
