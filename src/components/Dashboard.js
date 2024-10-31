import React, { useEffect, useState } from 'react';
import * as api from './api';
import {
    PieChart, Pie, Tooltip,
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    LineChart, Line,
    ResponsiveContainer
} from 'recharts';

const Dashboard = () => {
    const [totalCounts, setTotalCounts] = useState({});
    const [topMetrics, setTopMetrics] = useState({});
    const [typeDistribution, setTypeDistribution] = useState([]);
    const [cafvEligibility, setCafvEligibility] = useState([]);
    const [modelYearTrend, setModelYearTrend] = useState([]);
    const [popularMakes, setPopularMakes] = useState([]);
    const [utilityDistribution, setUtilityDistribution] = useState([]);
    const [avgElectricRangeByMake, setAvgElectricRangeByMake] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            setTotalCounts((await api.fetchTotalCounts()).data);
            setTopMetrics((await api.fetchTopMetrics()).data);
            setTypeDistribution((await api.fetchTypeDistribution()).data);
            setCafvEligibility((await api.fetchCAFVEligibility()).data);
            setModelYearTrend((await api.fetchModelYearTrend()).data);
            setPopularMakes((await api.fetchPopularMakes()).data);
            setUtilityDistribution((await api.fetchUtilityDistribution()).data);
            setAvgElectricRangeByMake((await api.avgElectricRangeByMake()).data);
        };
        loadData();
    }, []);

    return (
        <div className="dashboard">
            <h2>Vehicle Dashboard</h2>

            <div className="card-container">
                {/* Total Counts Card */}
                <div className="card">
                    <h3>Total Overview</h3>
                    <p>Total Vehicles: {totalCounts.totalVehicles}</p>
                    <p>Electric Vehicles: {totalCounts.electricVehicles}</p>
                    <p>Percentage Electric: {totalCounts.percentageElectric}%</p>
                </div>

                {/* Top Metrics Card */}
                <div className="card">
                    <h3>Top Makes and Models</h3>
                    <div className="chart-scrollable">
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={topMetrics.topMakes}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Type Distribution Card */}
                <div className="card">
                    <h3>Vehicle Type Distribution</h3>
                    <div className="chart-scrollable">
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie data={typeDistribution} dataKey="value" nameKey="type" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* CAFV Eligibility Card */}
                <div className="card">
                    <h3>CAFV Eligibility</h3>
                    <div className="chart-scrollable">
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={cafvEligibility}
                                    dataKey="value"
                                    nameKey="eligibility"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={90}
                                    fill="#82ca9d"
                                    label
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Model Year Trend Card */}
                <div className="card">
                    <h3>Vehicle Year Trend</h3>
                    <div className="chart-scrollable">
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={modelYearTrend}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="year" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Popular Makes Card */}
                <div className="card">
                    <h3>Popular Makes</h3>
                    <div className="chart-scrollable">
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={popularMakes}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="make" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="count" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Utility Distribution Card */}
                <div className="card">
                    <h3>Utility Distribution</h3>
                    <div className="chart-scrollable">
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={utilityDistribution}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Average Electric Range By Make Card */}
                <div className="card">
                    <h3>Highest Electric Range By Make</h3>
                    <div className="chart-scrollable">
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={avgElectricRangeByMake}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="make" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="range" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
