# reddit-client
A minimalistic way to browse reddit in the browser
## Responsive Single Page Application
### written in React, Redux, and CSS
### data fetched from Reddit via the undocumented reddit.Json API

# testing branch online:
https://jazzy-strudel-1ae5a3.netlify.app/

# limitations of the reddit.json api:
- no video sound
- no login option, thus no up/downvote functionality
- downvotes always 0 for posts, but upvotes and upvoteRatio are correct

# todo:

- handle rejected fetching
- styling
    - fallbacks for img, fonts etc.
    - toggle button dark and light mode
- disable video controls (audio source is not includet in reddit.json api)
- accessibility improvement
- say no comments when there are no comments
- browser support


# bugs:

- on re-render: old content shortly visible before new content finished loading
- subreddit 'button: clicked' background-color disappears sometimes especially on mobile devices
