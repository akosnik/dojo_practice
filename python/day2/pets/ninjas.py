import pets


class Ninja:

    def __init__(self, first_name, last_name):
        self.firstname = first_name
        self.last_name = last_name
        self.pet_list = {}
        self.treats = {}
        self.pet_foods = {}

    def add_pet(self, pet):
        self.pet_list[pet.name] = pet
        return self

    def get_treats(self, treat, amount):
        self.treats[treat] = amount
        return self

    def get_food(self, food, amount):
        self.pet_foods[food] = amount
        return self

    def walk(self, pet):
        print(f"Let's go for a walk {pet.name}")
        self.pet_list[pet.name].play()
        return self

    def feed(self, pet, food):
        print(f"Here's some {food}, {pet.name}")
        self.pet_list[pet.name].eat()
        return self

    def bathe(self, pet):
        self.pet_list[pet.name].noise()
        return self


pip = pets.Dog("Pip", "Boston Terrier", ["Sit", "Spin", "Play Dead"], 100, 50)
smokey = pets.Cat("Smokey", "Gray Short Haired Tabby", ["Pounce"], 100, 80)

allen = Ninja("Allen", "K")

allen.add_pet(pip)
allen.add_pet(smokey)

allen.walk(pip)
allen.feed(pip, "kibbel")
allen.bathe(pip)

allen.walk(smokey)
