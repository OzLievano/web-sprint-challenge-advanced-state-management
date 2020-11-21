import React from 'react'
import {loadSmurfData} from '../actions/index'
import {connect} from 'react-redux'
import {Container,Col,Row,Card,CardHeader,CardBody} from 'reactstrap'

const SmurfList = (props) => {
    console.log(props)
    const handleClick = (e) => {
        e.preventDefault()
        props.loadSmurfData()
    }
    return (
        <div>
            <button onClick={handleClick}>Load Smurfs</button>
            <br/>
            {props.smurfs.map((smurf,index)=>{
                return (
                    <Container className="mt-3">
                        <Row md="4">
                            <Col md={{ size: 6, offset: 3 }}>
                                <Card>
                                    <CardHeader>{smurf.name}</CardHeader>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
      smurfs:state.smurfs,
      isLoading:state.isLoading,
      error: state.error
    }
  }
export default connect(mapStateToProps,{loadSmurfData})(SmurfList)
