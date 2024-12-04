


const Input = ({ setInput }) => {
  return (
    <input type="number" onInput={(e) => setInput(e.target.value)} />
  )
}

export default Input