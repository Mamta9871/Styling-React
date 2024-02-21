import React, { useState } from 'react'
import './CourseInput.css'
import Button from '../../UI/Button/Button'

const CourseInput = (props) => {
  const [enterDetails,setEnterDetails] = useState('')
  const[isValid,setIsVaild] = useState(true)

  const Show = (e) => {
    if(e.target.value.trim().length > 0){
      setIsVaild(true)
    }
    setEnterDetails(e.target.value)
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()
    if(enterDetails.trim().length===0){
      setIsVaild(false)
      return 
    }
    props.onAddGoal(enterDetails)
  }
 
  
  return (
    <form onSubmit={formSubmitHandler}>
        <div className={`form-control ${!isValid? 'invalid': ''}`}>
            <label className='Title'>Course Goal</label>
            <input type="text" onChange={(Show)}/>
        </div>
        <Button type='submit'>Add Goal</Button>
    </form>
  )
}

export default CourseInput