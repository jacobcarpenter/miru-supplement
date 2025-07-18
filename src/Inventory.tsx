import { BowtieHex } from "./icons/BowtieHex";
import { ChevronHex } from "./icons/ChevronHex";
import { PentagonHex } from "./icons/PentagonHex";
import { RectangleHex } from "./icons/RectangleHex";

export function Inventory() {
	return (
		<div className="grid grid-cols-[50px_1fr] rounded-md border-2">
			<div className="flex flex-col border-r-2">
				{Array.from({ length: 4 }).map((_, i) => (
					<div key={i} className="flex-1 not-last:border-b-2"></div>
				))}
			</div>
			<div className="flex w-full justify-between p-2">
				<div className="flex">
					<RectangleHex width={24} height={24} />
					<PentagonHex width={24} height={24} />
					<ChevronHex width={24} height={24} />
					<BowtieHex width={24} height={24} />
				</div>
				<div className="text-right">
					<div className="font-bold">inventory</div>
					<div className="text-xs">max 10</div>
				</div>
			</div>
		</div>
	);
}
