// Handle quarto game logic

export function observe(receive) {

    
    const pieces = [];
    for (let i = 0; i < 16; i++) {
        pieces[i] = "none";
    }
    const randPos = () => Math.floor(Math.random() * 16)
    //pieces[] = "Q1";

    return receive
}