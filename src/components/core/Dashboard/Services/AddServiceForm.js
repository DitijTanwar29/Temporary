import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { addServiceDetails } from '../../../../services/operations/serviceDetailsAPI';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const ServicesForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [serviceName, setServiceName] = useState('');
  const [serviceIcon, setServiceIcon] = useState(null);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  
  // const [formData, setFormData] = useState({
  //   serviceName:"", serviceIcon:"",serviceDescription:description,status:""
  // })

  // const { serviceName, serviceDescription, serviceIcon, status } = formData

  const handleServiceIconChange = (e) => {
    // Handle file upload logic here
    const file = e.target.files[0];
    if (file && /\.(jpg|jpeg|gif|png)$/.test(file.name.toLowerCase())) {
      setServiceIcon(file);
    } else {
      alert('Invalid file format. Only jpg, jpeg, gif, and png are allowed.');
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const formData = {serviceName,serviceIcon,description,status}
    dispatch(addServiceDetails(formData))
    console.log({
      serviceName,
      serviceIcon,
      description,
      status,

    });
    // You can send the form data to your server or perform other actions
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
        
          <label className="form-label">Service Name</label>
          <input
            type="text"
            className="form-control"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            placeholder="Enter Service Name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Service Icon</label>
          <input
            type="file"
            className="form-control"
            accept=".jpg, .jpeg, .gif, .png"
            onChange={handleServiceIconChange}
          />
          {serviceIcon && <p className="mt-2">File selected: {serviceIcon.name}</p>}
          <p className="text-muted">(Only jpg, jpeg, gif, and png are allowed)</p>
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">----Status----</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ServicesForm;