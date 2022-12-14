const add = (a,b)=> a+b

test('should add 2 numbers', ()=>{
    const result = add(3, 4)
    // if(result!=7){
    //     throw new Error(`You added 4 and 3. The result was ${result}. Expect 7`)
    // }
    expect(result).toBe(7)
})

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('should generate greeting from name', ()=>{
    const result = generateGreeting('Mike')
    expect(result).toBe('Hello Mike!')
})

test('should generate greeting for no name', ()=>{
    const result = generateGreeting()
    expect(result).toBe('Hello Anonymous!')
})