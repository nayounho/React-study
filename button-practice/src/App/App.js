import Button from "../Components/Button";
import Img from "../Components/Img";



function App ({ text, svgURL }) {
  return (
    <>
      <Button>
        {  text }
        <Img src={svgURL} alt="upload"/>
      </Button>
   </>
  )
}


export default App;
