/* Prompt:
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
*/

/* Solution */
// merge in place (ie don't use additional space)

// edge cases if either or both lists are empty

// if both lists are not empty...
// compare heads of each list by looping thru (w while loop)
    // if list1's head node value <= list1's head node value (ie: l1.val <= l2.val), detach list1 node from list1
        // keep track of/hold node of l1.next bc that'll be our new head node for l1 aft we detach curr l1 head node
        // detach l1 node by setting its .next == null (ie: l1.next == null)
            // if l3 node is null, set its head and tail to be the detached l1 node
            // otherwise, updt l3's tail node to point to detached l1 node, then can updt l3's tail to equal detached l1 node
        // update new head of l1 to be l1.next before it was detached (ie. hold node)
    // otherwise, do the same for l2

// after looping and once one of the lists is empty...
// if either l1 or l2 are empty, point l3 tail to the non-empty list (ie. non-empty list's head node)

// return l3 head

// BigO space = O(1) bc not using any additional space 
// BigO time = O(n+m) bc worst case, nd to loop through entire 2 lists, and lists could be different lengths

var mergeTwoLists = function(list1, list2) {
    
    let list3Head = null,                   // don't be afraid to declare new variables you'll need in soln!
        list3Tail = null;
    
    if (!list1 && !list2) return null;
    if (!list1 && list2) return list2;
    if (list1 && !list2) return list1;
     
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            let header = list1.next;
            list1.next = null;
            if (!list3Head) {
                list3Head = list1;
                list3Tail = list1;
            } 
            if (list3Tail) {
                list3Tail.next = list1;      
                list3Tail = list3Tail.next;
            }
            list1 = header;
        } else {
            let header = list2.next;
            list2.next = null;
            if (!list3Head) {
                list3Head = list2;
                list3Tail = list2;
            } 
            if (list3Tail) {
                list3Tail.next = list2;
                list3Tail = list3Tail.next;
            }
            list2 = header;
        }
    }
    if (!list1) {
        list3Tail.next = list2;
    } else {
        list3Tail.next = list1;
    }
    return list3Head;
};