const data = [{ label: "minor injuries", value: 3 }, { label: "/" }, { label: "starvation", value: 8 }, { label: "sleep deprivation", value: 5 }];

export function ConditionsAndInjuries() {
	return (
		<div className="flex justify-between">
			{data.map((x) => (
				<div key={x.label} className="flex items-center gap-1.5 text-xs">
					<div>{x.label}</div>
					{x.value && (
						<div className="flex gap-1">
							{Array.from({ length: x.value }).map((_, i) => (
								<div key={i} className="h-4 w-4 rounded-sm border-2"></div>
							))}
						</div>
					)}
				</div>
			))}
		</div>
	);
}
