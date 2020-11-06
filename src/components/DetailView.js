import React, {Component} from 'react';
import {Card, Form, Col, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faList} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

export default class DetailView extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;

    };

    initialState = {
        id: '',
        nameBuilding: '',
        roomNumber: '',
        personResponsible: '',
        numberOfSeat: '',
        typeRoom: '',
        numberOfComputer: '',
        numberOfBoard: '',
        numberOfMultimediaProjectors: '',
        formGridNumberOfTraditionalProjectors: '',
        authorizeToBook: '',
        referenceCode: '',
        cardCode: '',
        responseUnit: '',
        comments: ''

    };

    componentDidMount() {
        const id = +this.props.match.params.id;
        console.log(id);
        console.log(this.props.match.params);
        if (id) {
            this.findRecordById(id);
        }
    }

    findRecordById = (id) => {
        axios.get(" https://creepy-spell-42189.herokuapp.com/record/" + id)
            .then(response => {
                console.log(response);
                console.log(response.data);
                if (response.data != null) {
                    this.setState({
                        id: response.data.id,
                        nameBuilding: response.data.nameBuilding,
                        roomNumber: response.data.roomNumber,
                        personResponsible: response.data.personResponsible,
                        numberOfSeat: response.data.numberOfSeat,
                        typeRoom: response.data.typeRoom,
                        numberOfComputer: response.data.numberOfComputer,
                        numberOfBoard: response.data.numberOfBoard,
                        numberOfMultimediaProjectors: response.data.numberOfMultimediaProjectors,
                        numberOfTraditionalProjectors: response.data.numberOfTraditionalProjectors,
                        authorizeToBook: response.data.authorizeToBook,
                        referenceCode: response.data.referenceCode,
                        cardCode: response.data.cardCode,
                        responseUnit: response.data.responseUnit,
                        comments: response.data.comments
                    });


                }

            }).catch((error) => {
            console.error("Error -" + error);

        });

    }
    recordList = () => {
        return this.props.history.push("/list")
    };


    render() {
        const {
            nameBuilding, roomNumber, personResponsible, numberOfSeat, typeRoom,
            numberOfComputer, numberOfBoard, numberOfMultimediaProjectors,
            numberOfTraditionalProjectors, authorizeToBook, referenceCode,
            cardCode, responseUnit, comments
        } = this.state;

        return (
            <div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={faEye}/> Szczegóły </Card.Header>
                    <Form id="recordFormId">
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridNameBuilding">
                                    <Form.Label>Budynek</Form.Label>
                                    <Form.Control readOnly
                                                  type="text" name="nameBuilding"
                                                  value={nameBuilding} onChange={this.recordChange}
                                                  className={"bg-dark text-white"}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridRoomNumber">
                                    <Form.Label>Nr.Pomieszczenia</Form.Label>
                                    <Form.Control readOnly
                                                  type="text" name="roomNumber"
                                                  value={roomNumber} onChange={this.recordChange}
                                                  className={"bg-dark text-white"}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPersonResponsible">
                                    <Form.Label>osoba odpowiedzialna</Form.Label>
                                    <Form.Control readOnly
                                                  type="text" name="personResponsible"
                                                  value={personResponsible} onChange={this.recordChange}
                                                  className={"bg-dark text-white"}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridNumberOfSeta">
                                    <Form.Label>liczba miejsc</Form.Label>
                                    <Form.Control readOnly
                                                  type="number" name="numberOfSeat"
                                                  value={numberOfSeat} onChange={this.recordChange}
                                                  className={"bg-dark text-white"}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridTypeRoom">
                                    <Form.Label>Rodzaj pomieszczenia</Form.Label>
                                    <Form.Control readOnly
                                                  type="text" name="typeRoom"
                                                  value={typeRoom} onChange={this.recordChange}
                                                  className={"bg-dark text-white"}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridNumberOfComputer">
                                    <Form.Label>liczba komputerów</Form.Label>
                                    <Form.Control readOnly
                                                  type="number" name="numberOfComputer"
                                                  value={numberOfComputer} onChange={this.recordChange}
                                                  className={"bg-dark text-white"}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridNumberOfBoard">
                                    <Form.Label>liczba tablic</Form.Label>
                                    <Form.Control readOnly
                                                  type="number" name="numberOfBoard"
                                                  value={numberOfBoard} onChange={this.recordChange}
                                                  className={"bg-dark text-white"}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridNumberOfMultimediaProjectors">
                                    <Form.Label>projektory multimedialne</Form.Label>
                                    <Form.Control readOnly
                                                  type="number" name="numberOfMultimediaProjectors"
                                                  value={numberOfMultimediaProjectors} onChange={this.recordChange}
                                                  className={"bg-dark text-white"}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridNumberOfTraditionalProjectors">
                                    <Form.Label>Projektory tradycyjne</Form.Label>
                                    <Form.Control readOnly
                                                  type="number" name="numberOfTraditionalProjectors"
                                                  value={numberOfTraditionalProjectors} onChange={this.recordChange}
                                                  className={"bg-dark text-white"}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridAuthorizeToBook">
                                    <Form.Label>Wymagane uprawnienei do rezerwacji</Form.Label>
                                    <Form.Control readOnly
                                                  type="text" name="authorizeToBook"
                                                  value={authorizeToBook} onChange={this.recordChange}
                                                  className={"bg-dark text-white"}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridReferenceCode">
                                    <Form.Label>kod referencyjny</Form.Label>
                                    <Form.Control readOnly
                                                  type="text" name="referenceCode"
                                                  value={referenceCode} onChange={this.recordChange}
                                                  className={"bg-dark text-white"}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCardCode">
                                    <Form.Label>kod karty</Form.Label>
                                    <Form.Control readOnly
                                                  type="text" name="cardCode"
                                                  value={cardCode} onChange={this.recordChange}
                                                  className={"bg-dark text-white"}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridResponseUnit">
                                    <Form.Label>jednostka odpowiedzialna</Form.Label>
                                    <Form.Control readOnly
                                                  type="text" name="responseUnit"
                                                  value={responseUnit} onChange={this.recordChange}
                                                  className={"bg-dark text-white"}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridComments">
                                    <Form.Label>uwagi dodatkowe</Form.Label>
                                    <Form.Control readOnly
                                                  type="text" name="comments"
                                                  value={comments} onChange={this.recordChange}
                                                  className={"bg-dark text-white"}
                                    />
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{"textAlign": "right"}}>
                            <Button size="sm" variant="info" type="button" onClick={this.recordList.bind()}>
                                <FontAwesomeIcon icon={faList}/>Lista sal
                            </Button>
                        </Card.Footer>
                    </Form>

                </Card>
            </div>


        )


    }
}
