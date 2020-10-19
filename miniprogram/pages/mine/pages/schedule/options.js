const chart = {
  title: {
    show: false
  },
  legend: {
    show: false
  },
  xAxis: {
    type: 'category',
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    data: ['1', '2', '3', '4', '5', '6', '7']
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: '#DDF3E5'
      }
    },
    name: '做题个数'
  },
  series: [{
    data: [0, 0, 0, 0, 0, 0, 0],
    type: 'bar',
    itemStyle: {
      color: '#2DC3A6',
      barBorderRadius: 10
    },
    barWidth: 10
  }]
}

// 饼状图，显示各章节正确率
const pie = {
  title: {
    text: '做题数'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c} ({d}%)'
  },
  legend: {
    type: 'plain',
    orient: 'vertical',
    top: '25%',
    right: '12.8%',
    data: [
      {
        name: '第一章',
        icon: 'circle'
      },
      {
        name: '第二章',
        icon: 'circle'
      },
      {
        name: '第三章',
        icon: 'circle'
      },
      {
        name: '第四章',
        icon: 'circle'
      },
      {
        name: '第五章',
        icon: 'circle'
      },
      {
        name: '第六章',
        icon: 'circle'
      },
      {
        name: '第七章',
        icon: 'circle'
      }
    ]
  },
  series: [
    {
      type: 'pie',
      radius: ['50%', '70%'],
      center: ['27%', '50%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '30',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '30',
            fontWeight: 'bold'
          }
        }
      },
      data: [
        { value: 0, name: '第一章' },
        { value: 0, name: '第二章' },
        { value: 0, name: '第三章' },
        { value: 0, name: '第四章' },
        { value: 0, name: '第五章' },
        { value: 0, name: '第六章' },
        { value: 0, name: '第七章' }
      ]
    }
  ]
}

const radar = {
  title: {
    text: '各章节正确率',
    textStyle: {
      color: '#AAAAAA',
      fontSize: 12,
      align: 'center'
    },
    left: 'center',
    bottom: 0
  },
  radar: {
    indicator: [
      { text: '第一章', max: 1 },
      { text: '第二章', max: 1 },
      { text: '第三章', max: 1 },
      { text: '第四章', max: 1 },
      { text: '第五章', max: 1 },
      { text: '第六章', max: 1 },
      { text: '第七章', max: 1 }
    ],
    name: {
      textStyle: {
        color: '#333333',
        fontSize: 14
      }
    },
    center: ['50%', '50%'],
    radius: '70%',
    shape: 'circle'
  },
  series: [
    {
      name: '北京',
      type: 'radar',
      lineStyle: {
        normal: {
          width: 1,
          opacity: 0.5
        }
      },
      data: [
        {
          value: [0, 0, 0, 0, 0, 0, 0]
        }
      ],
      symbol: 'none',
      itemStyle: {
        normal: {
          color: '#2DC3A6'
        }
      },
      areaStyle: {
        normal: {
          opacity: 0.2
        }
      }
    }
  ]
}

export default {
  chart: chart,
  pie: pie,
  radar: radar
}
