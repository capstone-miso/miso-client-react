import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ReactApexChart from "react-apexcharts";

interface Props {}

interface State {
  series: { data: number[] }[];
  options: ApexCharts.ApexOptions;
}

class ApexChart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      series: [
        {
          data: [8000, 11900],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 50,
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: "top",
            },
          },
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: "12px",
            colors: ["#fff"],
          },
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"],
        },
        tooltip: {
          shared: true,
          intersect: false,
        },
        xaxis: {
          categories: ["동종 업계", "현재"],
        },
      },
    };
  }

  render() {
    return (
      <Stack mt="30px">
        <Heading fontSize="lg">계절별 방문자 비율</Heading>
        <Text fontSize="xs">#저녁에많이가는</Text>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={150}
          />
        </div>
      </Stack>
    );
  }
}

export default ApexChart;
