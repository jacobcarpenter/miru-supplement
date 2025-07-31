import { BowtieHex } from "./icons/BowtieHex";
import { ChevronHex } from "./icons/ChevronHex";
import { PentagonHex } from "./icons/PentagonHex";
import { RectangleHex } from "./icons/RectangleHex";

export function Inventory() {
	return (
		<div className="flex flex-col rounded-md border-2">
			<div className="flex w-full flex-1 justify-between p-2">
				<div>
					<div className="font-bold">inventory</div>
					<div className="text-xs">max 10</div>
				</div>
				<div className="flex">
					<RectangleHex width={24} height={24} />
					<PentagonHex width={24} height={24} />
					<ChevronHex width={24} height={24} />
					<BowtieHex width={24} height={24} />
				</div>
			</div>
			<div className="flex h-12">
				{Array.from({ length: 4 }).map((_, i) => (
					<div key={i} className="flex-1 border-t-2 border-r-2 last:border-r-0"></div>
				))}
			</div>
		</div>
	);
}
