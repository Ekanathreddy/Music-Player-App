# Music-Player-App

A simple web-based music player application that allows user to play, pause and seek through a song. The application features a progress bar that updates in real-time as the song plays.

## Files

- `index.html`: This file contains the structure of the web app.
- `style.css`: Contains all the necessary styles for the application.
- `musicPlayer.js`: Contains the javascript code for the music player app.
- 
## Explanation: 
- Application requres the basic HTML and CSS skills.
- ### Javascript :
    - #### Initialization:
          - `progress` references the progress bar element.
          - `song` references the audio element.
          - `ctrlIcon` references the control icon element.
    - `Metadata Loading`: When the song's metadata is loaded, the progress bar's maximum value is set to the song's duration.
    - `Window Load`: When the window loads, the play/pause icon is set based on whether the song is playing or paused. The progress bar is updated every 500 milliseconds to reflect the current time of the song.
    - `Play/Pause Function`: The `playPause` function toggles between playing and pausing he song, updating the control icon accordingly.
    - `Progress Bar Change`: When the progress bar value changes, the song's current time is updated to match the progress bar's value, and the song starts playing.
