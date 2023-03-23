import React from "react";
import ModalDialog from "../shared/modals/ModalDialog";

export default function PatientsListComponent() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <h1 className="pb-3">Stock</h1>
      <div className="d-flex ">
        <button type="button" className="btn btn-primary">
          Add New Patient
        </button>
      </div>
      <div className="scrollbleTable">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">NIC</th>
              <th scope="col">Name</th>
              <th scope="col">DOB</th>
              <th scope="col">Age</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">index</th>
              <td>NIC</td>
              <td>Name</td>
              <td>DOB</td>
              <td>Age</td>
              <td className="d-flex">
                <button type="button" className="btn btn-success tableButton">
                  Add Today History
                </button>
                <button
                  type="button"
                  className="btn btn-primary tableButton"
                  onClick={() => setModalShow(true)}
                >
                  View History
                </button>
                <button type="button" className="btn btn-warning tableButton">
                  Edit Profile
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ModalDialog show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
