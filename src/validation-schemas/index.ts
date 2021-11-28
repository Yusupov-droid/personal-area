import * as Yup from 'yup';


const EmailSchema = Yup.string().email('Невалидный адресс э-почты.').required('Это поле обязательное!');
const RequiredSchema = Yup.string().required('Это поле обязательное!');

export const LoginSchema = Yup.object().shape({
    email: EmailSchema,
    password: RequiredSchema,
});

export const RegisterSchema = Yup.object().shape({
    email: EmailSchema,
    name: RequiredSchema,
    password: RequiredSchema,
});

export const ContactUpdateAndCreateSchema = Yup.object().shape({
    name: RequiredSchema,
    phone: RequiredSchema,
});
