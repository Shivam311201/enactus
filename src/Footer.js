import { Col, Row } from "react-bootstrap";
import Location from "./images/location.png";
function Footer()
{
  return (<div className="footer_style">
   <div>
   <Row className="m-0 p-0" style={{display:"flex",justifyContent:"space-around",marginTop:"30px !important"}}>
   <Col lg={3} className="col_align">
   <Row className="m-0 p-0">
    <Col lg={2}><img src={Location} className="loaction_img"/></Col>   
    <Col lg={10}>
    <div className="location_head">FIND US</div>
    <div className="location_content">Enactus DTU, Main Bawana Road, Rohini, Delhi-110032</div>   
    </Col>   
   </Row>
   </Col>
   <Col lg={3} className="col_align">
   <Row className="m-0 p-0">
    <Col lg={2}><img src={Location} className="loaction_img"/></Col>   
    <Col lg={10}>
    <div className="location_head">FIND US</div>
    <div className="location_content">Enactus DTU, Main Bawana Road, Rohini, Delhi-110032</div>   
    </Col>   
   </Row>
   </Col>
   <Col lg={3} className="col_align">
   <Row className="m-0 p-0">
    <Col lg={2}><img src={Location} className="loaction_img"/></Col>   
    <Col lg={10}>
    <div className="location_head">FIND US</div>
    <div className="location_content">Enactus DTU, Main Bawana Road, Rohini, Delhi-110032</div>   
    </Col>   
   </Row>
   </Col>
   </Row>
   </div>
   <div className="line1"></div>
  </div>);
}   
export default Footer;