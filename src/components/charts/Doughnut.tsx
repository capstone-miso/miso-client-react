const Doughnut = () => {
  // useLayoutEffect(() => {
  //   let root = am5.Root.new("chartdiv");
  //   root.setThemes([am5themes_Animated.new(root)]);

  //   let chart = root.container.children.push(
  //     am5percent.PieChart.new(root, {
  //       layout: root.verticalLayout,
  //     })
  //   );

  //   let series = chart.series.push(
  //     am5percent.PieSeries.new(root, {
  //       valueField: "value",
  //       categoryField: "category",
  //     })
  //   );

  //   series.data.setAll([
  //     { value: 10, category: "One" },
  //     { value: 9, category: "Two" },
  //     { value: 6, category: "Three" },
  //     { value: 5, category: "Four" },
  //     { value: 4, category: "Five" },
  //     { value: 3, category: "Six" },
  //     { value: 1, category: "Seven" },
  //   ]);

  //   series.appear(1000, 100);

  //   return () => chart.dispose();
  // }, []);

  return <div style={{ width: "280px", height: "100px" }} />;
};

export default Doughnut;
