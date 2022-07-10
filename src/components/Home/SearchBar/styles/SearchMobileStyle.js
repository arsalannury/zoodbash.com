import styled from 'styled-components';




export const SearchBar = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
position: relative;
padding: 30px;
`;

export const Input = styled.input`
padding: 12px 30px;
border: 1px solid #ccc;
border-radius: 20px;
background: #eee;
font-family: inherit;
font-size: 0.8em;
transition: all 0.5s ease;
width: 200px;
&::placeholder {
  color: #444;
  font-family: inherit;
  font-size: 0.8em;
}
&:focus {
  border: 1px solid #bbb;
  outline: none;
  width: 300px;
}
@media screen and (max-width: 480px) {
  width: 100px;
}
`;

export const Icon = styled(SearchIcon)`
position: absolute;
margin: 5px;
color: #777;
cursor: pointer;
`;
export const SearchIconMobile = styled(SearchIcon)`
cursor: pointer;
color: #fff;
`;

export const Div = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
position: relative;
padding: 30px;
background: #cd1c1c;
`;

export const BtnSearchIcon = styled(Button)`
background: #003049;
border-radius: 10px;
&:hover {
  background: #003049;
}
`;
