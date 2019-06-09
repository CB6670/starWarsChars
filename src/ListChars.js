import React, {Component} from "react";
import {Link,Route} from "react-router-dom";
import sWAPI from "./sw-chars-api";
import axios from "axios";
import AddChar from "./addChar";

export default class ListChars extends Component {
    constructor(props){
        super(props);
        this.state = {
            chars : [],
            newChar:"",
            displayCharCreator: false
        }
        this.charDelete = this.charDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.displayCharForm = this.displayCharForm.bind(this);
    }
  async  componentDidMount(){
   try{   
    const response = await sWAPI.get('/people');
      this.setState({chars:response.data});
   }catch(err){
       console.error(err);
   }
    }
    handleChange(ev){
        this.setState({newChar:ev.target.value});
    }
    handleSubmit(ev){
        const {chars,newChar} = this.state;
        const newCharObj = {};
        newCharObj.name = newChar;
        ev.preventDefault();
        this.setState({chars:[...chars,newCharObj]})
    }
    displayCharForm(){
        console.log('hi')
        const{displayCharCreator} = this.state;
        this.setState({displayCharCreator:!displayCharCreator});
    }
    async charDelete(name) {
        //const {chars} = this.state;
        console.log(name);
    //    await sWAPI.delete(name);
       this.setState(oldState => ({
           chars : oldState.chars.filter(stateChar => {
               console.log(stateChar);
               return stateChar.name !== name;
           })
       }))
      }

    render(){
        const {chars} = this.state;
        const {charDelete, displayCharForm} = this;
        return(
            <div id = "charsDiv">
                <button onClick = {displayCharForm}>Create a Character</button>
                <ul>
                {
                    chars.map((char,idx) =>{
                        return(
                            <li key = {`${idx}`}>{char.name}<button onClick = {() => charDelete(char.name)}>x</button></li>
                        )
                    })
                }
                </ul>
                {
                    this.state.displayCharCreator ? <AddChar newChar = {this.state.newChar} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit} /> : null
                    }
                </div>
        )
    }
}