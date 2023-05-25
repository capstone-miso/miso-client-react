import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { storeDetail } from "../../pages/matzipDetail";

interface Props {
  storeData: storeDetail | null;
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
    const { storeData } = this.props;
    this.state = {
      series: [
        {
          name: "방문횟수",
          data: [
            storeData?.keywordData.costUnder8000
              ? storeData?.keywordData.costUnder8000
              : 0,
            storeData?.keywordData.costUnder15000
              ? storeData?.keywordData.costUnder15000
              : 0,
            storeData?.keywordData.costUnder25000
              ? storeData?.keywordData.costUnder25000
              : 0,
            storeData?.keywordData.costOver25000
              ? storeData?.keywordData.costOver25000
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
          categories: ["8000이하", "15000이하", "25000이하", "25000이상"],
        },
      },
    };
    return (
      <Stack mt="30px">
        <Heading fontSize="lg">식사비용 통계</Heading>
        <Text fontSize="xs">#가성비맛집</Text>
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
