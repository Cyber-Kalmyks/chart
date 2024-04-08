import cln from "../style/Seven.module.scss";
import cls from "../style/One.module.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const originalData = [
  0, // Значение в январе
  305, // Значение в феврале
  420, // Значение в марте
  525, // Значение в апреле
  730, // Значение в мае
  730,
  970,
];

// Преобразование в нарастающие значения
const cumulativeData = originalData.reduce((acc, currentValue, index) => {
  if (index === 0) {
    // Первое значение остается без изменений
    return [currentValue];
  } else {
    // Каждое последующее значение - сумма предыдущих значений и текущего
    const sum = acc[index - 1] + currentValue;
    return [...acc, sum];
  }
}, []);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
  // Задайте размеры графика
  width: 300,
  height: 300,
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: cumulativeData,
      borderColor: "rgb(0, 0, 0)",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  ],
};

const Seven = () => {
  return (
    <>
      <div className="grafp" style={{ width: "700px", height: "1000px", margin: '70px auto' }}>
        <Line options={options} data={data} />;
      </div>
    </>
  );
};

export default Seven;
