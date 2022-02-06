import { Field, Form, Formik } from "formik"
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DetalheDoJogoContext } from "../../contextos/DetalheDoJogo/DetalheDoJogoContext";
import { FormInput, Button, Input, DivButton, Erro } from "./Formulario.styled";
import * as yup from "yup";

export const Formulario = () => {
    const nomeLocalStorage = "comentario";
    const { id } = useParams();
    const listaStorageTemp = localStorage.getItem(nomeLocalStorage)
    let listaStorage = listaStorageTemp ? JSON.parse(listaStorageTemp) : []
    const detalheDoJogoContext = useContext(DetalheDoJogoContext);
    const { dispatch } = detalheDoJogoContext;

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        let game = listaStorage.find((g) => g.id === id)
        if (game) {
            values = Object.assign({}, values, { id: game.comentarios.length, counter: 0 })
            game.comentarios.push(values)
        } else {
            values = Object.assign({}, values, { id: 0, counter: 0 })
            game = { id: id, comentarios: [values] }
            listaStorage.push(game)
        }

        localStorage.setItem(nomeLocalStorage, JSON.stringify(listaStorage))
        setSubmitting(false)
        resetForm()
        dispatch({ type: 'ATUALIZAR', payload: listaStorage })
    }

    return (
        <>
            <Formik initialValues={{ nome: '', email: '', comentario: '' }}
                validationSchema={yup.object({
                    nome: yup.string().required("Nome deve ser informado."),
                    email: yup.string().email("Email informado não é váido").required("Email deve ser informado."),
                    comentario: yup.string().required("Comentário deve ser informado."),
                })}
                onSubmit={handleSubmit}>

                {({ errors, touched, isSubmitting, resetForm }) => (
                    < Form >
                        {errors.nome && touched.nome ? (<Erro>{errors.nome}</Erro>) : null}
                        {errors.email && touched.email ? (<Erro>{errors.email}</Erro>) : null}
                        {errors.comentario && touched.comentario ? (<Erro>{errors.comentario}</Erro>) : null}

                        <FormInput>
                            <h3>Comentários</h3>
                            <Input>
                                <Field name='nome' type='text' placeholder='Nome Completo' />
                                <Field name='email' type='email' placeholder='E-mail' />
                            </Input>
                            <Field component="textarea" rows="10" name='comentario' placeholder='Deixe seu comentario' />
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
