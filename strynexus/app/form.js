import React from 'react';
export default function Form({title, setTitle}) {
    return (
        <form>
            <input type="text" name="phone" value={title} placeholder="your title" onChange={({ target }) => setTitle(target.value)}/>
        </form>
    )
}