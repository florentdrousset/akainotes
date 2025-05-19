+++
title = "Org-mode basics in Doom Emac"
author = ["Florent Drousset"]
draft = false
+++

## A new headline


### Level 2


#### Level 3

-   TAB to fold/unfold a tree.
-   Shift+TAB to fold the entire document.


## Getting started in Org-mode


### Basics


#### Manual

-   Open org-mode manual : Meta-x -&gt; org-info.


#### Toggling

-   org-toggle-heading : SPC-m-h
-   org-toggle-item : SPC-m-i


#### Lists

-   unordered item list 1.
-   unordered item list 2.
-   ctrl+RET to add an item on the same level.
    1.  Ordered list item 1.
    2.  Ordered list item 2.


#### Moving between elements

-   gj : move down to an element of the same level
-   gk : move up to an element of the same level
-   gh/gl : move parent/child element


#### Structure editing

-   Insert new heading after subtree : C-RET
-   promote/demote heading : M-h/l OR M-LEFT/RIGHT
-   promote/demote current subtree : M-S-h/l or M-S-LEFT/RIGHT
-   move subtree up/down : M-j/k
-   move list up/down but not subtree : M-S-j/k


#### More editing

-   select an element : vae
-   delete an element : dae
-   select a subtree : vaR
-   delete a subtree : daR
-   yank subtree : yiR


#### Insert snippets

-   SPC-i-s


#### Todo lists

<!--list-separator-->

-  Create a todo list

    Just add the TODO word to a title to turn it in a TODO list.

    <!--list-separator-->

    - <span class="org-todo todo TODO">TODO</span>

        -   promote/demote todo : S-LEFT/S-RIGHT
        -   Toggle the todo state : SPC-m-t

<!--list-separator-->

-  Org schedule

    Open org schedule : SMC-m-d-s

<!--list-separator-->

-  Checkboxes

    -   [ ] type empty brackets to create a checkbox
    -   [X] C-c C-c / RET to check


#### Tables

| Just                                 | Start | Typing       |
|--------------------------------------|-------|--------------|
| It will autoindent                   | When  | Pressing tab |
| S+RET to copy cell                   |       |              |
| SPC m b - to make headline           |       |              |
| TAB/S-TAB to next cell               | Test  |              |
| M-k / M-j / M-k / M-l to move a cell |       |              |
| M-S-j to insert new row              |       |              |
| M-S-k to remove row                  |       |              |


### Org Agenda

-   open : SPC-o-a


### Windows

-   SPC-w-v : open a vertical split window with same buffer content
-   SPC-w-&gt; : increase width of window
-   SPC-w-&lt; : decrease width of window


### Dired

-   SPC o - : jump to current dir
-   Ctrl-x D : open Dired
-   M : mark file
-   T : toggle mark / unmarked files
-   D : delete marked files
-   R : rename marked files
-   Z : compress
-   U : undo marking
-   Shift-U : undo all markings
-   Meta-Enter : preview file


### Misc

-   add an emoji or other unicode character : SPC-i-u
