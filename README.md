# Work Day Scheduler
This week's assignment had us create a simple daily work calendar. 

## 1. Header

    The header includes the title of the project and the current date.
    The current date is updated through the Moment.js API

![ImageOfHeader](./assets/)


## 2. Task List

    The task list includes timeslots from 9am to 5pm. In each slot is a textarea element to enter text and a lock button to save text in local storage. 

    The color of the task list corresponds to the time of the day. Red is for the current time, grey is for past time, and green is for future time. The time of the day is kept track through the Moment.js API. 

![ImageOfColorTime]()

    The lock button will turn red if clicked and save the textarea entry into local storage. If a user reloads the page, the text will remain within the textarea. In addition, if a user rewrites what is in the textarea, the lock will automatically unlock back to white.

![ImageOfWhiteButton]() ![ImageOfRedButton]()