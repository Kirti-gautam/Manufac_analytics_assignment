import {mode,mean,median} from "../utils/statistics"
type tableProps ={
    property : string,
    classesArray : number[],
    propertyValueArray : number[][] | string[][]
}

const Table = ({property,classesArray,propertyValueArray} : tableProps) => {
    return (
        <table>
        <tbody>
          <th>
            Measure
          </th>
          {classesArray.map(class_number => <th key={class_number}>Class {class_number}</th>)}
          <tr>
            <td>{property} Mean</td>
            {propertyValueArray.map(valueArr => <td>{mean(valueArr)}</td>)}
          </tr>
          <tr>
            <td>{property} Median</td>
            {propertyValueArray.map(valueArr => <td>{median(valueArr)}</td>)}

          </tr>
          <tr>
            <td>{property} Mode</td>
            {propertyValueArray.map(valueArr => <td>{mode(valueArr)}</td>)}

          </tr>
        </tbody>
      </table>
    )
}

export default Table