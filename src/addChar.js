import React from "react";

const AddChar = ({handleChange, handleSubmit, newChar}) => {
    return(
        <form onSubmit = {handleSubmit}>
            <label>
                Name:
                <input type = "text"value = {newChar} onChange = {handleChange} />
            </label>
            <input type = "submit" value = "Submit" />
        </form>

    )
}
export default AddChar;