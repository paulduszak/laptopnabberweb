import React, {Component} from 'react';
import { Card, CardBody, CardTitle, Collapse, Button } from 'reactstrap';

class FilterItem extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <Card className="col-md-12">
                <CardTitle className="m-0">
                    <h6 className="pt-2 pl-3 float-left" onClick={this.toggle}>Price</h6>
                    <Button color="link" className="float-right m-0" onClick={this.toggle} style={{ marginBottom: '1rem' }}>+</Button>
                </CardTitle>
                <CardBody className="p-0">
                    <Collapse isOpen={this.state.collapse}>
                        <div className="p-3">
                            <input type="range" className="form-control-range" id="formControlRange" />
                        </div>
                    </Collapse>
                </CardBody>
            </Card>
        );
    }
}

export default FilterItem;