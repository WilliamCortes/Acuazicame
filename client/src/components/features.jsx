import {NavLink} from 'react-router-dom'


export const Features = (props) => {
  return (
    <div id='features' className='text-center' >
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title' >
          <h2 style={{marginTop:100}}>Documentos de Interés</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <NavLink to={d.rute} key={`${d.title}-${i}`} target='_blank' >
                <div  className='col-xs-6 col-md-3' style={{marginBottom:100}}>
                  <i className={d.icon}/>
                  <h3>{d.title}</h3>
                  {/* <p>{d.text}</p> */}
                </div>
                </NavLink>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
