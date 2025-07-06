export const FormQuestion = () => {
	const form = useForm<IFromEntries>({
		resolver: zodResolver(FormEntriesSchema),
	});

	return <div></div>;
};
