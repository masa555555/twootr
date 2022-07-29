# User Stories / Job Stories

Story 1 (Select user):
User want to post something in twoot. User can change name, read and create twoots.

Story 2 (Write a new twoot):
User can write sentences and that dates saved in saver.
User can't post new twoot empty and write over 140 sentences. 

Story 3 (Display twoot):
User is able to like, save and retwoot each twoot.can see when twoot posted and then it is update when the retwoot changed. If user click new text, it focus on the input. 

# Data Structure

```js
const twoot = {
  author: string,
  content: string,
  authorSlug: string,
  dateAdded: string,
};
const twoots = [twoot1,twoot2, ...];
```

# HTML Structure

- body
  - Nav
    - main
      - Section hero
      - Section new Twoot Form
      - Section twoots list

# Component Structure

- App
- Nav
- Main (Hero,New twoot form,Twoots list)
- Hero
  - User info
- New twoot form
- Twoots list

# Data Map

# Styling Patterns (Fonts and Colors)
