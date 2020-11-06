import React, {Component} from 'react';
import {Table, Button, ButtonGroup} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList, faEdit, faTrash, faEye} from '@fortawesome/free-solid-svg-icons'
import MyToast from './MyToast';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class RecordList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            records: []

        };
    }

    componentDidMount() {
        this.findAllRecords();
    }

    findAllRecords() {
        axios.get("https://creepy-spell-42189.herokuapp.com/record/list")
            .then(response => response.data)
            .then((data) => {
                this.setState({records: data});
            });

    };

    deleteRecord = (recordId) => {
        axios.delete(" https://creepy-spell-42189.herokuapp.com/record/delete/" + recordId)
            .then(response => {
                if (response.data != null) {
                    this.setState({"show": true});
                    setTimeout(() => this.setState({"show": false}), 3000)
                    this.setState({
                        records: this.state.records.filter(record => record.id !== recordId)
                    });
                } else {
                    this.setState({"show": false});
                }
            });

    };

    render() {
        return (
            <div>

                <div style={{"display": this.state.show ? "block" : "none"}}>
                    <MyToast show={this.state.show} message={"Sala została usunięta."} type={"danger"}/>
                </div>
                <Table float left striped bordered hover variant="dark">
                    <thead>
                    <tr align="left">
                        <td colSpan="12"><FontAwesomeIcon icon={faList}/> Lista sal</td>
                    </tr>
                    <tr>
                        <th>Budynek</th>
                        <th>Numer pomieszczenia</th>
                        <th>Osoba odpowiedzialna</th>
                        <th>Liczba miejsc</th>
                        <th>Rodzaj pomieszczenia</th>
                        <th>Liczba komputerów</th>
                        <th>Liczba tablic</th>
                        <th>Projektory multimedialne</th>
                        <th>Projektory tradycyjne</th>
                        <th>Akcja</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.records.length === 0 ?
                        <tr align="center">
                            <td colSpan="12">Ewidencja jest pusta</td>
                        </tr> :
                        this.state.records.map((record) => (
                            <tr key={record.id}>
                                <td>{record.nameBuilding}</td>
                                <td>{record.roomNumber}</td>
                                <td>{record.personResponsible}</td>
                                <td>{record.numberOfSeat}</td>
                                <td>{record.typeRoom}</td>
                                <td>{record.numberOfComputer}</td>
                                <td>{record.numberOfBoard}</td>
                                <td>{record.numberOfMultimediaProjectors}</td>
                                <td>{record.numberOfTraditionalProjectors}</td>
                                <td>
                                    <ButtonGroup>
                                        <Link to={"edit/" + record.id}
                                              className="btn btn-sm btn-outline-primary"><FontAwesomeIcon
                                            icon={faEdit}/></Link>
                                        <Link to={"details/" + record.id}
                                              className="btn btn-sm btn-outline-info"><FontAwesomeIcon
                                            icon={faEye}/></Link>{' '}

                                        <Button size="sm" variant="outline-danger"
                                                onClick={this.deleteRecord.bind(this, record.id)}><FontAwesomeIcon
                                            icon={faTrash}/></Button>
                                    </ButtonGroup>
                                </td>

                            </tr>

                        ))
                    }
                    </tbody>
                </Table>
            </div>


        );
    }
}
