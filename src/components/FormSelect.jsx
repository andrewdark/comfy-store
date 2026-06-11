
const FormSelect = ({ label, name, list, defaultValue, size }) => {
    return (
        <fieldset className="fieldset">
            <label htmlFor={name} className='label'>
                <span className='label-text capitalize'>{label}</span>
            </label>
            <select defaultValue={defaultValue} name={name}
                id={name}
                className={`select select-bordered ${size}`}>
                <option disabled={true}>Pick an items</option>
                {list.map((item) => {
                    return (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    );
                })}
            </select>
        </fieldset>
    );
};

export default FormSelect;