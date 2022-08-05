import React from 'react'
import {
    CartesianGrid,
    Legend,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

import '../styles/Analytics.css'
function Analytics() {
    const data = [
        {
            name: "Q1",
            2021: 0.2,
            2022: 0.7,
            amt: 1
        },
        {
            name: "Q2",
            2021: 0.3,
            2022: 1,
            amt: 1
        },
        {
            name: "Q3",
            2021: 0.6,
            2022: 1.2,
            amt: 1
        },
        {
            name: "Q4",
            2021: 0.5,
            2022: 1.5,
            amt: 1
        },
        {
            name: "Q5",
            2021: 0.4,
            2022: 1.8,
            amt: 1
        }
    ];
    return (
        <div>
            <div className='top-bar'>
                <div className='top-heading'>
                    <div className='title'>Dashboards</div>
                    <div className='sub-title'>Risk Management</div>
                </div>
                <div className='top-links'>
                    <ul>
                        <li ><a href='/' className='top-active'>Insights</a></li>
                        <li><a href='/'>List</a></li>
                        <li><a href='/'>Appendix</a></li>
                    </ul>
                </div>
            </div>
            <div className='main-container'>
                <div className='side-bar'>
                    <ul>
                        <li><a href='/' className='active-sidebar'>Risk Management</a></li>
                        <li><a href='/'>Care Management</a></li>
                        <li><a href='/'>Claims</a></li>
                        <li><a href='/'>My Profile</a></li>
                    </ul>
                </div>
                <div className='view-container'>
                    <div className='view-head'>
                        <div className='view-head-title'>
                            <div className='view-head-risk'>Risk Management</div>
                            <small>Last Update 2/15/2022 8:06 PM</small>
                            <small className='version'>(Version v1.1.0)</small>
                        </div>
                        <div className='view-head-data'>
                            <small>Attributed Lives</small>
                            <div className='view-num'>41,415</div>
                            <small>Change: 16.9%</small>
                        </div>
                        <div className='view-head-data'>
                            <small>Current RRR</small>
                            <div className='view-num'>48.3%</div>
                            <small>Change: 0.0%</small>
                        </div>
                        <div className='view-head-data'>
                            <small>Average Risk</small>
                            <div className='view-num'>1.369</div>
                            <small>Change: 13.8%</small>
                        </div>
                    </div>
                    <div className='view-body'>
                        <div className='view-body-main'>
                            <div className='view-tabs'>
                                <ul >
                                    <li ><a href='/' className='active'>Medicaid</a></li>
                                    <li ><a href='/'>Commercial</a></li>
                                    <li ><a href='/'>Medicare Advantage</a></li>
                                </ul>
                            </div>
                            <div className='view-tabs-bar'>
                                <ul >
                                    <li ><a href='/' className='tabs-active'>Risk Performance</a></li>
                                    <li ><a href='/'>Risk Distribution</a></li>
                                </ul>
                            </div>
                            <div className='view-main'>
                                <div className="chart-container">
                                    <h2>Risk Trend</h2>
                                    <div className="chart">
                                        <LineChart
                                            width={730}
                                            height={250}
                                            data={data}
                                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="2021" stroke="#8884d8" />
                                            <Line type="monotone" dataKey="2022" stroke="#82ca9d" />
                                        </LineChart>
                                    </div>
                                </div>
                                <div className='view-table'>
                                    <h2>Live Across Disease</h2>
                                    <table className='table-data'>
                                        <tbody>
                                            <tr>
                                                <th>Disease</th>
                                                <th>Attributed Lives</th>
                                                <th>Contribution</th>
                                            </tr>
                                            <tr>
                                                <td>Diabetes</td>
                                                <td>6,969</td>
                                                <td>
                                                    <div className='contri-fill' style={{ width: '80%' }}></div>
                                                    <div className='contri-blank'>14.59%</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>CHF</td>
                                                <td>4,231</td>
                                                <td>
                                                    <div className='contri-fill' style={{ width: '70%' }}></div>
                                                    <div className='contri-blank' style={{ width: '30%' }}>10.68%</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>COPD</td>
                                                <td>3,854</td>
                                                <td>
                                                    <div className='contri-fill' style={{ width: '60%' }}></div>
                                                    <div className='contri-blank' style={{ width: '40%' }}>9.41%</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>CKD</td>
                                                <td>2,429</td>
                                                <td>
                                                    <div className='contri-fill' style={{ width: '40%' }}></div>
                                                    <div className='contri-blank' style={{ width: '60%' }}>5.59%</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Renal Failure</td>
                                                <td>2,154</td>
                                                <td>
                                                    <div className='contri-fill' style={{ width: '30%' }}></div>
                                                    <div className='contri-blank' style={{ width: '70%' }}></div>4.76%
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className='view-filter'>
                            <h3>Filters</h3>
                            <div className='select-container'>
                                <label>Year</label>
                                <select>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                </select>
                            </div>
                            <div className='select-container'>
                                <label>Month</label>
                                <select>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                            </div>
                            <div className='select-container'>
                                <label>Period Mode</label>
                                <select>
                                    <option value="y1d">y1d</option>
                                    <option value="y2d">y2d</option>
                                </select>
                            </div>

                            <div className='select-container'>
                                <label>Plan</label>
                                <select>
                                    <option value="All">All</option>
                                    <option value="*">*</option>
                                </select>
                            </div>

                            <div className='select-container'>
                                <label>Attributed Care System</label>
                                <select>
                                    <option value="All">All</option>
                                    <option value="*">*</option>
                                </select>
                            </div>
                            <div className='select-container'>
                                <label>Region</label>
                                <select>
                                    <option value="All">All</option>
                                    <option value="*">*</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics