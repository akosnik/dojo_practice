using System;

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
}