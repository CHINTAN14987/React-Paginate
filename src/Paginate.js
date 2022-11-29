import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import CardDetails from "./CardDetails";

function Paginate() {
  const [users, SetUsers] = useState([]);
  const [total, setTotal] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (Pn) => {
    console.log(Pn);
    const response = await fetch(
      `https://gorest.co.in/public/v1/users?page=${Pn}&per_page=10`
    );
    const data = response.json();
    return data;
  };

  const onPageChange = (pageN) => {
    setCurrentPage(pageN);
    fetchData(pageN).then((response) => {
      SetUsers(response);
      setTotal(response?.meta?.pagination?.total);
    });
  };
  useEffect(() => {
    fetchData(1).then((response) => {
      SetUsers(response);
      setTotal(response?.meta?.pagination?.total);
    });
  }, []);

  return (
    <div>
      <div className="Pagination">
        <ReactPaginate
          previousLabel={<p>Prev</p>}
          nextLabel={<p>Next</p>}
          breakLabel="..."
          breakClassName="break-me"
          pageCount={Math.ceil(total / 10)}
          containerClassName=""
          activeClassName="active"
          forcePage={currentPage - 1}
          onPageChange={(pageNo) => onPageChange(pageNo.selected + 1)}
        />
      </div>

      <CardDetails users={users} />
    </div>
  );
}
export default Paginate;
