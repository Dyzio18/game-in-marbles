function BFS(board, src, dest) {
    const checkNode = node => {
        if (
            !node ||
            !Number.isInteger(node.row) ||
            node.row < 0 ||
            !Number.isInteger(node.col) ||
            node.col < 0
        ) {
            return false;
        } else {
            return true;
        }
    };

    if (
        !board ||
        !Array.isArray(board) ||
        !Array.isArray(board[0]) ||
        !checkNode(src) ||
        !checkNode(dest)
    ) {
        return NaN;
    }

    const isEqual = (node1, node2) => {
        return node1.row === node2.row && node1.col === node2.col;
    };

    if (isEqual(src, dest)) {
        return 0;
    }

    const rowNum = [-1, 0, 1, 0];
    const colNum = [0, 1, 0, -1];

    const nodeProto = (row, col, dist = 0) => {
        return { row, col, dist };
    };

    let q = [];
    let visited = new Set();

    src.dist = 0;
    q.push(src);

    while (q.length > 0) {
        let node = q.shift();
        if (isEqual(node, dest)) {
            return node.dist;
        }

        for (let i = 0; i < 4; i++) {
            let row = rowNum[i] + node.row;
            let col = colNum[i] + node.col;

            if (
                row < 0 ||
                row > board.length - 1 ||
                col < 0 ||
                col > board[0].length - 1
            ) {
                continue;
            }

            let _node = nodeProto(row, col, node.dist + 1);
            if (
                board[row][col] === 1 &&
                !visited.has(_node.row.toString() + _node.col.toString())
            ) {
                visited.add(_node.row.toString() + _node.col.toString());
                q.push(_node);
            }
        }
    }
}

export default BFS;
