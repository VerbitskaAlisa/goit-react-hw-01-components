import styled  from "@emotion/styled";

export const StatisticsCard = styled.section`
   width: 300px;
   padding-top: 20px;
   margin: 0 auto;
   margin-bottom: 30px;
   background-color: rgb(228, 228, 228);
   box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 16px 20px rgba(0,0,0,0.2);
`;

export const Title = styled.h2`
   font-family: 'Raleway';
   font-weight: 700;
   font-size: 20px;
   line-height: 1.12;
   text-align: center;
   text-transform: uppercase;

   color: black;

   margin-bottom: 20px;
`;

export const StatList = styled.ul`
   display: flex;
   justify-content: space-between;
   list-style: none;
   padding: 0;

   background-color: white;
   border-top: 1px solid black;
`;


export const StatItem = styled.li `
   width: 100px;
   padding: 10px;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

  :not(:last-child) {
    border-right: 1px solid black;
  }

  background-color: ${p => {
   switch (p.label) {
      case '.docx' :
         return "yellow"; 
         case '.pdf' :
            return "blue";
         case '.mp3' :
            return "green"; 
         case '.psd' :
            return "red";
         default:
            return "white"; 

   }
   
  }}

`;

export const StatsDescription = styled.span `
    margin-bottom: 5px;

    font-family: 'Raleway';
    font-weight: 400;
    font-size: 16px;
    line-height: 1.12;
`;