import logo from '../assets/logo.png'

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' style={{color:'blue'}}  href='#page-top'>
          <img src={logo} style={{display:'inline', marginRight:30}} width={40} alt='logo' />
          {`     ACUAZICAME `}
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            
          <li>
              <a href='#about' style={{color:'blue'}}  className='page-scroll'>
              Sobre Nosotros
              </a>
            </li>
            <li>
              <a href='#directive' style={{color:'blue'}}  className='page-scroll'>
              Organigrama
              </a>
            </li>
            <li>
              <a href='#contact' style={{color:'blue'}}  className='page-scroll'>
              Contactenos
              </a>
            </li>
            <li>
              <a href='#features' style={{color:'blue'}} className='page-scroll'>
              Documentos de interés
              </a>
            </li>
            <li>
              <a href='https://www.mivereda.com/search.html' target='_blanck' style={{color:'blue'}} className='page-scroll text-center'>
              Consulta y paga<br/> tu factura
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
