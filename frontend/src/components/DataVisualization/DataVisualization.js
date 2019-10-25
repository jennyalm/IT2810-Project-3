/*
Creates a BubbleChart showing the distribution of movies over the last 10 decades.
 */

import React, { PureComponent } from 'react';

// Library used to create chart: Recharts
import {
    ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip,
    Legend, ResponsiveContainer,
} from 'recharts';

// Data to be displayed by the BubbleChart
let data = [
    { decade: "'20s", index: 1, value: 0 },
    { decade: "'30s", index: 1, value: 0 },
    { decade: "'40s", index: 1, value: 0 },
    { decade: "'50s", index: 1, value: 0 },
    { decade: "'60s", index: 1, value: 0 },
    { decade: "'70s", index: 1, value: 0 },
    { decade: "'80s", index: 1, value: 0 },
    { decade: "'90s", index: 1, value: 0 },
    { decade: "'00s", index: 1, value: 0 },
    { decade: "'10s", index: 1, value: 0 },
];

// Gathers every movie in the database and extracts the year of release of each one into an array.
// The array of years is iterated over to update the value in data corresponding to the correct decade.
const fetchData = async () => {
    let years = [];

    await fetch(`http://localhost:4000/movies/all-movies`)
        .then(res => res.json())
        .then(jsonResponse => {
            years = jsonResponse.map(a => a.Year);
            console.log("Years: " + years);
        });

    let year;
    for (year of years) {
        if (year[2] === '2') {
            data[0].value += 1;
        } else if (year[2] === '3') {
            data[1].value += 1;
        } else if (year[2] === '4') {
            data[2].value += 1;
        } else if (year[2] === '5') {
            data[3].value += 1;
        } else if (year[2] === '6') {
            data[4].value += 1;
        } else if (year[2] === '7') {
            data[5].value += 1;
        } else if (year[2] === '8') {
            data[6].value += 1;
        } else if (year[2] === '9') {
            data[7].value += 1;
        } else if (year[2] === '0') {
            data[8].value += 1;
        } else if (year[2] === '1') {
            data[9].value += 1;
        }
    }

    console.log("data after for loop: ");
    console.log(data);

};

export default class DataVisualization extends PureComponent {

    // Renders the small "pop up" that appears when hovering over a "bubble"
    renderTooltip = (props) => {
        const { active, payload } = props;

        if (active && payload && payload.length) {
            const data = payload[0] && payload[0].payload;

            return (
                <div style={{
                    backgroundColor: '#fff', border: '1px solid #999', margin: 0, padding: 10,
                }}
                >
                    <p>Decade: {data.decade}</p>
                    <p>
                        <span>Nr. of movies: </span>
                        {data.value}
                    </p>
                </div>
            );
        }
        return null;
    };

    render() {
        fetchData();
        console.log("data in render: ");
        console.log(data);
        return (
            <div>
                <ResponsiveContainer width={"90%"} height={80}>
                    <ScatterChart margin={{
                        top: 20, right: 0, bottom: 0, left: 0,
                    }}>
                        <XAxis dataKey={"decade"} interval={0} />
                        <YAxis type={"number"} dataKey={"index"} height={10} width={80}
                               tick={false} tickLine={false} axisLine={false} />
                        <ZAxis type="number" dataKey="value" range={[0, 500]} />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                        <Scatter data={data} fill="#8884d8" />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
                )
    }

}