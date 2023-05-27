import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { storeDetail } from "../../pages/MatzipDetail";

interface ApexChartProps {
  storeData: storeDetail | null;
}

interface ApexChartState {
  series: number[];
  options: ApexCharts.ApexOptions;
}

class ApexChart extends React.Component<ApexChartProps, ApexChartState> {
  constructor(props: ApexChartProps) {
    super(props);
  }

  render() {
    const { storeData } = this.props;
    const spring: number = storeData?.keywordData.spring
      ? storeData.keywordData.spring
      : 0;
    const summer: number = storeData?.keywordData.summer
      ? storeData.keywordData.summer
      : 0;
    const fall: number = storeData?.keywordData.fall
      ? storeData.keywordData.fall
      : 0;
    const winter: number = storeData?.keywordData.winter
      ? storeData.keywordData.winter
      : 0;
    this.state = this.state = {
      series: [spring, summer, fall, winter],
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
    return (
      <>
        <Stack mt="20px">
          <Heading fontSize="lg">계절별 방문자 비율</Heading>
          {/* <Text fontSize="xs">#봄에많이찾는</Text> */}
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
