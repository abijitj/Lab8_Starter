// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//isPhoneNumber Tests
test('isPhoneNumber true 1', () => {
    const result = functions.isPhoneNumber('905-043-9489'); 
    expect(result).toBe(true); 
})

test('isPhoneNumber true 2', () => {
    const result = functions.isPhoneNumber('(000) 000-0000'); 
    expect(result).toBe(true); 
})

test('isPhoneNumber false 1', () => {
    const result = functions.isPhoneNumber('905 043 94893'); 
    expect(result).toBe(false); 
})

test('isPhoneNumber false 2', () => {
    const result = functions.isPhoneNumber('905 043 9489'); 
    expect(result).toBe(false); 
})

//isEmail tests
test('isEmail true 1', () => {
    const result = functions.isEmail('testing@gmail.com'); 
    expect(result).toBe(true); 
})

test('isEmail true 2', () => {
    const result = functions.isEmail('thisisalsoanemail@ucsd.edu'); 
    expect(result).toBe(true); 
})

test('isEmail false 1', () => {
    const result = functions.isEmail('notanemail@gmail.c'); 
    expect(result).toBe(false); 
})

test('isEmail false 2', () => {
    const result = functions.isEmail('alsonotanemail@ucsd'); 
    expect(result).toBe(false); 
})

//isStrongPassword Tests
test('isStrongPassword true 1', () => {
    const result = functions.isStrongPassword('Str0ngbutweird'); 
    expect(result).toBe(true); 
})

test('isStrongPassword true 2', () => {
    const result = functions.isStrongPassword('AlsoStro123_'); 
    expect(result).toBe(true); 
})

test('isStrongPassword false 1', () => {
    const result = functions.isStrongPassword('Pa'); 
    expect(result).toBe(false); 
})

test('isStrongPassword false 2', () => {
    const result = functions.isStrongPassword('Thisiswaytoolongofapasswordiknow'); 
    expect(result).toBe(false); 
})

//isDate tests
test('isDate true 1', () => {
    const result = functions.isDate('27/5/2023'); 
    expect(result).toBe(true); 
})

test('isDate true 2', () => {
    const result = functions.isDate('1/1/1000'); 
    expect(result).toBe(true); 
})

test('isDate false 1', () => {
    const result = functions.isDate('902/05/2023'); 
    expect(result).toBe(false); 
})

test('isDate false 2', () => {
    const result = functions.isDate('27 / 05 / 5340'); 
    expect(result).toBe(false); 
})

//isHexColor tests
test('isHexColor true 1', () => {
    const result = functions.isHexColor('#FFA500'); 
    expect(result).toBe(true); 
})

test('isHexColor true 2', () => {
    const result = functions.isHexColor('#000000'); 
    expect(result).toBe(true); 
})

test('isHexColor false 1', () => {
    const result = functions.isHexColor('#FFA5000'); 
    expect(result).toBe(false); 
})

test('isHexColor false 2', () => {
    const result = functions.isHexColor('#ZT3211'); 
    expect(result).toBe(false); 
})