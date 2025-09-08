# `MLBB Hero Quiz`
A React Project to entertain user about guessing heroes in MLBB games with some clues.
Clues: Release Year, Role, Region (lore), and Lane.

## How to Play  

You have **7 attempts** to guess the target hero. After each guess, clues will appear to guide you:

### Color Hints
- 🟥 **Gray background** → Completely incorrect.  
- 🟨 **Yellow background** → Partially correct (applies only to *role* and *lane*).  
- 🟩 **Green background** → Correct for that category.  

### Release Year Hints
- **`> (year)`** → The target hero was released *after* this hero.  
- **`< (year)`** → The target hero was released *before* this hero.  
- **`>> (year)`** → The target hero was released *much later* (at least 30 heroes after).  
- **`<< (year)`** → The target hero was released *much earlier* (at least 30 heroes before).  

## Objective  
Use the given clues to correctly identify the target hero before running out of **7 guesses**. 

## Data Source  
All hero data used in this game is based on [WikiMLBB]([https://www.wikimlbb.com](https://mobile-legends.fandom.com/wiki/List_of_heroes)).  

## Try Now!!
Deployed in netlify: https://mlbbquiz.netlify.app/

# Preview
<img width="2536" height="1359" alt="Screenshot 2025-09-05 185944" src="https://github.com/user-attachments/assets/7e8790e0-a619-4b63-bfb8-77c34433cf80" />
<img width="2539" height="1364" alt="Screenshot 2025-09-05 190031" src="https://github.com/user-attachments/assets/cf4d2290-f9e6-4611-9d38-874ac0a7a9f9" />
<img width="2532" height="1258" alt="Screenshot 2025-09-08 145543" src="https://github.com/user-attachments/assets/e834ea04-e397-495c-919a-45a0f154e2b4" />
