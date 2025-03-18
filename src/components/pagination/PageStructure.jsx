import React from 'react'

export default function PageStructure({pageDivNo}) {

  return (
    <div className="page-div">
        {pageDivNo.map((item) => (
          <div key={item} className="pageItem-div">
            Products: {item < 10 ? `0${item}` : item}
          </div>
        ))}
    </div>
  )

}
