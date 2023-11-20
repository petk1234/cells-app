import { useQuery } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";
import { ModeInfo, ModeUpdatedInfo } from "./types";

const useCellsFetch = () => {
  const { data } = useQuery<ModeUpdatedInfo[]>({
    queryKey: ["cells"],
    queryFn: async () => {
      const modesInfo: ModeInfo[] = await fetch(
        "https://60816d9073292b0017cdd833.mockapi.io/modes"
      )
        .then((res) => res.json())
        .catch((error) => Promise.reject(error.response));

      return modesInfo.map((modeInfo) => ({
        ...modeInfo,
        fields: [...Array(modeInfo.field).keys()].map((cellNum) => ({
          value: cellNum,
          uuid: uuidv4()
        }))
      }));
    }
  });

  return data || [];
};

export default useCellsFetch;
