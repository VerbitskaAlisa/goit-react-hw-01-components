import styled  from "@emotion/styled";

export const List = styled.ul `
   display: flex;
   flex-direction: column;
   justify-content: center;

   width: 300px;
   padding-top: 20px;
   padding-bottom: 20px;
   margin: 0 auto;
   margin-bottom: 30px;
   background-color: rgb(228, 228, 228);
   box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 16px 20px rgba(0,0,0,0.2);

   list-style: none;

`;

export const Item = styled.li`
  position: relative;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2);
  
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Chip = styled.span `
  position: absolute;
  top: 5px;
  right: 5px;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  
  background-color: ${p => {
    return p.status ? "green": "red";
    }
   }}

  
`;

export const Image = styled.img `
margin-bottom: 10px;
`;

export const Name = styled.p `
   font-family: 'Raleway';
   font-weight: 700;
   font-size: 20px;
   line-height: 1.12;
   text-align: center;

`;