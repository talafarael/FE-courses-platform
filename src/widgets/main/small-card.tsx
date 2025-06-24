interface SmallCardProps {
	mainLable: string;
	secondaryLable: string;
}

export const SmallCard = ({ mainLable, secondaryLable }: SmallCardProps) => {
	return (
		<div className="bg-[#E8DEF8] border-2 border-black rounded-2xl p-4 flex flex-col justify-between shadow-md h-[160px]">
			<div className="flex flex-col gap-4">
				<div className="w-10 h-10 bg-purple rounded-full" />
				<div>
					<p className="font-semibold">{mainLable}</p>
					<p className="text-sm text-gray-600">{secondaryLable}</p>
				</div>
			</div>
			<div className="flex justify-end">
				<button className="px-3 py-1 bg-purple text-white rounded-xl text-sm">
					Детальніше
				</button>
			</div>
		</div>
	);
};
