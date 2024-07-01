import styled from "styled-components"
import Layout from "../../../shared/Layout"
import Main from './Main'

function AddWithRadar(){
    return (
        <div style={{height: '100%'}}>
        <Layout content={(<Main />)} />
        </div>
    )
}

export default AddWithRadar;