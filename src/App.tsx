import ListGroup from "./components/ListGroup";

const App = () => {
  let list = ["India", "America", "Japan", "Switzerland", "Germany", "Norway"];
 const handleSelectItem=(item:string)=>{
  console.log(item)

 }
  return (
    <div>
      <ListGroup list={list} heading="cities :P" onSelectItem={handleSelectItem}/>
    </div>
  );
};

export default App; // this app component is the parent component it store the complete app and it then renders to main or index.js
