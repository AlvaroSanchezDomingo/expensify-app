import moment from 'moment';
import {setStartDate, setEndDate, sortByDate, sortByAmount, setFilterText} from '../../actions/filters'

test('should setup set start date action object', () =>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should setup set end date action object', () =>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should setup set end date action object', () =>{
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should setup set by amount action object', () =>{
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should setup set filter text action object with provided value ', () =>{
    const action = setFilterText('test');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'
    })
})

test('should setup set filter text action object with default value', () =>{
    const action = setFilterText();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

