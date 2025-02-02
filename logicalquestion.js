
function allCellsDistOrder_Group(rows, cols, rCenter, cCenter) {
    const distances = {};
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const dist = Math.abs(r - rCenter) + Math.abs(c - cCenter);
            if (!distances[dist]) {
                distances[dist] = [];
            }
            distances[dist].push([r, c]);
        }
    }
    const sortedDistances = Object.keys(distances).sort((a, b) => a - b);
    const result = [];
    for (const dist of sortedDistances) {
        result.push(...distances[dist]);
    }
    return result;
}
const rows = 1, cols = 2, rCenter = 0, cCenter = 0;
console.log("Sort:", allCellsDistOrder_Sort(rows, cols, rCenter, cCenter));
