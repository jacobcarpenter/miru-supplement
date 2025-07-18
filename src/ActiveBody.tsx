import { BowtieHex } from "./icons/BowtieHex";
import { ChevronHex } from "./icons/ChevronHex";
import { ChevronUpHex } from "./icons/ChevronUpHex";
import { HexagonHex } from "./icons/HexagonHex";
import { PentagonHex } from "./icons/PentagonHex";
import { RectangleHex } from "./icons/RectangleHex";

export function ActiveBody() {
	return (
		<div className="grid grid-rows-[3fr_1fr_1.5fr] rounded-md border-2">
			<div className="not-last:border-b-2">
				<div className="flex justify-between p-2">
					<div className="flex">
						<RectangleHex width={24} height={24} limit={5} />
						<PentagonHex width={24} height={24} limit={1} />
						<ChevronHex width={24} height={24} limit={1} />
						<BowtieHex width={24} height={24} limit={1} />
					</div>
					<div className="text-right">
						<div className="font-bold">active body</div>
						<div className="text-xs">max 5</div>
					</div>
				</div>
			</div>
			<div className="not-last:border-b-2">
				<div className="flex justify-between p-2">
					<ChevronUpHex width={24} height={24} />
					<div>
						<span className="font-bold">mask</span>
					</div>
				</div>
			</div>
			<div className="not-last:border-b-2">
				<div className="flex justify-between p-2">
					<div className="flex">
						<RectangleHex width={24} height={24} />
						<HexagonHex width={24} height={24} />
					</div>
					<div>
						<span className="font-bold">tools</span>
					</div>
				</div>
			</div>
		</div>
	);
}
