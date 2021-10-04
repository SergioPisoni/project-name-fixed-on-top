# project-name-fixed-on-top

Tired of scrolling the tree view all the way up to see what project you're working in?
Have always the name of the project clearly visible.


![A screenshot of my package](/assets/screencasts/screencast-1.gif)


**NOTE**:
Atom sets up `max-width: 175px` for tree view tabs.
I suggest you to add the following for a better rendering:
```less
.atom-dock-inner.left .tab-bar .tab {
  // Don't truncate the project name with a too small width
  // Let the tab to grow to maximum width
  // if no others tabs are present
  max-width: none
}
```
