import React, { useState, useRef } from 'react'
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button"
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
            setError({
                title: "Invalid input!",
                message: "Please enter a valid name and age input (non-empty)"
            });
            return;
        };
        if (+enteredAge <= 0) {
            setError({
                title: "Invalid age!",
                message: "Please enter the correct age (> 0)!"
            });
            return;
        };
        props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        ref={nameInputRef} />

                    <label htmlFor="age">Age (years)</label>
                    <input 
                        type="number" 
                        id="age" 
                        ref={ageInputRef} />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>


    );
}

export default AddUser;