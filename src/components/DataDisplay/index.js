import { useEffect, useState } from "react";

import Moment from 'react-moment';
import "./style.css";

function DataDisplay(props) {

  //   const [sortedNames, setSortedNames] = useState(null);
  //   const firstName = props.results;
  //   let sortedFirstNames = [firstName];
  // console.log("this is what you want", sortedFirstNames);
  //   if (sortedNames !== null) {
  //       sortedNames.sort((a, b) => {
  //       if (a[sortedFirstNames] < b[sortedFirstNames]){
  //         return 1;
  //       }
  //       if (a[sortedFirstNames] > b[sortedFirstNames]){
  //         return -1;
  //       }
  //         return 0;
  //     });
  //   };
  


  return (
    <div>
      <table className="emp-list" >
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">
                      Name
                    </th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
            {props.results.map((results, index) => (
                <tr className="employee-data" >
                    <td className="emp-list-img" key={results.index}>
                      <img alt={results.title} className="img.fluid" src={results.picture.medium} />
                    </td>    
                    <td className="emp-list-name" key={results.index}>
                      <p>{results.name.first} {results.name.last}</p>
                    </td>
                    <td className="emp-list-phone" key={results.index}>
                      <p>{results.cell}</p>
                    </td> 
                    <td className="emp-list-email" key={results.index}>
                      <p>{results.email}</p>
                    </td> 
                    <td className="emp-list-bday" key={results.index}>
                      <Moment date={results.dob.date} format= "MM/DD/YYYY"/>
                    </td>                                       
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    );
  }
  

export default DataDisplay;

