import styled from 'styled-components'

const Button = styled.button`background: transparent;
border-radius: 3px;
border: 2px solid black;
color: black;
margin: 0 1em;
padding: 0.25em 1em;`

const Textbox = styled.input.attrs(props => ({ type: 'text', size: props.small ? 5 : undefined }))`
border-radius: 3px;
border: 1px solid;
height: 20px;
  margin: 0 0 1em;
  padding: ${props => props.padding};
  
`
const List = styled.ul`
  list-style: none;
  padding: 0px 20px;
  background-color: #fff;
`;
const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  text-align: left;
`
const Container = styled.div`
width: 400px;
  margin: 30px auto;
  font-family: "'Century Gothic'";
  font-size: 16px;
  color: #565555;
  `
const PageHeader = styled.h1`
  color: gray;
  margin-bottom: 50px;
`;
const Title = styled.h3`
  color: black;
  margin-bottom: 5px;
`;
const LabelError = styled.span`
  color: red;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export { Button, Textbox, Container, List, ListItem, Title, PageHeader, LabelError };