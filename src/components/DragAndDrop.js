import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "../components/styles/DragandDrop.css";
import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import ModalInputAdd from "./modals/ModalInputAdd";
import ModalInputEdit from "./modals/ModalInputEdit";
import ModalRestore from "./modals/ModalRestore";
import { MdDeleteForever, MdBorderColor } from "react-icons/md";

function DragAndDrop({
  columns,
  setColumns,
  search,
  navShowRestor,
  setNavShowRestore,
  navShow,
  setNavShow,
}) {
  const [modalShow, setModalShow] = useState(false);
  const [dfaultEditItems, setDfaultEditItems] = useState();
  const [singleCol, setSingleCol] = useState();
  const [restore, setRestore] = useState([]);
  const newArr = []
  const [addInputArr, setAddInputArr] = useState({});
  const [type, setType] = useState("");
  // const [colorCode, setColorCode] = useState([]);


  const handleSuDrag = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      // console.log('Hello source');
      console.log("destination", destination);
      const sourceColumn = columns[source.droppableId];
      // console.log('sourceColumn', sourceColumn);
      const destColumn = columns[destination.droppableId];
      // console.log('destColumn', destColumn); 
      const sourceItems = [...sourceColumn.items];

      const destItmes = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItmes.splice(destination.index, 0, removed);
      // console.log("sourceColumn|sourceColumn|sourceColumn", sourceColumn);
      // console.log("destItmesdestItmesdestItmesdestItmesdestItmes", destItmes);
      // console.log("source.droppableId source.droppableId", source.droppableId);
      console.log(
        "destination.droppableId destination.droppableIdd",
        destination.droppableId
      );
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItmes,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItem = [...column.items];
      const [removed] = copiedItem.splice(source.index, 1);
      copiedItem.splice(destination.index, 0, removed);
      console.log("copiedItem copiedItemcopiedItemcopiedItem", copiedItem);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItem,
        },
      });
    }
  };
  useEffect(() => {
    console.log("addInputArr addInputArr", addInputArr);
    if (type === "add") {
      const cloneItem = columns["Requested"].items;
      cloneItem.push(addInputArr);
      setColumns({
        ...columns,
        Requested: {
          name: "Requested",
          items: cloneItem,
        },
      });
    } else {
      setType("");
    }
  }, [addInputArr]);

  function handleDelete(column, item) {
    const clonrCol = { ...columns };
    const DelTicket = clonrCol[column.name].items.filter(
      (ticket) => ticket.id !== item.id
    );
    const clodneDelData = [...restore];
    const setDeleteData = clodneDelData.find((item) => item[column.name]);
    if (setDeleteData) {
      clodneDelData.map((product) =>
        product.name === column.name ? product[column.name].push(item) : product
      );
      setRestore(clodneDelData);
    } else {
      const p = { [column.name]: [item], name: column.name };
      clodneDelData.push(p);
      setRestore(clodneDelData);
    }

    clonrCol[column.name].items = DelTicket;
    setColumns(clonrCol);
  }

  function handleEdit(e, item, column) {
    let showVerification = e._reactName;
    if (showVerification === "onClick") {
      setDfaultEditItems(item);
      setSingleCol(column);
      setModalShow(true);
    }
  }

  const userSplitName = (name) => {
    const username = name
      .split(" ")
      .map((item) => item.split("")[0])
      .join("");
    return username;
  };



  // useEffect(()=>{
  //   setUserNames([newArr])
  // },[newArr])

  // function handleUsernameFilter(column) {

  //   let cloneData = { ...columns }
  //   let { name, items } = cloneData
  //   // // allNames.push(cloneData[column?.name]?.items)
  //   // // setUserName(allNames)
  //   let alluserName = []
  //   column.items.map((e) => {
  //     alluserName.push(e.username)
  //   })

  //   let userNames = Object.entries(cloneData).map(([username, el]) => el.items.map((userItem) => userItem.username))
  

  //   for (let i = 0; i < userNames.length; i++) {
  //     // newArr.push(userNames)
  //     for (let j = 0; j <= i ; j++){
  //       newArr.push(userNames[i][j])
  //         console.log(userNames[i][j])
  //     }

  //   }
  //   console.log('userNames _______________', newArr);
  //   // console.log('cloneData cloneData cloneDatappppppppppppp', Object.entries(cloneData).map(([username,el])=>el.items.map((userItem)=>userItem.username)))
  // }

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Color updating.....<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  
  // const generateColor = () => {
  //   let randomColorString = "#";
  //   const arrayOfColorFunctions = "0123456789abcdef";
  //   for (let x = 0; x < 6; x++) {
  //     let index = Math.floor(Math.random() * 16);
  //     let value = arrayOfColorFunctions[index];
      
  //     randomColorString += value;
  //   }
  //   return randomColorString;
  // };
  

  const UsernameColor = (colorName, column) => {
    let cloneUsername = colorName.split(" ").map(item => item.split("")[0])
    cloneUsername = [...cloneUsername].join("")
    // let c = []
    columns[column.name].items.map((el, i) => {
      if (colorName == el.username) {
        newArr.push(el.username)
        // let b = generateColor()
        // c.push(b)
      }
    })
    const username = colorName
      .split(" ")
      .map((item) => item.split("")[0])
      .join("");
    switch (username) {
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
      case 'ab':
        return "primary";
      default:
        return 'warning';
    }

  };

  return (
    <div className="DragDropContainer">
      <div>
        <ModalInputAdd
          setNavShow={setNavShow}
          navShow={navShow}
          setType={setType}
          setAddInputArr={setAddInputArr}
          columns={columns}
        />
        <ModalInputEdit
          singleCol={singleCol}
          columns={columns}
          setColumns={setColumns}
          dfaultEditItems={dfaultEditItems}
          setModalShow={setModalShow}
          modalShow={modalShow}
        />
        <ModalRestore
          navShowRestor={navShowRestor}
          setNavShowRestore={setNavShowRestore}
          columns={columns}
          setRestore={setRestore}
          setColumns={setColumns}
          restore={restore}
        />
      </div>

      <div></div>

      <DragDropContext
        onDragEnd={(result) => handleSuDrag(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([id, column]) => {
          return (
            <div className="objectDiv" key={id}>
              <h2>{column.name}</h2>
              <div className="droppableDiv" key={id}>
                <Droppable droppableId={id} key={id}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        key={id}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          backgroundColor: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgray",
                          padding: 4,
                          width: 250,
                          minHeight: 500,
                        }}
                      >
                        {/* {handleUsernameFilter(column)} */}
                        {column.items.map((item, index) => {
                          {
                            if (search == "") {
                              return (
                                <Draggable
                                  key={item.id}
                                  draggableId={String(item.id)}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    // { console.log('dsdddddddddddd',item, item.id, '55555555555555555555555599') }

                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          userSelect: "none",
                                          padding: 16,
                                          margin: "0 0 8px 0",
                                          minHeight: "50px",
                                          backgroundColor: snapshot.isDragging
                                            ? "#263B4A"
                                            : "#456C86",
                                          color: "white",
                                          ...provided.draggableProps.style,
                                        }}
                                      >
                                        <div className="content">
                                          <h6>
                                            <b>Title</b> - {item.title}
                                          </h6>
                                          <span

                                          >
                                            Name -
                                            {
                                              <Badge

                                                pill
                                                bg={UsernameColor(item?.username, column)}
                                              >
                                                {userSplitName(
                                                  item?.username,
                                                  column
                                                )}
                                              </Badge>
                                            }
                                          </span>
                                          <br />
                                          <p>description - {item.content} </p>
                                        </div>
                                        <div className="buttons">
                                          <Button
                                            onClick={() => {
                                              handleDelete(column, item);
                                            }}
                                            className="btn btn-sm"
                                            variant="danger"
                                          >
                                            <MdDeleteForever />
                                          </Button>
                                          &nbsp;
                                          <Button
                                            onClick={(e) => {
                                              handleEdit(e, item, column);
                                            }}
                                            name="editbutton"
                                            className="btn btn-sm"
                                            variant="warning"
                                          >
                                            <MdBorderColor />
                                          </Button>
                                        </div>
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            } else if (
                              item.title
                                .toLowerCase()
                                .includes(search.toLowerCase())
                            ) {
                              return (
                                <Draggable
                                  key={item.id}
                                  draggableId={String(item.id)}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    // { console.log('dsdddddddddddd',item, item.id, '55555555555555555555555599') }

                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          userSelect: "none",
                                          padding: 16,
                                          margin: "0 0 8px 0",
                                          minHeight: "50px",
                                          backgroundColor: snapshot.isDragging
                                            ? "#263B4A"
                                            : "#456C86",
                                          color: "white",
                                          ...provided.draggableProps.style,
                                        }}
                                      >
                                        <div className="content">
                                          <h6>
                                            <b>Title</b> - {item.title}
                                          </h6>
                                          <span>
                                            Name -
                                            {
                                              <Badge pill bg="info">
                                                {userSplitName(item?.username)}
                                              </Badge>
                                            }
                                          </span>
                                          <br />
                                          <p>description - {item.content} </p>
                                        </div>
                                        <div className="buttons">
                                          <Button
                                            onClick={() => {
                                              handleDelete(column, item);
                                            }}
                                            className="btn btn-sm"
                                            variant="danger"
                                          >
                                            <MdDeleteForever />
                                          </Button>
                                          &nbsp;
                                          <Button
                                            onClick={(e) => {
                                              handleEdit(e, item, column);
                                            }}
                                            name="editbutton"
                                            className="btn btn-sm"
                                            variant="warning"
                                          >
                                            <MdBorderColor />
                                          </Button>
                                        </div>
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            } else if (
                              item.username
                                .toLowerCase()
                                .includes(search.toLowerCase())
                            ) {
                              return (
                                <Draggable
                                  key={item.id}
                                  draggableId={String(item.id)}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    // { console.log('dsdddddddddddd',item, item.id, '55555555555555555555555599') }

                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          userSelect: "none",
                                          padding: 16,
                                          margin: "0 0 8px 0",
                                          minHeight: "50px",
                                          backgroundColor: snapshot.isDragging
                                            ? "#263B4A"
                                            : "#456C86",
                                          color: "white",
                                          ...provided.draggableProps.style,
                                        }}
                                      >
                                        <div className="content">
                                          <h6>
                                            <b>Title</b> - {item.title}
                                          </h6>
                                          <span>
                                            Name -
                                            {
                                              <Badge pill bg="info">
                                                {userSplitName(item?.username)}
                                              </Badge>
                                            }
                                          </span>
                                          <br />
                                          <p>description - {item.content} </p>
                                        </div>
                                        <div className="buttons">
                                          <Button
                                            onClick={() => {
                                              handleDelete(column, item);
                                            }}
                                            className="btn btn-sm"
                                            variant="danger"
                                          >
                                            <MdDeleteForever />
                                          </Button>
                                          &nbsp;
                                          <Button
                                            onClick={(e) => {
                                              handleEdit(e, item, column);
                                            }}
                                            name="editbutton"
                                            className="btn btn-sm"
                                            variant="warning"
                                          >
                                            <MdBorderColor />
                                          </Button>
                                        </div>
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            } else if (
                              item.content
                                .toLowerCase()
                                .includes(search.toLowerCase())
                            ) {
                              return (
                                <Draggable
                                  key={item.id}
                                  draggableId={String(item.id)}
                                  index={index}
                                >
                                  {(provided, snapshot) => {

                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          userSelect: "none",
                                          padding: 16,
                                          margin: "0 0 8px 0",
                                          minHeight: "50px",
                                          backgroundColor: snapshot.isDragging
                                            ? "#263B4A"
                                            : "#456C86",
                                          color: "white",
                                          ...provided.draggableProps.style,
                                        }}
                                      >
                                        <div className="content">
                                          <h6>
                                            <b>Title</b> - {item.title}
                                          </h6>
                                          <span>
                                            Name -
                                            {
                                              <Badge pill bg="info">
                                                {userSplitName(item?.username)}
                                              </Badge>
                                            }
                                          </span>
                                          <br />
                                          <p>description - {item.content} </p>
                                        </div>
                                        <div className="buttons">
                                          <Button
                                            onClick={() => {
                                              handleDelete(column, item);
                                            }}
                                            className="btn btn-sm"
                                            variant="danger"
                                          >
                                            <MdDeleteForever />
                                          </Button>
                                          &nbsp;
                                          <Button
                                            onClick={(e) => {
                                              handleEdit(e, item, column);
                                            }}
                                            name="editbutton"
                                            className="btn btn-sm"
                                            variant="warning"
                                          >
                                            <MdBorderColor />
                                          </Button>
                                        </div>
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            }
                          }
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default DragAndDrop;
