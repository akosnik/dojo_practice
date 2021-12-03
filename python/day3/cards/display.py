# model view controller design

# curses based display an old c library
class CLI():
    card_back_symbol = '🂠 '

    def __init__(self, player, opponent):
        self.player = player
        self.opponent = opponent

    def update_board_display(self, book, deck, player, opponent):
        print(f"""












Booked Values: {book}
Deck: {len(deck.contents)}
----------------------------------------
Opponent: {str(self.display_opponent())}
----------------------------------------
Hand: {str(self.display_hand())}
----------------------------------------""")

    def display_opponent(self):
        size = len(self.opponent.hand)
        if size <= 7:
            return f'{CLI.card_back_symbol * size} '
        else:
            return f'{CLI.card_back_symbol} x {size}'

    def display_hand(self):
        return self.player.hand

    def display_books(self):
        return "none"
