import * as yup from 'yup';

export default async function verifyForm(ref, data) {
    try {
        const schema = yup.object().shape({
            name:   yup.string()
                            .matches(/^(?![ ])(?!.*(?:\d|[ ]{2}|[!$%^&*()_+|~=\{\}\[\]:";<>?,\/]))(?:(?:e|da|do|das|dos|de|d'|D'|la|las|el|los|l')\s*?|(?:[A-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð'][^\s]*\s*?)(?!.*[ ]$))+$/g,
                                    'Nome e sobrenome inválido')
                            .required('Nome e sobrenome inválido') ,
            phone:  yup.string()
                            .matches(/^(\(?\d{2}\)?) ?9?\d{4,5}-?\d{4}$/, 
                                     'Deve conter apenas números')
                            .required('Número inválido')
        });

        await schema.validate(data, {
            abortEarly: false,
        });
        
        ref.current.setData(data);
        console.log(data)

        ref.reset()
    } catch (err) {
        const validationErrors = {};
        
        if (err instanceof yup.ValidationError) {
          err.inner.forEach(error => {
            validationErrors[error.path] = error.message;
          });
          
          ref.current.setErrors(validationErrors);
        }        
    }
}
