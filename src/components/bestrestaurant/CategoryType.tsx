export const getCategory = (category: string): string => {
  let types: string[] = category.split(" > ");

  if (types.length == 2) {
    return types[1];
  }

  if (types[1] == "퓨전요리") {
    if (category.includes("한식")) {
      return "한식";
    } else {
      return "일식";
    }
  }

  if (category.includes("닭강정")) {
    return "양식";
  }

  switch (types[1]) {
    case "간식":
    case "패스트푸드":
      return types[2];
    case "치킨":
      return "양식";
    case "아시아음식":
      return "아시아음식(" + types[2] + ")";
    case "뷔페":
      return "한식";
    case "술집":
      return "주점";
  }

  return types[1];
};