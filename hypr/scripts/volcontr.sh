#!/usr/bin/env bash

TOGGLE=/tmp/volcontr
VOLCONTROL=pavucontrol

if [ -f "$TOGGLE" ]; then
    # Hide terminal and unpin
    # hyprctl --batch "dispatch movewindowpixel 500 0,$VOLCONTROL ; dispatch pin $VOLCONTROL; dispatch cyclenext"
    # sleep 0.2
    pkill pavucontrol & rm "$TOGGLE"
    # sleep 0.15
else
    # Show terminal and pin
    pavucontrol & touch "$TOGGLE"
    # sleep 0.2
    # hyprctl --batch "dispatch movewindowpixel -500 0,$VOLCONTROL; dispatch pin $VOLCONTROL; dispatch focuswindow $VOLCONTROL"
fi

