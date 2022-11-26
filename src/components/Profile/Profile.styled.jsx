import styled  from "@emotion/styled";

export const ProfileCard = styled.div`
   width: 300px;
   padding-top: 20px;
   margin: 0 auto;
   background-color: rgb(228, 228, 228);
   box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 16px 20px rgba(0,0,0,0.2);

   margin-bottom: 30px;
`;

export const Description = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.img `
 display: block;
 width: 200px;
 margin: 0 auto;
 margin-bottom: 10px;
`;

export const Username = styled.p `
  margin-bottom: 10px;

  font-family: 'Raleway';
  font-weight: 700;
  font-size: 20px;
  line-height: 1.12;

  color: black;
`;

export const Tag = styled.p `
  margin-bottom: 5px;

  font-family: 'Raleway';
  font-weight: 400;
  font-size: 14px;
  line-height: 1.12;

  color: rgb(116, 116, 116);
 
`;

export const Location = styled.p `
  margin-bottom: 30px;

  font-family: 'Raleway';
  font-weight: 400;
  font-size: 14px;
  line-height: 1.12;

  color: rgb(66, 66, 66);
`;



export const Stats = styled.ul `
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;

  background-color: white;
  border-top: 1px solid black;
`;

export const StatsItem = styled.li `
   width: 100px;
   padding: 10px;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

  :not(:last-child) {
    border-right: 1px solid black;
  }

`;

export const StatsDescription = styled.span `
    margin-bottom: 5px;

    font-family: 'Raleway';
    font-weight: 400;
    font-size: 16px;
    line-height: 1.12;
`;
