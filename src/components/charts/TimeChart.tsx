import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { storeDetail } from "../../pages/MatzipDetail";

interface Props {
  storeData:storeDetail|null
}

interface State {
  series: { name: string; data: number[] }[];
  options: ApexCharts.ApexOptions;
}

class ApexChart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    
  }

  render() {
    const {storeData}=this.props
    const times:number[]=[storeData?.visitedTime.under8 ? storeData?.visitedTime.under8:0,storeData?.visitedTime.hour9 ? storeData?.visitedTime.hour9:0
      ,storeData?.visitedTime.hour10 ? storeData?.visitedTime.hour10:0,storeData?.visitedTime.hour11 ? storeData?.visitedTime.hour11:0
      ,storeData?.visitedTime.hour12 ? storeData?.visitedTime.hour12:0,storeData?.visitedTime.hour13 ? storeData?.visitedTime.hour13:0
      ,storeData?.visitedTime.hour14 ? storeData?.visitedTime.hour14:0,storeData?.visitedTime.hour15 ? storeData?.visitedTime.hour15:0
      ,storeData?.visitedTime.hour16 ? storeData?.visitedTime.hour16:0,storeData?.visitedTime.hour17 ? storeData?.visitedTime.hour17:0
      ,storeData?.visitedTime.hour18 ? storeData?.visitedTime.hour18:0,storeData?.visitedTime.hour19 ? storeData?.visitedTime.hour19:0
      ,storeData?.visitedTime.hour20 ? storeData?.visitedTime.hour20:0,storeData?.visitedTime.hour21 ? storeData?.visitedTime.hour21:0
      ,storeData?.visitedTime.after22 ? storeData?.visitedTime.after22:0]
    this.state = {
      series: [
        {
          name: "방문횟수",
          data: times,
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
          ],
        },
      },
    };
    return (
      <>
        <Stack mt="30px">
          <Heading fontSize="lg">시간대별 방문자수</Heading>
          <Text fontSize="xs">#점심에많이가는</Text>
          <div id="chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="line"
              height={350}
            />
          </div>
        </Stack>
      </>
    );
  }
}

export default ApexChart;
