
const FormCheckbox = ({ label, name, defaultValue, size }) => {
    return (
        <fieldset className="fieldset grid-cols-1 justify-items-center">
            <legend className="fieldset-legend text-center capitalize">{label}</legend>
            <input
                type='checkbox'
                name={name}
                defaultChecked={defaultValue}
                className={`checkbox checkbox-primary ${size}`}
            />
            <p className="label hidden">Optional</p>
        </fieldset>
    );
};

export default FormCheckbox;