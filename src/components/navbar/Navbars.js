// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/react2.png'
import { CgAddR } from "react-icons/cg";
import { FcSearch } from "react-icons/fc";
import { TbRecycle } from "react-icons/tb";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { username } from '../../constants/Usernames'
import { useEffect, useState } from 'react';
import Badge from "react-bootstrap/Badge";

function Navbars({ setNavShowRestore, setNavShow, setSearch, columns }) {

  const [viewUser, setViewUSer] = useState([])
  function localShow() {
    setNavShow(true)
  }

  const array = []
  useEffect(() => {


    Object.entries(columns).map(([id, elements,]) => {
      elements.items.map((el) => {
        console.log(el.username, "000000")
        array.push(el.username)
      })
    })
    setViewUSer(array)
  }, [columns])

  function userSplited() {
    let arr = [...viewUser]
    let result = arr.filter((item, index) =>
      arr.indexOf(item) === index
    )
    let splitResult = result.map((items) => {
      return items.split(' ').map((elss) => elss.split("")[0]).join("")
    })
  

    function handleColor(el) {
      console.log(el, "el");
      switch (el) {
        case 'LG':
          return "info";
        case 'GSH':
          return "success";
        case 'PKJ':
          return "primary";
        case 'A':
          return "secondary";
        case 'T':
          return "warning";
        case 'J':
          return "danger";
        case 'CB':
          return "primary";
        case 'CD':
          return "dark";
        case 'KW':
          return "success";
        case 'AB':
          return "primary";
        default:
          return 'warning';
      }


    }


    return <>
      {
        splitResult.map((el,i) => {
          return (
            <span key={i} >
              <Badge   pill bg={handleColor(el)}>
                <span style={{ textAlign: 'center'  }} onClick={(e) => { }} >{el.toUpperCase()}</span>
              </Badge>&nbsp; &nbsp;
            </span>
          )
        })
      }
    </>
  }

  // function handleColor(el.toUpperCase()){
  //  

  //   switch (el.toUpperCase()) {
  //     case 'LG':
  //       return "info";
  //     case 'GSH':
  //       return "success";
  //     case 'PKJ':
  //       return "primary";
  //     case 'A':
  //       return "secondary";
  //     case 'T':
  //       return "warning";
  //     case 'J':
  //       return "danger";
  //     case 'CB':
  //       return "primary";
  //     case 'CD':
  //       return "dark";
  //     case 'KW':
  //       return "success";
  //     case 'ab':
  //       return "primary";
  //     default:
  //       return 'warning';
  //   }


  // }




  return (
    <>
      {/* """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""" */}
      <Navbar className='fixed-top' bg="secondary" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />&nbsp;
            React Drag Drop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          {/* <Navbar.Collapse id="navbarScroll">
           
          </Navbar.Collapse> */}

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}

            >

              <Button className="btn btn-sm" onClick={localShow} variant="info">Create Ticket <CgAddR /></Button>&nbsp;
              <Button className="btn btn-sm" onClick={() => { setNavShowRestore(true) }} variant="light">
                <TbRecycle />
              </Button>

            </Nav>
            <span  >{userSplited()}</span>
            <Form className="d-flex ">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => { setSearch(e.target.value) }}
              />
            </Form>
            <Button variant="light"><FcSearch /></Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
      <br />
    </>

  );
}

export default Navbars;
