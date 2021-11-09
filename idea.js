const arrayContent = document.querySelector(".array-content");
const matrixContent = document.querySelector(".matrix-content");
const stringContent = document.querySelector(".string-content");
const bitContent = document.querySelector(".bit-manipulation-content");
const stackContent = document.querySelector(".stack-content");
const queueContent = document.querySelector(".queue-content");
const llContent = document.querySelector(".linked-list-content");
const treeContent = document.querySelector(".tree-content");
const dpContent = document.querySelector(".dp-content");
const graphContent = document.querySelector(".graph-content");
const heapContent = document.querySelector(".heap-content");

let arrays = [
  ["Two Sum", "https://leetcode.com/problems/two-sum/", "Easy"],
  [
    "Best Time to Buy and Sell Stock",
    "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    "Easy",
  ],
  [
    "Contains Duplicate",
    "https://leetcode.com/problems/contains-duplicate/",
    "Easy",
  ],
  [
    "Product of Array Except Self",
    "https://leetcode.com/problems/product-of-array-except-self/",
    "Medium",
  ],
  [
    "Maximum Subarray",
    "https://leetcode.com/problems/maximum-subarray/",
    "Easy",
  ],
  [
    "Maximum Product Subarray",
    "https://leetcode.com/problems/maximum-product-subarray/",
    "Medium",
  ],
  [
    "Find Minimum in Rotated Sorted Array",
    "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    "Medium",
  ],
  [
    "Search in Rotated Sorted Array",
    "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    "Medium",
  ],
  ["3Sum", "https://leetcode.com/problems/3sum/", "Medium"],
  [
    "Container With Most Water",
    "https://leetcode.com/problems/container-with-most-water/",
    "Medium",
  ],
];
let linkedList = [
  [
    "Reverse a Linked List",
    "https://leetcode.com/problems/reverse-linked-list/",
    "Easy",
  ],
  [
    "Detect Cycle in a Linked List",
    "https://leetcode.com/problems/linked-list-cycle/",
    "Easy",
  ],
  [
    "Merge Two Sorted Lists",
    "https://leetcode.com/problems/merge-two-sorted-lists/",
    "Easy",
  ],
  [
    "Merge K Sorted Lists",
    "https://leetcode.com/problems/merge-k-sorted-lists/",
    "Hard",
  ],
  [
    "Remove Nth Node From End Of List",
    "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    "Medium",
  ],
  ["Reorder List", "https://leetcode.com/problems/reorder-list/", "Medium"],
];

let bitManipulation = [
  [
    "Sum of Two Integers",
    "https://leetcode.com/problems/sum-of-two-integers/",
    "Medium",
  ],
  [
    "Number of 1 Bits",
    "https://leetcode.com/problems/number-of-1-bits/",
    "Easy",
  ],
  ["Counting Bits", "https://leetcode.com/problems/counting-bits/", "Easy"],
  ["Missing Number", "https://leetcode.com/problems/missing-number/", "Easy"],
  ["Reverse Bits", "https://leetcode.com/problems/reverse-bits/", "Easy"],
];

let matrix = [
  [
    "Set Matrix Zeroes",
    "https://leetcode.com/problems/set-matrix-zeroes/",
    "Medium",
  ],
  ["Spiral Matrix", "https://leetcode.com/problems/spiral-matrix/", "Medium"],
  ["Rotate Image", "https://leetcode.com/problems/rotate-image/", "Medium"],
  ["Word Search", "https://leetcode.com/problems/word-search/", "Medium"],
];

