import Dashboardbox from "@/components/Dashboardbox";
import { useGetKpisQuery } from "@/state/api";

const Row1 = () => {

  const {data} = useGetKpisQuery();
  data
  return (
    <>
        <Dashboardbox gridArea="a"></Dashboardbox>
        <Dashboardbox gridArea="b"></Dashboardbox>
        <Dashboardbox gridArea="c"></Dashboardbox>
    </>

  )
}

export default Row1