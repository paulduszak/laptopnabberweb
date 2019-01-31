import React, {Component} from 'react';
import { Card, CardBody, CardTitle, Collapse, Button } from 'reactstrap';

import './CheckboxFilter.css';

class CheckboxFilter extends Component {

    constructor(props) {
        super(props);

        this.state = { collapse: false };
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }

    handleClick = (event) => {
        let checkboxName = event.target.value;
        let checkboxState = this.refs[checkboxName].checked

        this.props.handleClick(checkboxName, checkboxState);
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
                        <ul className="list-group checkbox-filter">
                            {this.props.options.map( option => (
                                <li className="list-group-item" key={option}>
                                    <div className="checkbox">
                                        <label >
                                            <input type="checkbox" name={option} ref={option} value={option} onClick={this.handleClick}/>
                                            <span className="default">{option}</span>
                                        </label>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Collapse>
                </CardBody>
            </Card>
        );
    }
}

export default CheckboxFilter;