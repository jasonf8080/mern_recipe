import React, { useEffect, useState } from 'react'
import Wrapper from '../assets/styled-wrappers/createRecipe'
import { AiOutlinePlus } from 'react-icons/ai'
import { FormInput, Categories } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { ListInput } from '../components/ListInput'
import { handleList, handleValue, createRecipe, handleListItemRemove, clearMessage, clearRecipeValues } from '../redux/createRecipeSlice'
import axios from 'axios'
import { Modal } from '../components'
import { useNavigate } from 'react-router-dom'





const CreateRecipe = () => { 

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {image, title, desc, category, ingredients, steps, message} = useSelector((store) => store.createRecipe);
    const [ingredientsLength, setIngredientsLength] = useState(0);
    const [stepsLength, setStepsLength] = useState(0);
  

    let ingredientsList = Array.from({length: ingredientsLength})
    let stepsList = Array.from({length: stepsLength})

    const handleChangeInput = (e) => {
      const name = e.target.name;
      const value =  e.target.value;

      dispatch(handleValue({name, value}))
    }


    const handleChangeList = (stateName, index, value) => {
      dispatch(handleList({stateName, index, value}))
    }

    const removeItem = (element, stateName, index) => {
      element.remove();
      dispatch(handleListItemRemove({stateName, index}))
    }

    const clickBtn = (e) => {
      e.preventDefault();
      const input = e.currentTarget.nextElementSibling;
      input.click();
    }

  
    const handleChangeImage = async(e) => {
        let name = e.target.name;
        let value = e.target.files[0];

        const formData = new FormData();
        formData.append("file", value);
        formData.append("upload_preset", "gapi51kb")
        
        try {
          const response = await axios.post('https://api.cloudinary.com/v1_1/dfefbr680/image/upload', formData);
          //Destructure other items you may need from response, ex: asset_id, etc.
          const {data:{secure_url: image}} = response;
          value = image;
       
          dispatch(handleValue({name, value}))
        } catch (error) {
          console.log(error)
        }
    }

    const handleSubmit = async() => {

      const credentials = {
        image,
        category, 
        title, 
        desc,
        ingredients:ingredients.filter((item) => item !== ''),
        steps:steps.filter((item) => item !== '')
      }
      dispatch(createRecipe(credentials))
    }
  
    
    useEffect(() => {
      dispatch(clearRecipeValues())
    }, [])

  return (
    <Wrapper>
      
      {message === 'Please provide all fields' && <Modal message={message} exitFunction={() => dispatch(clearMessage())} acceptFunction={() => dispatch(clearMessage())}/>}
      {message === 'Recipe successfully added' && <Modal message={message} 
      exitFunction={() => {
        navigate('/home/myProfile')
        dispatch(clearMessage())
      }} 
      acceptFunction={() => {
        navigate('/home/myProfile')
        dispatch(clearMessage())
      }}/>
      }
        <div className="form-inputs">

        {/* {
          <div.img-container><div>
          image ? //image component : 
          <div className="upload-image">
              <p>Upload Recipe Image</p>
              <div className='add-btn'><AiOutlinePlus/></div>
          </div>
          //chnage image btn

        } */}

        <div className="img-container">
          {image ? <img src={image} alt='no image'/>
          :
          <div className="upload-image">
              <p>Upload Recipe Image</p>
                <div className='add-btn' onClick={clickBtn}><AiOutlinePlus/></div>
               <input type="file" name='image' className='file-input' onChange={handleChangeImage}/>
          </div>
          }
        </div>
        {image && <div>
           <button className='btn btn-secondary edit-btn' onClick={clickBtn}>Change Image</button>
            <input type="file" name='image' className='file-input' onChange={handleChangeImage}/>
        </div>}

          

          <h2>Recipe Information</h2>

          <div className="title-category">

            <div className="title">
              <FormInput className='title' name='title' type='text' value={title} changeValue={handleChangeInput}/>
            </div>

            <div className="category">
              <p>Category</p>
              {/* eventually make into its own component */}
              <Categories value={category} changeValue={handleChangeInput}/>
              
            </div>

          </div>
           

         <div className='desc'><FormInput name='desc' type='text' value={desc} changeValue={handleChangeInput}/></div> 

          <div className="ingredients">
            <h2>Ingredients</h2>
            {ingredientsList.map((item, index) => {
              return <ListInput key={index} stateName='ingredients' index={index} handleChange={handleChangeList} removeItem={removeItem}></ListInput>
            })}
            <button className='btn-secondary add-item-btn' onClick={() => setIngredientsLength(ingredientsLength + 1)}><AiOutlinePlus/></button>
          </div>

          <div className="ingredients">
            <h2>Steps</h2>
            {stepsList.map((item, index) => {
              return <ListInput key={index} stateName='steps' index={index} handleChange={handleChangeList} removeItem={removeItem}></ListInput>
            })}
            <button className='btn-secondary add-item-btn' onClick={() => setStepsLength(stepsLength + 1)}><AiOutlinePlus/></button>
          </div>
        </div>


<button className='btn submit-btn' onClick={handleSubmit}>Submit</button>


    </Wrapper>
  )
}

export default CreateRecipe
