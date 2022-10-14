//Merge two ordered, linked lists into one ordered, linked list

var mergeTwoLists = function(list1, list2) {
    
    let head = new ListNode(null);    
    let curr = head;
    
    while (list1 && list2) {
        if(list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }
    curr.next = list1 || list2
    return head.next;
};