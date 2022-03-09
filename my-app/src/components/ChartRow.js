import React from 'react';


function ChartRow(props){

  

    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                    <td>{props.description} </td>
                    <td>{props.discount}</td>
                    <td>{props.type}</td>
                    <td>{props.color}</td>
                    <td><img style={{ width: 50 + 'px' }} src={"http://localhost:5050/images/productimages/"+props.image}/></td>
                    <td>{props.category.toUpperCase()} </td>
                </tr>
            )
    }
    
        

export default ChartRow;