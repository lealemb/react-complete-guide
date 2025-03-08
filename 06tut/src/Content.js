import {useState} from 'react';
const Content = () => {
      const [name, setName] = useState ('Lealem');

      
    const handleNameChange = () => {
        const names = ['Lealem', 'Birhanu', 'Tsehay'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    const handleClick = () => {
      console.log('You  clicked it ');
    }

    const handleClick2 = (name) => {
      console.log(`${name} was Clicked`);
    }

    const handleClick3 = (e) => {
      console.log(e.target);
    }
    
  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name}
        </p>
        <button onClick={handleClick}> Click It</button>
        <button onClick={()=> handleClick2('Lealem')}> Click It</button>
        <button onClick={(e)=> handleClick3(e)}> Click It</button>


    </main>
  )
}

export default Content
