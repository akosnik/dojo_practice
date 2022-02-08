using System;

namespace DeckOfCards
{
  class Program
  {
    static void Main(string[] args)
    {
      Deck deck = new Deck();
      deck.ShuffleDeck();

      Player p1 = new Player("Playa1");
      p1.DrawCard(deck);
      p1.DrawCard(deck);
      p1.DrawCard(deck);
      //   [0,1,2];
      p1.DiscardCard(5);
    }
  }
}