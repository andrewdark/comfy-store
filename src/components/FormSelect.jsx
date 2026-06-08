
const FormSelect = ({ label, name, list, defaultValue, size }) => {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend capitalize">{label}</legend>
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
            <span className="label hidden">Optional</span>
        </fieldset>
    );
};

export default FormSelect;