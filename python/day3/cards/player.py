from deck import Deck


class Player():

    def __init__(self):

        self.name = ''
        self.hand = []
        self.card_value_counter = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
                                   6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0}

    def take_card(self, card):
        self.hand.append(card)
        self.sort_hand()
        self.card_value_counter[card.value] += 1

    def remove_card(self, card):
        self.hand.remove(card)
        self.card_value_counter[card.value] -= 1

    def sort_hand(self):
        self.hand.sort(key=lambda card: card.value)


# deck = Deck()
# allen = Player()
# card = deck.deal_from_top()
# allen.take_card(card)

# print(allen.hand)
# print(allen.card_value_counter)
