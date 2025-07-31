import { ActiveBody } from "./ActiveBody";
import { Calendar } from "./Calendar";
import { ConditionsAndInjuries } from "./ConditionsAndInjuries";
import { Inventory } from "./Inventory";
import { HealthAndEnergy } from "./HealthAndEnergy";
import { TechSkills } from "./TechSkills";

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
				</div>
				<ConditionsAndInjuries />
			</div>
		</div>
	);
}
