import React, {PureComponent} from 'react';
import './StatButton.css'
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import DataVisualization from "../DataVisualization/DataVisualization";

/*
let movieAmount = 0;

const fetchAmount = async () => {
    let movies = [];
    await fetch(`http://localhost:4000/movies/all-movies`)
        .then(res => res.json())
        .then(jsonResponse => {
            movies = jsonResponse.map(a => a.Year);
            console.log(movies);
        })

    movieAmount += movies.length;
}
*/
const StatToggle = () => (



            <div className="wrapper">
                <Button color="primary" id="toggler" style={{marginBottom: '1rem'}}>
                    Database stats
                </Button>
                <UncontrolledCollapse toggler="#toggler">
                    <Card>
                        <CardBody>
                            <p>Number of movies in database: 30</p>
                            <p>Distribution of releases over the last 10 decades:</p>
                            <DataVisualization/>
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>


);
export default StatToggle;