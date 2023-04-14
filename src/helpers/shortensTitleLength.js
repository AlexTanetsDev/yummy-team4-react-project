export const shortensTitleLength = title => {
  if (title.length >= 40) {
    const shortTitle = title.split(' ').slice(0, 5).join(' ') + '...';
    return shortTitle;
  }
  return title;
};
