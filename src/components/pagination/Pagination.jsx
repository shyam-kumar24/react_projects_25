import { useEffect, useState } from "react";
import "./pagination.css";
import PageBtn from './PageBtn.jsx'
import PageStructure from "./PageStructure.jsx";

export default function Pagination() {
  const [pageDivNo, setPageDivNo] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    let lowerLimit = (pageNo - 1) * 10 + 1;
    let arr = [];
    for (let i = lowerLimit; i <= pageNo * 10; i++) {
      arr.push(i);
    }
    setPageDivNo([...arr]);
  }, [pageNo]);

  return (
    <div className="main-container">
      <h1># pagination</h1>
      <PageStructure pageDivNo={pageDivNo}/>
      <PageBtn setPageNo={setPageNo} pageNo={pageNo}/>
    </div>
  );
}
