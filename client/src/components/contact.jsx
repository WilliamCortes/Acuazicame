import { useState } from 'react'
import emailjs from 'emailjs-com'
import swal from 'sweetalert';

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID, 
        process.env.REACT_APP_TEMPLATE_ID, 
        e.target, 
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          swal({
            title: "Mensaje enviado con éxito",
            text: result.text,
            icon: "success",
            timer:3000,
          });
          clearState()
        },
        (error) => {
          swal({
            title: "Lo sentimos!",
            text: error.text,
            icon: "error",
          });
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Contactenos</h2>
                <p>
                Complete el siguiente formulario para enviarnos un correo electrónico y nos pondremos en contacto con usted lo antes posible.
                </p>
              </div>
              <form name='sentMessage'  onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={name}
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={email}
                        className='form-control'
                        placeholder='Correo Electrónico'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    id='message'
                    name='message'
                    value={message}
                    className='form-control'
                    rows='4'
                    placeholder='Escribe aquí tu mensaje'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Información de contacto</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Ubicación
                </span>
                {props.data ? props.data.address : 'loading'}
                <br/>
                Código postal:{'  '} 
                {props.data ? props.data.zipcode : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Teléfono
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Correo Electrónico
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/' } target='_blank'>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2022 Hecho con ❤️ por {' '}
            <a href='https://williamcortes.github.io/' target='_blank' rel='nofollow'>
            Will I'm
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
