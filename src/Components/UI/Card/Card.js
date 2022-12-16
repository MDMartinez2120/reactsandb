import React from "react";
import "./Card.css"
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

const card = () => {
    return (
        <div className="card">
            <MDBCard>
                <MDBCardImage className="card-img" src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>flavor</MDBCardTitle>
                    <MDBCardText>
                        yum yum ice cream
                    </MDBCardText>
                    <MDBBtn href='#'>add</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}
export default card;