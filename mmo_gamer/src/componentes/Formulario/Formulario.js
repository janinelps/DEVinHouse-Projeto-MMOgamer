import { Field, Form, Formik } from "formik"
import { FormInput, Button, Input, DivButton } from "./Formulario.styled";

export const Formulario = () => {
    const nomeLocalStorage = "comentario";

    const listaStorageTemp = localStorage.getItem(nomeLocalStorage)
    let listaStorage = listaStorageTemp ? JSON.parse(listaStorageTemp) : []

    const handleSubmit = (values, { setSubmitting }) => {

        let teste = Object.assign({}, values, { avaliacao: 0 })
        console.log(teste)

        listaStorage.push(values)
        localStorage.setItem(nomeLocalStorage, JSON.stringify(listaStorage))
        setSubmitting(false)
    }

    return (
        <>
            <Formik initialValues={{ nome: '', email: '', comentario: '' }} onSubmit={handleSubmit}>

                {({ isSubmitting, resetForm }) => (
                    < Form >
                        <FormInput>
                            <h3>Comentários</h3>
                            <Input>
                                <Field name='nome' type='text' required placeholder='Nome Completo' />
                                <Field name='email' type='email' required placeholder='E-mail' />
                            </Input>
                            <Field component="textarea" rows="10" required name='comentario' placeholder='Deixe seu comentario' />
                            <DivButton>
                                <Button type="submit" disabled={isSubmitting}>ENVIAR</Button>
                                <Button type="button" disabled={isSubmitting} onClick={resetForm} >LIMPAR</Button>
                            </DivButton>
                        </FormInput>
                    </Form>
                )}
            </Formik>
        </>
    )
}
