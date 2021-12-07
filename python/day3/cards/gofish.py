from deck import Deck
from player import Player
from display import CLI
from random import randint


class Go_Fish:
    def __init__(self):
        self.deck = Deck()
        self.player = Player()
        self.opponent = Player()
        self.turn_tracker = []
        self.book = []
        self.cli = CLI(self.player, self.opponent)
        self.deal_cards()
        self.update_display()

    def deal_cards(self):
        initial_hand_size = 10
        for i in range(initial_hand_size):
            self.player.take_card(self.deck.deal_from_top())
            self.opponent.take_card(self.deck.deal_from_top())

    def is_four_of_kind(self, player):
        for card_value, count in player.card_value_counter:
            if count == 4:
                self.remove_cards_of_value_from_hand(card_value, player)
                self.books.append(card_value)
                self.books.sort()

    def current_player(self):
        for player in players:
            if player.turn == true:
                return player

    def fish_for_card(self):
        # make function to receive request, accept j, q, k, don't break on other letters
        request = int(input(f'{self.player.name}, choose a card to fish for.'))
        if self.is_valid_request(request):
            i = 0
            o_hand = self.opponent.hand
            while(i < len(o_hand) and len(p_hand) > 0):
                if o_hand[i].value == request:
                    self.player.take_card(o_hand[i])
                    self.opponent.remove_card(o_hand[i])
                    break
                i += 1
            self.update_display()
        else:
            print('Make sure the value you request is one in your hand.')
            self.fish_for_card()

    def is_valid_request(self, request):
        for card_in_hand in self.player.hand:
            if card_in_hand.value == request:
                return True
        return False

    def opponent_turn(self):
        o_hand = self.opponent.hand
        if len(o_hand) == 0:
            self.opponent.take_card(self.deck.deal_from_top())
        request = o_hand[random.randint(0, len(o_hand) - 1)]
        for card in self.player.hand():
            if card.value == request:
                self.player.remove_card(card)
                self.opponent.take_card(card)

    def update_display(self):
        self.cli.update_board_display(
            self.book, self.deck, self.player, self.opponent)


class Book:

    def __init__(self):
        this.booked_list = []

    def hasBook(self, player):
        for number, count in player.card_value_counter.items():
            if count == 4:
                this.booked_list.append(number)
                player.remove_value(number)


class Turn:

    def __init__(self):
        this.turn_order = []
        this.current_player = ''

    def get_current_player(self):
        if len(this.turn_order) > 0:
            return this.turn_order[0]
        return ''

    def pass_turn(self):


new_game = Go_Fish()
new_game.update_display()
# print(new_game.opponent.hand)
new_game.fish_for_card()
# print(new_game.opponent.hand)
