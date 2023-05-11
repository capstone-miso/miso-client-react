import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ReactApexChart from "react-apexcharts";

interface Props {}

interface State {
  series: { name: string; data: number[] }[];
  options: ApexCharts.ApexOptions;
}

class ApexChart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 145, 90, 20, 10],
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
          ],
        },
      },
    };
  }

  render() {
    return (
      <>
        <Stack mt="30px">
          <Heading fontSize="lg">계절별 방문자 비율</Heading>
          <Text fontSize="xs">#저녁에많이가는</Text>
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
