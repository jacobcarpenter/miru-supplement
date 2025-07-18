export function ChevronUpHex({ width = 18, height = 18, limit }: { width?: number; height?: number; limit?: number }) {
	return (
		<svg width={`${width}px`} height={`${height}px`} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M3,15 L9,12 15,15 15,7 9,4 3,7 Z" stroke="#999" fill="#999" stroke-width="3" stroke-linejoin="round" />
			{limit && (
				<text fontFamily="Quicksand" fontWeight="bold" fill="white" fontSize={10.5} x={9} y={4.5} textAnchor="middle" alignmentBaseline="hanging">
					{limit}
				</text>
			)}
		</svg>
	);
}
