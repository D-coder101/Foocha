import { useQuery } from "@tanstack/react-query";
import { fetchLgas } from "../services/apiCountries";

function useLgas(selectedState: string | null) {
  const {
    data: lgas,
    isLoading: loadingLgas,
    error: errorLgas,
  } = useQuery({
    queryKey: ["lgas", selectedState],
    queryFn: () => fetchLgas(selectedState!),
    enabled: !!selectedState,
  });

  return { lgas, loadingLgas, errorLgas };
}

export default useLgas;
