import { VictoryPie } from "victory";

export interface PieChartDataPoints {
    x: string;
    y: number;
}

export interface PieDataInterface {
    data: PieChartDataPoints[]
}

const PieChart = ({data}: PieDataInterface) => {
    return (
        <VictoryPie
        data={data}
        height={200}
      />
    );
};

export default PieChart;
