// item.username.split(" ").length == 2 ?
//     <Badge pill bg="success">
//         {item.username.split(" ")[0][0].toUpperCase()}
//         {item.username.split(" ")[1][0].toUpperCase()}
//     </Badge>
//     : item.username.split(" ").length == 1 && 2 ?
//         <Badge pill bg="danger">
//             {item.username.split(" ")[0][0].toUpperCase()}
//         </Badge>
//         : item.username.split(" ").length == 1 || 2 || 3 ?
//             <Badge pill bg="warning">
//                 {item.username.split(" ")[0][0].toUpperCase()}
//                 {item.username.split(" ")[1][0].toUpperCase()}
//                 {item.username.split(" ")[2][0].toUpperCase()}
//             </Badge>
//             : null