import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ReactApexChart from "react-apexcharts";

interface ApexChartProps {}

interface ApexChartState {
  series: number[];
  options: ApexCharts.ApexOptions;
}

class ApexChart extends React.Component<ApexChartProps, ApexChartState> {
  constructor(props: ApexChartProps) {
    super(props);

    this.state = {
      series: [60, 20, 15, 5],
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["봄", "여름", "가을", "겨울"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 280,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <>
        <Stack mt="20px">
          <Heading fontSize="lg">계절별 방문자 비율</Heading>
          <Text fontSize="xs">#봄에많이찾는</Text>
          <div id="chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="pie"
              width={350}
            />
          </div>
        </Stack>
      </>
    );
  }
}

export default ApexChart;
