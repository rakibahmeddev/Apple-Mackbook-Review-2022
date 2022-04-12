import { useEffect, useState } from "react";

const useRecharts = () => {
  const [charts, setCharts] = useState([]);
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setCharts(data));
  }, []);
  return [charts, setCharts];
};
export default useRecharts;
