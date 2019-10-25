import React, {PureComponent} from 'react';
import './StatButton.css'
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import DataVisualization from "../DataVisualization/DataVisualization";

// creates the stats on top of our page. Stats are in DataVisulization
const StatToggle = () => (

            <div className="wrapper">
                <Button color="primary" id="toggler" style={{marginBottom: '1rem'}}>
                    Database stats
                </Button>
                <UncontrolledCollapse toggler="#toggler">
                    <Card>
                        <CardBody>
                            <p>Number of movies in database: 100</p>
                            <p>Distribution of releases over the last 10 decades:</p>
                            <DataVisualization/>
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>


);
export default StatToggle;