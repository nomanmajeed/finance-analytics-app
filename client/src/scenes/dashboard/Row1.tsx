import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
// import { useTheme } from "@mui/material";
import { useMemo } from "react";


type Props = {};

const Row1 = (props: Props) => {
  const { data } = useGetKpisQuery();

  const revenue = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
        };
      })
      );
    }, [data]);

  const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3).charAt(0).toUpperCase() + month.substring(0, 3).slice(1),
          revenue: revenue,
          expenses: expenses,
        };
      })
      );
    }, [data]);

  return (
    <>
      <DashboardBox bgcolor="#fff" gridArea="a"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="b"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="c"></DashboardBox>
    </>
  );
};

export default Row1;
