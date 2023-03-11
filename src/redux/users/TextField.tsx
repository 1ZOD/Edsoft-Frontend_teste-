import React from "react";

interface Iprops{
    label: string;
    inputProps:any;
}

const TextField = (props: Iprops) =>{
    return (
        <div className="flex flex-col">
            <label className="mb-2 text-base text-gray-800">{props.label}</label>
            <input
                className="bg-gray-200 py-2 px-3 border-2 outline-none"
            />
        </div>
    )
}

export default TextField