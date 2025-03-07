
const Footer = () => {
    const today = new Date();   
  return (
    <footer>
        <p>Copyright &copy; {today.getFUllYear()}</p>
    </footer>
  )
}

export default Footer
