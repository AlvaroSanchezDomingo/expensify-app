import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('shuld setup remove expense action object', () =>{
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('shuld setup edit expense action object', () =>{
    const action = editExpense('123abc', {note: 'note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'note'
        }
    })
})

test('should setup add expense action object with provided values', () =>{
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt : 1000,
        note: 'This is last months rent'
    }

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup add expense action object with default values', () =>{
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description : '',
            note : '',
            amount:0,
            createdAt:0,
            id: expect.any(String)
        }
    })
})