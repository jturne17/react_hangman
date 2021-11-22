import Letter from './letter';

export default function({secretWord, guessedLetters}){
    
    let letters = secretWord
                    .split('')  //Gives an array of individual characters
                    .map((letter, index) => {
                        let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
                        
                        return(
                        <Letter 
                        value={letter} 
                        isShown={isShown} 
                        key = {index}
                        />
                    )
                })
    return(

        <div className = "flex">
            {letters}
        </div>
    );
}