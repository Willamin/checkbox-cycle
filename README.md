# checkbox-cycle

This simple extension exposes a command (which can be invoked from the Command Pallete or by assigning a Keyboard Shortcut) that looks for a markdown checkbox on the current line, the cycles between three states: unchecked `[ ]`, in-progress `[~]`, and finished `[x]`.

If multiple lines are selected OR the currently selected line doesn't match the correct format, a toast message will pop up indicating the problem.

I'd recommend assigning a keybind to the command for move convenient use of this extension than using the command pallete.

`checkbox-cycle.cycle` is the command to assign.
