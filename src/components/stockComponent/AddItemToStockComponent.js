import React, { useState } from "react"; 
import { addProduct } from "../../services/StockService";

export default function AddItemToStockComponent() {

  const[medicineName , setMedicinename] = useState("");
  const[medicineShortCode , setMedicineShortCode] = useState("");
  const[medicinePurpose , setMedicinePurpose] = useState("");
  const[medicineDescription , setMedicineDescription] = useState("");
  const[medicineQuentity , setMedicineQuentity] = useState(0);
  const[medicinePrice , setMedicinePrice] = useState(0);

  const handleSubmit = (event)=>{
    event.preventDefault();
    var data = {
      medicineName: medicineName,
      medicineShortCode: medicineShortCode,
      purpose: medicinePurpose,
      description: medicineDescription,
      qty: medicineQuentity,
      averagePricePerUnit: medicinePrice
    };

    addProduct(data);
  }

  return (
    <div>
      <h1 className="">Add Medicine To Stock</h1>
      <form className="p-4 rounded-2 shadow-2-strong" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control mb-3"
            id="name"
            placeholder="Enter medicine name"
            value={medicineName}
            onChange={(e) => setMedicinename(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Short Code</label>
          <input
            type="text"
            className="form-control mb-3"
            id="description"
            placeholder="Enter medicine description"
            value={medicineShortCode}
            onChange={(e) => setMedicineShortCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Purpose</label>
          <input
            type="text"
            className="form-control mb-3"
            id="price"
            placeholder="Enter medicine price"
            value={medicinePurpose}
            onChange={(e) => setMedicinePurpose(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quentity">Description</label>
          <textarea
            type="text"
            className="form-control mb-3"
            id="quantity"
            placeholder="Enter medicine quentity"
            value={medicineDescription}
            onChange={(e) => setMedicineDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quentity">quentity</label>
          <input
            type="number"
            className="form-control mb-3"
            id="quantity"
            placeholder="Enter medicine quentity"
            value={medicineQuentity}
            onChange={(e) => setMedicineQuentity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quentity">price</label>
          <input
            type="number"
            className="form-control mb-3"
            id="quantity"
            placeholder="Enter medicine quentity"
            value={medicinePrice}
            onChange={(e) =>setMedicinePrice( e.target.value)}
          />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input mb-3" id="check" />
          <label className="form-check-label" htmlFor="check">
            Allowed to issue without prescription
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
