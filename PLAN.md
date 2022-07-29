# User Stories / Job Stories
User stories
Select user
Write a new twoot
Display twoot
Story 1 (Select user):
User want to post current state. User can change name, read and create twoots. 

Story 2 (Write a new twoot):
User can write sentences and that dates saved in saver.
User can't post new twoot empty and over 140 sentences. 

Story 3 (Display twoot):
User is able to like, save and retwoot each twoot.can see when twoot posted.
if user click to new twoot , it focus on the input. 


User must be able to change name.
User must be able to read twoots.
User must be able to create twoots.
All the twoots shown in the application, must come from server.
Every new twoot must be sent to server to be saved.
User cannot post a new twoot empty or with more than 140 characteres.
Counter must update after every change on the input.
User must be able to like, save or retwoot each twoot. No need to store this information in the server.
If the user clicks on the write a new text, it should focus on the input.
Time must show how many days ago was posted the twoots (days)

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
