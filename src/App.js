import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [detail, setDetails] = useState([]);
  function LoadProducts() {
    setDetails([
      {
        id: 101,
        Shipify: 17171,
        Date: "22 Jan 2020",
        Status: "Panding",
        CUSTOMER: "Ahmed",
        Email: "jp@gmail.com",
        Country: "INDIA",
        Shipping: "Australia",
        Source: "Linkdin",
        OrderType: "Customer",
      },
      {
        id: 102,
        Shipify: 16161,
        Date: "23 Jan 2020",
        Status: "Complete",
        CUSTOMER: "Jay",
        Email: "jk@gmail.com",
        Country: "INDIA",
        Shipping: "INDIA",
        Source: "GlassDoor",
        OrderType: "Customer",
      },
      {
        id: 103,
        Shipify: 11111,
        Date: "24 Jan 2020",
        Status: "Panding",
        CUSTOMER: "shubham",
        Email: "jl@gmail.com",
        Country: "INDIA",
        Shipping: "America",
        Source: "Twitter",
        OrderType: "Customer",
      },
      {
        id: 104,
        Shipify: 15151,
        Date: "25 Jan 2020",
        Status: "Complete",
        CUSTOMER: "shubham1",
        Email: "jq@gmail.com",
        Country: "INDIA",
        Shipping: "Russia",
        Source: "Facebook",
        OrderType: "Customer",
      },
      {
        id: 105,
        Shipify: 19191,
        Date: "26 Jan 2020",
        Status: "Panding",
        CUSTOMER: "Shubham2",
        Email: "jw@gmail.com",
        Country: "INDIA",
        Shipping: "Ukrain",
        Source: "Figma",
        OrderType: "Customer",
      },
      {
        id: 106,
        Shipify: 22222,
        Date: "27 Jan 2020",
        Status: "Complete",
        CUSTOMER: "Shubham3",
        Email: "je@gmail.com",
        Country: "INDIA",
        Shipping: "UK",
        Source: "StckOverflow",
        OrderType: "Customer",
      },
      {
        id: 107,
        Shipify: 33333,
        Date: "28 Jan 2020",
        Status: "Panding",
        CUSTOMER: "Shubham4",
        Email: "jr@gmail.com",
        Country: "INDIA",
        Shipping: "Dubai",
        Source: "W3c",
        OrderType: "Customer",
      },
      {
        id: 108,
        Shipify: 44444,
        Date: "29 Jan 2020",
        Status: "Complete",
        CUSTOMER: "Shubham5",
        Email: "jz@gmail.com",
        Country: "INDIA",
        Shipping: "UAE",
        Source: "LeetCode",
        OrderType: "Customer",
      },
      {
        id: 109,
        Shipify: 55555,
        Date: "20 Jan 2020",
        Status: "Panding",
        CUSTOMER: "Shubham6",
        Email: "jc@gmail.com",
        Country: "INDIA",
        Shipping: "France",
        Source: "Greek for Greek",
        OrderType: "Customer",
      },
      {
        id: 110,
        Shipify: 66666,
        Date: "16 Jan 2020",
        Status: "Complete",
        CUSTOMER: "Shubham8",
        Email: "jv@gmail.com",
        Country: "INDIA",
        Shipping: "SriLanka",
        Source: "PWD",
        OrderType: "Customer",
      },
      {
        id: 111,
        Shipify: 77777,
        Date: "15 Jan 2020",
        Status: "Panding",
        CUSTOMER: "Shubham7",
        Email: "jb@gmail.com",
        Country: "INDIA",
        Shipping: "Nepal",
        Source: "30DaysCoding",
        OrderType: "Customer",
      },
      {
        id: 112,
        Shipify: 88888,
        Date: "14 Jan 2020",
        Status: "Complete",
        CUSTOMER: "Shubham9",
        Email: "jt@gmail.com",
        Country: "INDIA",
        Shipping: "Turkey",
        Source: "Instagram",
        OrderType: "Customer",
      },
      {
        id: 113,
        Shipify: 99999,
        Date: "13 Jan 2020",
        Status: "Panding",
        CUSTOMER: "Shubham0",
        Email: "ji@gmail.com",
        Country: "INDIA",
        Shipping: "China",
        Source: "Scaler",
        OrderType: "Customer",
      },
      {
        id: 114,
        Shipify: 22221,
        Date: "12 Jan 2020",
        Status: "Complete",
        CUSTOMER: "Shubham11",
        Email: "jm@gmail.com",
        Country: "INDIA",
        Shipping: "Korea",
        Source: "Naukri",
        OrderType: "Customer",
      },
    ]);
  }
  useEffect(() => {
    LoadProducts();
  }, []);

  
  function FilterValues() {
    var SearchValue = document.getElementById("form_Search_Value").value;
    var Category = document.getElementById("form_Category_Value").value;
    // var Status=document.getElementById("form_Status_Value").value;

    const FilterValue = () => {
      if (Category === "Name") {
        var value = detail.filter((element) => {
          return element.CUSTOMER === SearchValue;
        });
        return value;
      } else {
        var value1 = detail.filter((element) => {
          return element.Email === SearchValue;
        });
        return value1;
      }
    };
    const FilterDetail = FilterValue();
    console.log(FilterDetail);
    setDetails(FilterDetail);
  }
  const [rowToEdit, setRowToEdit] = useState(null);

  /*filter function end*/
  // ==========================Submit Function===================
  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setDetails([, newRow,...detail])
      : setDetails(
          detail.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };
  const [modalopen, setModalOpen] = useState(false);
  function ModalClick() {
    if (modalopen === false) {
      setModalOpen(true);
    }
  }
  // ==================Edit Function =======================
  function Editvalue(id) {
    setRowToEdit(id)
    console.log(id);
    setModalOpen(true);
  }
  return (
    <div className="App">
      <div className="Order-Summary">
        <header className="header">
          <h2>Orders</h2>
          <button className="btn btn-primary p-1" onClick={ModalClick}>
            Create-New
          </button>
        </header>
        {modalopen && (
          <Modal
            closeModal={() => {
              setModalOpen(false);
              console.log(modalopen);
            }}
            onSubmit={handleSubmit}
            defaultValue={rowToEdit !== null && detail[rowToEdit]}
          />
        )}

        <div className="Search-Box">
          <div className="Main-Search">
            <label>What are you looking for?</label>
            <input
              type="text"
              placeholder="Search for category,name,company,etc."
              className="form-control"
              id="form_Search_Value"
            ></input>
          </div>
          <div className="Category-Search">
            <label>Category</label>
            <select className="form-select" id="form_Category_Value">
              <option>All</option>
              <option>Name</option>

              <option>Email</option>
            </select>
          </div>
          <div className="Status-Search">
            <label>Status</label>
            <select className="form-select" id="form_Status_Value">
              <option>All</option>
              <option>Pending...</option>
              <option>Completed</option>
            </select>
          </div>
          <div className="Buttons-Option">
            <span>
              <i class="bi bi-chevron-double-down"></i>
            </span>
            <span className="btn btn-primary p-2" onClick={FilterValues}>
              Search
            </span>
          </div>
        </div>
      </div>

      {/* *================Product Summary ==========* */}
      <div className="Product-Details">
        <div className="ProductSummary">
          <header className="ProductSummary-header">
            <h3>Product Summary</h3>
          </header>

          <div className="Product-Search">
            <label>Show</label>
            <select className="form-select">
              <option>All COLUMNS</option>
              <option>ID</option>
              <option>Gmail</option>
              <option>Customer</option>
              <option>Source</option>
            </select>
          </div>
          <div className="Product-Pagination">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="Product-Table p">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>ID</th>
                <th>SHIPIFY #</th>
                <th>DATE</th>
                <th>STATUS</th>
                <th>CUSTOMER</th>
                <th> EMAIL</th>
                <th>COUNTRY</th>
                <th>SHIPPING</th>
                <th>SOURCE</th>
                <th>ODER TYPE</th>
              </tr>
            </thead>
            <tbody>
              {detail.map((value,id) => (
                <tr key={value.id}>
                  <td>
                    <input type="checkbox" value={value.id} />
                  </td>
                  <td>{value.id}</td>
                  <td>{value.Shipify}</td>
                  <td>{value.Date}</td>
                  <td>{value.Status}</td>
                  <td>{value.CUSTOMER}</td>
                  <td>{value.Email}</td>
                  <td>{value.Country}</td>
                  <td>{value.Shipping}</td>
                  <td>{value.Source}</td>
                  <td>{value.OrderType}</td>
                  <td >
                    <i id={value.id} onClick={()=> Editvalue(id)} class="bi bi-pencil-square"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
