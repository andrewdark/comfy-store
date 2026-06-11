
const FormCheckbox = ({ label, name, defaultValue, size }) => {
    return (
        <fieldset className="fieldset grid-cols-1 justify-items-center">
            <label htmlFor={name} className='label cursor-pointer'>
                <span className='label-text capitalize'>{label}</span>
            </label>
            <input
                type='checkbox'
                name={name}
                defaultChecked={defaultValue}
                className={`checkbox checkbox-primary ${size}`}
            />

        </fieldset>
    );
};

export default FormCheckbox;