let strings = [
  [
    "Longest Substring Without Repeating Characters",
    "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "Medium",
  ],
  [
    "Longest Repeating Character Replacement",
    "https://leetcode.com/problems/longest-repeating-character-replacement/",
    "Medium",
  ],
  [
    "Minimum Window Substring",
    "https://leetcode.com/problems/minimum-window-substring/",
    "Hard",
  ],
  ["Valid Anagram", "https://leetcode.com/problems/valid-anagram/", "Easy"],
  ["Group Anagrams", "https://leetcode.com/problems/group-anagrams/", "Medium"],
  [
    "Valid Parentheses",
    "https://leetcode.com/problems/valid-parentheses/",
    "Easy",
  ],
  [
    "Valid Palindrome",
    "https://leetcode.com/problems/valid-palindrome/",
    "Easy",
  ],
  [
    "Longest Palindromic Substring",
    "https://leetcode.com/problems/longest-palindromic-substring/",
    "Medium",
  ],
  [
    "Palindromic Substrings",
    "https://leetcode.com/problems/palindromic-substrings/",
    "Medium",
  ],
];

let trees = [
  [
    "Maximum Depth of Binary Tree",
    "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    "Easy",
  ],
  ["Same Tree", "https://leetcode.com/problems/same-tree/", "Easy"],
  [
    "Invert/Flip Binary Tree",
    "https://leetcode.com/problems/invert-binary-tree/",
    "Easy",
  ],
  [
    "Binary Tree Maximum Path Sum",
    "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    "Hard",
  ],
  [
    "Binary Tree Level Order Traversal",
    "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    "Medium",
  ],
  [
    "Serialize and Deserialize Binary Tree",
    "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    "Hard",
  ],
  [
    "Subtree of Another Tree",
    "https://leetcode.com/problems/subtree-of-another-tree/",
    "Easy",
  ],
  [
    "Construct Binary Tree from Preorder and Inorder Traversal",
    "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    "Medium",
  ],
  [
    "Validate Binary Search Tree",
    "https://leetcode.com/problems/validate-binary-search-tree/",
    "Medium",
  ],
  [
    "Kth Smallest Element in a BST",
    "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    "Medium",
  ],
  [
    "Lowest Common Ancestor of BST",
    "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    "Easy",
  ],
  [
    "Implement Trie (Prefix Tree)",
    "https://leetcode.com/problems/implement-trie-prefix-tree/",
    "Medium",
  ],
  [
    "Add and Search Word",
    "https://leetcode.com/problems/add-and-search-word-data-structure-design/",
    "Medium",
  ],
  ["Word Search II", "https://leetcode.com/problems/word-search-ii/", "Hard"],
];

let dp = [
  ["Climbing Stairs", "https://leetcode.com/problems/climbing-stairs/", "Easy"],
  ["Coin Change", "https://leetcode.com/problems/coin-change/", "Medium"],
  [
    "Longest Increasing Subsequence",
    "https://leetcode.com/problems/longest-increasing-subsequence/",
    "Medium",
  ],
  ["Word Break Problem", "https://leetcode.com/problems/word-break/", "Medium"],
  [
    "Combination Sum",
    "https://leetcode.com/problems/combination-sum-iv/",
    "Medium",
  ],
  ["House Robber", "https://leetcode.com/problems/house-robber/", "Medium"],
  [
    "House Robber II",
    "https://leetcode.com/problems/house-robber-ii/",
    "Medium",
  ],
  ["Decode Ways", "https://leetcode.com/problems/decode-ways/", "Medium"],
  ["Unique Paths", "https://leetcode.com/problems/unique-paths/", "Medium"],
  ["Jump Game", "https://leetcode.com/problems/jump-game/", "Medium"],
];

let graphs = [
  ["Clone Graph", "https://leetcode.com/problems/clone-graph/", "Medium"],
  [
    "Course Schedule",
    "https://leetcode.com/problems/course-schedule/",
    "Medium",
  ],
  [
    "Pacific Atlantic Water Flow",
    "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    "Medium",
  ],
  [
    "Number of Islands",
    "https://leetcode.com/problems/number-of-islands/",
    "Medium",
  ],
  [
    "Longest Consecutive Sequence",
    "https://leetcode.com/problems/longest-consecutive-sequence/",
    "Medium",
  ],
];

