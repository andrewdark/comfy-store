
const FormInput = ({ label, name, type, placeholder, defaultValue, size }) => {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend capitalize">{label}</legend>
            <input
                type={type ?? 'text'}
                className={`input border-2 px-2 ${size}`}
                name={name}
                placeholder={placeholder ?? "Type here"}
                defaultValue={defaultValue} />

        </fieldset>
    );
};

export default FormInput;