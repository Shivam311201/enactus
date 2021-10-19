import "./style.css";
import { Row,Col } from "react-bootstrap";
function Project()
{
  return (<div className="content_style1">
      <div className="box">
       <Row>
       <Col lg={6} style={{display:"flex",justifyContent:"flex-end"}}><div className="line"></div></Col>
       <Col lg={6}>
       <div className="project_head1">PROJECT SWAJAL</div>
       <div className="project_content1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel accumsan est. Nulla libero nisl, egestas in ultrices eu, viverra quis magna. Cras ac risus non nisl dictum mollis. Maecenas semper, augue nec faucibus lobortis,</div>
       </Col>
       </Row>
       <Row>
       <Col lg={6}>
       <div className="project_head2">PROJECT UNNATI</div>
       <div className="project_content2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel accumsan est. Nulla libero nisl, egestas in ultrices eu, viverra quis magna. Cras ac risus non nisl dictum mollis. Maecenas semper, augue nec faucibus lobortis,</div>
       </Col>
       <Col lg={6}></Col>
       </Row>
       <Row>
       <Col lg={6}></Col>
       <Col lg={6}>
       <div className="project_head1">PROJECT RANGMANCH</div>
       <div className="project_content1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel accumsan est. Nulla libero nisl, egestas in ultrices eu, viverra quis magna. Cras ac risus non nisl dictum mollis. Maecenas semper, augue nec faucibus lobortis,</div>
       </Col>
       </Row>
       <Row>
       <Col lg={6}>
       <div className="project_head2">PROJECT MILAN</div>
       <div className="project_content2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel accumsan est. Nulla libero nisl, egestas in ultrices eu, viverra quis magna. Cras ac risus non nisl dictum mollis. Maecenas semper, augue nec faucibus lobortis,</div>
       </Col>
       <Col lg={6}></Col>
       </Row>
      </div>
  </div>)
}
export default Project;