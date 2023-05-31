import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { storeDetail } from "../../pages/MatzipDetail";

interface Props {
  storeData: storeDetail | null;
}

interface State {
  series: { name: string; data: number[] }[];
  options: ApexCharts.ApexOptions;
}

class AttandenceChart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { storeData } = this.props;
    this.state = {
      series: [
        {
          name: "방문횟수",
          data: [
            storeData?.keywordData.smallGroup
              ? storeData?.keywordData.smallGroup
              : 0,
            storeData?.keywordData.mediumGroup
              ? storeData?.keywordData.mediumGroup
              : 0,
            storeData?.keywordData.largeGroup
              ? storeData?.keywordData.largeGroup
              : 0,
            storeData?.keywordData.extraGroup
              ? storeData?.keywordData.extraGroup
              : 0,
          ],
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
          categories: ["5명 이하", "10명 이하", "20명 이하", "20 이상"],
        },
      },
    };
    return (
      <Stack mt="30px">
        <Heading fontSize="lg">인원수 통계</Heading>
        {/* <Text fontSize="xs">#가성비맛집</Text> */}
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

export default AttandenceChart;
