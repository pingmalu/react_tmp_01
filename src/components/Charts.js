import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/tree';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class EchartsTest extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        /*
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
        */

        var data =
            {
                "name": "malu.me",
                "children": [
                    {
                        "name": "git.malu.me",
                        "children": [
                            {
                                "name": "cluster",
                                "children": [
                                    {"name": "AgglomerativeCluster", "value": 3938},
                                    {"name": "CommunityStructure", "value": 3812},
                                    {"name": "HierarchicalCluster", "value": 6714},
                                    {"name": "MergeEdge", "value": 743}
                                ]
                            },
                            {
                                "name": "graph",
                                "children": [
                                    {"name": "BetweennessCentrality", "value": 3534},
                                    {"name": "LinkDistance", "value": 5731},
                                    {"name": "MaxFlowMinCut", "value": 7840},
                                    {"name": "ShortestPaths", "value": 5914},
                                    {"name": "SpanningTree", "value": 3416}
                                ]
                            },
                            {
                                "name": "optimization",
                                "children": [
                                    {"name": "AspectRatioBanker", "value": 7074}
                                ]
                            }
                        ]
                    },
                    {
                        "name": "ip.malu.me",
                        "children": [
                            {"name": "Easing", "value": 17010},
                            {"name": "FunctionSequence", "value": 5842},
                            {
                                "name": "interpolate",
                                "children": [
                                    {"name": "ArrayInterpolator", "value": 1983},
                                    {"name": "ColorInterpolator", "value": 2047},
                                    {"name": "DateInterpolator", "value": 1375},
                                    {"name": "Interpolator", "value": 8746},
                                    {"name": "MatrixInterpolator", "value": 2202},
                                    {"name": "NumberInterpolator", "value": 1382},
                                    {"name": "ObjectInterpolator", "value": 1629},
                                    {"name": "PointInterpolator", "value": 1675},
                                    {"name": "RectangleInterpolator", "value": 2042}
                                ]
                            },
                            {"name": "ISchedulable", "value": 1041},
                            {"name": "Parallel", "value": 5176},
                            {"name": "Pause", "value": 449},
                            {"name": "Scheduler", "value": 5593},
                            {"name": "Sequence", "value": 5534},
                            {"name": "Transition", "value": 9201},
                            {"name": "Transitioner", "value": 19975},
                            {"name": "TransitionEvent", "value": 1116},
                            {"name": "Tween", "value": 6006}
                        ]
                    },
                    {
                        "name": "s.malu.me",
                        "children": [
                            {
                                "name": "converters",
                                "children": [
                                    {"name": "Converters", "value": 721},
                                    {"name": "DelimitedTextConverter", "value": 4294},
                                    {"name": "GraphMLConverter", "value": 9800},
                                    {"name": "IDataConverter", "value": 1314},
                                    {"name": "JSONConverter", "value": 2220}
                                ]
                            },
                            {"name": "DataField", "value": 1759},
                            {"name": "DataSchema", "value": 2165},
                            {"name": "DataSet", "value": 586},
                            {"name": "DataSource", "value": 3331},
                            {"name": "DataTable", "value": 772},
                            {"name": "DataUtil", "value": 3322}
                        ]
                    },
                    {
                        "name": "cdn.malu.me",
                        "children": [
                            {"name": "DirtySprite", "value": 8833},
                            {"name": "LineSprite", "value": 1732},
                            {"name": "RectSprite", "value": 3623},
                            {"name": "TextSprite", "value": 10066}
                        ]
                    },
                    {
                        "name": "ai.malu.me",
                        "children": [
                            {"name": "FlareVis", "value": 4116}
                        ]
                    },
                    {
                        "name": "im.malu.me",
                        "children": [
                            {"name": "DragForce", "value": 1082},
                            {"name": "GravityForce", "value": 1336},
                            {"name": "IForce", "value": 319},
                            {"name": "NBodyForce", "value": 10498},
                            {"name": "Particle", "value": 2822},
                            {"name": "Simulation", "value": 9983},
                            {"name": "Spring", "value": 2213},
                            {"name": "SpringForce", "value": 1681}
                        ]
                    },
                    {
                        "name": "mcms.malu.me",
                        "children": [
                            {"name": "AggregateExpression", "value": 1616},
                            {"name": "And", "value": 1027},
                            {"name": "Arithmetic", "value": 3891},
                            {"name": "Average", "value": 891},
                            {"name": "BinaryExpression", "value": 2893},
                            {"name": "Comparison", "value": 5103},
                            {"name": "CompositeExpression", "value": 3677},
                            {"name": "Count", "value": 781},
                            {"name": "DateUtil", "value": 4141},
                            {"name": "Distinct", "value": 933},
                            {"name": "Expression", "value": 5130},
                            {"name": "ExpressionIterator", "value": 3617},
                            {"name": "Fn", "value": 3240},
                            {"name": "If", "value": 2732},
                            {"name": "IsA", "value": 2039},
                            {"name": "Literal", "value": 1214},
                            {"name": "Match", "value": 3748},
                            {"name": "Maximum", "value": 843},
                            {
                                "name": "methods",
                                "children": [
                                    {"name": "add", "value": 593},
                                    {"name": "and", "value": 330},
                                    {"name": "average", "value": 287},
                                    {"name": "count", "value": 277},
                                    {"name": "distinct", "value": 292},
                                    {"name": "div", "value": 595},
                                    {"name": "eq", "value": 594},
                                    {"name": "fn", "value": 460},
                                    {"name": "gt", "value": 603},
                                    {"name": "gte", "value": 625},
                                    {"name": "iff", "value": 748},
                                    {"name": "isa", "value": 461},
                                    {"name": "lt", "value": 597},
                                    {"name": "lte", "value": 619},
                                    {"name": "max", "value": 283},
                                    {"name": "min", "value": 283},
                                    {"name": "mod", "value": 591},
                                    {"name": "mul", "value": 603},
                                    {"name": "neq", "value": 599},
                                    {"name": "not", "value": 386},
                                    {"name": "or", "value": 323},
                                    {"name": "orderby", "value": 307},
                                    {"name": "range", "value": 772},
                                    {"name": "select", "value": 296},
                                    {"name": "stddev", "value": 363},
                                    {"name": "sub", "value": 600},
                                    {"name": "sum", "value": 280},
                                    {"name": "update", "value": 307},
                                    {"name": "variance", "value": 335},
                                    {"name": "where", "value": 299},
                                    {"name": "xor", "value": 354},
                                    {"name": "-", "value": 264}
                                ]
                            },
                            {"name": "Minimum", "value": 843},
                            {"name": "Not", "value": 1554},
                            {"name": "Or", "value": 970},
                            {"name": "Query", "value": 13896},
                            {"name": "Range", "value": 1594},
                            {"name": "StringUtil", "value": 4130},
                            {"name": "Sum", "value": 791},
                            {"name": "Variable", "value": 1124},
                            {"name": "Variance", "value": 1876},
                            {"name": "Xor", "value": 1101}
                        ]
                    }
                ]
            };

        myChart.showLoading();
        function start_run (data) {
            myChart.hideLoading();

            /*
            echarts.util.each(data.children, function (datum, index) {
                index % 2 === 0 && (datum.collapsed = true);
            });
            */

            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    triggerOn: 'mousemove'
                },
                series: [
                    {
                        type: 'tree',

                        data: [data],

                        top: '1%',
                        left: '7%',
                        bottom: '1%',
                        right: '20%',

                        symbolSize: 7,
                        initialTreeDepth: -1,

                        label: {
                            normal: {
                                position: 'left',
                                verticalAlign: 'middle',
                                align: 'right',
                                fontSize: 9
                            }
                        },

                        leaves: {
                            label: {
                                normal: {
                                    position: 'right',
                                    verticalAlign: 'middle',
                                    align: 'left'
                                }
                            }
                        },

                        expandAndCollapse: true,
                        animationDuration: 100,
                        animationDurationUpdate: 100,
                    }
                ]
            });
        };
        start_run(data);
    }
    render() {
        return (
            <div id="main" style={{ width: 800, height: 900 }}></div>
        );
    }
}

export default EchartsTest;