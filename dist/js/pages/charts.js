require.config({
    paths:{
        echarts:'plugins/echarts/echarts',
        'echarts/chart/bar' : 'plugins/echarts/echarts',
        'echarts/chart/line': 'plugins/echarts/echarts',
        'echarts/chart/pie': 'plugins/echarts/echarts'
    }
});

require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/line',
            'echarts/chart/pie'
        ],
        function(ec) {
        }
);