class Card():
    suit_dictionary = {'Heart': '♡', 'Diamond': '♢', 'Spade': '♤', 'Club': '♧'}

    def __init__(self, suit, value):
        self.suit = suit
        self.value = value
        if value == 13:
            self.rank = 'King'
        elif value == 12:
            self.rank = 'Queen'
        elif value == 11:
            self.rank = 'Jack'
        elif value == 1:
            self.rank = 'Ace'
        else:
            self.rank = str(value)

    def get_color(self):
        if self.suit == 'Diamond' or self.suit == 'Heart':
            return 'red'
        else:
            return 'black'

    def __repr__(self):
        if self.rank[0] == '1':
            return f'10{Card.suit_dictionary[self.suit]}'
        return f'{self.rank[0]}{Card.suit_dictionary[self.suit]}'

    def __str__(self):
        return f'{self.rank} of {Card.suit_dictionary[self.suit]}s'
