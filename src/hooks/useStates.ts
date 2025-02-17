import { useQuery } from "@tanstack/react-query";
import { fetchStates } from "../services/apiCountries";

export default function useStates() {
  const {
    data: states,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["states"],
    queryFn: fetchStates,
  });

  return { states, isLoading, error };
}
