'use client';
import { useState } from "react";
import Image from "next/image";

const tabs = [
	{
		label: "Our Mission",
		content: (
			<>
				<h3 className="text-2xl font-bold mb-3">Where can I get some?</h3>
				<p className="text-gray-700 mb-4">
					Integer lobortis, velit quis facilisis pellentesque, massa quam pretium
					ligula, eget mattis arcu elit at nisi. Nullam nec enim at urna tempor
					fringilla. Vestibulum sed nibh laoreet, vulputate nibh a, sollicitudin
					arcu. Nam tempus nisl arcu. Phasellus cursus et tellus eget tincidunt.
					Phasellus mattis sagittis luctus. Maecenas vel justo sollicitudin,
					laoreet mauris vitae, rutrum urna.
				</p>
				<ul className="list-disc pl-5 mb-4 text-gray-700">
					<li>Suspendisse pulvinar orci vitae condimentum feugiat.</li>
					<li>Curabitur cursus sapien eu ex cursus ultrices ac nec purus.</li>
					<li>Duis vehicula elit ut placerat rutrum.</li>
					<li>Nunc et felis non neque vehicula porttitor.</li>
				</ul>
				<p className="text-gray-700">
					Integer lobortis, velit quis facilisis pellentesque, massa quam pretium
					ligula, eget mattis arcu elit at nisi. Nullam nec enim at urna tempor
					fringilla. Vestibulum sed nibh laoreet, vulputate nibh a, sollicitudin
					arcu. Nam tempus nisl arcu. Phasellus cursus et tellus eget tincidunt.
					Phasellus mattis sagittis luctus. Maecenas vel justo sollicitudin,
					laoreet mauris vitae, rutrum urna.
				</p>
			</>
		),
		img: "/about-tab-1.jpg",
	},
	{
		label: "Our Vision",
		content: (
			<>
				<h3 className="text-2xl font-bold mb-3">Where can I get some?</h3>
				<p className="text-gray-700 mb-4">
					Integer lobortis, velit quis facilisis pellentesque, massa quam pretium
					ligula, eget mattis arcu elit at nisi. Nullam nec enim at urna tempor
					fringilla. Vestibulum sed nibh laoreet, vulputate nibh a, sollicitudin
					arcu. Nam tempus nisl arcu. Phasellus cursus et tellus eget tincidunt.
					Phasellus mattis sagittis luctus. Maecenas vel justo sollicitudin,
					laoreet mauris vitae, rutrum urna.
				</p>
				<ul className="list-disc pl-5 mb-4 text-gray-700">
					<li>Suspendisse pulvinar orci vitae condimentum feugiat.</li>
					<li>Curabitur cursus sapien eu ex cursus ultrices ac nec purus.</li>
					<li>Duis vehicula elit ut placerat rutrum.</li>
					<li>Nunc et felis non neque vehicula porttitor.</li>
				</ul>
				<ul className="list-disc pl-5 mb-4 text-gray-700">
					<li>Suspendisse pulvinar orci vitae condimentum feugiat.</li>
					<li>Curabitur cursus sapien eu ex cursus ultrices ac nec purus.</li>
					<li>Duis vehicula elit ut placerat rutrum.</li>
					<li>Nunc et felis non neque vehicula porttitor.</li>
				</ul>
			</>
		),
		img: "/about-tab-2.jpg",
	},
	{
		label: "Our History",
		content: (
			<>
				<h3 className="text-2xl font-bold mb-3">Where can I get some?</h3>
				<p className="text-gray-700 mb-4">
					Integer lobortis, velit quis facilisis pellentesque, massa quam pretium
					ligula, eget mattis arcu elit at nisi. Nullam nec enim at urna tempor
					fringilla. Vestibulum sed nibh laoreet, vulputate nibh a, sollicitudin
					arcu. Nam tempus nisl arcu. Phasellus cursus et tellus eget tincidunt.
					Phasellus mattis sagittis luctus. Maecenas vel justo sollicitudin,
					laoreet mauris vitae, rutrum urna.
				</p>
				<p className="text-gray-700 mb-4">
					Integer lobortis, velit quis facilisis pellentesque, massa quam pretium
					ligula, eget mattis arcu elit at nisi. Nullam nec enim at urna tempor
					fringilla. Vestibulum sed nibh laoreet, vulputate nibh a, sollicitudin
					arcu. Nam tempus nisl arcu. Phasellus cursus et tellus eget tincidunt.
					Phasellus mattis sagittis luctus. Maecenas vel justo sollicitudin,
					laoreet mauris vitae, rutrum urna.
				</p>
				<p className="text-gray-700">
					Integer lobortis, velit quis facilisis pellentesque, massa quam pretium
					ligula, eget mattis arcu elit at nisi. Nullam nec enim at urna tempor
					fringilla. Vestibulum sed nibh laoreet, vulputate nibh a, sollicitudin
					arcu. Nam tempus nisl arcu. Phasellus cursus et tellus eget tincidunt.
					Phasellus mattis sagittis luctus. Maecenas vel justo sollicitudin,
					laoreet mauris vitae, rutrum urna.
				</p>
			</>
		),
		img: "/about-tab-3.jpg",
	},
];

export default function AboutTabsSection() {
	const [active, setActive] = useState(0);

	return (
		<section className="w-full bg-[#232532] py-16">
			<div className="max-w-5xl mx-auto px-4">
				{/* Book style container */}
				<div className="relative bg-white rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden border-4 border-yellow-300">
					{/* Book spine */}
					<div className="absolute left-0 top-0 h-full w-4 bg-gradient-to-b from-yellow-300 via-yellow-200 to-yellow-100 rounded-l-3xl shadow-lg z-20 hidden md:block" />
					{/* Left Page (Image) */}
					<div className="p-0 flex items-center justify-center bg-gradient-to-br from-green-50 via-yellow-50 to-white relative">
						<div className="w-full h-full flex items-center justify-center">
							<Image
								src={tabs[active].img}
								alt={tabs[active].label}
								width={420}
								height={280}
								className="rounded-xl object-cover w-full h-[320px] md:h-[380px] shadow-lg"
								priority
							/>
						</div>
						{/* Decorative page curl */}
						<div className="absolute right-0 bottom-0 w-16 h-16 bg-gradient-to-tr from-yellow-200 via-yellow-100 to-transparent rounded-br-3xl opacity-40 pointer-events-none" />
					</div>
					{/* Right Page (Content) */}
					<div className="p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-yellow-50 via-green-50 to-white relative">
						{/* Tabs styled as book chapters */}
						<div className="flex gap-8 mb-6 border-b border-yellow-200">
							{tabs.map((tab, idx) => (
								<button
									key={tab.label}
									className={`pb-2 font-bold text-lg transition-colors tracking-wide ${
										active === idx
											? "text-green-600 border-b-4 border-yellow-400 bg-yellow-100 rounded-t-xl shadow"
											: "text-gray-500 border-b-4 border-transparent hover:text-green-600"
									}`}
									onClick={() => setActive(idx)}
								>
									{tab.label}
								</button>
							))}
						</div>
						{/* Tab Content */}
						<div>{tabs[active].content}</div>
					</div>
				</div>
			</div>
		</section>
	);
}