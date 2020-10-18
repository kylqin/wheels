// 定义一个链表节点
class Node {
    constructor(middleware) {
        this.data = middleware;
        this.next = null;
    }
}

/** 使用链表实现洋葱圈 */
export const compose = (middlewares: any[]) => {
    let head = null;

    // 反向遍历
    for (let i = middlewares.length - 1; i >= 0; i--) {
        const node = new Node(middlewares[i]);

        node.next = head
        head = node;
    }
    // 遍历完成后 head 变为 middlewares[0] 对应的 node, 即链表头

    return () => {
        function applyMiddleware(node) {
            if (!node) {
                return Promise.resolve();
            }

            return Promise.resolve(
                node.data(
                    () => applyMiddleware(node.next)
                )
            );
        }

        return applyMiddleware(head);
    }
}
