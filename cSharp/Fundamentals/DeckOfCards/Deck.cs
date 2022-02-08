using System;
using System.Collections.Generic;

namespace DeckOfCards
{
  public class Card
  {

    public string stringVal;
    public int val;
    public string suit;

    public Card(string strVal, int val, string suit)
    {
      stringVal = strVal;
      this.val = val;
      this.suit = suit;
    }
  }

  public class Deck
  {
    string[] Suits = new string[] { "Diamonds", "Clubs", "Hearts", "Spades" };
    Dictionary<string, int> ValDict = new Dictionary<string, int>
    {
      {"Ace", 1},{"2", 2},{"3", 3},{"4", 4},{"5", 5},{"6", 6},{"7", 7},
      {"8", 8},{"9", 9},{"10", 10},{"J", 11},{"Q", 12},{"K", 13},
    };
    List<Card> cards = new List<Card>();

    public Deck()
    {
      SetupNewDeck();
      Console.WriteLine(cards.Count);
    }
    public Card DealTopCard()
    {
      Card card = cards[cards.Count - 1];
      cards.RemoveAt(cards.Count - 1);
      return card;
    }
    public void SetupNewDeck()
    {
      foreach (string suit in Suits)
      {
        foreach (KeyValuePair<string, int> cardValue in ValDict)
        {
          Card card = new Card(cardValue.Key, cardValue.Value, suit);
          cards.Add(card);
        }
      }
    }

    public void ShuffleDeck()
    {
      List<Card> shuffledDeck = new List<Card>();
      while (cards.Count > 0)
      {
        Random rand = new Random();
        int randIdx = rand.Next(cards.Count);
        shuffledDeck.Add(cards[randIdx]);
        cards.RemoveAt(randIdx);
      }
      cards = shuffledDeck;
    }
  }
}