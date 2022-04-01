import '../Edit/EditPage.css';
import '../Posts/Post.css';
const Input = (props) => {
  const { label, data, setData, inputType, inputClass } = props;
  return (
    <>
      <label>{label}</label>
      {inputType === 'textarea' ?
        <textarea
          type="text"
          placeholder={data}
          // value={data}
          onChange={e => setData(e.target.value)}
          className={inputClass}

        />
        :
        <input
          type="text"
          placeholder={data}
          // value={data}
          onChange={e => setData(e.target.value)}
        />
      }
    </>
  )
}

export default Input