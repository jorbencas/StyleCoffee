import { BooksReducers } from '../../src/Client/reducers/BooksReducers';
import { CoffeesReducers } from '../../src/Client/reducers/CoffeeReducers';
import { AuthReducers } from '../../src/Client/reducers/AuthReducers';
import { ShoppingCardReducers } from '../../src/Client/reducers/CardReducers';

//describe('Testing all reducers', () => {
    it('returns the initial state of BooksReducers', () => {
        expect(BooksReducers(undefined,{}))
        .toEqual(
            {productsList: {list: []},
            booksdetail:{detail:[]}}
        );
    });

    it('returns the initial state of CoffeesReducers', () => {
        expect(CoffeesReducers(undefined,{}))
        .toEqual(
            {productsOffer: {list: []},
            coffeesdetail:{detail:[]}}
        );
    });

    it('returns the initial state of AuthReducers', () => {
        expect(AuthReducers(undefined,{}))
        .toEqual({
            user:{user: [],authenticated:false},
            profile:{profile:[]}
        });
    });

    it('returns the initial state of ShoppingCardReducers', () => {
        expect(ShoppingCardReducers(undefined,{}))
        .toEqual({
            cart:{cart:[],total:0}
        });
    });
    /*
    
    it('returns the initial state', () => {});

    it('returns the initial state', () => {});

    it('returns the initial state', () => {});
    */
//});