let heaps = [
  [
    "Merge K Sorted Lists",
    "https://leetcode.com/problems/merge-k-sorted-lists/",
    "Hard",
  ],
  [
    "Top K Frequent Elements",
    "https://leetcode.com/problems/top-k-frequent-elements/",
    "Medium",
  ],
  [
    "Find Median from Data Stream",
    "https://leetcode.com/problems/find-median-from-data-stream/",
    "Hard",
  ],
];
let stacks = [
  [
    "Valid Parentheses",
    "https://leetcode.com/problems/valid-parentheses/",
    "Easy",
  ],
  [
    "Longest Valid Parentheses",
    "https://leetcode.com/problems/longest-valid-parentheses/",
    "Hard",
  ],
  [
    "Trapping Rain Water",
    "https://leetcode.com/problems/trapping-rain-water/",
    "Hard",
  ],
  ["Simplify Path", "https://leetcode.com/problems/simplify-path/", "Medium"],
  [
    "Largest Rectangle in Histogram",
    "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    "Hard",
  ],
  [
    "Maximal Rectangle",
    "https://leetcode.com/problems/maximal-rectangle/",
    "Hard",
  ],
  [
    "Binary Tree Inorder Traversal",
    "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    "Easy",
  ],
  [
    "Flatten Binary Tree to Linked List",
    "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
    "Medium",
  ],
];
let queues = [
  [
    "Sliding Window Maximum",
    "https://leetcode.com/problems/sliding-window-maximum/",
    "Hard",
  ],
  [
    "First Unique Character in a String",
    "https://leetcode.com/problems/first-unique-character-in-a-string/",
    "Easy",
  ],
  ["Dota2 Senate", "https://leetcode.com/problems/dota2-senate/", "Medium"],
  [
    "Reveal Cards In Increasing Order",
    "https://leetcode.com/problems/reveal-cards-in-increasing-order/",
    "Medium",
  ],
  [
    "Max Value of Equation",
    "https://leetcode.com/problems/max-value-of-equation/",
    "Hard",
  ],
  [
    "Product of the Last K Numbers",
    "https://leetcode.com/problems/product-of-the-last-k-numbers/",
    "Medium",
  ],
];
function addContent() {
  for (let i = 0; i < arrays.length; i++)
    arrayContent.innerHTML += `<tr  class="${
      i % 2 == 0 ? "even" : "odd"
    }" class="${i % 2 == 0 ? "even" : "odd"}">
    <td>
      <a
        href=${arrays[i][1]}
        class="problem-title"
      >
        ${i + 1}. ${arrays[i][0]}
      </a>
    </td>
    <td class="difficulty">${arrays[i][2]}</td>
  </tr>`;
  for (let i = 0; i < matrix.length; i++)
    matrixContent.innerHTML += `<tr  class="${i % 2 == 0 ? "even" : "odd"}">
    <td>
      <a
        href=${matrix[i][1]}
        class="problem-title"
      >
        ${i + 1}. ${matrix[i][0]}
      </a>
    </td>
    <td class="difficulty">${matrix[i][2]}</td>
  </tr>`;
  for (let i = 0; i < strings.length; i++)
    stringContent.innerHTML += `<tr  class="${i % 2 == 0 ? "even" : "odd"}">
    <td>
      <a
        href=${strings[i][1]}
        class="problem-title"
      >
        ${i + 1}. ${strings[i][0]}
      </a>
    </td>
    <td class="difficulty">${strings[i][2]}</td>
  </tr>`;

  for (let i = 0; i < bitManipulation.length; i++)
    bitContent.innerHTML += `<tr  class="${i % 2 == 0 ? "even" : "odd"}">
    <td>
      <a
        href=${bitManipulation[i][1]}
        class="problem-title"
      >
        ${i + 1}. ${bitManipulation[i][0]}
      </a>
    </td>
    <td class="difficulty">${bitManipulation[i][2]}</td>
  </tr>`;
  for (let i = 0; i < strings.length; i++)
    stringContent.innerHTML += `<tr  class="${i % 2 == 0 ? "even" : "odd"}">
    <td>
      <a
        href=${strings[i][1]}
        class="problem-title"
      >
        ${i + 1}. ${strings[i][0]}
      </a>
    </td>
    <td class="difficulty">${strings[i][2]}</td>
  </tr>`;
  for (let i = 0; i < linkedList.length; i++)
    llContent.innerHTML += `<tr  class="${i % 2 == 0 ? "even" : "odd"}">
    <td>
      <a
        href=${linkedList[i][1]}
        class="problem-title"
      >
        ${i + 1}. ${linkedList[i][0]}
      </a>
    </td>
    <td class="difficulty">${linkedList[i][2]}</td>
  </tr>`;
  for (let i = 0; i < trees.length; i++)
    treeContent.innerHTML += `<tr  class="${i % 2 == 0 ? "even" : "odd"}">
    <td>
      <a
        href=${trees[i][1]}
        class="problem-title"
      >
        ${i + 1}. ${trees[i][0]}
      </a>
    </td>
    <td class="difficulty">${trees[i][2]}</td>
  </tr>`;
  for (let i = 0; i < dp.length; i++)
    dpContent.innerHTML += `<tr  class="${i % 2 == 0 ? "even" : "odd"}">
    <td>
      <a
        href=${dp[i][1]}
        class="problem-title"
      >
        ${i + 1}. ${dp[i][0]}
      </a>
    </td>
    <td class="difficulty">${dp[i][2]}</td>
  </tr>`;
  for (let i = 0; i < graphs.length; i++)
    graphContent.innerHTML += `<tr  class="${i % 2 == 0 ? "even" : "odd"}">
    <td>
      <a
        href=${graphs[i][1]}
        class="problem-title"
      >
        ${i + 1}. ${graphs[i][0]}
      </a>
    </td>
    <td class="difficulty">${graphs[i][2]}</td>
  </tr>`;
  for (let i = 0; i < heaps.length; i++)
    heapContent.innerHTML += `<tr  class="${i % 2 == 0 ? "even" : "odd"}">
    <td>
      <a
        href=${heaps[i][1]}
        class="problem-title"
      >
        ${i + 1}. ${heaps[i][0]}
      </a>
    </td>
    <td class="difficulty">${heaps[i][2]}</td>
  </tr>`;
  for (let i = 0; i < stacks.length; i++)
    stackContent.innerHTML += `<tr  class="${i % 2 == 0 ? "even" : "odd"}">
    <td>
      <a
        href=${stacks[i][1]}
        class="problem-title"
      >
        ${i + 1}. ${stacks[i][0]}
      </a>
    </td>
    <td class="difficulty">${stacks[i][2]}</td>
  </tr>`;
  for (let i = 0; i < queues.length; i++)
    queueContent.insertAdjacentHTML(
      "beforeend",
      `<tr  class="${i % 2 == 0 ? "even" : "odd"}">
    <td>
      <a
        href=${queues[i][1]}
        class="problem-title"
      >
        ${i + 1}. ${queues[i][0]}
      </a>
    </td>
    <td class="difficulty"><div class="tag">${queues[i][2]}</div></td>
  </tr>`
    );
  let tagValue = document.querySelectorAll(".tag");
  tagValue.forEach((elem) => {
    if (elem.textContent == "Easy") {
      elem.style.backgroundColor = "rgb(45, 204, 72)";
    } else if (elem.textContent == "Medium") {
      elem.style.backgroundColor = "rgba(248, 212, 6, 0.842)";
    } else {
      elem.style.backgroundColor = "rgba(245, 33, 51, 0.788)";
    }
  });
}
addContent();
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
  sidebar.classList.toggle("active");
};
