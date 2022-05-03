        // Create arrays to represent the cards
        // arrays are simply a list of related items
        aryClubs = ["2_of_clubs.png", "3_of_clubs.png","4_of_clubs.png","5_of_clubs.png","6_of_clubs.png","7_of_clubs.png","8_of_clubs.png","9_of_clubs.png","10_of_clubs.png", "jack_of_clubs.png", "queen_of_clubs.png", "king_of_clubs.png", "ace_of_clubs.png"]
        aryDiamonds = ["2_of_diamonds.png", "3_of_diamonds.png","4_of_diamonds.png","5_of_diamonds.png","6_of_diamonds.png","7_of_diamonds.png","8_of_diamonds.png","9_of_diamonds.png","10_of_diamonds.png", "jack_of_diamonds.png", "queen_of_diamonds.png", "king_of_diamonds.png", "ace_of_diamonds.png"]
        aryHearts = [ "2_of_hearts.png", "3_of_hearts.png","4_of_hearts.png","5_of_hearts.png","6_of_hearts.png","7_of_hearts.png","8_of_hearts.png","9_of_hearts.png","10_of_hearts.png", "jack_of_hearts.png", "queen_of_hearts.png", "king_of_hearts.png", "ace_of_hearts.png"]
        arySpades = [ "2_of_spades.png", "3_of_spades.png","4_of_spades.png","5_of_spades.png","6_of_spades.png","7_of_spades.png","8_of_spades.png","9_of_spades.png","10_of_spadess.png", "jack_of_spades.png", "queen_of_spades.png", "king_of_spades.png", "ace_of_spades.png"]

        
        // create variables to store the players cards
        var player1;
        var player2;

        //create variables to store the random suit
        var suit1;
        var suit2;
        //create variable to store the path to the image for the random card
        var card1;
        var card2;
        
        // create a loop that will continue to repeat over and over until the user types in the prompt ANYTHING besides lower case 'yes'
        do
        {
       
        //get a random number between 0 and 4 to select the 'suit' which is one of our arrays (lists)
        //do this for each player
        suit1 = Math.floor(Math.random() * 4)
        suit2 = Math.floor(Math.random() * 4)
       
        //randomly pick a number between 0 and 12 which is picking a card in the list (array)
        player1 = Math.floor(Math.random() * 13)
        player2 = Math.floor(Math.random() * 13)
        
        
        //based on the random suit numbers, select the appropriate array and card
        if (suit1 == 0)
        {
            card1 = "cards/" + aryClubs[player1]
        } else if (suit1 == 1)
        {
            card1 = "cards/" + aryDiamonds[player1]
        } else if (suit1 == 2)
        {
            card1 = "cards/" + aryHearts[player1]
        } else {
            card1 = "cards/" + arySpades[player1]
        }

        // find the html element that has an id of 'card1' and change it's src attribute to the image name in the array
        document.getElementById('card1').src = card1
       
       //player 2 card
       if (suit2 == 0)
        {
            card2 = "cards/" + aryClubs[player2]
        } else if (suit2 == 1)
        {
            card2 = "cards/" + aryDiamonds[player2]
        } else if(suit2 == 2)
        {
            card2 = "cards/" + aryHearts[player2]
        } else {
            card2 = "cards/" + arySpades[player2]
        }

        document.getElementById('card2').src = card2

        // look at the random numbers of each player to find a winner
        if (player1 < player2)
        {
            document.getElementById('winner').innerHTML = "Player Two Wins"
        } else if (player1 > player2)
        {
            document.getElementById('winner').innerHTML = "Player One Wins"
        } else 
        {
            document.getElementById('winner').innerHTML = "Its a tie!"
        }

        //check if the player wants to play again, so we will stop looping
        playAgain = prompt("Want to play again?")

    }
    while (playAgain == "yes")

    //once we are finished looping, the game is 'over'

    //Create a thank you message
    document.getElementById('winner').innerHTML = "Thanks for playing!"
    //clear the playing table
    document.getElementById('card1').src = "cards/red_joker.png"
    document.getElementById('card2').src = "cards/black_joker.png"