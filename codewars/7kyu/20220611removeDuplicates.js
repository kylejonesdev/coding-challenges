//Remove duplicate words from a string.

function removeDuplicateWords (s) {
    const filtered = new Set(s.split(' '));
    return [...filtered].join(' ');
}