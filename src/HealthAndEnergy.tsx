export function HealthAndEnergy() {
	return (
		<div>
			<div className="grid grid-cols-2 gap-2">
				<div className="text-center">
					<div className="h-12 w-12 rounded-sm border-2"></div>
					<div className="text-2xl font-bold">HP</div>
					<div className="text-xs">max 20</div>
				</div>
				<div className="text-center">
					<div className="h-12 w-12 rounded-sm border-2"></div>
					<div className="text-2xl font-bold">EP</div>
					<div className="text-xs">max 20</div>
				</div>
			</div>
		</div>
	);
}
