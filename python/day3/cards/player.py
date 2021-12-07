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

    def has_card(self, suit, value):
        for card in self.hand:
            if card.suit == suit and card.value == value:
                return True
        return False

    def has_suit(self, suit):
        for card in self.hand:
            if card.suit == suit:
                return True
        return False

    def has_value(self, value):
        if self.card_value_counter[value] > 0:
            return True
        return False

    def remove_value(self, value):
        remove_list = []
        i = 0
        while (i < len(self.hand) and len(self.hand) > 0):
            if self.hand[i].value == value:
                remove_list[i] = self.hand.pop(i)
                break
            i += 1
        return remove_list

    def remove_suit(self, suit):
        remove_list = []
        i = 0
        while (i < len(self.hand) and len(self.hand) > 0):
            if self.hand[i].suit == suit:
                remove_list[i] = self.hand.pop(i)
                break
            i += 1
        return remove_list
