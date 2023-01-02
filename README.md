# reddit-client
- A minimalistic way to browse reddit
- responsive Single Page Application written in React, Redux and CSS
- content fetched from the reddit.json API

## link to the website:
https://jazzy-strudel-1ae5a3.netlify.app/

## limitations of the reddit.json api:
- no video sound
- no login option, thus no up/downvote functionality
- downvotes always 0 for posts, but upvotes and upvoteRatio are correct

## todo:
- subreddit toggleVisible styling
- handle rejected fetching
- styling
    - fallbacks for img, fonts etc.
    - toggle button dark and light mode
- disable video controls (audio source is not includet in reddit.json api)
- accessibility improvements
- say no comments when there are no comments
- browser support
- loading animation for images and videos


## bugs:
- on re-render: old content shortly visible before new content finished loading
- subreddit 'button: clicked' background-color disappears sometimes especially on mobile devices
- video preview not showing on mobile divices
