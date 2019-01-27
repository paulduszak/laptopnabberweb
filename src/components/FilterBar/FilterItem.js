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
            <Card className="col mt-2">
                <CardTitle className="m-0">
                    <h6 className="pt-2 pl-1 float-left" onClick={this.toggle}>{this.props.title}</h6>
                    <Button color="link" className="float-right m-0" onClick={this.toggle} style={{ marginBottom: '1rem' }}>+</Button>
                </CardTitle>
                <CardBody className="p-0">
                    <Collapse isOpen={this.state.collapse}>
                        <div className="p-3">
                            {this.props.options.map( option => (
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="defaultCheck1" />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            {option}
                                        </label>
                                </div>
                            ))}
                        </div>
                    </Collapse>
                </CardBody>
            </Card>
        );
    }
}

export default FilterItem;