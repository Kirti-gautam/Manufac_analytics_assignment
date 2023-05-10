import './App.css';
import wineData from "./wine-data.json"
import { mean,median,mode } from './utils/statistics';

const classesArray = [...new Set(wineData.map(data => data.Alcohol))]  // Array of Alocohol classes
const flavonoidsValueArray = classesArray.map(classNumber => {
  const flavonoids = wineData.filter((data) => {
    return data.Alcohol === classNumber
  }).map(data => +data.Flavanoids)
  return flavonoids
})

function App() {
  console.log("classesArray",classesArray,flavonoidsValueArray)
  return (
    <div className="App">
      <table>
        <tbody>
          <th>
            Measure
          </th>
          {classesArray.map(class_number => <th key={class_number}>Class {class_number}</th>)}
          <tr>
            <td>Flavonoids Mean</td>
            {flavonoidsValueArray.map(valueArr => <td>{mean(valueArr)}</td>)}
          </tr>
          <tr>
            <td>Flavonoids Median</td>
            {flavonoidsValueArray.map(valueArr => <td>{median(valueArr)}</td>)}

          </tr>
          <tr>
            <td>Flavonoids Mode</td>
            {flavonoidsValueArray.map(valueArr => <td>{mode(valueArr)}</td>)}

          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
