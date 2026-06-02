import React from 'react';
import styled from 'styled-components';
const TableStyles = styled.div`
  margin-top: 40px;
  background-color: white;
  border-radius: 10px;
  table {
    width: 100%;
  }
  th,
  td {
    vertical-align: middle;
    white-space: nowrap;
    font-weight: 600;
    color: #808191;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  th {
    padding: 20px 30px;
    font-weight: 600;
    text-align: left;
  }
  td {
    padding: 42px 10px 20px 20px;
  }
  tbody {
  }
`;
const Table = ({ children }) => {
  return (
    <TableStyles>
      <table>{children}</table>
    </TableStyles>
  );
};

export default Table;
