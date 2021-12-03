from card import Card
from random import randint


class Deck:

    def __init__(self):
        self.contents = []
        self.suits = ('Diamond', 'Heart', 'Spade', 'Club')
        self.values = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13)
        for suit in self.suits:
            for value in self.values:
                self.contents.append(Card(suit, value))
        self.shuffle_deck()

    def shuffle_deck(self):
        # todo: implement proper Fischer-Yates shuffle
        for i in range(len(self.contents)):
            x = randint(0, len(self.contents) - 1)
            self.contents[i], self.contents[x] = self.contents[x], self.contents[i]

    def deal_from_top(self):
        if len(self.contents) == 0:
            return None
        else:
            return self.contents.pop(0)

    def __repr__(self):
        return f'Deck with {len(self.contents)} cards'


# new_deck = Deck()
# player_1 = []
# player_2 = []
# player_3 = []
# player_4 = []
# while len(new_deck.contents) != 0:
#     player_1.append(new_deck.deal_from_top())
#     player_2.append(new_deck.deal_from_top())
#     player_3.append(new_deck.deal_from_top())
#     player_4.append(new_deck.deal_from_top())


# print(player_1)
# print(player_2)
