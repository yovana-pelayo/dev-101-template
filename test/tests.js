// IMPORT MODULES under test here:
// import { add } from '../calc.js';

import { score } from '../games.js';

const test = QUnit.test;

//scissors
test('player scissors, computer scissors is tie', (expect) => {
    const player = 'scissors';
    const computer = 'scissors';
    const expected = 'tie';
    const actual = score(player, computer);
    expect.equal(actual, expected);
});

test('player scissors, computer paper is player ', (expect) => {
    const player = 'scissors';
    const computer = 'paper';
    const expected = 'player';
    const actual = score(player, computer);
    expect.equal(actual, expected);
});
test('player scissors, computer rock is computer ', (expect) => {
    const player = 'scissors';
    const computer = 'rock';
    const expected = 'computer';
    const actual = score(player, computer);
    expect.equal(actual, expected);
});
//rocks
test('player rock, computer rock is tie', (expect) => {
    const player = 'rock';
    const computer = 'rock';
    const expected = 'tie';
    const actual = score(player, computer);
    expect.equal(actual, expected);
});

test('player rock, computer scissors is player', (expect) => {
    const player = 'rock';
    const computer = 'scissors';
    const expected = 'player';
    const actual = score(player, computer);
    expect.equal(actual, expected);
});

test('player rock, computer paper is computer', (expect) => {
    const player = 'rock';
    const computer = 'paper';
    const expected = 'computer';
    const actual = score(player, computer);
    expect.equal(actual, expected);
});

//paper
test('player paper, computer paper is tie', (expect) => {
    const player = 'paper';
    const computer = 'paper';
    const expected = 'tie';
    const actual = score(player, computer);
    expect.equal(actual, expected);
});

test('player paper, computer rock is player', (expect) => {
    const player = 'paper';
    const computer = 'rock';
    const expected = 'player';
    const actual = score(player, computer);
    expect.equal(actual, expected);
});

test('player paper, computer scissors is computer', (expect) => {
    const player = 'paper';
    const computer = 'scissors';
    const expected = 'computer';
    const actual = score(player, computer);
    expect.equal(actual, expected);
});