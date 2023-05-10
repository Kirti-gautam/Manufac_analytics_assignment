import './App.css';
import wineData from "./wine-data.json"
import { calculateGamma } from './utils/statistics';
import Table from "./ui/table";

//// Array of Alocohol classes
const classesArray = [...new Set(wineData.map(data => data.Alcohol))]  

//create array of gamma values for different classes
const gammaValueArray = classesArray.map(classNumber => {
  const gamma = wineData.filter((data) => {
    return data.Alcohol === classNumber
  }).map(data => calculateGamma(+data.Ash,+data.Hue,+data.Magnesium))
  return gamma
})

//created array of flavanoid values for different classes
const flavanoidsValueArray = classesArray.map(classNumber => {
  const flavonoids = wineData.filter((data) => {
    return data.Alcohol === classNumber
  }).map(data => +data.Flavanoids)
  return flavonoids
})


function App() {
  return (
    <div className="App"> 
      <Table property={"Flavanoid"} classesArray={classesArray} propertyValueArray={flavanoidsValueArray} />
      <Table property={"Gamma"} classesArray={classesArray} propertyValueArray={gammaValueArray} />
    </div>
  );
}

export default App;
