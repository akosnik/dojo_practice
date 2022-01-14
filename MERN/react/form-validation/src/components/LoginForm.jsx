import React, { useReducer } from 'react'

const initialState = {
  firstName: {
    value: '',
    error: null
  },
  lastName: {
    value: '',
    error: null
  },
  email: {
    value: '',
    error: null
  }
}

function reducer(state, action) {
  return {
    ...state,
    [action.type]: action.payload
  };
}

export default function LoginForm() {

  const [state, dispatch] = useReducer(reducer, initialState)
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    dispatch({  
      type: name,
      payload: value
    })
  }

  return (
    <div className="w-25 m-auto">
      <h1 className="pt-3">Validation</h1>
      <form>

        <div className="mb-3">
          <label className="form-label" htmlFor="">First:</label>
          <input type="text" className="form-control"
            name="firstName" 
            value={state.firstName.value} 
            onChange={handleChange} />
            {state.firstName.error !== null && (<p className="error">{state.firstName.error}</p>)}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="">Last:</label>
          <input type="text" className="form-control" 
            name="lastName" 
            value={state.lastName.value} 
            onChange={handleChange}/>
            {state.lastName.error !== null && (<p className="error">{state.lastName.error}</p>)}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="">Email:</label>
          <input type="email" className="form-control" 
            name="email" 
            value={state.email.value} 
            onChange={handleChange}/>
            {state.email.error !== null && (<p className="error">{state.email.error}</p>)}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
