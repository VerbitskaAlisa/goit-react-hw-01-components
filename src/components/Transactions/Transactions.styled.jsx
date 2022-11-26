import styled  from "@emotion/styled";

export const Table = styled.table `
  width: 300px;
  margin: 0 auto;
  background-color: rgb(228, 228, 228);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 16px 20px rgba(0,0,0,0.2);
  padding: 20px;
  
  border-spacing: 0;
  border-collapse: collapse;
`;

export const String = styled.tr `
  padding: 10px;
  border: 1px solid black;
  
  &:hover {
    background-color: #D6EEEE;
  }

  &:nth-of-type(even) {
    background-color: white;

    :hover {
      background-color: #D6EEEE;
    }
  }
`;

export const Heading = styled.th `
font-family: 'Raleway';
font-weight: 700;
font-size: 20px;
line-height: 1.12;
text-align: center;
text-transform: uppercase;
border: 1px solid black;
background-color: #D6EEEE;

padding: 10px;
`;

export const TabelData = styled.td `
font-family: 'Raleway';
font-weight: 400;
font-size: 16px;
line-height: 1.12;

border: 1px solid black;
text-align: center;


padding: 10px;

`;