import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState({});
  const [submit, setSubmit] = useState({'pass':'','fail':''});

  const handleChange = (e) => {
    const{name} = e.target;
    setData({...data,[name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(data.username === 'user' && data.password === 'password'){
      setSubmit({...submit,['pass']:'Welcome, user!',['fail']:''});
    }
    else{
      setSubmit({...submit,['fail']:'Invalid username or password',['pass']:''});
    }
  }

  return (
    <>
      <div>Login</div>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type='text' placeholder='username' name='username' onChange={handleChange} required/>
        <br/>
        <label>Password:</label>
        <input type='password' placeholder='password' name='password' onChange={handleChange} required/>
        <br/>
        <br/>
        <button>Submit</button>
      </form>
      <div>
        {submit.pass}
      </div>
      <div>
        {submit.fail}
      </div>
    </>
  )
}

export default App
