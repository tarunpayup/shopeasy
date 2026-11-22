const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isEmail = (value) => {
    EMAIL_REGEX.test(String(value).trim()) ? null : 'Enter a valid email address';
}

export const minLength = (min,label) => (value) => {
    String(value).length() >= min ? null : `${label} must be atleast ${min} characters`;
}

export const required = (label) => (value) => {
    value && String(value).trim().length>0 ? null : `${label} is required`;
}

export const validate = (value, rules, allValues = {}) => {
    for (const rule of rules){
        const error = rule(value,allValues);
        if (error) return error;
    }
    return null;
}

export const validateForm = (values,schema) => {
    const erros = {};
    Object.keys(schema).forEach((field)=>{
        const error = validate(values[field]?? '', schema[field],values);
        if(error) errors[field] = error;
    });
    return errors;
}