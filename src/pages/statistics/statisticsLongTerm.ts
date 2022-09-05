const StatisticsPageLongTerm = {
  render(): string {
    return `
    <div class = "statistics__longterm">
      <div class="statistics__chart">
        <canvas id="chart1" width="500" height="400"></canvas>
      </div>
      <div class="statistics__chart">
        <canvas id="chart2" width="500" height="400"></canvas>
      </div>
      <div class="statistics__chart">
        <canvas id="chart3" width="500" height="400"></canvas>
      </div>
    </div>`;
  },
};

export default StatisticsPageLongTerm;
