import formatPhoneNumber from '../phone-number-formatter.js';

test('Expects the phone number formatted', ()=>{
    expect(formatPhoneNumber("99999999999")).toBe("(99) 99999-9999");
})

test('Expects partial phone number formatted', ()=>{
    expect(formatPhoneNumber("9999")).toBe("(99) 99");
})
