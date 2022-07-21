export const Directive = (props) => {
    return (
      <div id="directive" style={{marginTop:40}}>
        <div className="container">
        <div className='col-md-8 col-md-offset-2 section-title text-center'>
          <h2 style={{marginTop:100}}>Junta Directiva</h2>
          <p>
            Periodo: 2022 - 2024
          </p>
        </div>
          <div className="row" >
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src={props?.data?.img} className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
                <h3>Miembros:

                </h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  