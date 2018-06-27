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
  console.log(state);
  return {
    user:state.UsersReducers.users
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
    date_birthday:"12/12/2015",
    salt: '934886686fba5497ce81fbc5e775c313',
    hash: 'e41d2c5852b780cf782859ee58167ceae0af2c9d6b072dc8d0ae2e8464879140c66f5975bd84110906a98e42bf3638cc6eadc765c60bf49ad22c64cedcf0dbfec940f19f0e6413b912f91938591754fb67e72a23886f0bfd11fa1adc8e893234a5215cf3729c18e87f19021691ec522288d6d69860e19e82aa222ea370d96ea19958c2767c41f48b7d39e6932d52ba5cebf9fdb4e0dc7875dc5cab3302231e2bd6b1108e46b91aff32f73fcd01637b0aa1aeaeedba27078373bce32588cabed3467ee3e29c1de8cc4a38d54e20255463bacb33c11876492ad64367ff05223f8b4fe1c0d21eccc1007eee428aed75f2c27e24b00dcbdbf8c1fd1a024ad997cae58cb99bbb9569d72a7eeb0e9322420d5fb87f710af2675889a6b1dd267aefb172ba53387af04aa1451e0bf1b9b77d1bf971b21b526fba676356c236a6a907b1b7eba4be7e2d87505e1a674fc0f9289c94c9cf727f77ff15a6f95e98e20e7dbc5c2e98679414805a633b53b63af8bc9a4fc3ae0cc99477589b44cee412f4c82181852727f38d227c95c1b14e0c22bdbdf90b906b98c71774386d0b00f3464dccfdb21c29843de2fd2b01070bba27c17d446ab23e34c0ba008b8c2b35a2af954308ee97db79b24977c6e8478d60b1186b9c3a23ec5833d0eeb7d96d6fbbbd8d610a76669ae8b1d8a40aec3b14ded64e9cfd011210287fa465060529d8ecdfb5cb69',
    __v: 0 },
  { _id: '5b190bed1c2307b6cb382ebf',
    id: -35287438,
    username: 'Jorbencas',
    email: 'jorgebeneytocastello@gmail.com',
    role: 'user',
    name:"Sergio",
    apellidos:"Beneyto Castelló",
    dni:"48608737P",
    date_birthday:"12/12/2015",
    salt: 'c68362cc569ca96a977ed455890949b5',
    hash: '69ad04f3b52e5c67d223df8bfdeb7cad0f3575f718efdc2ded3765b48b772ba91b28869ccf040d693485c7b1d99da5cfcad0ddfc0bbe732367eabc23d53caf407c005b9bdd1e672a513c3faf27395d02d6da02b079e63de46e4cf527cbb32a6bf1a74f721550d72dcddda22c843bd98f5e3f4f949ec8d2c004c57da032300f96b327a32a232de846b99b4bdb3de14aa995d6294e20e485436d5944fb10fe66277ee01aae5e1cf156d7e87d990dbbf53718d0008e4dc5638db62faf3f16b0a2c617447ca03014ae093767ed5223e85f4f6fab3a07df5bf452b598e8eec8babb6b93d733be0b38f88b424462ebff315ec07481f5ba08cd673f64efb6f182f10c685d60adc74e6fd2762a30ef58d52c06234f23ab0e63facbc8079112af5de237c040d66edade56ef4f192a319a625cf3aa4f9512065fc911c31203c0c10d74111dc197d8f9fa30a9bd8070581197e446837e4b4540fbcbdedb16ed75f6f23983efffd2ccf1dd20485ada8f4ee83bec4d3620b61308a4f13778c625609851ac5ee9a3781a5898542d08c133a9bb2747bcc14b510e20454cc665f47130d0d594453b449ea870148674ee27a59afca983be6c5830944a079972e1d5f27fc9e609155be6537e1247dc21067a36944039e858637e17f29843082a794c59bb0d13ed35a66507473bc07de52ae40a03b50f3025d765987631b636d9b7328ce8cc9d3e05ad',
    __v: 0 },
  { _id: '5b30befa72fd6a56402ed981',
    id: -1952961182,
    username: 'Pedro',
    email: 'Pedro@gmail.com',
    role: 'user',
    name:"Sergio",
    apellidos:"Beneyto Castelló",
    dni:"48608737P",
    date_birthday:"12/12/2015",
    salt: '56c06bf951dadc927d6a17ac95fb5105',
    hash: '56ff2a1779f58cc4bde0314665525c0b0a1737deef5bbd3cbb4b8400cedc301be3f7c8921983651eb4ca9d8813d1a48fe64e33d7e0d53e9fd1ff3a80dc43264110807cc61f8b2140c52ea91ee347265540b91fbe00d5f322d5bd7ceb33394a43283f0c9abfae92633ea045dc66bee17091968907f274773ee796dd42b664dc0a157892f9af4b5c178e40a58eb2559633a13182eb8ae08b9db22507c69883b6b3e7f996afbc52fed29b6c99b0773d76f280ff212ba47dc35965fbb67d2023428692a768c9283c8851aab7f6d0c5b6acdb58cd306c4baecee7df5c8f851597b594965d10fe43fa2543b3c01c0dd3744c84adef98ffa5b395f0c4bbf004614787672ee28e1898544d2103656b7c9e8004f7613e4d1b2571e5a8973d59ad37ed2d89083a2d540ad2647102b25f765957c5ef712127fd031ed3926e276bdb87498792477b2535ac18b5dc4c06b9a3f3a47392d6f64bef0cab24ab5318120dec19411147f353ad93bfc618546960853c29dce6c641805dbcd8a9c5b3edcb2e10f56ca15ca421c25268c23ab725450dc03f9e0d4f2d844508b354c2f78b3a2778eb2cbf3d0da0b5467d2c353d14f1c7957813bfe4025033a6157d7e66793ce5c6737a52c7528871a03bc3ea8c7eea01a7878f006465525dced20833da123891aa99815462cb4c0397481646123938787d6129120b4f52f547f9d8a73357655441249b1d',
    __v: 0 },
  { _id: '5b30d6ae87c801599483c42a',
    id: 0,
    username: 'Sergiotomas',
    email: 'Pedro@gmail.com',
    role: 'user',
    name:"Sergio",
    apellidos:"Beneyto Castelló",
    dni:"48608737P",
    date_birthday:"12/12/2015",
    salt: '1e1de8ccecdcb3f473287aacda0e9953',
    hash: 'da7bd6cb535b8f9cd503ccf8f72058875c44cf81d8b06ed257c37a88601c3a6e7e769718e26537327a8ca718bba6c5d7c382598a75a64b734b392161f32806dd2936d78cd4d92dcaef5b63e1cf584c73fa415638c041fa952abe1a8535188d19ba56001448d90a2e70c359958d102a0e54816fda75890ef059ba835d694f1d102efa9a756ab21a3e4633118f8058e56fb9dac85c5d831d7bb6db3f6ab743088b4bfa612fac7d0366642e100cbcb3b67a14aea5bd945584a65cc571f52fd8b06d02e9f007942038d35663e974c1343edb903650fb4be44d4b7c22676c68c959fb4dc69c723d07f008146dfdb8361a116160560f99a4fdb8e8b260b25bf1c8816e04e273a29708c46d8e0338b021b3382dbb58d696ee8966e7811b0e5dffa7fc32440a6c3432bdf2559982850a00b60e9a3b9e3f6e174e4b7d1d867a5344a9b6b84110fde2ab4e954cadc31a2bb97d97d447574fe44f02160cf0a17ebe7e3f960d813080450300992d4b864239aed2498ff7bbc96a3e7dd57548feee0e00a281a72542983826d200671f6fb12b4f991b5ad8c91796c9b9247ec74efc63e3ed40913833c59d0528a90550dd149c5e6d5f211fc4b84e2a55ce7d8ad0332abdceb768ed171216d339ab06dfe0207b71150ba394ab818ca3ab82d4d95d7f912289dbbf3fb720715081cd7154d686da5c2dde6da3f373edbdc3791b7531631aa621cb77',
    __v: 0 } ];

