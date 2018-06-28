import React from 'react';
import { Link } from 'react-router';
import { FormErrors } from '../../lib/FormErrors';
import { hashcode } from '../../lib/utils';
import { updateprofile } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListErrors from '../errors/errors';
import DatePicker from 'react-datepicker';

const mapStateToProps = state => {
  return {
    user:state.UsersReducers.user
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({updateprofile}, dispatch);
}

const USERS = [ { _id: '5b190b8d1c2307b6cb382ebe',
    id: 58125477,
    username: 'Jorge',
    email: 'jorbencas@gmail.com',
    role: 'admin',
    name:"Sergio",
    apellidos:"Beneyto Castelló",
    dni:"48608737P",
    date_birthday:"12/12/2015" },
  { _id: '5b190bed1c2307b6cb382ebf',
    id: -35287438,
    username: 'Jorbencas',
    email: 'jorgebeneytocastello@gmail.com',
    role: 'user',
    name:"Sergio",
    apellidos:"Beneyto Castelló",
    dni:"48608737P",
    date_birthday:"12/12/2015" },
  { _id: '5b30befa72fd6a56402ed981',
    id: -1952961182,
    username: 'Pedro',
    email: 'Pedro@gmail.com',
    role: 'user',
    name:"Sergio",
    apellidos:"Beneyto Castelló",
    dni:"48608737P",
    date_birthday:"12/12/2015"},
  { _id: '5b30d6ae87c801599483c42a',
    id: 0,
    username: 'Sergiotomas',
    email: 'Pedro@gmail.com',
    role: 'user',
    name:"Sergio",
    apellidos:"Beneyto Castelló",
    dni:"48608737P",
    date_birthday:"12/12/2015"
    } ];

class ManageUsers extends React.Component {
    constructor(props){
        super(props); 

        this.state = { 
            users:props.user?props.user:[]
          };

          this.hundleTesting = this.hundleTesting.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this); 
    }    

    componentWillReceiveProps(nextProps){
        this.setState({
            users:nextProps.user?nextProps.user:[]
        });
        console.log(this.state);
    }

    handleSubmit(event){
      this.props.updateprofile(this.state);
    }


    hundleTesting(){
        console.log(this.state.users);
        return(  USERS.map((item, i) => (
                    <tr key={i}>
                        <td className="text-center">
                            <img style={{borderRadius:'30px'}} src={item.image == undefined ?"http://placehold.it/50x50":item.image } width="50px" height="50px" alt="..." className="img-responsive"/>
                        </td>
                        <td>
                                <h4 className="nomargin">{ item.username }</h4>
                                <div className = "contenido" onClick={this.handleviewtext}>
                                    <p> {item.email} </p>
                                 </div>
                                 <div>
                                    {item.role}
                                 </div>
                        </td>
                        <td className="text-center">
                            {item.dni ?item.dni:<p>DNI</p>}
                        </td>
                        <td className="text-center">
                            {item.name?item.name: <p>Name</p> }
                        </td>
                        <td className="text-center">
                            {item.apellidos?item.apellidos: <p>Apellidos</p> }
                        </td>
                        <td className="text-center">
                            {item.date_birthday?item.date_birthday: <p>Birthday</p> }
                        </td>
                        <td className="actions" data-th="">
                            <button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button>
                            <button className="btn btn-danger btn-sm">
                                <Link to='/card' role="eliminar un elemento del carrito" className="btn-search" onClick={()=>{RemoveFromcard(item)}}><i className="fa fa-trash-o"></i></Link>
                            </button>								
                        </td>
                    </tr>
                ))
            )
    }

    render() {  /*
             const Users =  this.state.users.users.map((item, i) => (
              <tr key={i}>
                        <td className="text-center">
                            <img style={{borderRadius:'30px'}} src={item.image == undefined ?"http://placehold.it/50x50":item.image } width="50px" height="50px" alt="..." className="img-responsive"/>
                        </td>
                        <td>
                                <h4 className="nomargin">{ item.username }</h4>
                                <div className = "contenido" onClick={this.handleviewtext}>
                                    <p> {item.email} </p>
                                 </div>
                                 <div>
                                    {item.role}
                                 </div>
                        </td>
                        <td className="text-center">
                            {item.dni ?item.dni:<p>DNI</p>}
                        </td>
                        <td className="text-center">
                            {item.name?item.name: <p>Name</p> }
                        </td>
                        <td className="text-center">
                            {item.apellidos?item.apellidos: <p>Apellidos</p> }
                        </td>
                        <td className="text-center">
                            {item.date_birthday?item.date_birthday: <p>Birthday</p> }
                        </td>
                        <td className="actions" data-th="">
                            <button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button>
                            <button className="btn btn-danger btn-sm">
                                <Link to='/card' role="eliminar un elemento del carrito" className="btn-search" onClick={()=>{RemoveFromcard(item)}}><i className="fa fa-trash-o"></i></Link>
                            </button>								
                        </td>
                    </tr>
            ));*/
          return (
            <table id="cart" className="table table-hover table-condensed">
    			<thead>
					<tr>
						<th className="text-center" style={{width:'2%'}}>Avatar</th>
						<th style={{width:'10%'}}>Datos</th>
						<th className="text-center" style={{width:'10%'}}>DNI</th>
                        <th className="text-center" style={{width:'8%'}}>Nombre</th>
                        <th className="text-center" style={{width:'15%'}}>Apellidos</th>
                        <th className="text-center" style={{width:'15%'}}>Fecha de nacimiento</th>
						<th className="text-center" style={{width:'10%'}}>Actions</th>
					</tr>
			    </thead>
                <tbody>
                    { /*this.props.user.users == undefined ?*/ this.hundleTesting()/*: Users*/ }
				</tbody>
				<tfoot>
					<tr className="visible-xs">
						<td className="text-center"><strong>Total de productos en el carrito: {this.state.users.length}</strong></td>
					</tr>
				</tfoot>
			</table>
          );
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (ManageUsers);