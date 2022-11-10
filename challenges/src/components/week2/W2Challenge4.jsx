import React,{useState} from 'react';

const W2Challenge4 = (props) => {
    let priorityVal = [
        { label: 'P-1', value: 1 },
        { label: 'P-2', value: 2 },
        { label: 'P-3', value: 3 },
        { label: 'P-4', value: 4 },
        { label: 'P-5', value: 5 },
    ];

    const [data, setData] = useState({
            name:'',
            wish:'',
            priority:0
        });

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.send(data);
    };

    const handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value});
    };

    return (
        <React.Fragment>
            <div className="challengeDisplayBox">
                <h3>Week 1 - Challenge 4</h3>
                <form onSubmit={handleSubmit}>
                    <div style={{padding:'5px'}}>
                        <label  for="name">Child's Name:&nbsp;</label>
                        <input id="name" name="name" onChange={handleChange} value={data.name} />
                    </div>
                    <div style={{padding:'5px'}}>
                        <label for="wish">Child's Name:&nbsp;</label>
                        <textarea id="wish" name="wish" rows="4" cols="21" onChange={handleChange} value={data.wish}/>
                    </div>
                    <div style={{padding:'5px'}}>
                        <label for="priority">Priority:&nbsp;</label>
                        <select id="priority" name="priority" onChange={handleChange}  value={data.priority}>
                            <option value="0">Select priority</option>
                            {priorityVal.map((prty,index) => (
                                <option key={index} value={prty.value}>{prty.label}</option>
                            ))}
                        </select>
                    </div>
                    <div style={{padding:'5px'}}>
                        <button type="submit" >Enviar a la lista</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};

export default W2Challenge4;
