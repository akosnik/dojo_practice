class Pet:

    def __init__(self, name, type, tricks, health, energy):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = health
        self.energy = energy

    def sleep(self):
        self.energy += 25
        print("ZzzZzz")

    def eat(self):
        self.energy += 5
        self.health += 10

    def play(self):
        self.health += 5
        self.energy -= 5
        print(f"{self.name} runs around excitedly.")

    def noise(self):
        print("Bark!")


class Dog(Pet):
    def noise(self):
        print("Bark!")


class Cat(Pet):
    def noise(self):
        print("Meow-za")


class Fish(Pet):
    def noise(self):
        print("Blub")


class Snake(Pet):
    def noise(self):
        print("Sssss")


ryuk = Cat("ryuk", "Black short hair", ["Cuddle"], 70, 50)
