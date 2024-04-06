import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Link , useNavigate} from 'react-router-dom';

function FacultySignup() {
  const [formdata, setFormdata] = useState({});
  const [error,setError] = useState(null);
  const [loading, SetLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) =>{
    setFormdata({
      ...formdata,
      [e.target.id] : e.target.value,
    })
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      SetLoading(true);
      const res = await fetch('/api/faculty/signup',
      {
        method : 'POST',
        headers : {
          'Content-type' : 'application/json',
        },
        body : JSON.stringify(formdata),
      }
    );
    const data = await res.json();
    console.log(data);
    if(data.success ===  false){
      SetLoading(false);
      setError(data.message);
      return;
    }
    SetLoading(false);
    setError(null);
    navigate('/facultysignin');
    } catch (error) {
      SetLoading(false);
      setError(error.message);
    }
  }
  return (
    <div className="bg-white p-4 sm:p-8 md:p-12 mt-8 rounded-lg max-w-lg mx-auto">
      <div className="flex items-center">
        <Link to='/'>
          <FaArrowLeft className='hover:opacity-50' style={{ color: 'black', fontSize: '1.5rem' }} />
        </Link>
        <h1 className="text-2xl font-semibold ml-4">SignUp</h1>
      </div>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input type="text" placeholder="Enter your Username" className="w-full flex justify-center py-2 px-4  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" id="username" onChange={handleChange}/>
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" placeholder="Example@gmail.com" className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" id="email" onChange={handleChange}/>
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" placeholder="Password" className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" id="password" onChange={handleChange}/>
        </div>
        <div className="mt-6">
          <button type="submit" disabled= { loading } className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium uppercase disabled:opacity-50 text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" style={{backgroundColor: '#071845'}} >
            {loading ? 'loading...' : 'Signup'}
          </button>
        </div>
      </form>
      <div className='mt-3'>
        <span>Have an account?</span>
        <Link to='/signin'>
          <span className='text-blue-800 ml-1'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500'>!!! username or email already exist</p>}
    </div>
  );
}

export default FacultySignup;
