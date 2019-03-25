import React, { Component } from 'react';
import NameList from './cascading.json';
var data = [];
class CasCading extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.state = {
            countrys: [],
            states: [],
            citys: []
        };
    };

    onStateChange = (e, name) => {
        data = [];
        if (e.target.value != 0)
            data = NameList.filter(x => x.s_id == e.target.value);
        if (name === 'state') {
            this.setState({ citys: [], states: [] });
            this.setState({ states: data });
        } else if (name === 'city') {
            this.setState({ citys: data });
        }
    };

    componentDidMount() {
        var countrys = NameList.filter(x => x.s_id == 0);
        this.setState({ countrys });
    };
    
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-5">
                            <div className="form-group">
                                <label >Country</label>
                                <select className="form-control" onChange={(e) => this.onStateChange(e, 'state')}>
                                    <option value="0">Select Country</option>
                                    {this.state.countrys.map(c => (
                                        <option key={c.id} value={c.id}>{c.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="form-group">
                                <label >State</label>
                                <select className="form-control" onChange={(e) => this.onStateChange(e, 'city')}>
                                    <option value="0">Select State</option>
                                    {this.state.states.map(s => (
                                        <option key={s.id} value={s.id}>{s.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="form-group">
                                <label >City</label>
                                <select className="form-control">
                                    <option>Select City</option>
                                    {this.state.citys.map(c1 => (
                                        <option key={c1.id} value={c1.id}>{c1.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CasCading;