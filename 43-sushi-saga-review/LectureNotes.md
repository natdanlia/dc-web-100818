### Sushi Saga:
```javascript
state = {
    sushi: [],
    eaten: [],
    money: 100,
    displayIndex: 0,
  }
```

 - Read the entire readme, start our json server


 #### Deliverables:

1. - get fetch, verify info and data structure.


2. - render only current 4 sushi (`state.sushi.slice(displayIndex, displayIndex+4)`).


3. - moreSushi() callback handed down to moreButton (increment displayIndex by 4).


4.  - eatSushi() callback handed down to Sushi (adds to eaten array if not already eaten).
 - hand state.eaten down to Sushi to check if eaten.


5. - Reduce funds when eatSushi() is called.


6. - Add conditional logic to eatSushi() so we cannot eat sushi we cannot afford.
