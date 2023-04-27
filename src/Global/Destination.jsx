import {useState} from 'react';
import  "../Styles/Login.css"



const Destination = () => {
  const [selectcity, setSelectCity] = useState('');

  const handleChange = event => {
    setSelectCity(event.target.value);

    console.log('value is:', event.target.value);
  };

  return (
    <>
      <input className='inputdestination'
        type="text"
        id="selectcity"
        name="selectcity"
        placeholder='Destination,Port,City'
        onChange={handleChange}
        value={selectcity}
      />
    </>
  );
};

export default Destination;
