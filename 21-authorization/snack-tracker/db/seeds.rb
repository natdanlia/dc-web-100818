Snack.destroy_all
Retailer.destroy_all

hostess = Retailer.create(name: "Hostess", year_established: 1888)
girl_scouts = Retailer.create(name: "Girl Scouts", year_established: 1899)

Snack.create(name: "Nachos", deliciousness: 3, calories: 600, retailer: hostess)
Snack.create(name: "Mozzarella Sticks", deliciousness: 6, calories: 500, retailer: girl_scouts)
Snack.create(name: "Sliders", deliciousness: 8, calories: 650, retailer: girl_scouts)