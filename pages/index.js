import {useState} from 'react'

const calculateByOperator = operator => (n, m) => operator === '+' ? n + m : null

export default () => {
  const initialState = 0
  const [operator, setOperator] = useState(null)
  const [operands, setOperands] = useState(null)
  const [result, setResult] = useState(initialState)
  const handleClick = (num) => {
    if (result === initialState) return setResult(num)
    if (num === '=') {
      const operation = calculateByOperator(operator)
      const newResult = operation(Number(operands), Number(result))
      return setResult(newResult)
    }
    if (num === '+') return setOperator('+')
    if (operator !== null) {
      setOperands(result)
      return setResult(num)
    }
    return setResult(`${result}${num}`)
  }

  return (
    <div>
      <section>
        Result:
        <div data-testid="result">{result}</div>
      </section>
      <div>
        <button type="button" onClick={() => handleClick(1)}>
          1
        </button>
        <button type="button" onClick={() => handleClick(2)}>
          2
        </button>
        <button type="button" onClick={() => handleClick(3)}>
          3
        </button>
        <button type="button" onClick={() => handleClick('+')}>
          +
        </button>
        <button type="button" onClick={() => handleClick('=')}>
          =
        </button>
      </div>
    </div>
  )
}
