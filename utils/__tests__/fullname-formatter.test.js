import formatFullName from '../fullname-formatter.js';

test('Expect: Paulo Nunes', () =>{
    expect(formatFullName('Paulo Nunes'))
        .toBe('Paulo Nunes');
})

test('Expect: only firstname', () =>{
    expect(formatFullName('Paulo '))
        .toBe('Paulo');
})
