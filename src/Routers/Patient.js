import React from "react"

function Patient() {
    return (
      <tbody>
        {/* 동기처리 */}
        {Todaypatient.map(function (patient) {
          return (
  
            <tr>
              <td>{patient.ptname}</td>
              <td>
                <p>일자 : {patient.hplrdt}</p>
                <p>성별 : {patient.ptsxid}</p>
                <p>품종 : {patient.ptbrid[0]}</p>
                <p>보호자 : {patient.ptclid}</p>
                <p>담당 수의사 :{patient.emname}</p>
              </td>
            </tr>
  
          )
        }
        )
        }
  
      </tbody>
    )
  }