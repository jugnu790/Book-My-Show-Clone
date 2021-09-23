import { Disclosure } from '@headlessui/react'
import {BiChevronDown, BiChevronUp} from "react-icons/bi"

const PlaysFilter = (props) => {
	return (
		<div className="bg-gray-50 mb-4 px-3 py-2 rounded-md">
		<Disclosure>
			{({ open }) => (
				<>
					<Disclosure.Button className="py-2 flex items-center gap-3">
						{open ? <BiChevronUp className="text-red-600"/> : <BiChevronDown />}
						<span className={open ? "text-red-600" : "text-gray-700"}>
							{props.title}
						</span>
					</Disclosure.Button>
					<Disclosure.Panel className="text-gray-500">
						<div className="flex items-center gap-3 flex-wrap">
							{props.tags.map((tag) => (
								<>
									<div className="border-2 border-gray-200 px-3 py-1">
										<span className="text-red-600 text-sm">{tag}</span>
									</div>
								</>
								))
							}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
		</div>
	);
};

export default PlaysFilter;
