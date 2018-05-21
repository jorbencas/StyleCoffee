import {loadlistCoffees, loadListBooks,categoriesbook, categoriescoffee,
    booksdetail, coffeesdetails, AddtoCard, BuyProduct, RemoveFromcard,
    logout, login, profile,SingUp, updateprofile} from '../../src/Client/actions/index';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureStore from 'redux-mock-store';

const middkewares = [thunk];
const mockStore = configureStore(middkewares);

beforeEach(() => {moxios.install()});
afterEach(() => {moxios.uninstall()});

const books = {"genere": [ "'Novla Negra', 'Thriller'"],
    "price": 20,"numpags": 448,"id": 3,"title": "EL SECRETO DE LAS HERMANAS BLACKWOOD",
    "image": "https://imagessl6.casadellibro.com/a/l/t1/46/9788416691746.jpg",
    "description": "Julio de 1931. Lilly (9 años) vive encerrada desde que nació en el desván de su casa, Blackwood Manor, una propiedad rural dedicada a la cría de caballos. Su madre le ha inculcado que es un monstruo, y que ese encierro es una manera de protegerla. La madre, que se dice temerosa de Dios, sólo le permite una ocupación: leer la Biblia. Una vez por semana Lilly recibe la visita de su padre, que, a escondidas, le ha enseñado a leer, le lleva libros y hasta le ha regalado un gatito. Durante un viaje del padre, una noche la madre saca a Lilly y la vende a un circo; al padre le dirá que se escapó y que no sabe dónde está. Lilly, aterrada, se siente culpable: debe de ser muy mala para que su madre la castigue así. El comprador, Merrick, ahora su tutor legal, le repite que a partir de ahora su casa es el circo y que no le servirá de nada intentar escaparse: la gente, espantada al verla, la matará. Entre maltratos continuos, la deja al cuidado de su amante, Glory, la única compañía afectuosa de Lilly durante el durísimo proceso de doma a que la somete Merrick, que la destina a la sección de los fenómenos. Cada vez que Lilly se rebela, amenaza con llevarla a otra sección donde las mujeres se desnudan para los hombres, o a otra peor: el burdel.",
    "yearpublication": "2018","author": "ELLEN MARIE WISEMAN",
    "edition": "Boveda","languaje": "Español","state": "Disponible",
    "format": "Papel","isbn": "9788416691746"
}

it('load books', () => {

    const store = mockStore({ productsList: {books: []}});

    moxios.stubRequest('http://localhost:3001/api/books', {
        status: 200,
        response: [
            books
        ]
    });

   return store.dispatch(loadListBooks())
    .then(()=>{
        const action = store.getActions();
        expect(action.length).toBe(1);
        expect(action[0].productsList).not.toBeNull();
    })
});
/*
it('Adds to card', () => {
    const store = mockStore()
});*/