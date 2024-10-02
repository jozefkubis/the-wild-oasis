import styled from "styled-components"

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`
const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 10px;
  font-size: 16px;
  width: 400px;
`

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`

function App() {
  return (
    <StyledApp>
      <H1>The Wild Oasis</H1>
      <Button onClick={() => alert("clicked")}>Click me</Button>

      <Input type="number" placeholder="Enter a number" />
    </StyledApp>
  )
}

export default App
