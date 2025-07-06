import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const FormQuestion = () => {
  const form = useForm<>({
    resolver: zodResolver(FormEntriesSchema),
  });

  return <div></div>;
};
