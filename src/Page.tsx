import { ActiveBody } from "./ActiveBody";
import { Calendar } from "./Calendar";
import { ConditionsAndInjuries } from "./ConditionsAndInjuries";
import { Inventory } from "./Inventory";
import { HealthAndEnergy } from "./HealthAndEnergy";

export function Page() {
	return (
		<div className="flex justify-center">
			<div className="flex max-w-[8.5in] flex-col gap-3.5 p-4">
				<div className="flex justify-between">
					<Calendar />
					<div className="flex self-start pr-2">
						<div className="pr-2 text-center text-xs" style={{ writingMode: "vertical-rl" }}>
							base stats
						</div>
						<div className="flex flex-col gap-1">
							<div className="flex flex-col items-center">
								<div className="font-bold">1</div>
								<div className="text-[10px]">ATK</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="font-bold">1</div>
								<div className="text-[10px]">DEF</div>
							</div>
						</div>
					</div>
					<HealthAndEnergy />
				</div>
				<div className="grid grid-cols-[7fr_6fr_3fr] gap-3.5">
					<Inventory />
					<ActiveBody />
					<TechSkills />

					{/* <div className="flex flex-col items-center">
						<div className="text-xs">base stats</div>
						<div className="flex gap-4">
							<div className="flex flex-col items-center">
								<div>1</div>
								<div className="text-xs">ATK</div>
							</div>
							<div className="flex flex-col items-center">
								<div>1</div>
								<div className="text-xs">DEF</div>
							</div>
						</div>
					</div> */}
				</div>
				<ConditionsAndInjuries />
			</div>
		</div>
	);
}

const techSkills = [
	{ id: "TS-1", desc: "Dodge & Strike" },
	{ id: "TS-2", desc: "Roll & Wire Slice" },
	{ id: "TS-3", desc: "Jump & Attack" },
	{ id: "TS-4", desc: "EMP Grenade" },
];

function TechSkills() {
	return (
		<div className="flex flex-col items-center gap-6">
			<div className="flex flex-col items-center text-xs">
				<div className="text-[10px] font-bold">tech skills</div>
				<div className="flex flex-col items-center gap-1">
					<div className="text-[10px]">available dice</div>
					<div className="flex gap-1">
						<div className="size-5 rounded-sm border-2"></div>
						<div className="size-5 rounded-sm border-2"></div>
						<div className="size-5 rounded-sm border-2"></div>
					</div>
				</div>
				<div className="flex flex-col gap-2 pt-1">
					{techSkills.map((x) => (
						<div key={x.id} className="flex items-end">
							<div className="flex items-center gap-1 rounded-full rounded-b-none border-2 px-1" style={{ writingMode: "sideways-lr" }}>
								<div className="text-[10px]">{x.id}</div>
								<div className="size-2 rounded-full border-2"></div>
							</div>

							<div className="flex flex-col gap-0.5">
								<div className="pl-1 text-xs">{x.desc}</div>
								<div className="flex">
									{Array.from({ length: 6 }).map((_, i) => (
										<div key={i} className="w-4 border-2 border-l-0 text-center">
											{i + 1}
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="flex flex-col gap-1 pt-2 text-[10px]">
					<div className="flex items-center gap-1 rounded-l-full border-2 px-1">
						<div className="size-2 rounded-full border-2"></div>
						<div>TS-5 Sprint Tech</div>
					</div>
					<div className="flex items-center gap-1 rounded-l-full border-2 px-1">
						<div className="size-2 rounded-full border-2"></div>
						<div>TS-6 Electric Bolts</div>
					</div>
					<div className="flex items-center gap-1 rounded-l-full border-2 px-1">
						<div className="size-2 rounded-full border-2"></div>
						<div>TS-7 Flaming Arrows</div>
					</div>
				</div>
			</div>
		</div>
	);
}
