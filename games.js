//scissors functions

export function score(player, computer) {
    if (player === 'scissors' && computer === 'scissors')
        return 'tie';
    if (player === 'scissors' && computer === 'paper')
        return 'player';

    if (player === 'scissors' && computer === 'rock')
        return 'computer';

// rocks functions

    if (player === 'rock' && computer === 'rock')
        return 'tie';

    if (player === 'rock' && computer === 'scissors')
        return 'player';


    if (player === 'rock' && computer === 'paper')
        return 'computer';

 //paper
 
    if (player === 'paper' && computer === 'paper')
        return 'tie';

    if (player === 'paper' && computer === 'rock')
        return 'player';

    if (player === 'paper' && computer === 'scissors')
        return 'computer';
}