
const Content = () => {

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

    
  return (
    <main>
        <p>
            Hello {handleNameChange()}!
        </p>
        <button onClick={handleClick}> Click It</button>
    </main>
  )
}

export default Content
