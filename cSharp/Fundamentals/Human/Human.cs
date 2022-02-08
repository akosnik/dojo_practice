namespace Human
{
  public class Human
  {

    public string Name;
    public int Strength;
    public int Intelligence;
    public int Dexterity;
    private int health;


    public Human(string name)
    {
      Name = name;
      Strength = 3;
      Intelligence = 3;
      Dexterity = 3;
      health = 100;
    }

    public Human(string name, int str, int intl, int dex, int hp)
    {
      Name = name;
      Strength = str;
      Intelligence = intl;
      Dexterity = dex;
      health = hp;
    }

    public int getHealth()
    {
      return health;
    }

    public void setHealth(int hp)
    {
      this.health = hp;
    }
    public int Attack(Human target)
    {
      int hp = target.getHealth() - this.Strength * 5;
      target.setHealth(hp);
      return hp;
    }
  }
}