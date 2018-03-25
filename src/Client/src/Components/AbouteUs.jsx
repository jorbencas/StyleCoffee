import App from './App.jsx';
import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const params = {v: '3.exp', key: 'AIzaSyBV6q497mEhzr9w7OoKKfjOleBl5LEi7Hc'};
class AbouteUs extends React.Component {
    constructor(props){
        super(props);   
    }    

      onMapCreated(map) {
            map.setOptions({
              disableDefaultUI: true
            });
          }
         
          onDragEnd(e) {
            console.log('onDragEnd', e);
          }
        
          onCloseClick() {
            console.log('onCloseClick');
          }
         
          onClick(e) {
            console.log('onClick', e);
          }

    render() {   
        return (
        <div className="grid-main">
          <h2>Conozenos</h2>
          <div className="abouteus">
          <p><strong>Somos un pequeño grupo innovador y con ganas de llevar a cabo un arriesgado negocio
              que fusione un ambiente de relax y calma en el que tomar un buen café y acompañarlo con una 
              lectura amena y personalizada.
              La intención de este negocio nace una tarde de invierno en la que un grupo de incipientes 
              informáticos y psicólogos, decidiron que el era el momento para llevar a nuestra población un espacio
              en que relacionarse con otras personas como en una cafeteria normal y en el mismo ambiente tener una inmensidad
              de libros de todos los géneros, con los que sumergirse y viajar a un otro entorno en el que desconectar del estrés diario
              o compartir un espacio de cultura.
              En nuestra idea de negocio, queremos que sea posible que el cliente decida si quiere estar en el entorno del bibliocafé 
              o prefiere irse a otro espacio en el que se sienta más a gusto y hacer el pedido o reserva de su café y libro.
              </strong>
              </p>

              <p id="bye"><strong>Gracias por confiar en nosotros.</strong></p>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div>
              <h1>Donde puedes encontrarnos</h1>
              <div className="maps">
                <Gmaps
                    width={'100%'}
                    height={'360px'}
                    zoom={15}
                    lat={'38.8220593'}
                    lng={'-0.6063927'}
                    params={params}
                    loadingMessage={'Be happy'}
                    onMapCreated={this.onMapCreated}>
                    <Marker
                        lat={'38.8569173'}
                        lng={'0.5729404'}
                        draggable={true}
                        onDragEnd={this.onDragEnd} />
                    <InfoWindow
                        content={'StyleCoffee'}
                        onCloseClick={this.onCloseClick} />
                </Gmaps>
            </div>

          </div>
        
       
        </div>
        );
    }
}

export default AbouteUs;