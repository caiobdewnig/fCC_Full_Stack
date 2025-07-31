const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://sea1.discourse-cdn.com/freecodecamp';
const postsContainer = document.querySelector("#posts-container");

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

function timeAgo(timestamp) {
  const userTime = new Date(timestamp).getTime(); // Get timestamp in milliseconds
  const actualTime = Date.now(); // Get current time in milliseconds

  const timePassedInMin = (actualTime - userTime) / (1000 * 60); // Convert milliseconds to minutes

  if (timePassedInMin < 60) {
    return `${Math.floor(timePassedInMin)}m ago`;
  } else if ((timePassedInMin / 60) < 24) {
    return `${Math.floor(timePassedInMin / 60)}h ago`;
  } else {
    return `${Math.floor(timePassedInMin / (60 * 24))}d ago`;
  }
}

function viewCount(viewsNum) {
  if (viewsNum >= 1000) {
    return `${Math.floor(viewsNum / 1000)}k`;
  } else {
    return viewsNum;
  }
}

function forumCategory(id) {

  const categoryInfo = allCategories[id];

  if (id === 299) {return `<a class="category ${categoryInfo.className}" href="${forumCategoryUrl}${categoryInfo.className}/${id}">Career Advice</a>`}

  if (id === 200) {return `<a class="category general" href="${forumCategoryUrl}general/${id}">General</a>`}

  if (categoryInfo) {
    const categorySlug = categoryInfo.className;
    return `<a class="category ${categoryInfo.className}" href="${forumCategoryUrl}${categorySlug}/${id}">${categoryInfo.category}</a>`;
  } else {
    // Default to 'General' if category ID is not found, with correct URL structure
    return `<a class="category general" href="${forumCategoryUrl}general/${id}">General</a>`;
  }
}

function avatars(posters, users) {
  let result = '';

  for (let i = 0; i < posters.length; i++) {
    const posterUserId = posters[i].user_id;

    // Find the corresponding user object
    const user = users.find(u => u.id === posterUserId);

    if (user && user.avatar_template) {
      // Replace {size} with 30
      let avatarPath = user.avatar_template.replace('{size}', '30');

      // Check if avatarPath is relative (starts with /)
      if (avatarPath.startsWith('/')) {
        avatarPath = avatarUrl + avatarPath;
      }

      // Create img tag with src and alt
      result += `<img src="${avatarPath}" alt="${user.name || user.username}">`;
    }
  }

  return result;
}

function showLatestPosts(obj) {
  const users = obj.users;
  const topicList = obj.topic_list;
  let htmlContent = ""; // Initialize an empty string to build HTML

  for (let i = 0; i < topicList.topics.length; i++) {
    const topic = topicList.topics[i]; // Get the current topic object
    const {
      id,
      title,
      views,
      posters,
      slug,
      posts_count, // Use posts_count directly from the topic object
      category_id, // Use category_id directly from the topic object
      bumped_at // Use bumped_at directly from the topic object
    } = topic;

    htmlContent += `
    <tr>
      <td>
        <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
        ${forumCategory(category_id)}
      </td>
      <td>
        <div class="avatar-container">
          ${avatars(posters, users)}
        </div>
      </td>
      <td>
        <p>${posts_count - 1}</p>
      </td>
      <td>
        <p>${viewCount(views)}</p>
      </td>
      <td>
        <p>${timeAgo(bumped_at)}</p>
      </td>
    </tr>
    `;
  }
  postsContainer.innerHTML = htmlContent; // Set innerHTML once after the loop
}

async function fetchData() {
  try {
    const response = await fetch(forumLatest);
    const data = await response.json();
    showLatestPosts(data);
  } catch (err) {
    // Changed console.error to console.log as per test requirement
    console.log(err);
  }
}

// Call fetchData when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", fetchData);


console.log(forumCategory(299))
console.log(forumCategory(200))