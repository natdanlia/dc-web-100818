p1 = Pirate.create(name: "BlueBeard", height:150, weight: 150)
p2 = Pirate.create(name: "GreyBeard", height:140, weight: 250)
p3 = Pirate.create(name: "PinkBeard", height:100, weight: 125)
p4 = Pirate.create(name: "MaroonBeard", height:125, weight: 280)
p5 = Pirate.create(name: "FusciaBeard", height:250, weight: 350)


s1 = Ship.create(name: "Flying Dutchman", ship_type:"schooner", booty:"gold dubloons", pirate: p1)
s2 = Ship.create(name: "Sleeping Dutchman", ship_type:"Frigate", booty:"gold bullion", pirate: p1)
s1 = Ship.create(name: "Flying Dutchwoman", ship_type:"Sloop", booty:"Golden Girls DVDs", pirate: p2)
