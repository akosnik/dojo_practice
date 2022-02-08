using System;
using System.Collections.Generic;
namespace DeckOfCards
{
  public class Player
  {
    string Name;
    List<Card> Hand = new List<Card>();

    public Player(string name)
    {
      Name = name;
    }

    public Card DrawCard(Deck deck)
    {
      Card card = deck.DealTopCard();
      Hand.Add(card);
      return card;
    }

    public Card DiscardCard(int cardIdx)
    {
      Card card = null;
      if (cardIdx < Hand.Count)
      {
        card = Hand[cardIdx];
        Hand.RemoveAt(cardIdx);
      }
      return card;
    }
  }
}