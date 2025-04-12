import React from 'react'

export const Comment = () => {
  return (
    <div>Comment</div>
  )
}


// Exercise: Comments & Replies Component (like YouTube)
// 🎯 Goal:
// Build a component that shows a list of comments. Each comment can have nested replies, and users can:

// View replies (recursively)

// Add a reply to any comment

// Like a comment

// 🧱 Dummy Data Example:

// const commentsData = [
//   {
//     id: 1,
//     name: "Alice",
//     comment: "This is an awesome video!",
//     likes: 2,
//     replies: [
//       {
//         id: 2,
//         name: "Bob",
//         comment: "Totally agree!",
//         likes: 1,
//         replies: [
//           {
//             id: 3,
//             name: "Charlie",
//             comment: "Yesss!",
//             likes: 0,
//             replies: []
//           }
//         ]
//       }
//     ]
//   },
//   {
//     id: 4,
//     name: "Dave",
//     comment: "I didn't understand the last part.",
//     likes: 0,
//     replies: []
//   }
// ];
// 🛠️ Features to Build:
// Recursive rendering like your hierarchy component

// "Reply" button → shows a text box

// "Like" button → updates like count

// Nice Tailwind styling (rounded, shadow, spacing)

// 🧠 Bonus Challenges (if you’re up for it):
// Add timestamps like "2 hours ago"

// Sort comments by likes or recency

// Add "Show/Hide Replies" toggles