class ManageUsers extends React.Component {
    constructor(props){
        super(props); 

        this.state = { 
            users:[]
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
        console.log('Hola');

        if (his.props.users != undefined) {
            return this.state.users.map((item, i) => (
                <tr key={i}>
                    <td className="text-center">
                        <img style={{borderRadius:'30px'}} src={item.image == undefined ?"http://placehold.it/50x50":item.image } width="50px" height="50px" alt="..." className="img-responsive"/>
                    </td>
                    <td >
                            <h4 className="nomargin">{ item.username }</h4>
                            <div className = "contenido" onClick={this.handleviewtext}>
                                <p> {item.email} </p>
                             </div>
                             <div>
                                {item.role}
                             </div>
                    </td>
                    <td className="text-center">
                        {item.dni}
                    </td>
                    <td className="text-center">
                        {item.name}
                    </td>
                    <td className="text-center">
                        {item.apellidos}
                    </td>
                    <td className="text-center">
                        {item.date_birthday}
                    </td>
                    <td className="actions" data-th="">
                        <button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button>
                        <button className="btn btn-danger btn-sm">
                            <Link to='/card' role="eliminar un elemento del carrito" className="btn-search" onClick={()=>{RemoveFromcard(item)}}><i className="fa fa-trash-o"></i></Link>
                        </button>								
                    </td>
                </tr>
            )); 
        }else{
        return  USERS.map((item, i) => (
                    <tr key={i}>
                        <td className="text-center">
                            <img style={{borderRadius:'30px'}} src={item.image == undefined ?"http://placehold.it/50x50":item.image } width="50px" height="50px" alt="..." className="img-responsive"/>
                        </td>
                        <td >
                                <h4 className="nomargin">{ item.username }</h4>
                                <div className = "contenido" onClick={this.handleviewtext}>
                                    <p> {item.email} </p>
                                 </div>
                                 <div>
                                    {item.role}
                                 </div>
                        </td>
                        <td className="text-center">
                            {item.dni}
                        </td>
                        <td className="text-center">
                            {item.name}
                        </td>
                        <td className="text-center">
                            {item.apellidos}
                        </td>
                        <td className="text-center">
                            {item.date_birthday}
                        </td>
                        <td className="actions" data-th="">
                            <button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button>
                            <button className="btn btn-danger btn-sm">
                                <Link to='/card' role="eliminar un elemento del carrito" className="btn-search" onClick={()=>{RemoveFromcard(item)}}><i className="fa fa-trash-o"></i></Link>
                            </button>								
                        </td>
                    </tr>
                ));
            }
        )
    }

    render() {  
             
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
                    { this.hundleTesting }
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