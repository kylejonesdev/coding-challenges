//Given a value in seconds, return the amount in the format hh:mm:ss.
function humanReadable (seconds) {
    let hours = Math.floor(seconds / 3600);
    let remainingSeconds = seconds - hours * 3600;
    let minutes = Math.floor(remainingSeconds / 60);
    remainingSeconds -= minutes * 60;
    const checkPadding = (timeValue => String(timeValue).length < 2 ? `0${timeValue}` : timeValue);
    return `${checkPadding(hours)}:${checkPadding(minutes)}:${checkPadding(remainingSeconds)}`;
}