import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar} from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    let data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];

    return (
        <div>
            {/* <h4> Dashboard Part </h4> */}
            <div className='chart-container'>
                <div className='investment-revenue'>
                    <LineChart width={600} height={300} data={data}>
                        {/* <Line type="monotone" dataKey={'sell'} stroke="#8884d8" /> */}
                        <Line type="monotone" dataKey={'revenue'} stroke="#8884d8" />
                        <Line type="monotone" dataKey={'investment'} stroke="#82ca9d" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey={'month'} />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                    <p> Investment Vs Revenue </p>
                </div>
                <div className='sell'>
                    <BarChart width={600} height={300} data={data}>
                        <XAxis dataKey={'month'} stroke="#8884d8" />
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Bar dataKey={'sell'} barSize={30} fill="#8884d8" />
                    </BarChart>
                    <p> MONTH WISE SELL </p>
                </div>
            </div >
        </div >
    );
};

export default Dashboard;