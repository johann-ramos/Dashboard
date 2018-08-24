import React, { Component } from 'react'
import { Container, Dimmer, Loader } from 'semantic-ui-react'
import Menu from './menu';
import logo from './icono.png'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';


class resumen extends Component {

  constructor () {
    super()
    this.state = {}
    this.getResultados = this.getResultados.bind(this)
    this.getResultado = this.getResultado.bind(this)
    this.colorCard = this.colorCard.bind(this)
  }

  componentDidMount () {
    this.getResultados()
  }

  fetch (endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getResultados() {
    this.fetch('/api/resultados')
      .then(resultados => {
        if (resultados.length) {
          this.setState({resultados: resultados})
          this.getResultado(resultados[0].id)
        } else {
          this.setState({resultados: []})
        }
      })
  }

  getResultado (id) {
    this.fetch(`/api/resultados/${id}`)
      .then(resultado => this.setState({resultado: resultado}))
  }
  
  colorCard(result) {
  if (result === "Success") {
    return "#8CC152";
  }
  else{
    return "#DE2700";
  }
}
  render() {

    let {resultados, resultado} = this.state
    return resultados
      ?
      <div class="row">
          <Menu />

            {Object.keys(resultados).map((key) => {
              return <div class="col-md-2">
                    <Card>
                      <CardImg  style={{  justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 1, background:this.colorCard(resultados[key].status)}} src={logo} alt="Card image cap" />
                      <CardBody style={{ background:this.colorCard(resultados[key].status), marginBottom: 10, marginLeft: 0, marginRight: 0  }}>
                        <CardTitle>JOB: {resultados[key].jobName}</CardTitle>
                        <CardSubtitle>Ejecutor: {resultados[key].ejecutor}</CardSubtitle>
                        <CardText>POS: {resultados[key].pos}</CardText>
                        <CardText>{resultados[key].output}</CardText>
                      </CardBody>
                    </Card>
                  </div> 
            })}
     
      </div>
      : <Container text>
        <Dimmer active inverted>
          <Loader content='Loading' />
        </Dimmer>
      </Container>
  }
}

export default resumen;
