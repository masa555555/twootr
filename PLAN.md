# User Stories / Job Stories

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

```js

const [user,setUser] = useState("");

const handleInputValue = () => {
  // check input value
}

const handleUpdateUser = () => {
  // use setUer here to update state
}

<input onChange={handleInputValue} />
<input onChange={handleInputValue}  />

<BsPencilSquare onClick={handleUpdateUser} />


```
