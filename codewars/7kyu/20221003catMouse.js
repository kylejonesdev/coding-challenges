//Cat (C) can jump three spaces (.). Can the mouse (m) escape the cat given a string such as "C...m".
function catMouse(x){
    return x.includes('....') ? "Escaped!" : "Caught!";
}