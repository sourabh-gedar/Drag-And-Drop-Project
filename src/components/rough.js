import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { readableColor } from "polished";

/**
 * https://stackoverflow.com/questions/71229785/generate-random-same-colors-in-react
 */

const datas = [
  {
    id: 1,
    orderNumber: "#123"
  },
  {
    id: 2,
    orderNumber: "#234"
  },
  {
    id: 3,
    orderNumber: "#43534545"
  },
  {
    id: 4,
    orderNumber: "#123"
  },
  {
    id: 5,
    orderNumber: "#234"
  },
  {
    id: 6,
    orderNumber: "#8888"
  },
  {
    id: 7,
    orderNumber: "#8888"
  },
  {
    id: 8,
    orderNumber: "#999"
  }
];

// const colorMap = {};
// const selectedColors = {};

const generateColor = () => {
  let randomColorString = "#";
  const arrayOfColorFunctions = "0123456789abcdef";
  for (let x = 0; x < 6; x++) {
    let index = Math.floor(Math.random() * 16);
    let value = arrayOfColorFunctions[index];

    randomColorString += value;
  }
  return randomColorString;
};

const colorMap = {};
const selectedColors = {};


const newColorFind = (id) => {
  if (colorMap[id]) return colorMap[id];

  let newColor;

  do {
    newColor = generateColor();
  } while (selectedColors[newColor]);

  colorMap[id] = newColor;
  selectedColors[newColor] = true;
  return newColor;
};

export default function BasicTable() {
  const dataCounts = datas.reduce((counts, row) => {
    if (!counts[row.orderNumber]) {
      counts[row.orderNumber] = { count: 0 };
    } else {
      counts[row.orderNumber].count++;
    }

    return counts;
  }, {});

  const getRowColor = (row) => {
    const { orderNumber } = row;
    if (dataCounts[orderNumber].count) {
      return {
        color: readableColor(newColorFind(orderNumber)),
        backgroundColor: newColorFind(orderNumber)
      };
    }
    return {};
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order #</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={getRowColor(row)}>
                {row.orderNumber}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
