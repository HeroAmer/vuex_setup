<template>
    <div>
        <GChart          
        type="ColumnChart"                       
        @ready="onChartReady"
        />

        <GChart      
        type="BubbleChart"
        :data="chartData"
        :options="chartOptions"
        style="width: 900px; height: 500px;"
        />
        
    </div>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
    name:'Charts',
    components: {
    GChart
    },
    data() {
        return {
        // Array will be automatically processed with visualization.arrayToDataTable function
        chartData: [
            ["ID", "X", "Y", "Temperature"],
            ["", 80, 167, 120],
            ["", 79, 136, 130],
            ["", 78, 184, 50],
            ["", 72, 278, 230],
            ["", 81, 200, 210],
            ["", 72, 170, 100],
            ["", 68, 477, 80]
        ],
        chartOptions: {
            colorAxis: { colors: ["yellow", "red"] }
        }
        };
    },
    methods: {
    onChartReady(chart, google) {
      const query = new google.visualization.Query(
        "https://docs.google.com/spreadsheets/d/1qhyJnMpiuuwKLCY3t6W4bp6XKnixTFekAPlCpR8AcK0/edit?usp=sharing"
      );
      query.send(response => {
        const options = {
          title: "Chart from a Separate Spreadsheet"
        };
        const data = response.getDataTable();
        chart.draw(data, options);
      });
    }
  }
}
</script>

<style>

</style>