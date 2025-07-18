const dates = Array.from({ length: 66 }, (_, i) => ({ n: i + 1, e: i + 1 === 3 || i + 1 === 15 || i + 1 === 25 || i + 1 === 40 || i + 1 === 50 || i + 1 === 66 }));

export function Calendar() {
	return (
		<div className="flex w-[calc(20px*24+2px)] flex-wrap self-start border-t-2 border-l-2 border-solid border-black text-xs text-[11px]">
			{dates.map((x) => (
				<div key={x.n} className={"flex h-8 border-r-2 border-b-2 border-solid border-black pt-1 " + (x.e ? "w-[40px]" : "w-[20px] justify-around")}>
					{x.e ? (
						<div className="pl-1 text-center">
							<div>{x.n}</div>
							<div className="mt-[-10px] text-base">&bull;</div>
						</div>
					) : (
						<div>{x.n}</div>
					)}
				</div>
			))}
		</div>
	);
}
