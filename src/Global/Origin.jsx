import {useState} from 'react';
import  "../Styles/Login.css"

const Origin = () => {
  const [selectcity, setSelectCity] = useState('');

  const handleChange = event => {
    setSelectCity(event.target.value);

    console.log('value is:', event.target.value);
  };

  return (
    <>  

      <input className='inputcity'
        type="text"
        id="selectcity"
        name="selectcity"
        placeholder='Origin,Port,City'
        onChange={handleChange}
        value={selectcity}
      />
    </>
  );
};

export default Origin;
