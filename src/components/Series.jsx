import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosTablaSeries, DatosTablaSeries } from '../data/DatosSeries';

var a=1;
//para detectar el onclick (DEBUG)
function showAlert(event) {
  alert("onclick Event detected!");
}

class Series extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-site">
        <h1>Series</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>{TitulosTablaSeries.id} </th>
                    <th>{TitulosTablaSeries.field1}</th>
                    <th>{TitulosTablaSeries.field2}</th>
                    <th>{TitulosTablaSeries.field3}</th>
                  </tr>
                </thead>
                <tbody>
                  {DatosTablaSeries.map((item) => {
                    return (
                      <tr>
                        <td>{item.titulo}</td>
                        <td>{item.fechaestreno}</td>
                        <td>{item.temporadas}</td>
                        <td>{item.capitulos}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={DatosTablaSeries[a].imagen} />
                <Card.Body>
                  <Card.Title>
                    {DatosTablaSeries[a].marca} {DatosTablaSeries[a].modelo}
                  </Card.Title>
                  <Card.Text>
                    Información: {DatosTablaSeries[a].matricula}
                    <p />
                    {DatosTablaSeries[a].descripción}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={DatosTablaSeries[3].imagen} />
                <Card.Body>
                  <Card.Title>
                    {DatosTablaSeries[3].marca} {DatosTablaSeries[3].modelo}
                  </Card.Title>
                  <Card.Text>
                    Información: {DatosTablaSeries[3].matricula}
                    <p />
                    {DatosTablaSeries[3].descripción}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Series;